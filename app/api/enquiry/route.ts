import { NextResponse } from "next/server";

// In-memory rate limiting map: IP -> timestamp array
const rateLimitMap = new Map<string, number[]>();

// Clean up stale rate limit entries every 5 minutes
if (typeof setInterval !== "undefined") {
  setInterval(() => {
    const now = Date.now();
    for (const [ip, timestamps] of rateLimitMap.entries()) {
      const recent = timestamps.filter((t) => now - t < 60000);
      if (recent.length === 0) {
        rateLimitMap.delete(ip);
      } else {
        rateLimitMap.set(ip, recent);
      }
    }
  }, 300000);
}

function checkRateLimit(ip: string, limit = 8, windowMs = 60000): boolean {
  const now = Date.now();
  const timestamps = rateLimitMap.get(ip) || [];
  const recent = timestamps.filter((t) => now - t < windowMs);

  if (recent.length >= limit) {
    return false;
  }

  recent.push(now);
  rateLimitMap.set(ip, recent);
  return true;
}

// Sanitize string input to prevent XSS / injection
function sanitizeInput(str: unknown): string {
  if (typeof str !== "string") return "";
  return str.replace(/<[^>]*>/g, "").trim();
}

const EMAIL_REGEX = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
const PHONE_REGEX = /^[\d\s+\-().]{7,25}$/;

export async function POST(request: Request) {
  try {
    // 1. IP-based Rate Limiting
    const forwardedFor = request.headers.get("x-forwarded-for");
    const ip = forwardedFor ? forwardedFor.split(",")[0].trim() : "127.0.0.1";

    if (!checkRateLimit(ip)) {
      return NextResponse.json(
        { error: "Too many requests. Please wait a minute and try again." },
        { status: 429 }
      );
    }

    const body = await request.json().catch(() => null);
    if (!body || typeof body !== "object") {
      return NextResponse.json(
        { error: "Invalid JSON payload" },
        { status: 400 }
      );
    }

    const { fullName, email, phone, interestedCourse, message, hpField } = body;

    // Generate unique reference ID
    const refCode = `COW-${Math.floor(100000 + Math.random() * 900000)}`;

    // 2. Honeypot check: If bot filled the hidden honeypot field, return early success
    if (hpField && typeof hpField === "string" && hpField.trim().length > 0) {
      console.warn("[Security] Bot honeypot triggered by IP:", ip);
      return NextResponse.json({
        success: true,
        referenceId: refCode,
        message: "Enquiry submitted successfully.",
      });
    }

    // 3. Input Validation & Sanitization
    const cleanFullName = sanitizeInput(fullName).slice(0, 100);
    const cleanEmail = sanitizeInput(email).toLowerCase().slice(0, 100);
    const cleanPhone = sanitizeInput(phone).slice(0, 30);
    const cleanMessage = sanitizeInput(message).slice(0, 1000);
    const cleanCourse = sanitizeInput(interestedCourse).slice(0, 100) || "All Three Courses (Bundle)";

    if (!cleanFullName || cleanFullName.length < 2) {
      return NextResponse.json(
        { error: "Please provide a valid full name." },
        { status: 400 }
      );
    }

    if (!cleanEmail || !EMAIL_REGEX.test(cleanEmail)) {
      return NextResponse.json(
        { error: "Please provide a valid email address." },
        { status: 400 }
      );
    }

    if (!cleanPhone || !PHONE_REGEX.test(cleanPhone) || cleanPhone.replace(/\D/g, "").length < 7) {
      return NextResponse.json(
        { error: "Please provide a valid phone number (at least 7 digits)." },
        { status: 400 }
      );
    }

    // Split name into First & Last name for CRM / GoHighLevel fields
    const nameParts = cleanFullName.split(" ");
    const firstName = nameParts[0] || cleanFullName;
    const lastName = nameParts.slice(1).join(" ") || "";

    // Read GHL Credentials from environment variables
    const ghlToken =
      process.env.GHL_PRIVATE_TOKEN ||
      process.env.GHL_API_KEY ||
      process.env.GHL_ACCESS_TOKEN;
    const ghlLocationId = process.env.GHL_LOCATION_ID;

    // Custom fields mapping for GoHighLevel {{contact.course}}
    const customFields: Array<{ id?: string; key?: string; field_value?: string; value?: string }> = [
      {
        key: "contact.course",
        field_value: cleanCourse,
        value: cleanCourse,
      },
      {
        key: "course",
        field_value: cleanCourse,
        value: cleanCourse,
      },
    ];

    if (cleanMessage) {
      customFields.push(
        {
          key: "contact.message",
          field_value: cleanMessage,
          value: cleanMessage,
        },
        {
          key: "message",
          field_value: cleanMessage,
          value: cleanMessage,
        }
      );
    }

    if (process.env.GHL_COURSE_FIELD_ID) {
      customFields.push({
        id: process.env.GHL_COURSE_FIELD_ID,
        key: "contact.course",
        field_value: cleanCourse,
        value: cleanCourse,
      });
    }

    // Contact payload formatted for GoHighLevel v2 API
    const ghlContactPayload = {
      locationId: ghlLocationId,
      firstName,
      lastName,
      name: cleanFullName,
      email: cleanEmail,
      phone: cleanPhone,
      tags: [
        "Landing Page",
        cleanCourse,
      ],
      source: "Healthcare Revenue Operations LP1",
      customFields,
    };

    let ghlStatus = "NOT_CONFIGURED";
    let ghlContactId: string | null = null;

    if (ghlToken && ghlLocationId) {
      try {
        // GoHighLevel v2 Contacts Upsert API Endpoint
        const ghlResponse = await fetch(
          "https://services.leadconnectorhq.com/contacts/upsert",
          {
            method: "POST",
            headers: {
              Authorization: `Bearer ${ghlToken.trim()}`,
              Version: "2021-07-28",
              "Content-Type": "application/json",
              Accept: "application/json",
            },
            body: JSON.stringify(ghlContactPayload),
          }
        );

        const ghlData = await ghlResponse.json();

        if (ghlResponse.ok) {
          ghlStatus = "SUCCESS";
          ghlContactId = ghlData?.contact?.id || null;
          console.log("[GoHighLevel API] Contact successfully created/updated in GHL:", ghlContactId);

          // If contact was created and we have contactId, optionally attach a note with course selection
          if (ghlContactId) {
            try {
              await fetch(
                `https://services.leadconnectorhq.com/contacts/${ghlContactId}/notes`,
                {
                  method: "POST",
                  headers: {
                    Authorization: `Bearer ${ghlToken.trim()}`,
                    Version: "2021-07-28",
                    "Content-Type": "application/json",
                  },
                  body: JSON.stringify({
                    body: `COWRIN LP1 Enquiry Received\n• Program: ${cleanCourse}\n• Message / Query: ${cleanMessage || "None"}\n• Reference ID: ${refCode}\n• Submitted At: ${new Date().toLocaleString()}`,
                  }),
                }
              );
            } catch (noteErr) {
              console.warn("[GoHighLevel API] Note creation warning:", noteErr);
            }
          }
        } else {
          ghlStatus = "ERROR";
          console.error(
            "[GoHighLevel API Error] Status:",
            ghlResponse.status,
            JSON.stringify(ghlData, null, 2)
          );
        }
      } catch (apiErr) {
        ghlStatus = "FAILED";
        console.error("[GoHighLevel API Exception]:", apiErr);
      }
    } else {
      console.log(
        "[GoHighLevel API Note] GHL_PRIVATE_TOKEN or GHL_LOCATION_ID not set in .env.local yet. Lead captured locally:",
        ghlContactPayload
      );
    }

    return NextResponse.json({
      success: true,
      referenceId: refCode,
      ghlStatus,
      ghlContactId,
      message: "Enquiry submitted successfully.",
    });
  } catch (error) {
    console.error("Enquiry API Route Error:", error);
    return NextResponse.json(
      { error: "Internal server error processing enquiry" },
      { status: 500 }
    );
  }
}

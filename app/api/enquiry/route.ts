import { NextResponse } from "next/server";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { fullName, email, phone, interestedCourse } = body;

    if (!fullName || !email || !phone) {
      return NextResponse.json(
        { error: "Full Name, Email, and Phone Number are required." },
        { status: 400 }
      );
    }

    // Split name into First & Last name for GoHighLevel fields
    const nameParts = fullName.trim().split(" ");
    const firstName = nameParts[0] || fullName;
    const lastName = nameParts.slice(1).join(" ") || "";

    // Generate unique reference ID
    const refCode = `COW-${Math.floor(100000 + Math.random() * 900000)}`;

    // Read GHL Credentials from environment variables
    const ghlToken =
      process.env.GHL_PRIVATE_TOKEN ||
      process.env.GHL_API_KEY ||
      process.env.GHL_ACCESS_TOKEN;
    const ghlLocationId = process.env.GHL_LOCATION_ID;

    const courseSelected = interestedCourse || "All Three Courses (Bundle)";

    // Custom fields mapping for GoHighLevel {{contact.course}}
    const customFields: Array<{ id?: string; key?: string; field_value?: string; value?: string }> = [
      {
        key: "contact.course",
        field_value: courseSelected,
        value: courseSelected,
      },
      {
        key: "course",
        field_value: courseSelected,
        value: courseSelected,
      },
    ];

    if (process.env.GHL_COURSE_FIELD_ID) {
      customFields.push({
        id: process.env.GHL_COURSE_FIELD_ID,
        key: "contact.course",
        field_value: courseSelected,
        value: courseSelected,
      });
    }

    // Contact payload formatted for GoHighLevel v2 API
    const ghlContactPayload = {
      locationId: ghlLocationId,
      firstName,
      lastName,
      name: fullName,
      email: email.trim().toLowerCase(),
      phone: phone.trim(),
      tags: [
        "Landing Page",
        courseSelected,
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
                    body: `COWRIN LP1 Enquiry Received\n• Program: ${interestedCourse}\n• Reference ID: ${refCode}\n• Submitted At: ${new Date().toLocaleString()}`,
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

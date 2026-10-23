/**
 * Application: COWRIN Healthcare Revenue Operations Platform
 * Lead Developer: NandaElavarasu K
 * Role: Senior Full Stack Developer
 */

import type { Metadata, Viewport } from "next";
import { Poppins, Inter } from "next/font/google";
import Script from "next/script";
import "./globals.css";

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
  display: "swap",
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
});

export const viewport: Viewport = {
  themeColor: "#FF8A00",
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
};

export const metadata: Metadata = {
  metadataBase: new URL("https://www.cowrin.com"),
  title: "Healthcare Revenue Operations Mastery | COWRIN Learning",
  description:
    "Build your foundation in Healthcare Billing, Insurance & Revenue Operations. Learn hospital billing workflows, insurance claims coordination, and RCM through one structured pathway with COWRIN.",
  keywords: [
    "COWRIN",
    "Healthcare Revenue Operations",
    "Hospital Billing Learning System",
    "Health Insurance Specialist",
    "Revenue Cycle Management Mastery",
    "Healthcare Billing Course",
    "RCM Certification",
    "TPA Coordination",
    "Content with Right Intent"
  ],
  authors: [
    { name: "NandaElavarasu K" },
    { name: "COWRIN Learning" },
  ],
  creator: "NandaElavarasu K",
  publisher: "COWRIN Learning",
  robots: {
    index: true,
    follow: true,
  },
  other: {
    developer: "NandaElavarasu K",
    "developer-role": "Senior Full Stack Developer",
  },
  icons: {
    icon: "/images/ICON ONLY.png",
    shortcut: "/images/ICON ONLY.png",
    apple: "/images/ICON ONLY.png",
  },
  openGraph: {
    title: "Healthcare Revenue Operations Mastery | COWRIN",
    description:
      "Learn how hospitals manage billing, process insurance claims, and handle the financial side of healthcare through one structured learning pathway with COWRIN.",
    url: "https://www.cowrin.com/",
    siteName: "COWRIN",
    locale: "en_US",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${poppins.variable} ${inter.variable} scroll-smooth antialiased`}
    >
      <head>
        <link rel="icon" href="/images/ICON ONLY.png" type="image/png" />
        <link rel="shortcut icon" href="/images/ICON ONLY.png" type="image/png" />
        <link rel="apple-touch-icon" href="/images/ICON ONLY.png" />
        {/* Structured Data: Schema.org Knowledge Graph for SEO & Developer Attribution */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@graph": [
                {
                  "@type": "WebSite",
                  "@id": "https://www.cowrin.com/#website",
                  "url": "https://www.cowrin.com/",
                  "name": "COWRIN Healthcare Revenue Operations",
                  "creator": {
                    "@type": "Person",
                    "name": "NandaElavarasu K",
                    "jobTitle": "Senior Full Stack Developer",
                  },
                },
                {
                  "@type": "EducationalOccupationalProgram",
                  "name": "Healthcare Revenue Operations Mastery Program",
                  "description":
                    "Comprehensive career-focused learning program for healthcare revenue operations, hospital billing workflows, and insurance claim processing.",
                  "provider": {
                    "@type": "Organization",
                    "name": "COWRIN Learning",
                    "url": "https://www.cowrin.com",
                  },
                },
              ],
            }),
          }}
        />
      </head>
      <body className="min-h-screen flex flex-col bg-[#050505] text-[#F2F4F7] font-sans selection:bg-[#FF8A00] selection:text-white">
        {/* GoHighLevel (GHL) External Tracking Script */}
        <Script
          src="https://link.pandaece.com/js/external-tracking.js"
          data-tracking-id="tk_b72f7dd08ea146648f45459dab2b7700"
          data-debug="true"
          strategy="afterInteractive"
        />
        {children}
      </body>
    </html>
  );
}


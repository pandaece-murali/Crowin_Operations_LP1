import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const viewport: Viewport = {
  themeColor: "#FF5A1F",
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
};

export const metadata: Metadata = {
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
    "TPA Coordination"
  ],
  icons: {
    icon: "https://cdn.edbound.app/public/05f7c860-a46a-4c3c-a4a1-0b4d951f5071/favicon/23042026/7pqa6.png",
  },
  openGraph: {
    title: "Healthcare Revenue Operations Mastery | COWRIN",
    description:
      "Learn how hospitals manage billing, process insurance claims, and handle the financial side of healthcare through one structured learning pathway.",
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
    <html lang="en" className={`${geistSans.variable} ${geistMono.variable} scroll-smooth antialiased`}>
      <head>
        {/* GoHighLevel (GHL) External Tracking Script */}
        <script
          src="https://link.pandaece.com/js/external-tracking.js"
          data-tracking-id="tk_b72f7dd08ea146648f45459dab2b7700"
          data-debug="true"
        />
      </head>
      <body className="min-h-screen flex flex-col bg-[#050505] text-white selection:bg-[#FF5A1F] selection:text-white">
        {children}
      </body>
    </html>
  );
}

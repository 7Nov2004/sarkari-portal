import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const dynamic = "force-dynamic";

export const viewport: Viewport = {
  themeColor: "#1d4ed8",
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
};

export const metadata: Metadata = {
  metadataBase: new URL("https://govportal.online"),
  title: {
    default: "Sarkari Portal | Latest Sarkari Jobs, Results, Admit Card, Yojana 2026",
    template: "%s | Sarkari Portal",
  },
  description:
    "India's leading independent information portal for the latest Sarkari Result, Sarkari Naukri, Admit Card, Government Schemes (Yojana), Scholarship, and Citizen Services.",
  keywords: [
    "Sarkari Result",
    "Sarkari Job",
    "Sarkari Exam",
    "Admit Card 2026",
    "Sarkari Yojana",
    "Government Schemes",
    "Scholarship Portal",
    "PAN Card Apply Online",
    "Voter List 2026",
    "UP Police Recruitment",
    "PM Kisan Samman Nidhi",
    "Sarkari Naukri",
    "सरकारी योजना",
    "सरकारी रिजल्ट",
    "सरकारी नौकरी",
  ],
  authors: [{ name: "AJ Studio by Aayush Jaiswal" }],
  creator: "Aayush Jaiswal",
  publisher: "GovPortal.online",
  alternates: {
    canonical: "https://govportal.online",
  },
  openGraph: {
    type: "website",
    locale: "hi_IN",
    url: "https://govportal.online",
    siteName: "GovPortal.online",
    title: "Sarkari Portal | Latest Sarkari Jobs, Results, Admit Card, Yojana 2026",
    description:
      "Find direct official links and fast updates for Sarkari Jobs, Results, Admit Cards, Yojanas, Scholarships, and Document Services.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Sarkari Portal | Latest Sarkari Jobs, Results & Yojana",
    description:
      "All Government Jobs, Exam Results, Admit Cards, and Schemes at one place with official sources.",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    google: "kcH6vjTOG9gKvJ2sltk700ZlJVOlRgbwE4ekgVjM-v0",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="hi" className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col bg-gray-50 text-gray-900">
        <Header />
        <main className="flex-grow">{children}</main>
        <Footer />
      </body>
    </html>
  );
}

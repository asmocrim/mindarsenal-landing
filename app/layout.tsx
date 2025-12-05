// app/layout.tsx
import type { Metadata, Viewport } from "next";
import "./globals.css";
import { Montserrat, Open_Sans } from "next/font/google";
import { Analytics } from "@vercel/analytics/react";


const headingFont = Montserrat({
  subsets: ["latin"],
  weight: ["700", "800", "900"],
  variable: "--font-heading",
});

const bodyFont = Open_Sans({
  subsets: ["latin"],
  weight: ["400", "600"],
  variable: "--font-body",
});

export const metadata: Metadata = {
  title: "MindArsenal – AI Discipline Coach",
  description: "MindArsenal is a ruthless AI habit coach that runs your Morning Check-In, Nightly Debrief, and Weekly War Room.",
  metadataBase: new URL("https://mindarsenal.com"),
  openGraph: {
    title: "MindArsenal – AI Discipline Coach",
    description:
      "War on mediocrity. An AI drill sergeant that tracks your execution and cuts excuses.",
    url: "https://mindarsenal.com",
    siteName: "MindArsenal",
    type: "website",
    images: [
      {
        url: "/og-mindarsenal.png",
        width: 1200,
        height: 630,
        alt: "MindArsenal – War on mediocrity",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "MindArsenal – AI Discipline Coach",
    description:
      "War on mediocrity. An AI drill sergeant that tracks your execution and cuts excuses.",
    images: ["/og-mindarsenal.png"],
  },
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "32x32", type: "image/png" },
      { url: "/icon-192.png", sizes: "192x192", type: "image/png" },
      { url: "/icon-512.png", sizes: "512x512", type: "image/png" },
    ],
    apple: [{ url: "/apple-touch-icon.png", sizes: "180x180" }],
  },
};

// ✅ move themeColor here
export const viewport: Viewport = {
  themeColor: "#000000",
};


export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${headingFont.variable} ${bodyFont.variable}`}
    >
      <body className="overflow-x-hidden bg-battle text-white font-[var(--font-body)]">
        {/* Cinematic background layers (global) */}
        <div className="bg-halo" />
        <div className="bg-scanlines" />
        <div className="bg-noise" />

        {/* Foreground content */}
        <div className="page-shell relative z-10">{children}</div>
        <Analytics /> 
      </body>
    </html>
  );
}


// app/layout.tsx
import type { Metadata } from "next";
import "./globals.css";
import { Montserrat, Open_Sans } from "next/font/google";

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
  title: "MindArsenal · AI Discipline Coach",
  description:
    "MindArsenal is a ruthless AI habit coach that runs your Morning Check-In, Evening Report, and Weekly War Report. Daily discipline. No excuses.",
  metadataBase: new URL("https://mindarsenal.com"),
  themeColor: "#000000",
  openGraph: {
    title: "MindArsenal · AI Discipline Coach",
    description:
      "War on mediocrity. An AI drill sergeant that tracks your execution and cuts excuses.",
    url: "https://mindarsenal.com",
    siteName: "MindArsenal",
  },
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
      </body>
    </html>
  );
}


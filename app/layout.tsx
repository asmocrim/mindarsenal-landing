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
    "MindArsenal is a ruthless AI habit coach that runs your Morning Check-In, Evening Report, and Weekly Summary. Daily discipline. No excuses.",
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
      <body className="bg-battle text-white font-[var(--font-body)]">
        {children}
      </body>
    </html>
  );
}

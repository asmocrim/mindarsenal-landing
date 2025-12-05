// app/enlist/page.tsx
import type { Metadata } from "next";
import { EnlistForm } from "../_components/EnlistForm";

export const metadata: Metadata = {
  title: "Enlist – MindArsenal",
  description: "Join the MindArsenal waitlist.",
  openGraph: {
    title: "Enlist – MindArsenal",
    description:
      "Join the MindArsenal waitlist. War on mediocrity starts with your first report.",
    url: "https://mindarsenal.com/enlist",
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
    title: "Enlist – MindArsenal",
    description:
      "Join the MindArsenal waitlist. War on mediocrity starts with your first report.",
    images: ["/og-mindarsenal.png"],
  },
};

export default function EnlistPage() {
  return (
    <main className="page-shell relative z-10 min-h-screen bg-black text-white">
      <div className="mx-auto flex w-full max-w-5xl flex-col gap-10 px-6 pb-20 pt-28 sm:gap-12 sm:pt-32">
        {/* Breadcrumb / Label */}
        <div className="text-[0.7rem] uppercase tracking-[0.2em] text-iron sm:text-xs">
          MindArsenal / Enlist
        </div>

        {/* Heading */}
        <header className="space-y-4 sm:space-y-5 md:max-w-3xl">
          <h1 className="text-3xl font-semibold leading-tight tracking-[0.25em] text-white sm:text-4xl md:text-[2.5rem]">
            ENLIST IN THE WAR
            <span className="block text-crimson">ON MEDIOCRITY.</span>
          </h1>
          <p className="text-sm text-neutral-300 sm:text-base">
            This is not a newsletter. This is a roster. You enter your details,
            MindArsenal evaluates, and if you&apos;re a fit, you get access to
            the AI discipline protocol when it goes live.
          </p>
        </header>

        {/* Expectations block */}
        <section className="space-y-4 rounded-lg border border-stealth bg-[#050505] p-6 sm:p-8">
          <h2 className="text-xs font-semibold uppercase tracking-[0.18em] text-iron sm:text-sm">
            READ BEFORE ENLISTING
          </h2>
          <ul className="space-y-2 text-sm text-neutral-200 sm:text-base">
            <li>• Daily Check-Ins. No ghosting.</li>
            <li>• Brutally honest reports – no excuses, no filters.</li>
            <li>• You execute offline. MindArsenal tracks your discipline.</li>
            <li>• If you&apos;re not serious, don&apos;t enlist.</li>
          </ul>
        </section>

        {/* Form */}
        <section className="fade-in">
          <EnlistForm />
        </section>
      </div>
    </main>
  );
}

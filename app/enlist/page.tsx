// app/enlist/page.tsx
"use client";

import Link from "next/link";
import { EnlistForm } from "../_components/EnlistForm";

export default function EnlistPage() {
  return (
    <main className="min-h-screen bg-battle text-white">
      <section className="border-b border-stealth">
        <div className="mx-auto max-w-5xl px-5 py-10 sm:px-6 sm:py-12 lg:py-16">
          <header className="mb-8 flex items-center justify-between gap-4">
            <div className="space-y-1">
              <p className="font-[var(--font-heading)] text-[0.7rem] font-semibold uppercase tracking-[0.24em] text-crimson sm:text-xs">
                MindArsenal
              </p>
              <h1 className="font-[var(--font-heading)] text-xl font-bold uppercase tracking-[0.18em] sm:text-2xl">
                Enlistment form
              </h1>
            </div>

            <Link
              href="/"
              className="text-[0.75rem] text-iron underline-offset-4 underline hover:text-white sm:text-xs"
            >
              ← Back to main page
            </Link>
          </header>

          <div className="space-y-6 sm:space-y-7 md:space-y-8 fade-in">
            <p className="max-w-3xl text-[0.85rem] text-neutral-200 sm:text-sm md:text-base">
              This is not a newsletter. This is an enlistment. If you join the
              first MindArsenal unit, you commit to daily check-ins, honest
              reports, and aggressive correction of weak patterns.
            </p>

            <p className="max-w-3xl text-[0.8rem] text-neutral-400 sm:text-sm">
              Fill the form with discipline. No fluff. If you’re a fit, you’ll
              be contacted with instructions. If you’re not, you will hear
              nothing.
            </p>

            <EnlistForm />
          </div>

          <p className="mt-6 max-w-xl text-[0.7rem] text-iron sm:text-xs">
            By enlisting, you allow MindArsenal to store your name, email and
            stated goals for the purpose of contacting you and running the
            discipline system. No spam. No resale. If you want your data
            removed, you can request it at any time via{" "}
            <a
              href="mailto:asmo@mindarsenal.com"
              className="text-crimson underline underline-offset-4 hover:text-crimson/80"
            >
              asmo@mindarsenal.com
            </a>
            .
          </p>
        </div>
      </section>
    </main>
  );
}

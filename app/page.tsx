"use client";

import Image from "next/image";
import { useState } from "react";
import EnlistModal from "./_components/EnlistModal";

export default function HomePage() {
  const [showForm, setShowForm] = useState(false);

  return (
    <main className="flex min-h-screen flex-col bg-battle text-white">
      {/* HERO */}
      <section className="flex-1 border-b border-stealth">
        <div className="relative mx-auto max-w-5xl px-5 py-8 sm:px-6 sm:py-10 lg:py-20">
          {/* Top bar */}
          <header className="mb-10 flex items-center gap-6 sm:mb-14 lg:mb-16">
            <div className="flex items-center gap-3">
              <div className="relative h-8 w-8 sm:h-9 sm:w-9">
                <Image
                  src="/logo_mindarsenal.png"
                  alt="MindArsenal logo"
                  fill
                  className="object-contain"
                  priority
                />
              </div>
              <span className="font-[var(--font-heading)] text-[0.65rem] font-semibold uppercase tracking-[0.22em] text-iron sm:text-xs">
                MindArsenal
              </span>
            </div>

            <nav className="ml-auto hidden items-center gap-8 font-[var(--font-heading)] text-[0.65rem] uppercase tracking-[0.22em] text-iron md:flex">
              <a href="#what" className="transition-colors hover:text-white">
                What it is
              </a>
              <a href="#features" className="transition-colors hover:text-white">
                Features
              </a>
              <a href="#tone" className="transition-colors hover:text-white">
                Tone
              </a>
              <a href="#enlist" className="transition-colors hover:text-white">
                Enlist
              </a>
            </nav>
          </header>

          <div className="grid gap-10 lg:grid-cols-[minmax(0,2fr)_minmax(0,1.5fr)] lg:items-center">
            {/* Hero copy */}
            <div className="space-y-6 sm:space-y-7 lg:space-y-8 fade-in">
              <p className="font-[var(--font-heading)] text-[0.7rem] font-semibold uppercase tracking-[0.26em] text-crimson sm:text-xs">
                War on mediocrity
              </p>

              <h1 className="font-[var(--font-heading)] text-4xl font-bold uppercase leading-tight tracking-tight drop-shadow-[0_0_10px_rgba(255,255,255,0.12)] sm:text-5xl md:text-6xl lg:text-7xl">
                AI discipline
                <br />
                coach.
                <br />
                Daily check-ins.
                <br />
                No excuses.
              </h1>

              <p className="max-w-xl text-[0.8rem] text-neutral-300 sm:text-sm md:text-base">
                MindArsenal is a ruthless AI habit coach that runs your{" "}
                <span className="font-semibold text-white">
                  Morning Check-In
                </span>
                ,{" "}
                <span className="font-semibold text-white">
                  Nightly Debrief
                </span>{" "}
                and{" "}
                <span className="font-semibold text-white">
                  Weekly War Report
                </span>
                . It tracks your execution, calls out your weakness, and forces
                elite standards.
              </p>

              <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:gap-4">
                <button
                  onClick={() => setShowForm(true)}
                  className="font-[var(--font-heading)] inline-flex items-center justify-center px-7 py-3 text-[0.7rem] font-semibold uppercase tracking-[0.3em] bg-crimson text-white shadow-crimson glow-crimson transition-colors hover:bg-crimson/80 sm:px-8 sm:text-xs md:text-sm"
                >
                  ENLIST NOW
                </button>
                <p className="max-w-xs text-[0.7rem] text-iron sm:text-xs">
                  First cohort: limited early testers.
                  <br />
                  High accountability. No hand-holding.
                </p>
              </div>
            </div>

            {/* Daily protocol card */}
            <aside className="fade-in-delay-1 rounded-none border border-stealth bg-[#101010]/95 p-6 shadow-stealth backdrop-blur-sm sm:p-7 md:p-8">
              <h2 className="mb-4 font-[var(--font-heading)] text-[0.7rem] font-semibold uppercase tracking-[0.24em] text-iron sm:text-xs">
                Daily protocol
              </h2>
              <ul className="space-y-3 text-[0.8rem] text-neutral-200 sm:space-y-4 sm:text-sm">
                <li>
                  <span className="font-semibold text-white">
                    07:00 — Morning Check-In.
                  </span>{" "}
                  State today’s missions. Get a ruthless, focused plan.
                </li>
                <li>
                  <span className="font-semibold text-white">
                    All day — Execution log.
                  </span>{" "}
                  Report completed habits. No log = no credit.
                </li>
                <li>
                  <span className="font-semibold text-white">
                    21:00 — Nightly Debrief.
                  </span>{" "}
                  Debrief the day. Wins, failures, countermeasures.
                </li>
              </ul>
              <p className="mt-4 text-[0.7rem] text-iron sm:mt-5 sm:text-xs">
                Weekly, you receive a cold summary of your performance. Habits,
                streaks, weak links.
              </p>
            </aside>
          </div>
        </div>
      </section>

      {/* WHAT IT IS */}
      <section
        id="what"
        className="border-b border-stealth bg-[#050505] py-14 sm:py-16 md:py-20"
      >
        <div className="mx-auto max-w-5xl space-y-5 px-5 sm:px-6 md:space-y-6 fade-in">
          <h2 className="font-[var(--font-heading)] text-[0.75rem] font-semibold uppercase tracking-[0.25em] text-iron sm:text-sm md:text-base">
            What MindArsenal is
          </h2>
          <p className="max-w-3xl text-sm text-neutral-100 sm:text-base md:text-lg">
            MindArsenal is a{" "}
            <span className="font-semibold">
              chat-based AI drill sergeant
            </span>{" "}
            for your life. It runs simple, brutal routines: morning planning,
            evening accountability, and weekly reviews. No feeds. No dopamine
            traps. Just disciplined feedback loops.
          </p>
          <p className="max-w-3xl text-[0.85rem] text-neutral-300 sm:text-sm md:text-base">
            The system is built for people who secretly know they need pressure,
            not comfort. You state your goals. MindArsenal tracks execution,
            rejects excuses, and forces you to adapt your strategy instead of
            repeating weak patterns.
          </p>
        </div>
      </section>

      {/* FEATURES */}
      <section
        id="features"
        className="border-b border-stealth py-14 sm:py-16 md:py-20"
      >
        <div className="mx-auto max-w-5xl px-5 sm:px-6">
          <h2 className="fade-in font-[var(--font-heading)] mb-8 text-[0.75rem] font-semibold uppercase tracking-[0.25em] text-iron sm:mb-10 sm:text-sm md:text-base">
            Core features
          </h2>

          <div className="grid gap-5 sm:gap-6 md:grid-cols-3">
            {/* Morning Check-In */}
            <div className="fade-in rounded-none border border-stealth bg-[#050505] p-5 shadow-stealth sm:p-6">
              <h3 className="font-[var(--font-heading)] mb-3 text-[0.8rem] font-semibold uppercase tracking-[0.2em] sm:text-sm">
                Morning Check-In
              </h3>
              <p className="mb-4 text-[0.8rem] text-neutral-300 sm:text-sm">
                Start the day with a cold briefing. State your top missions.
                Receive a prioritized, clear plan.
              </p>
              <ul className="mt-auto space-y-2 text-[0.75rem] text-iron sm:text-xs">
                <li className="flex gap-2">
                  <span className="text-crimson">▐</span>
                  <span>No vague goals. Concrete targets only.</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-crimson">▐</span>
                  <span>Short, direct prompts. No fluff.</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-crimson">▐</span>
                  <span>Sets the standard for the entire day.</span>
                </li>
              </ul>
            </div>

            {/* Nightly Debrief */}
            <div className="fade-in-delay-1 rounded-none border border-stealth bg-[#050505] p-5 shadow-stealth sm:p-6">
              <h3 className="font-[var(--font-heading)] mb-3 text-[0.8rem] font-semibold uppercase tracking-[0.2em] sm:text-sm">
                Nightly Debrief
              </h3>
              <p className="mb-4 text-[0.8rem] text-neutral-300 sm:text-sm">
                Every night you report what you executed, where you failed, and
                why. No hiding.
              </p>
              <ul className="mt-auto space-y-2 text-[0.75rem] text-iron sm:text-xs">
                <li className="flex gap-2">
                  <span className="text-crimson">▐</span>
                  <span>No excuses. Only causes and countermeasures.</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-crimson">▐</span>
                  <span>Blunt feedback on your discipline.</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-crimson">▐</span>
                  <span>Forces you to face your day honestly.</span>
                </li>
              </ul>
            </div>

            {/* Weekly War Report */}
            <div className="fade-in-delay-2 rounded-none border border-stealth bg-[#050505] p-5 shadow-stealth sm:p-6">
              <h3 className="font-[var(--font-heading)] mb-3 text-[0.8rem] font-semibold uppercase tracking-[0.2em] sm:text-sm">
                Weekly War Report
              </h3>
              <p className="mb-4 text-[0.8rem] text-neutral-300 sm:text-sm">
                Once per week, you receive a tactical overview of your
                performance. Streaks, weak links, and next focus.
              </p>
              <ul className="mt-auto space-y-2 text-[0.75rem] text-iron sm:text-xs">
                <li className="flex gap-2">
                  <span className="text-crimson">▐</span>
                  <span>Habit completion rate and consistency.</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-crimson">▐</span>
                  <span>Patterns in failure and procrastination.</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-crimson">▐</span>
                  <span>Clear orders for the next week.</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* TONE OF VOICE */}
      <section
        id="tone"
        className="border-b border-stealth bg-[#050505] py-14 sm:py-16 md:py-20"
      >
        <div className="mx-auto max-w-5xl space-y-7 px-5 sm:px-6 md:space-y-8 fade-in">
          <h2 className="font-[var(--font-heading)] text-[0.75rem] font-semibold uppercase tracking-[0.25em] text-iron sm:text-sm md:text-base">
            Tone of voice · Asmo Style™
          </h2>

          <div className="grid gap-6 md:grid-cols-2 md:gap-8">
            <div className="space-y-3 text-[0.85rem] text-neutral-200 sm:text-sm md:text-base">
              <p>Short. Direct. Commanding. No excuses.</p>
              <p>
                MindArsenal speaks like a ruthless warrior mentor. Compassionate
                in content, ruthless in style. No emojis. No soft talk.
              </p>
            </div>

            <div className="space-y-2 text-[0.8rem] text-neutral-300 sm:text-xs md:text-sm">
              <p className="text-neutral-100 font-semibold">Sample lines:</p>
              <ul className="space-y-1">
                <li>“Execute.”</li>
                <li>“Report your progress.”</li>
                <li>“Missed target. Correct it tomorrow.”</li>
                <li>“Good. Continue.”</li>
                <li>“Stay sharp.”</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* ENLIST / CONTACT */}
      <section
        id="enlist"
        className="bg-battle py-14 sm:py-16 md:py-20 fade-in"
      >
        <div className="mx-auto max-w-5xl space-y-7 px-5 sm:px-6 md:space-y-8">
          <h2 className="font-[var(--font-heading)] text-[0.75rem] font-semibold uppercase tracking-[0.25em] text-iron sm:text-sm md:text-base">
            Enlist as an early tester
          </h2>

          <p className="max-w-3xl text-[0.85rem] text-neutral-200 sm:text-sm md:text-base">
            First we move with a small unit. If you want MindArsenal to drill
            your habits from day one, send a disciplined enlistment and complete
            the form. Name, time zone, goals. No fluff.
          </p>

          <div className="space-y-4 text-sm text-neutral-200">
            <div className="flex flex-col gap-2 sm:flex-row sm:items-center">
              <span className="font-[var(--font-heading)] w-32 text-[0.7rem] font-semibold uppercase tracking-[0.18em] text-iron sm:text-xs">
                Email
              </span>
              <a
                href="mailto:asmo@mindarsenal.com?subject=MindArsenal%20Early%20Tester%20Enlistment"
                className="underline-offset-4 text-sm text-crimson underline hover:text-crimson/80"
              >
                asmo@mindarsenal.com
              </a>
            </div>

            <div className="flex flex-wrap gap-3">
              <button
                onClick={() => setShowForm(true)}
                className="font-[var(--font-heading)] inline-flex items-center justify-center px-6 py-2 text-[0.7rem] font-semibold uppercase tracking-[0.24em] bg-crimson text-white shadow-crimson glow-crimson transition-colors hover:bg-crimson/80 sm:text-xs md:text-sm"
              >
                Open Enlist Form
              </button>
              <a
                href="/enlist"
                className="inline-flex items-center text-[0.75rem] underline-offset-4 text-neutral-300 underline hover:text-white sm:text-xs"
              >
                Or open the full enlist page →
              </a>
            </div>
          </div>

          <p className="max-w-xl text-[0.7rem] text-iron sm:text-xs">
            If you can’t complete a basic enlist form and send one clear
            message, you’re not ready for this tool.
          </p>

          <div className="mt-4 flex flex-wrap justify-between gap-2 border-t border-stealth pt-5 text-[0.65rem] text-iron sm:mt-6 sm:text-[0.7rem] md:text-xs">
            <span>
              © {new Date().getFullYear()} MindArsenal · War on mediocrity
            </span>
            <span>Built for disciplined living.</span>
          </div>
        </div>
      </section>

      {showForm && <EnlistModal onClose={() => setShowForm(false)} />}
    </main>
  );
}

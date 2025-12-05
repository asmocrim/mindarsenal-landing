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
        <div className="relative mx-auto max-w-5xl px-6 py-10 lg:py-20">
          {/* Top bar */}
          <header className="mb-16 flex items-center gap-6">
            <div className="flex items-center gap-3">
              <div className="relative h-8 w-8">
                <Image
                  src="/logo_mindarsenal.png"
                  alt="MindArsenal logo"
                  fill
                  className="object-contain"
                  priority
                />
              </div>
              <span className="font-[var(--font-heading)] text-xs font-semibold uppercase tracking-[0.2em] text-iron">
                MindArsenal
              </span>
            </div>

            <nav className="ml-auto hidden items-center gap-10 font-[var(--font-heading)] text-xs uppercase tracking-[0.2em] text-iron md:flex">
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

          <div className="grid gap-12 lg:grid-cols-[minmax(0,2fr)_minmax(0,1.5fr)] lg:items-center">
            {/* Hero copy */}
            <div className="space-y-8">
              <p className="font-[var(--font-heading)] text-xs font-semibold uppercase tracking-[0.25em] text-crimson">
                War on mediocrity
              </p>

              <h1 className="font-[var(--font-heading)] text-5xl font-bold uppercase leading-tight tracking-tight drop-shadow-[0_0_10px_rgba(255,255,255,0.12)] md:text-6xl lg:text-7xl">
                AI discipline
                <br />
                coach.
                <br />
                Daily check-ins.
                <br />
                No excuses.
              </h1>

              <p className="max-w-xl text-sm text-neutral-300 md:text-base">
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

              <div className="flex flex-wrap items-center gap-4">
                <button
                  onClick={() => setShowForm(true)}
                  className="font-[var(--font-heading)] inline-flex items-center justify-center px-8 py-3 text-xs font-semibold uppercase tracking-[0.25em] bg-crimson text-white transition-colors shadow-crimson glow-crimson hover:bg-crimson/80 md:text-sm"
                >
                  ENLIST NOW
                </button>
                <p className="text-xs text-iron">
                  First cohort: limited early testers.
                  <br />
                  High accountability. No hand-holding.
                </p>
              </div>
            </div>

            {/* Daily protocol card */}
            <aside className="rounded-none border border-stealth bg-[#101010]/95 p-7 shadow-stealth backdrop-blur-sm md:p-8">
              <h2 className="mb-4 font-[var(--font-heading)] text-xs font-semibold uppercase tracking-[0.25em] text-iron">
                Daily protocol
              </h2>
              <ul className="space-y-4 text-sm text-neutral-200">
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
              <p className="mt-5 text-xs text-iron">
                Weekly, you receive a cold summary of your performance. Habits,
                streaks, weak links.
              </p>
            </aside>
          </div>
        </div>
      </section>

      {/* WHAT IT IS */}
      <section id="what" className="border-b border-stealth bg-[#050505] py-20">
        <div className="mx-auto max-w-5xl space-y-6 px-6">
          <h2 className="font-[var(--font-heading)] text-sm font-semibold uppercase tracking-[0.25em] text-iron md:text-base">
            What MindArsenal is
          </h2>
          <p className="max-w-3xl text-base text-neutral-100 md:text-lg">
            MindArsenal is a{" "}
            <span className="font-semibold">
              chat-based AI drill sergeant
            </span>{" "}
            for your life. It runs simple, brutal routines: morning planning,
            evening accountability, and weekly reviews. No feeds. No dopamine
            traps. Just disciplined feedback loops.
          </p>
          <p className="max-w-3xl text-sm text-neutral-300 md:text-base">
            The system is built for people who secretly know they need pressure,
            not comfort. You state your goals. MindArsenal tracks execution,
            rejects excuses, and forces you to adapt your strategy instead of
            repeating weak patterns.
          </p>
        </div>
      </section>

      {/* FEATURES */}
      <section id="features" className="border-b border-stealth py-20">
        <div className="mx-auto max-w-5xl px-6">
          <h2 className="mb-10 font-[var(--font-heading)] text-sm font-semibold uppercase tracking-[0.25em] text-iron md:text-base">
            Core features
          </h2>

          <div className="grid gap-6 md:grid-cols-3">
            {/* Morning Check-In */}
            <div className="flex flex-col rounded-none border border-stealth bg-[#050505] p-5 shadow-stealth md:p-6">
              <h3 className="font-[var(--font-heading)] mb-3 text-sm font-semibold uppercase tracking-[0.2em]">
                Morning Check-In
              </h3>
              <p className="mb-4 text-sm text-neutral-300">
                Start the day with a cold briefing. State your top missions.
                Receive a prioritized, clear plan.
              </p>
              <ul className="mt-auto space-y-2 text-xs text-iron">
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

            {/* Evening Report */}
            <div className="flex flex-col rounded-none border border-stealth bg-[#050505] p-5 shadow-stealth md:p-6">
              <h3 className="font-[var(--font-heading)] mb-3 text-sm font-semibold uppercase tracking-[0.2em]">
                Nightly Debrief
              </h3>
              <p className="mb-4 text-sm text-neutral-300">
                Every night you report what you executed, where you failed, and
                why. No hiding.
              </p>
              <ul className="mt-auto space-y-2 text-xs text-iron">
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

            {/* Weekly Summary */}
            <div className="flex flex-col rounded-none border border-stealth bg-[#050505] p-5 shadow-stealth md:p-6">
              <h3 className="font-[var(--font-heading)] mb-3 text-sm font-semibold uppercase tracking-[0.2em]">
                Weekly War Report
              </h3>
              <p className="mb-4 text-sm text-neutral-300">
                Once per week, you receive a tactical overview of your
                performance. Streaks, weak links, and next focus.
              </p>
              <ul className="mt-auto space-y-2 text-xs text-iron">
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
      <section id="tone" className="border-b border-stealth bg-[#050505] py-20">
        <div className="mx-auto max-w-5xl space-y-8 px-6">
          <h2 className="font-[var(--font-heading)] text-sm font-semibold uppercase tracking-[0.25em] text-iron md:text-base">
            Tone of voice · Asmo Style™
          </h2>

          <div className="grid gap-8 md:grid-cols-2">
            <div className="space-y-3 text-sm text-neutral-200 md:text-base">
              <p>Short. Direct. Commanding. No excuses.</p>
              <p>
                MindArsenal speaks like a ruthless warrior mentor. Compassionate
                in content, ruthless in style. No emojis. No soft talk.
              </p>
            </div>

            <div className="space-y-2 text-xs text-neutral-300 md:text-sm">
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
      <section id="enlist" className="bg-battle py-20">
        <div className="mx-auto max-w-5xl space-y-8 px-6">
          <h2 className="font-[var(--font-heading)] text-sm font-semibold uppercase tracking-[0.25em] text-iron md:text-base">
            Enlist as an early tester
          </h2>

          <p className="max-w-3xl text-sm text-neutral-200 md:text-base">
            First we move with a small unit. If you want MindArsenal to drill
            your habits from day one, send a disciplined enlistment and complete
            the form. Name, time zone, goals. No fluff.
          </p>

          <div className="space-y-4 text-sm text-neutral-200">
            <div className="flex flex-col gap-2 sm:flex-row sm:items-center">
              <span className="font-[var(--font-heading)] w-32 text-xs font-semibold uppercase tracking-[0.18em] text-iron">
                Email
              </span>
              <a
                href="mailto:asmo@mindarsenal.com?subject=MindArsenal%20Early%20Tester%20Enlistment"
                className="underline-offset-4 text-sm text-crimson underline hover:text-crimson/80"
              >
                asmo@mindarsenal.com
              </a>
            </div>

            <button
              onClick={() => setShowForm(true)}
              className="font-[var(--font-heading)] inline-flex items-center justify-center px-6 py-2 text-xs font-semibold uppercase tracking-[0.22em] bg-crimson text-white shadow-crimson glow-crimson transition-colors hover:bg-crimson/80 md:text-sm"
            >
              Open Enlist Form
            </button>
          </div>

          <p className="max-w-xl text-xs text-iron">
            If you can’t complete a basic enlist form and send one clear
            message, you’re not ready for this tool.
          </p>

          <div className="flex flex-wrap justify-between gap-2 border-t border-stealth pt-6 text-[10px] text-iron md:text-xs">
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

"use client";

import Image from "next/image";
import { useState } from "react";

// -----------------------------------------------------
// Minimal Enlist Modal (Asmo Style)
// -----------------------------------------------------
function EnlistModal({ onClose }: { onClose: () => void }) {
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);

    const form = e.currentTarget;
    const data = {
      name: (form.elements.namedItem("name") as HTMLInputElement).value,
      email: (form.elements.namedItem("email") as HTMLInputElement).value,
      timezone: (form.elements.namedItem("timezone") as HTMLInputElement).value,
      goals: (form.elements.namedItem("goals") as HTMLTextAreaElement).value,
    };

    try {
      await fetch(
        "https://script.google.com/macros/u/4/s/AKfycbyrkQjSchQ9Ma1jCd10ixvzSUulRJr8D4hKf733fxTir6xCiE2vfbhgVIkpvRFZHMc_/exec",
        {
          method: "POST",
          mode: "no-cors",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(data),
        },
      );
      setSuccess(true);
      (form.elements.namedItem("name") as HTMLInputElement).value = "";
      (form.elements.namedItem("email") as HTMLInputElement).value = "";
      (form.elements.namedItem("timezone") as HTMLInputElement).value = "";
      (form.elements.namedItem("goals") as HTMLTextAreaElement).value = "";
    } catch (err) {
      console.error(err);
    } finally {
      setLoading(false);
      setTimeout(() => onClose(), 2000);
    }
  };

  return (
    <div className="fixed inset-0 bg-black/80 flex items-center justify-center z-50 px-4">
      <div className="bg-[#0b0b0b] border border-stealth p-8 w-full max-w-sm shadow-stealth">
        {!success ? (
          <>
            <h2 className="text-xl font-semibold text-white mb-5 tracking-wide font-[var(--font-heading)] uppercase">
              Enlist Now
            </h2>

            <form onSubmit={handleSubmit} className="space-y-4">
              <input
                name="name"
                placeholder="Name"
                required
                className="w-full bg-battle border border-iron text-white px-3 py-2 text-sm"
              />

              <input
                name="email"
                type="email"
                placeholder="Email"
                required
                className="w-full bg-battle border border-iron text-white px-3 py-2 text-sm"
              />

              <input
                name="timezone"
                placeholder="Time Zone (e.g., CET)"
                required
                className="w-full bg-battle border border-iron text-white px-3 py-2 text-sm"
              />

              <textarea
                name="goals"
                placeholder="Current goals and why you need MindArsenal."
                rows={3}
                className="w-full bg-battle border border-iron text-white px-3 py-2 text-sm"
              />

              <button
                type="submit"
                className="w-full py-2 bg-crimson hover:bg-crimson/80 transition text-white text-sm tracking-wider uppercase glow-crimson shadow-crimson"
                disabled={loading}
              >
                {loading ? "Processing..." : "Submit"}
              </button>

              <button
                type="button"
                onClick={onClose}
                className="w-full py-2 text-iron text-xs hover:text-neutral-300"
              >
                Cancel
              </button>
            </form>
          </>
        ) : (
          <p className="text-center text-white py-10 text-sm">
            Request received. If you’re a fit, you’ll hear back. Stay sharp.
          </p>
        )}
      </div>
    </div>
  );
}

// -----------------------------------------------------
// PAGE COMPONENT
// -----------------------------------------------------

export default function HomePage() {
  const [showForm, setShowForm] = useState(false);

  return (
    <main className="min-h-screen bg-battle text-white flex flex-col">
      {/* HERO */}
      <section className="flex-1 border-b border-stealth">
        <div className="relative mx-auto max-w-5xl px-6 py-10 lg:py-20">
          {/* Top bar */}
          <header className="flex items-center gap-6 mb-16">
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
              <span className="text-xs tracking-[0.2em] font-semibold uppercase text-iron font-[var(--font-heading)]">
                MindArsenal
              </span>
            </div>

            <nav className="hidden md:flex items-center gap-10 text-xs tracking-[0.2em] uppercase text-iron ml-auto font-[var(--font-heading)]">
              <a href="#what" className="hover:text-white transition-colors">
                What it is
              </a>
              <a href="#features" className="hover:text-white transition-colors">
                Features
              </a>
              <a href="#tone" className="hover:text-white transition-colors">
                Tone
              </a>
              <a href="#enlist" className="hover:text-white transition-colors">
                Enlist
              </a>
            </nav>
          </header>

          <div className="grid gap-12 lg:grid-cols-[minmax(0,2fr)_minmax(0,1.5fr)] lg:items-center">
            {/* Hero copy */}
            <div className="space-y-8">
              <p className="text-xs font-semibold tracking-[0.25em] uppercase text-crimson font-[var(--font-heading)]">
                War on mediocrity
              </p>

              <h1 className="text-5xl md:text-6xl lg:text-7xl font-[var(--font-heading)] font-bold tracking-tight leading-tight drop-shadow-[0_0_10px_rgba(255,255,255,0.12)] uppercase">
                AI discipline
                <br />
                coach.
                <br />
                Daily check-ins.
                <br />
                No excuses.
              </h1>

              <p className="text-sm md:text-base text-neutral-300 max-w-xl">
                MindArsenal is a ruthless AI habit coach that runs your{" "}
                <span className="text-white font-semibold">Morning Check-In</span>,{" "}
                <span className="text-white font-semibold">Evening Report</span>{" "}
                and{" "}
                <span className="text-white font-semibold">Weekly Summary</span>.
                It tracks your execution. It calls out your weakness. It pushes
                you to elite standards.
              </p>

              <div className="flex flex-wrap items-center gap-4">
                <button
                  onClick={() => setShowForm(true)}
                  className="inline-flex items-center justify-center px-8 py-3 text-xs md:text-sm font-semibold tracking-[0.25em] uppercase bg-crimson hover:bg-crimson/80 text-white transition-colors shadow-crimson glow-crimson font-[var(--font-heading)]"
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
            <aside className="border border-stealth bg-[#101010]/95 p-7 md:p-8 rounded-none shadow-stealth backdrop-blur-sm">
              <h2 className="text-xs font-semibold tracking-[0.25em] uppercase text-iron mb-4 font-[var(--font-heading)]">
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
                    21:00 — Evening Report.
                  </span>{" "}
                  Debrief the day. Wins, failures, countermeasures.
                </li>
              </ul>
              <p className="text-xs text-iron mt-5">
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
        className="border-b border-stealth bg-[#050505] py-20"
      >
        <div className="mx-auto max-w-5xl px-6 space-y-6">
          <h2 className="text-sm md:text-base font-semibold tracking-[0.25em] uppercase text-iron font-[var(--font-heading)]">
            What MindArsenal is
          </h2>
          <p className="text-base md:text-lg text-neutral-100 max-w-3xl">
            MindArsenal is a{" "}
            <span className="font-semibold">chat-based AI drill sergeant</span>{" "}
            for your life. It runs on simple routines: morning planning, evening
            accountability, and weekly reviews. No feeds. No dopamine traps.
            Just disciplined feedback loops.
          </p>
          <p className="text-sm md:text-base text-neutral-300 max-w-3xl">
            The system is built for people who secretly know they need pressure,
            not comfort. You state your goals. MindArsenal tracks execution,
            confronts excuses, and forces you to adapt your strategy instead of
            repeating the same weak patterns.
          </p>
        </div>
      </section>

      {/* FEATURES */}
      <section id="features" className="border-b border-stealth py-20">
        <div className="mx-auto max-w-5xl px-6">
          <h2 className="text-sm md:text-base font-semibold tracking-[0.25em] uppercase text-iron mb-10 font-[var(--font-heading)]">
            Core features
          </h2>

          <div className="grid gap-6 md:grid-cols-3">
            {/* Morning Check-In */}
            <div className="border border-stealth bg-[#050505] p-5 md:p-6 flex flex-col rounded-none shadow-stealth">
              <h3 className="text-sm font-semibold tracking-[0.2em] uppercase mb-3 font-[var(--font-heading)]">
                Morning Check-In
              </h3>
              <p className="text-sm text-neutral-300 mb-4">
                Start the day with a cold briefing. State your top missions. Get
                a prioritized, clear plan.
              </p>
              <ul className="text-xs text-iron space-y-2 mt-auto">
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
            <div className="border border-stealth bg-[#050505] p-5 md:p-6 flex flex-col rounded-none shadow-stealth">
              <h3 className="text-sm font-semibold tracking-[0.2em] uppercase mb-3 font-[var(--font-heading)]">
                Evening Report
              </h3>
              <p className="text-sm text-neutral-300 mb-4">
                Debrief every night. Report what you executed, where you failed,
                and why.
              </p>
              <ul className="text-xs text-iron space-y-2 mt-auto">
                <li className="flex gap-2">
                  <span className="text-crimson">▐</span>
                  <span>No excuses. Only reasons and fixes.</span>
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
            <div className="border border-stealth bg-[#050505] p-5 md:p-6 flex flex-col rounded-none shadow-stealth">
              <h3 className="text-sm font-semibold tracking-[0.2em] uppercase mb-3 font-[var(--font-heading)]">
                Weekly Summary
              </h3>
              <p className="text-sm text-neutral-300 mb-4">
                Once per week, get a tactical overview of your performance.
                Streaks, weak links, and next focus.
              </p>
              <ul className="text-xs text-iron space-y-2 mt-auto">
                <li className="flex gap-2">
                  <span className="text-crimson">▐</span>
                  <span>Habit completion rate &amp; consistency.</span>
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
        className="border-b border-stealth bg-[#050505] py-20"
      >
        <div className="mx-auto max-w-5xl px-6 space-y-8">
          <h2 className="text-sm md:text-base font-semibold tracking-[0.25em] uppercase text-iron font-[var(--font-heading)]">
            Tone of voice · Asmo Style™
          </h2>

          <div className="grid gap-8 md:grid-cols-2">
            <div className="space-y-3 text-sm md:text-base text-neutral-200">
              <p>Short. Direct. Commanding. No excuses.</p>
              <p>
                MindArsenal speaks like a ruthless warrior mentor. Compassionate
                in content, ruthless in style. No emojis. No soft talk.
              </p>
            </div>

            <div className="space-y-2 text-xs md:text-sm text-neutral-300">
              <p className="font-semibold text-neutral-100">
                Sample lines:
              </p>
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
        <div className="mx-auto max-w-5xl px-6 space-y-8">
          <h2 className="text-sm md:text-base font-semibold tracking-[0.25em] uppercase text-iron font-[var(--font-heading)]">
            Enlist as an early tester
          </h2>

          <p className="text-sm md:text-base text-neutral-200 max-w-3xl">
            First we move with a small unit. If you want MindArsenal to drill
            your habits from day one, send a disciplined enlistment and complete
            the form. Name, time zone, goals. No fluff.
          </p>

          <div className="space-y-4 text-sm text-neutral-200">
            <div className="flex flex-col sm:flex-row sm:items-center gap-2">
              <span className="w-32 text-xs font-semibold tracking-[0.18em] uppercase text-iron font-[var(--font-heading)]">
                Email
              </span>
              <a
                href="mailto:asmo@mindarsenal.com?subject=MindArsenal%20Early%20Tester%20Enlistment"
                className="text-sm text-crimson hover:text-crimson/80 underline underline-offset-4"
              >
                asmo@mindarsenal.com
              </a>
            </div>

            <button
              onClick={() => setShowForm(true)}
              className="inline-flex items-center justify-center px-6 py-2 text-xs md:text-sm font-semibold tracking-[0.22em] uppercase bg-crimson hover:bg-crimson/80 text-white transition-colors font-[var(--font-heading)] shadow-crimson glow-crimson"
            >
              Open Enlist Form
            </button>
          </div>

          <p className="text-xs text-iron max-w-xl">
            If you can’t complete a basic enlist form and send one clear
            message, you’re not ready for this tool.
          </p>

          <div className="pt-6 border-t border-stealth text-[10px] md:text-xs text-iron flex flex-wrap justify-between gap-2">
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

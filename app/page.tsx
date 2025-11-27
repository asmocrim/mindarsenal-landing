"use client";

import Image from "next/image";
import { useState } from "react";

// -----------------------------------------------------
// Minimal Enlist Modal (Asmo Style) – now with animation
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
        }
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
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 px-4">
      <div className="w-full max-w-sm border border-stealth bg-[#0b0b0b] p-7 shadow-iron animate-scale-in">
        {!success ? (
          <>
            <h2 className="mb-5 font-[var(--font-heading)] text-xl font-semibold uppercase tracking-wide text-white">
              Enlist Now
            </h2>

            <form onSubmit={handleSubmit} className="space-y-4 text-sm">
              <input
                name="name"
                placeholder="Name"
                required
                className="w-full border border-iron bg-battle px-3 py-2 text-sm text-white outline-none focus:border-crimson focus:ring-1 focus:ring-crimson/70"
              />

              <input
                name="email"
                type="email"
                placeholder="Email"
                required
                className="w-full border border-iron bg-battle px-3 py-2 text-sm text-white outline-none focus:border-crimson focus:ring-1 focus:ring-crimson/70"
              />

              <input
                name="timezone"
                placeholder="Time Zone (e.g., CET)"
                required
                className="w-full border border-iron bg-battle px-3 py-2 text-sm text-white outline-none focus:border-crimson focus:ring-1 focus:ring-crimson/70"
              />

              <textarea
                name="goals"
                placeholder="Current goals and why you need MindArsenal."
                rows={3}
                className="w-full border border-iron bg-battle px-3 py-2 text-sm text-white outline-none focus:border-crimson focus:ring-1 focus:ring-crimson/70"
              />

              <button
                type="submit"
                className="w-full bg-crimson py-2 text-sm font-semibold uppercase tracking-[0.22em] text-white shadow-crimson transition hover:bg-crimson/85 disabled:opacity-60"
                disabled={loading}
              >
                {loading ? "Processing..." : "Submit"}
              </button>

              <button
                type="button"
                onClick={onClose}
                className="w-full py-2 text-xs text-iron transition hover:text-neutral-300"
              >
                Cancel
              </button>
            </form>
          </>
        ) : (
          <p className="py-10 text-center text-sm text-white">
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
    <main className="flex min-h-screen flex-col bg-battle text-white">
      {/* HERO */}
      <section className="hero-gradient grid-bg relative flex-1 border-b border-stealth overflow-hidden">
        <div className="relative mx-auto max-w-5xl px-6 py-8 lg:py-16">
          {/* Top bar */}
          <header className="mb-16 flex items-center gap-6 animate-fade-in">
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
            <div className="space-y-8 opacity-0 animate-fade-up [animation-delay:120ms]">
              <p className="font-[var(--font-heading)] text-xs font-semibold uppercase tracking-[0.25em] text-crimson">
                War on mediocrity
              </p>

              <h1 className="font-[var(--font-heading)] text-5xl font-bold uppercase tracking-tight leading-tight drop-shadow-[0_0_10px_rgba(255,255,255,0.12)] md:text-6xl lg:text-7xl">
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
                <span className="font-semibold text-white">Evening Report</span>{" "}
                and{" "}
                <span className="font-semibold text-white">
                  Weekly Summary
                </span>
                . It tracks your execution. It calls out your weakness. It
                pushes you to elite standards.
              </p>

              <div className="flex flex-wrap items-center gap-4">
                <button
                  onClick={() => setShowForm(true)}
                  className="inline-flex items-center justify-center px-8 py-3 font-[var(--font-heading)] text-xs font-semibold uppercase tracking-[0.25em] bg-crimson text-white shadow-crimson transition-transform transition-colors hover:-translate-y-[1px] hover:bg-crimson/90"
                >
                  <span className="relative">
                    ENLIST NOW
                    <span className="pointer-events-none absolute -inset-3 -z-10 rounded-full animate-pulse-ring" />
                  </span>
                </button>
                <p className="text-xs text-iron">
                  First cohort: limited early testers.
                  <br />
                  High accountability. No hand-holding.
                </p>
              </div>
            </div>

            {/* Daily protocol card */}
            <aside className="card-shell border border-stealth bg-[#101010]/90 p-7 shadow-stealth opacity-0 animate-fade-up [animation-delay:260ms] md:p-8">
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
                    21:00 — Evening Report.
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
      <section
        id="what"
        className="grid-bg border-b border-stealth bg-[#050505] py-20"
      >
        <div className="mx-auto max-w-5xl space-y-6 px-6 opacity-0 animate-fade-up">
          <h2 className="font-[var(--font-heading)] text-sm font-semibold uppercase tracking-[0.25em] text-iron md:text-base">
            What MindArsenal is
          </h2>
          <p className="max-w-3xl text-base text-neutral-100 md:text-lg">
            MindArsenal is a{" "}
            <span className="font-semibold">chat-based AI drill sergeant</span>{" "}
            for your life. It runs on simple routines: morning planning, evening
            accountability, and weekly reviews. No feeds. No dopamine traps.
            Just disciplined feedback loops.
          </p>
          <p className="max-w-3xl text-sm text-neutral-300 md:text-base">
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
          <h2 className="mb-10 font-[var(--font-heading)] text-sm font-semibold uppercase tracking-[0.25em] text-iron md:text-base">
            Core features
          </h2>

          <div className="grid gap-6 md:grid-cols-3">
            {/* Morning Check-In */}
            <div className="card-shell flex flex-col border border-stealth bg-[#050505] p-5 opacity-0 shadow-stealth transition-transform hover:-translate-y-[3px] md:p-6 animate-fade-up [animation-delay:80ms]">
              <h3 className="mb-3 font-[var(--font-heading)] text-sm font-semibold uppercase tracking-[0.2em]">
                Morning Check-In
              </h3>
              <p className="mb-4 text-sm text-neutral-300">
                Start the day with a cold briefing. State your top missions. Get
                a prioritized, clear plan.
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
            <div className="card-shell flex flex-col border border-stealth bg-[#050505] p-5 opacity-0 shadow-stealth transition-transform hover:-translate-y-[3px] md:p-6 animate-fade-up [animation-delay:180ms]">
              <h3 className="mb-3 font-[var(--font-heading)] text-sm font-semibold uppercase tracking-[0.2em]">
                Evening Report
              </h3>
              <p className="mb-4 text-sm text-neutral-300">
                Debrief every night. Report what you executed, where you failed,
                and why.
              </p>
              <ul className="mt-auto space-y-2 text-xs text-iron">
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
            <div className="card-shell flex flex-col border border-stealth bg-[#050505] p-5 opacity-0 shadow-stealth transition-transform hover:-translate-y-[3px] md:p-6 animate-fade-up [animation-delay:280ms]">
              <h3 className="mb-3 font-[var(--font-heading)] text-sm font-semibold uppercase tracking-[0.2em]">
                Weekly Summary
              </h3>
              <p className="mb-4 text-sm text-neutral-300">
                Once per week, get a tactical overview of your performance.
                Streaks, weak links, and next focus.
              </p>
              <ul className="mt-auto space-y-2 text-xs text-iron">
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
        className="grid-bg border-b border-stealth bg-[#050505] py-20"
      >
        <div className="mx-auto max-w-5xl space-y-8 px-6 opacity-0 animate-fade-up">
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
              <p className="font-semibold text-neutral-100">Sample lines:</p>
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
        <div className="mx-auto max-w-5xl space-y-8 px-6 opacity-0 animate-fade-up">
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
              <span className="w-32 font-[var(--font-heading)] text-xs font-semibold uppercase tracking-[0.18em] text-iron">
                Email
              </span>
              <a
                href="mailto:asmo@mindarsenal.com?subject=MindArsenal%20Early%20Tester%20Enlistment"
                className="text-sm text-crimson underline underline-offset-4 transition hover:text-crimson/80"
              >
                asmo@mindarsenal.com
              </a>
            </div>

            <button
              onClick={() => setShowForm(true)}
              className="inline-flex items-center justify-center bg-crimson px-6 py-2 font-[var(--font-heading)] text-xs font-semibold uppercase tracking-[0.22em] text-white shadow-crimson transition hover:-translate-y-[1px] hover:bg-crimson/90"
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

      {showForm && <EnistModalFallback onClose={() => setShowForm(false)} />}
    </main>
  );
}

// Small wrapper so JSX stays clean
function EnistModalFallback({ onClose }: { onClose: () => void }) {
  return <EnlistModal onClose={onClose} />;
}

// app/page.tsx
import Image from "next/image";

export default function HomePage() {
  return (
    <main className="min-h-screen bg-black text-white flex flex-col">
      {/* HERO */}
      <section className="flex-1 border-b border-neutral-900">
        <div className="relative mx-auto max-w-5xl px-6 py-10 lg:py-20">
          {/* Top bar */}
          <header className="flex items-center gap-6 mb-16">
            <div className="flex items-center gap-3">
              <div className="relative h-8 w-8">
                <Image
                  src="/logo-mindarsenal.png"
                  alt="MindArsenal logo"
                  fill
                  className="object-contain"
                  priority
                />
              </div>
              <span className="text-xs tracking-[0.2em] font-semibold uppercase text-neutral-300">
                MindArsenal
              </span>
            </div>

            <nav className="hidden md:flex items-center gap-10 text-xs tracking-[0.2em] uppercase text-neutral-400 ml-auto">
              <a href="#what" className="hover:text-white transition-colors">
                What it is
              </a>
              <a
                href="#features"
                className="hover:text-white transition-colors"
              >
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
              <p className="text-xs font-semibold tracking-[0.25em] uppercase text-red-600">
                War on mediocrity
              </p>

              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight leading-tight drop-shadow-[0_0_10px_rgba(255,255,255,0.12)]">
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
                <span className="text-white font-semibold">
                  Morning Check-In
                </span>
                ,{" "}
                <span className="text-white font-semibold">Evening Report</span>{" "}
                and{" "}
                <span className="text-white font-semibold">Weekly Summary</span>
                . It tracks your execution. It calls out your weakness. It
                pushes you to elite standards.
              </p>

              <div className="flex flex-wrap items-center gap-4">
                <a
                  href="#enlist"
                  className="inline-flex items-center justify-center px-8 py-3 text-xs md:text-sm font-semibold tracking-[0.25em] uppercase bg-red-600 hover:bg-red-500 text-white transition-colors shadow-[0_0_30px_rgba(239,68,68,0.45)] hover:shadow-[0_0_40px_rgba(239,68,68,0.7)]"
                >
                  ENLIST NOW
                </a>
                <p className="text-xs text-neutral-400">
                  First cohort: limited early testers.
                  <br />
                  High accountability. No hand-holding.
                </p>
              </div>
            </div>

            {/* Daily protocol card */}
            <aside className="border border-neutral-800 bg-neutral-900/40 p-7 md:p-8 rounded-sm shadow-[0_0_24px_rgba(0,0,0,0.6)]">
              <h2 className="text-xs font-semibold tracking-[0.25em] uppercase text-neutral-300 mb-4">
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
              <p className="text-xs text-neutral-500 mt-5">
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
        className="border-b border-neutral-900 bg-neutral-950/40 py-20"
      >
        <div className="mx-auto max-w-5xl px-6 space-y-6">
          <h2 className="text-sm md:text-base font-semibold tracking-[0.25em] uppercase text-neutral-300">
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
      <section id="features" className="border-b border-neutral-900 py-20">
        <div className="mx-auto max-w-5xl px-6">
          <h2 className="text-sm md:text-base font-semibold tracking-[0.25em] uppercase text-neutral-300 mb-10">
            Core features
          </h2>

          <div className="grid gap-6 md:grid-cols-3">
            {/* Morning Check-In */}
            <div className="border border-neutral-800 bg-neutral-950/40 p-5 md:p-6 flex flex-col">
              <h3 className="text-sm font-semibold tracking-[0.2em] uppercase mb-3">
                Morning Check-In
              </h3>
              <p className="text-sm text-neutral-300 mb-4">
                Start the day with a cold briefing. State your top missions. Get
                a prioritized, clear plan.
              </p>
              <ul className="text-xs text-neutral-400 space-y-2 mt-auto">
                <li>• No vague goals. Concrete targets only.</li>
                <li>• Short, direct prompts. No fluff.</li>
                <li>• Sets the standard for the entire day.</li>
              </ul>
            </div>

            {/* Evening Report */}
            <div className="border border-neutral-800 bg-neutral-950/40 p-5 md:p-6 flex flex-col">
              <h3 className="text-sm font-semibold tracking-[0.2em] uppercase mb-3">
                Evening Report
              </h3>
              <p className="text-sm text-neutral-300 mb-4">
                Debrief every night. Report what you executed, where you failed,
                and why.
              </p>
              <ul className="text-xs text-neutral-400 space-y-2 mt-auto">
                <li>• No excuses. Only reasons and fixes.</li>
                <li>• Blunt feedback on your discipline.</li>
                <li>• Forces you to face your day honestly.</li>
              </ul>
            </div>

            {/* Weekly Summary */}
            <div className="border border-neutral-800 bg-neutral-950/40 p-5 md:p-6 flex flex-col">
              <h3 className="text-sm font-semibold tracking-[0.2em] uppercase mb-3">
                Weekly Summary
              </h3>
              <p className="text-sm text-neutral-300 mb-4">
                Once per week, get a tactical overview of your performance.
                Streaks, weak links, and next focus.
              </p>
              <ul className="text-xs text-neutral-400 space-y-2 mt-auto">
                <li>• Habit completion rate & consistency.</li>
                <li>• Patterns in failure and procrastination.</li>
                <li>• Clear orders for the next week.</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* TONE OF VOICE */}
      <section
        id="tone"
        className="border-b border-neutral-900 bg-neutral-950/40 py-20"
      >
        <div className="mx-auto max-w-5xl px-6 space-y-8">
          <h2 className="text-sm md:text-base font-semibold tracking-[0.25em] uppercase text-neutral-300">
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
      <section id="enlist" className="bg-black py-20">
        <div className="mx-auto max-w-5xl px-6 space-y-8">
          <h2 className="text-sm md:text-base font-semibold tracking-[0.25em] uppercase text-neutral-300">
            Enlist as an early tester
          </h2>

          <p className="text-sm md:text-base text-neutral-200 max-w-3xl">
            First we move with a small unit. If you want MindArsenal to drill
            your habits from day one, send a short message with your name, time
            zone, and current goals.
          </p>

          <div className="space-y-4 text-sm text-neutral-200">
            <div className="flex flex-col sm:flex-row sm:items-center gap-2">
              <span className="w-32 text-xs font-semibold tracking-[0.18em] uppercase text-neutral-400">
                Email
              </span>
              {/* TODO: replace with your real email */}
              <a
                href="mailto:asmo@mindarsenal.com?subject=MindArsenal%20Early%20Tester%20Enlistment"
                className="text-sm text-red-500 hover:text-red-400 underline underline-offset-4"
              >
                asmo@mindarsenal.com
              </a>
            </div>
          </div>

          <p className="text-xs text-neutral-500 max-w-xl">
            No form. No funnel. If you can’t send one disciplined message,
            you’re not ready for this tool.
          </p>

          <div className="pt-6 border-t border-neutral-900 text-[10px] md:text-xs text-neutral-500 flex flex-wrap justify-between gap-2">
            <span>
              © {new Date().getFullYear()} MindArsenal · War on mediocrity
            </span>
            <span>Built for disciplined living.</span>
          </div>
        </div>
      </section>
    </main>
  );
}

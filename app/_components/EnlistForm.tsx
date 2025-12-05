"use client";

import { useState } from "react";

const APPS_SCRIPT_URL =
  "https://script.google.com/macros/s/AKfycbzSWPutBYMf1wAsCjtsoofJ3nw4MO_ALlFxw2TlZrI3htMs2aviWDTsN3wGHwE9ik/exec";


export function EnlistForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [goals, setGoals] = useState("");
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">(
    "idle",
  );
  const [error, setError] = useState<string | null>(null);

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setStatus("loading");
    setError(null);

    const appsPayload = { name, email, goals };
    const telegramPayload = { name, email, goals, timezone: "" };

    try {
      // 1) Google Apps Script (Sheet)
      await fetch(APPS_SCRIPT_URL, {
        method: "POST",
        mode: "no-cors",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(appsPayload),
      });

      // 2) Telegram alert
      fetch("/api/enlist-alert", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(telegramPayload),
      }).catch((err) =>
        console.error("Telegram alert error (enlist page):", err),
      );

      setStatus("success");
      setName("");
      setEmail("");
      setGoals("");
    } catch (err: any) {
      setStatus("error");
      setError(err?.message || "Something went wrong.");
    }
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="grid gap-4 border border-stealth bg-[#050505] p-6 sm:p-7 md:grid-cols-[1.2fr_1.2fr] md:gap-6 md:p-8"
    >
      <div className="space-y-4 md:space-y-5">
        <div className="space-y-2">
          <label className="text-[0.7rem] font-semibold uppercase tracking-[0.18em] text-iron sm:text-xs">
            Name
          </label>
          <input
            type="text"
            required
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="w-full bg-battle border border-iron px-3 py-2 text-sm text-white outline-none focus:border-crimson"
            placeholder="Your name"
          />
        </div>

        <div className="space-y-2">
          <label className="text-[0.7rem] font-semibold uppercase tracking-[0.18em] text-iron sm:text-xs">
            Email
          </label>
          <input
            type="email"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full bg-battle border border-iron px-3 py-2 text-sm text-white outline-none focus:border-crimson"
            placeholder="asmo@mindarsenal.com"
          />
        </div>

        <button
          type="submit"
          disabled={status === "loading"}
          className="font-[var(--font-heading)] inline-flex items-center justify-center px-6 py-2.5 text-[0.7rem] font-semibold uppercase tracking-[0.25em] bg-crimson text-white transition-colors hover:bg-crimson/80 disabled:bg-stealth disabled:text-iron sm:text-xs md:text-sm"
        >
          {status === "loading" ? "ENLISTING..." : "ENLIST NOW"}
        </button>

        {status === "success" && (
          <p className="text-[0.7rem] text-green-400 sm:text-xs">
            Enlisted. MindArsenal will contact you.
          </p>
        )}
        {status === "error" && (
          <p className="text-[0.7rem] text-crimson sm:text-xs">
            Error: {error}
          </p>
        )}
      </div>

      <div className="space-y-3 text-[0.8rem] text-neutral-300 sm:text-sm">
        <p className="text-neutral-100 font-semibold">
          What MindArsenal expects from you:
        </p>
        <ul className="space-y-2">
          <li>• You show up daily — even when tired.</li>
          <li>• You respond honestly to Check-Ins.</li>
          <li>• You confront your weak patterns.</li>
          <li>• This is not therapy. It’s training.</li>
        </ul>

        <div className="mt-4 space-y-2">
          <label className="text-[0.7rem] font-semibold uppercase tracking-[0.18em] text-iron sm:text-xs">
            Your main goal
          </label>
          <textarea
            value={goals}
            onChange={(e) => setGoals(e.target.value)}
            rows={4}
            className="w-full resize-none bg-battle border border-iron px-3 py-2 text-sm text-white outline-none focus:border-crimson"
            placeholder="Example: Fix my sleep, build training discipline, stop wasting evenings..."
          />
        </div>
      </div>
    </form>
  );
}

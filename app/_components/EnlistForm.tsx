"use client";

import { useState } from "react";

const APPS_SCRIPT_URL =
  "https://script.google.com/macros/s/AKfycbyJYNlNoEnGDU6CRCBHvRrhbMbKZDdJZjzE9nk6izmx5Oyy8OPQSW7Hv6ytTuwMdnx3/exec";

export function EnlistForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [goals, setGoals] = useState("");
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">(
    "idle"
  );
  const [error, setError] = useState<string | null>(null);

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setStatus("loading");
    setError(null);

    try {
      const res = await fetch(APPS_SCRIPT_URL, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, email, goals }),
      });

      const data = await res.json().catch(() => ({}));

      if (!res.ok || !data.ok) {
        throw new Error(data.error || "Failed to enlist.");
      }

      setStatus("success");
      setName("");
      setEmail("");
      setGoals("");
    } catch (err: any) {
      setStatus("error");
      setError(err.message || "Something went wrong.");
    }
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="grid gap-4 md:grid-cols-[1.2fr_1.2fr] md:gap-6 bg-neutral-950/40 border border-neutral-800 p-6 md:p-8"
    >
      <div className="space-y-4 md:space-y-5">
        <div className="space-y-2">
          <label className="text-xs font-semibold tracking-[0.18em] uppercase text-neutral-400">
            Name
          </label>
          <input
            type="text"
            required
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="w-full bg-black border border-neutral-800 px-3 py-2 text-sm text-white outline-none focus:border-red-500"
            placeholder="Your name"
          />
        </div>

        <div className="space-y-2">
          <label className="text-xs font-semibold tracking-[0.18em] uppercase text-neutral-400">
            Email
          </label>
          <input
            type="email"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full bg-black border border-neutral-800 px-3 py-2 text-sm text-white outline-none focus:border-red-500"
            placeholder="asmo@mindarsenal.com"
          />
        </div>

        <button
          type="submit"
          disabled={status === "loading"}
          className="inline-flex items-center justify-center px-6 py-2.5 text-xs md:text-sm font-semibold tracking-[0.25em] uppercase bg-red-600 hover:bg-red-500 disabled:bg-neutral-800 disabled:text-neutral-500 transition-colors"
        >
          {status === "loading" ? "ENLISTING..." : "ENLIST NOW"}
        </button>

        {status === "success" && (
          <p className="text-xs text-green-400">
            Enlisted. MindArsenal will contact you.
          </p>
        )}
        {status === "error" && (
          <p className="text-xs text-red-400">Error: {error}</p>
        )}
      </div>

      <div className="space-y-3 text-xs md:text-sm text-neutral-300">
        <p className="font-semibold text-neutral-100">
          What MindArsenal expects from you:
        </p>
        <ul className="space-y-2">
          <li>• You show up daily — even when tired.</li>
          <li>• You respond honestly to Check-Ins.</li>
          <li>• You’re willing to confront your weak patterns.</li>
          <li>• This is not therapy. It’s training.</li>
        </ul>

        <div className="space-y-2 mt-4">
          <label className="text-xs font-semibold tracking-[0.18em] uppercase text-neutral-400">
            Your main goal
          </label>
          <textarea
            value={goals}
            onChange={(e) => setGoals(e.target.value)}
            rows={4}
            className="w-full bg-black border border-neutral-800 px-3 py-2 text-sm text-white outline-none focus:border-red-500 resize-none"
            placeholder="Example: Fix my sleep, build training discipline, stop wasting evenings..."
          />
        </div>
      </div>
    </form>
  );
}

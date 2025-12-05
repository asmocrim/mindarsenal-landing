"use client";

import { useState } from "react";

const APPS_SCRIPT_URL =
  "https://script.google.com/macros/s/AKfycbzSWPutBYMf1wAsCjtsoofJ3nw4MO_ALlFxw2TlzZI73htMs2aviWDTsN3wGHwE9ik/exec";

type EnlistModalProps = {
  onClose: () => void;
};

export default function EnlistModal({ onClose }: EnlistModalProps) {
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setLoading(true);

    const form = e.currentTarget;

    const payload = {
      name: (form.elements.namedItem("name") as HTMLInputElement).value,
      email: (form.elements.namedItem("email") as HTMLInputElement).value,
      timezone: (form.elements.namedItem("timezone") as HTMLInputElement).value,
      goals: (form.elements.namedItem("goals") as HTMLTextAreaElement).value,
    };

    try {
      const res = await fetch(APPS_SCRIPT_URL, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      // For debugging if something goes wrong later
      console.log("Modal enlist response status:", res.status);

      setSuccess(true);

      // reset form
      (form.elements.namedItem("name") as HTMLInputElement).value = "";
      (form.elements.namedItem("email") as HTMLInputElement).value = "";
      (form.elements.namedItem("timezone") as HTMLInputElement).value = "";
      (form.elements.namedItem("goals") as HTMLTextAreaElement).value = "";
    } catch (err) {
      console.error("Enlist submit error (modal):", err);
    } finally {
      setLoading(false);
      setTimeout(() => onClose(), 2000);
    }
  }

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 px-4">
      <div className="w-full max-w-sm bg-[#0b0b0b] border border-stealth p-8 shadow-stealth">
        {!success ? (
          <>
            <h2 className="mb-5 text-xl font-semibold tracking-wide text-white font-[var(--font-heading)] uppercase">
              Enlist Now
            </h2>

            <form onSubmit={handleSubmit} className="space-y-4">
              <input
                name="name"
                placeholder="Name"
                required
                className="w-full bg-battle border border-iron px-3 py-2 text-sm text-white outline-none focus:border-crimson"
              />

              <input
                name="email"
                type="email"
                placeholder="Email"
                required
                className="w-full bg-battle border border-iron px-3 py-2 text-sm text-white outline-none focus:border-crimson"
              />

              <input
                name="timezone"
                placeholder="Time Zone (e.g., CET)"
                required
                className="w-full bg-battle border border-iron px-3 py-2 text-sm text-white outline-none focus:border-crimson"
              />

              <textarea
                name="goals"
                placeholder="Current goals and why you need MindArsenal."
                rows={3}
                className="w-full bg-battle border border-iron px-3 py-2 text-sm text-white outline-none focus:border-crimson"
              />

              <button
                type="submit"
                disabled={loading}
                className="w-full py-2 text-sm font-semibold tracking-[0.25em] uppercase bg-crimson text-white transition hover:bg-crimson/80 glow-crimson shadow-crimson"
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

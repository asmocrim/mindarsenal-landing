"use client";

import { useState } from "react";

const APPS_SCRIPT_URL =
  "https://script.google.com/macros/u/4/s/AKfycbyrkQjSchQ9Ma1jCd10ixvzSUulRJr8D4hKf733fxTir6xCiE2vfbhgVIkpvRFZHMc_/exec";

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

    const name = (form.elements.namedItem("name") as HTMLInputElement).value;
    const email = (form.elements.namedItem("email") as HTMLInputElement).value;
    const timezone = (form.elements.namedItem("timezone") as HTMLInputElement)
      .value;
    const goals = (form.elements.namedItem("goals") as HTMLTextAreaElement)
      .value;

    const appsPayload = { name, email, goals }; // what goes to Sheet
    const telegramPayload = { name, email, timezone, goals }; // what goes to bot

    try {
      // 1) Send to Google Sheet (same shape as before)
      await fetch(APPS_SCRIPT_URL, {
        method: "POST",
        mode: "no-cors",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(appsPayload),
      });

      // 2) Fire Telegram alert (non-blocking)
      fetch("/api/enlist-alert", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(telegramPayload),
      }).catch((err) =>
        console.error("Telegram alert error (modal):", err),
      );

      setSuccess(true);

      // reset form
      (form.elements.namedItem("name") as HTMLInputElement).value = "";
      (form.elements.namedItem("email") as HTMLInputElement).value = "";
      (form.elements.namedItem("timezone") as HTMLInputElement).value = "";
      (form.elements.namedItem("goals") as HTMLTextAreaElement).value = "";
    } catch (err) {
      console.error("Enlist submit error:", err);
    } finally {
      setLoading(false);
      setTimeout(() => onClose(), 2000);
    }
  }

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 px-4">
      <div className="w-full max-w-sm border border-stealth bg-[#0b0b0b] p-8 shadow-stealth">
        {!success ? (
          <>
            <h2 className="mb-5 font-[var(--font-heading)] text-xl font-semibold uppercase tracking-wide text-white">
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
                className="w-full bg-crimson py-2 text-sm font-semibold uppercase tracking-[0.25em] text-white shadow-crimson transition hover:bg-crimson/80 glow-crimson"
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

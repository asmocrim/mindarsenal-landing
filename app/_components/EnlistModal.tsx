"use client";

import { useState } from "react";

export default function EnlistModal({ onClose }: { onClose: () => void }) {
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    setLoading(true);

    const data = {
      name: e.target.name.value,
      email: e.target.email.value,
      timezone: e.target.timezone.value,
      goals: e.target.goals.value,
    };

    await fetch("YOUR_APPS_SCRIPT_EXEC_URL", {
      method: "POST",
      mode: "no-cors",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    });

    setLoading(false);
    setSuccess(true);

    setTimeout(() => onClose(), 2000);
  };

  return (
    <div className="fixed inset-0 bg-black/80 flex items-center justify-center z-50">
      <div className="bg-[#0c0c0c] border border-white/10 p-8 w-[380px]">
        {!success ? (
          <>
            <h2 className="text-xl font-semibold text-white mb-4">
              Enlist Now
            </h2>

            <form onSubmit={handleSubmit} className="space-y-4">
              <input className="w-full bg-black border border-white/20 px-3 py-2" name="name" placeholder="Name" required />
              <input className="w-full bg-black border border-white/20 px-3 py-2" name="email" placeholder="Email" required />
              <input className="w-full bg-black border border-white/20 px-3 py-2" name="timezone" placeholder="Time Zone (e.g. CET)" required />
              <textarea className="w-full bg-black border border-white/20 px-3 py-2" name="goals" placeholder="Current Goals" rows={3} />

              <button
                type="submit"
                className="w-full py-2 bg-red-600 text-white hover:bg-red-500"
              >
                {loading ? "Processing..." : "SUBMIT"}
              </button>
            </form>
          </>
        ) : (
          <p className="text-white text-center">
            Request received. Stay sharp.
          </p>
        )}
      </div>
    </div>
  );
}

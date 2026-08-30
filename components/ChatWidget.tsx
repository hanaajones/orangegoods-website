"use client";

import { useState } from "react";

const GREETING = "Tell us what you need and we'll text you back from our team.";

export function ChatWidget() {
  const [open, setOpen] = useState(false);
  const [message, setMessage] = useState("");
  const [phone, setPhone] = useState("");
  const [name, setName] = useState("");
  const [error, setError] = useState("");
  const [sentTo, setSentTo] = useState("");
  const [sending, setSending] = useState(false);

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (sending) return;

    setSending(true);
    setError("");

    try {
      const response = await fetch("/api/quo-chat", {
        body: JSON.stringify({
          message,
          name,
          phone,
        }),
        headers: {
          "Content-Type": "application/json",
        },
        method: "POST",
      });

      const data = (await response.json()) as {
        error?: string;
        ok?: boolean;
        phone?: string;
      };

      if (!response.ok || !data.ok) {
        throw new Error(data.error || "We could not start the text thread.");
      }

      setSentTo(data.phone ?? phone);
      setMessage("");
      setPhone("");
      setName("");
    } catch (submitError) {
      setError(submitError instanceof Error ? submitError.message : "We could not start the text thread.");
    } finally {
      setSending(false);
    }
  }

  const successState = Boolean(sentTo);

  return (
    <>
      {open && (
        <div
          className="fixed bottom-36 right-4 z-[60] flex w-[min(360px,calc(100vw-2rem))] flex-col overflow-hidden rounded-2xl shadow-2xl md:bottom-44"
          style={{ border: "3px solid #FF4200", maxHeight: "560px" }}
        >
          <div className="flex items-center justify-between bg-[#FF4200] px-4 py-3">
            <div className="flex items-center gap-3">
              <div className="flex h-8 w-8 items-center justify-center rounded-full bg-white/20 text-sm font-bold text-white">
                OG
              </div>
              <div>
                <p className="text-xs font-bold text-white" style={{ fontFamily: "var(--font-display)" }}>
                  ORANGE GOODS
                </p>
                <p className="text-[10px] text-white/70">Chat here. We reply by text.</p>
              </div>
            </div>
            <button
              onClick={() => setOpen(false)}
              className="text-lg leading-none text-white/70 transition hover:text-white"
              aria-label="Close text widget"
              type="button"
            >
              ✕
            </button>
          </div>

          <div className="flex-1 overflow-y-auto bg-white px-4 py-4">
            <div className="mb-4 flex justify-start">
              <div className="max-w-[88%] rounded-2xl rounded-bl-sm bg-[#F3EFE7] px-4 py-2.5 text-sm leading-5 text-[#1C1C1C]">
                {GREETING}
              </div>
            </div>

            {successState ? (
              <div className="rounded-[1.5rem] border border-[#0B32A0]/15 bg-[#F7F4ED] p-4 text-[#1C1C1C]">
                <p className="text-sm font-semibold text-[#0B32A0]">Thanks. Your message is in.</p>
                <p className="mt-2 text-sm leading-6">
                  Our team will text you shortly at <span className="font-semibold">{sentTo}</span>.
                </p>
                <button
                  type="button"
                  onClick={() => {
                    setSentTo("");
                    setError("");
                  }}
                  className="mt-4 inline-flex rounded-full border border-[#0B32A0]/20 px-4 py-2 text-xs font-semibold uppercase tracking-[0.12em] text-[#0B32A0] transition hover:border-[#FF4200] hover:text-[#FF4200]"
                >
                  Start another message
                </button>
              </div>
            ) : (
              <form className="space-y-3" onSubmit={handleSubmit}>
                <label className="block">
                  <span className="mb-1.5 block text-[11px] font-semibold uppercase tracking-[0.14em] text-[#1C1C1C]/60">
                    Your message
                  </span>
                  <textarea
                    value={message}
                    onChange={(event) => setMessage(event.target.value)}
                    placeholder="Need hats for a launch next month..."
                    rows={4}
                    className="w-full resize-none rounded-[1.25rem] border border-black/15 bg-[#F3EFE7] px-4 py-3 text-sm text-[#1C1C1C] outline-none focus:border-[#FF4200]"
                    required
                  />
                </label>

                <label className="block">
                  <span className="mb-1.5 block text-[11px] font-semibold uppercase tracking-[0.14em] text-[#1C1C1C]/60">
                    Mobile number
                  </span>
                  <input
                    type="tel"
                    value={phone}
                    onChange={(event) => setPhone(event.target.value)}
                    placeholder="(555) 555-5555"
                    className="w-full rounded-full border border-black/15 bg-[#F3EFE7] px-4 py-2.5 text-sm text-[#1C1C1C] outline-none focus:border-[#FF4200]"
                    required
                  />
                </label>

                <label className="block">
                  <span className="mb-1.5 block text-[11px] font-semibold uppercase tracking-[0.14em] text-[#1C1C1C]/60">
                    First name
                    <span className="ml-2 text-[10px] font-normal tracking-normal text-[#1C1C1C]/45">optional</span>
                  </span>
                  <input
                    type="text"
                    value={name}
                    onChange={(event) => setName(event.target.value)}
                    placeholder="Easton"
                    className="w-full rounded-full border border-black/15 bg-[#F3EFE7] px-4 py-2.5 text-sm text-[#1C1C1C] outline-none focus:border-[#FF4200]"
                  />
                </label>

                {error ? <p className="text-sm text-[#c63d16]">{error}</p> : null}

                <button
                  type="submit"
                  disabled={sending}
                  className="flex w-full items-center justify-center rounded-full bg-[#FF4200] px-4 py-3 text-sm font-semibold uppercase tracking-[0.12em] text-white transition hover:bg-[#d73b05] disabled:cursor-not-allowed disabled:opacity-70"
                >
                  {sending ? "Starting..." : "Start Text"}
                </button>

                <p className="text-center text-[11px] leading-5 text-[#1C1C1C]/55">
                  You stay on this page. Our team gets the thread in Quo and replies by text.
                </p>
              </form>
            )}
          </div>
        </div>
      )}

      <button
        onClick={() => setOpen((current) => !current)}
        className="fixed bottom-20 right-5 z-[60] flex h-14 w-14 items-center justify-center rounded-full bg-[#FF4200] shadow-lg ring-2 ring-transparent transition-all hover:bg-[#d73b05] hover:ring-white md:bottom-24"
        aria-label={open ? "Close text widget" : "Open text widget"}
        type="button"
      >
        {open ? (
          <span className="text-xl leading-none text-white">✕</span>
        ) : (
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M8 10h.01M12 10h.01M16 10h.01M21 15a2 2 0 01-2 2H7l-4 4V5a2 2 0 012-2h14a2 2 0 012 2v10z" />
          </svg>
        )}
      </button>
    </>
  );
}

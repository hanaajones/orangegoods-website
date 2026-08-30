"use client";

import { useState } from "react";

const INTRO = "Question-first web chat. No phone required up front.";

export function HubSpotCompareWidget() {
  const [open, setOpen] = useState(false);
  const [message, setMessage] = useState("");
  const [sent, setSent] = useState(false);

  return (
    <>
      {open ? (
        <div className="fixed bottom-24 left-5 z-[60] hidden w-[min(360px,calc(100vw-2rem))] overflow-hidden rounded-2xl border border-[#0B32A0]/15 bg-white shadow-[0_18px_60px_rgba(11,50,160,0.18)] md:flex md:flex-col">
          <div className="border-b border-[#0B32A0]/10 bg-white px-4 py-3">
            <div className="flex items-start justify-between gap-3">
              <div>
                <p className="text-[11px] font-semibold uppercase tracking-[0.14em] text-[#0B32A0]/55">
                  Compare Mode
                </p>
                <p className="mt-1 text-sm font-semibold text-[#0B32A0]">HubSpot-style web chat</p>
                <p className="mt-1 text-xs text-[#1C1C1C]/55">{INTRO}</p>
              </div>
              <button
                type="button"
                onClick={() => setOpen(false)}
                className="text-lg leading-none text-[#0B32A0]/45 transition hover:text-[#0B32A0]"
                aria-label="Close HubSpot preview widget"
              >
                ✕
              </button>
            </div>
          </div>

          <div className="flex flex-col gap-4 bg-[#F4F7FB] px-4 py-4">
            <div className="max-w-[85%] rounded-2xl rounded-bl-sm bg-white px-4 py-3 text-sm leading-6 text-[#1C1C1C] shadow-sm">
              Hi there. What are you looking to make?
            </div>

            {sent ? (
              <div className="rounded-2xl bg-white px-4 py-4 text-sm leading-6 text-[#1C1C1C] shadow-sm">
                <p className="font-semibold text-[#0B32A0]">Preview sent.</p>
                <p className="mt-2">
                  This is the lower-friction webchat version: message first, contact details later if needed.
                </p>
                <button
                  type="button"
                  onClick={() => {
                    setSent(false);
                    setMessage("");
                  }}
                  className="mt-4 inline-flex rounded-full border border-[#0B32A0]/20 px-4 py-2 text-xs font-semibold uppercase tracking-[0.12em] text-[#0B32A0] transition hover:border-[#FF4200] hover:text-[#FF4200]"
                >
                  Try again
                </button>
              </div>
            ) : (
              <form
                className="rounded-2xl bg-white p-3 shadow-sm"
                onSubmit={(event) => {
                  event.preventDefault();
                  if (!message.trim()) return;
                  setSent(true);
                }}
              >
                <textarea
                  value={message}
                  onChange={(event) => setMessage(event.target.value)}
                  placeholder="We need hats and tees for a September launch..."
                  rows={4}
                  className="w-full resize-none rounded-xl border border-[#0B32A0]/12 bg-[#F8FAFD] px-3 py-3 text-sm text-[#1C1C1C] outline-none focus:border-[#0B32A0]"
                />
                <div className="mt-3 flex items-center justify-between gap-3">
                  <p className="text-[11px] leading-5 text-[#1C1C1C]/45">Website messenger feel. Reply stays in the chat tool.</p>
                  <button
                    type="submit"
                    className="inline-flex shrink-0 items-center justify-center rounded-full bg-[#0B32A0] px-4 py-2 text-xs font-semibold uppercase tracking-[0.12em] text-white transition hover:bg-[#081E6F]"
                  >
                    Send
                  </button>
                </div>
              </form>
            )}
          </div>
        </div>
      ) : null}

      <button
        type="button"
        onClick={() => setOpen((current) => !current)}
        className="fixed bottom-5 left-5 z-[60] hidden h-14 items-center justify-center rounded-full border border-[#0B32A0]/15 bg-white px-5 text-sm font-semibold text-[#0B32A0] shadow-[0_18px_60px_rgba(11,50,160,0.18)] transition hover:-translate-y-0.5 hover:border-[#0B32A0]/30 md:inline-flex"
        aria-label={open ? "Close HubSpot preview widget" : "Open HubSpot preview widget"}
      >
        HubSpot
      </button>
    </>
  );
}

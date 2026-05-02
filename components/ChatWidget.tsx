"use client";

import { useEffect, useRef, useState } from "react";

interface Message {
  from: "user" | "bot";
  text: string;
}

const PHONE = "2133764663";
const GREETING = "Hey! 👋 What can we help you with today? Drop us a message and we'll text you back.";

export function ChatWidget() {
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([{ from: "bot", text: GREETING }]);
  const [input, setInput] = useState("");
  const bottomRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (open) bottomRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages, open]);

  function send() {
    const text = input.trim();
    if (!text) return;

    setMessages((m) => [
      ...m,
      { from: "user", text },
      {
        from: "bot",
        text: "Got it! Tap the button below to send this to us via text — we'll reply to your phone.",
      },
    ]);
    setInput("");

    // Option A: open native SMS app with pre-filled message
    const smsUrl = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent)
      ? `sms:${PHONE}&body=${encodeURIComponent(text)}`
      : `sms:${PHONE}?body=${encodeURIComponent(text)}`;

    setTimeout(() => {
      window.open(smsUrl, "_self");
    }, 400);
  }

  function handleKey(e: React.KeyboardEvent) {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      send();
    }
  }

  return (
    <>
      {/* Chat panel */}
      {open && (
        <div
          className="fixed bottom-36 right-5 z-[60] flex w-[340px] flex-col overflow-hidden rounded-2xl shadow-2xl md:bottom-24"
          style={{ border: "3px solid #FF4200", maxHeight: "480px" }}
        >
          {/* Header */}
          <div className="flex items-center justify-between bg-[#FF4200] px-4 py-3">
            <div className="flex items-center gap-3">
              <div className="flex h-8 w-8 items-center justify-center rounded-full bg-white/20 text-sm font-bold text-white">
                OG
              </div>
              <div>
                <p className="text-xs font-bold text-white" style={{ fontFamily: "var(--font-display)" }}>
                  ORANGE GOODS
                </p>
                <p className="text-[10px] text-white/70">Replies via text — usually within minutes</p>
              </div>
            </div>
            <button
              onClick={() => setOpen(false)}
              className="text-lg leading-none text-white/70 transition hover:text-white"
              aria-label="Close chat"
            >
              ✕
            </button>
          </div>

          {/* Messages */}
          <div
            className="flex-1 space-y-3 overflow-y-auto bg-white px-4 py-4"
            style={{ minHeight: "260px", maxHeight: "320px" }}
          >
            {messages.map((msg, i) => (
              <div key={i} className={`flex ${msg.from === "user" ? "justify-end" : "justify-start"}`}>
                <div
                  className={`max-w-[80%] rounded-2xl px-4 py-2.5 text-sm leading-5 ${
                    msg.from === "user"
                      ? "rounded-br-sm bg-[#FF4200] text-white"
                      : "rounded-bl-sm bg-[#F3EFE7] text-[#1C1C1C]"
                  }`}
                >
                  {msg.text}
                </div>
              </div>
            ))}
            <div ref={bottomRef} />
          </div>

          {/* Input */}
          <div className="flex items-center gap-2 border-t border-black/10 bg-white px-3 py-3">
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={handleKey}
              placeholder="Type a message…"
              className="flex-1 rounded-full border border-black/15 bg-[#F3EFE7] px-4 py-2 text-sm text-[#1C1C1C] outline-none focus:border-[#FF4200]"
            />
            <button
              onClick={send}
              className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-[#FF4200] transition hover:bg-[#d73b05]"
              aria-label="Send"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M5 12h14M12 5l7 7-7 7" />
              </svg>
            </button>
          </div>

          {/* Desktop fallback */}
          <div className="border-t border-black/10 bg-[#F3EFE7] px-4 py-2 text-center">
            <a
              href={`sms:${PHONE}`}
              className="text-xs text-[#0B32A0] transition hover:text-[#FF4200]"
            >
              Or text us directly: (213) 376-4663
            </a>
          </div>
        </div>
      )}

      {/* Toggle button */}
      <button
        onClick={() => setOpen((o) => !o)}
        className="fixed bottom-20 right-5 z-[60] flex h-14 w-14 items-center justify-center rounded-full bg-[#FF4200] shadow-lg ring-2 ring-transparent transition-all hover:bg-[#d73b05] hover:ring-white md:bottom-5"
        aria-label={open ? "Close chat" : "Chat with us"}
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

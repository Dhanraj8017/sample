import { useEffect, useState } from "react";
import { motion } from "framer-motion";

export default function Loader({ onDone }: { onDone: () => void }) {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    let raf: number;
    const start = performance.now();
    const DURATION = 2100;
    const tick = (now: number) => {
      const raw = Math.min((now - start) / DURATION, 1);
      // ease with a little "settle" near the end like liquid
      const eased = raw < 0.85 ? raw * 0.92 : 0.78 + (raw - 0.85) * 1.47;
      setProgress(Math.min(Math.round(eased * 100), 100));
      if (raw < 1) raf = requestAnimationFrame(tick);
      else setTimeout(onDone, 500);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [onDone]);

  const letters = "BLOOM & BREW".split("");

  return (
    <motion.div
      className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-espresso text-cream"
      exit={{ y: "-100%", borderBottomLeftRadius: "50% 8%", borderBottomRightRadius: "50% 8%" }}
      transition={{ duration: 0.9, ease: [0.76, 0, 0.24, 1] }}
    >
      {/* soft radial glow */}
      <div className="pointer-events-none absolute left-1/2 top-1/2 h-[70vmin] w-[70vmin] -translate-x-1/2 -translate-y-1/2 rounded-full bg-rosewood/15 blur-3xl animate-pulse-soft" />

      {/* filling cup */}
      <div className="relative">
        <svg width="150" height="150" viewBox="0 0 120 120" fill="none">
          <defs>
            <clipPath id="cup-clip">
              <path d="M28 34h56l-5.2 44a12 12 0 0 1-11.9 10.7H45.1A12 12 0 0 1 33.2 78L28 34Z" />
            </clipPath>
          </defs>
          {/* liquid */}
          <g clipPath="url(#cup-clip)">
            <motion.rect
              x="20"
              width="72"
              height="70"
              fill="#c68e5e"
              initial={{ y: 96 }}
              animate={{ y: 96 - (progress / 100) * 62 }}
              transition={{ ease: "easeOut", duration: 0.25 }}
            />
            <motion.rect
              x="20"
              width="72"
              height="70"
              fill="#8a5c3b"
              opacity="0.55"
              initial={{ y: 100 }}
              animate={{ y: 100 - (progress / 100) * 56 }}
              transition={{ ease: "easeOut", duration: 0.3 }}
            />
          </g>
          {/* cup outline */}
          <path
            d="M28 34h56l-5.2 44a12 12 0 0 1-11.9 10.7H45.1A12 12 0 0 1 33.2 78L28 34Z"
            stroke="#faf4ec"
            strokeWidth="3"
            strokeLinejoin="round"
          />
          <path d="M84 42h7a9 9 0 0 1 0 18h-8.5" stroke="#faf4ec" strokeWidth="3" strokeLinecap="round" />
          {/* saucer */}
          <path d="M22 100h68" stroke="#faf4ec" strokeWidth="3" strokeLinecap="round" />
          {/* steam */}
          <motion.path
            d="M46 24c0-4 5-4 5-8"
            stroke="#efc9c4"
            strokeWidth="3"
            strokeLinecap="round"
            animate={{ opacity: [0, 1, 0], y: [-2, -7] }}
            transition={{ duration: 1.6, repeat: Infinity, ease: "easeOut" }}
          />
          <motion.path
            d="M60 24c0-4 5-4 5-8"
            stroke="#efc9c4"
            strokeWidth="3"
            strokeLinecap="round"
            animate={{ opacity: [0, 1, 0], y: [-2, -7] }}
            transition={{ duration: 1.6, repeat: Infinity, ease: "easeOut", delay: 0.5 }}
          />
        </svg>
      </div>

      {/* wordmark letters */}
      <div className="mt-8 flex overflow-hidden font-display text-xl font-medium tracking-[0.35em] sm:text-2xl">
        {letters.map((l, i) => (
          <motion.span
            key={i}
            initial={{ y: "120%", opacity: 0 }}
            animate={{ y: "0%", opacity: 1 }}
            transition={{ delay: 0.25 + i * 0.05, duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            className={l === "&" ? "text-petal italic" : ""}
          >
            {l === " " ? "\u00A0" : l}
          </motion.span>
        ))}
      </div>

      {/* progress */}
      <div className="mt-6 flex w-56 items-center gap-4">
        <div className="h-px flex-1 overflow-hidden rounded-full bg-cream/20">
          <motion.div
            className="h-full bg-gradient-to-r from-caramel via-petal to-rosewood"
            style={{ width: `${progress}%` }}
          />
        </div>
        <span className="w-12 text-right font-display text-sm tabular-nums text-petal">{progress}%</span>
      </div>

      <p className="mt-3 text-[11px] uppercase tracking-[0.3em] text-cream/40">warming up the machine</p>
    </motion.div>
  );
}

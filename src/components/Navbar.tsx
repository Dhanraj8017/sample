import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Coffee, Menu, X, ArrowUpRight } from "lucide-react";
import { cn } from "../utils/cn";

const LINKS = [
  { label: "Story", href: "#story" },
  { label: "Menu", href: "#menu" },
  { label: "Signatures", href: "#signatures" },
  { label: "Visit", href: "#visit" },
];

export default function Navbar({ ready }: { ready: boolean }) {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <>
      <motion.header
        initial={{ y: -90, opacity: 0 }}
        animate={ready ? { y: 0, opacity: 1 } : {}}
        transition={{ duration: 0.9, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
        className={cn(
          "fixed inset-x-0 top-0 z-50 transition-all duration-500",
          scrolled ? "bg-cream/85 shadow-[0_8px_30px_rgba(54,38,27,0.08)] backdrop-blur-xl" : "bg-transparent"
        )}
      >
        <nav className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4 sm:px-8">
          {/* logo */}
          <a href="#top" className="group flex items-center gap-2.5">
            <span className="grid h-10 w-10 place-items-center rounded-full bg-espresso text-petal transition-all duration-500 group-hover:rotate-[25deg] group-hover:bg-rosewood">
              <Coffee size={18} strokeWidth={2.2} />
            </span>
            <span className="font-display text-lg font-semibold tracking-tight text-espresso">
              Bloom <span className="italic text-rosewood">&</span> Brew
            </span>
          </a>

          {/* desktop links */}
          <ul className="hidden items-center gap-9 md:flex">
            {LINKS.map((l) => (
              <li key={l.label}>
                <a
                  href={l.href}
                  className="group relative text-[13px] font-semibold uppercase tracking-[0.18em] text-cocoa/80 transition-colors hover:text-espresso"
                >
                  {l.label}
                  <span className="absolute -bottom-1.5 left-0 h-[2px] w-full origin-right scale-x-0 rounded-full bg-rosewood transition-transform duration-400 ease-out group-hover:origin-left group-hover:scale-x-100" />
                </a>
              </li>
            ))}
          </ul>

          <div className="flex items-center gap-3">
            <a
              href="#visit"
              className="group hidden items-center gap-2 rounded-full bg-espresso px-5 py-2.5 text-[13px] font-semibold uppercase tracking-[0.14em] text-cream transition-all duration-300 hover:bg-rosewood hover:shadow-[0_10px_25px_rgba(181,101,87,0.4)] sm:inline-flex"
            >
              Order ahead
              <ArrowUpRight size={15} className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </a>
            <button
              onClick={() => setOpen(true)}
              aria-label="Open menu"
              className="grid h-10 w-10 place-items-center rounded-full border border-cocoa/20 text-espresso transition-colors hover:bg-blush md:hidden"
            >
              <Menu size={19} />
            </button>
          </div>
        </nav>
      </motion.header>

      {/* mobile overlay */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ clipPath: "circle(0% at 92% 6%)" }}
            animate={{ clipPath: "circle(150% at 92% 6%)" }}
            exit={{ clipPath: "circle(0% at 92% 6%)" }}
            transition={{ duration: 0.7, ease: [0.76, 0, 0.24, 1] }}
            className="fixed inset-0 z-[80] flex flex-col bg-espresso text-cream"
          >
            <div className="flex items-center justify-between px-5 py-4">
              <span className="font-display text-lg font-semibold">
                Bloom <span className="italic text-petal">&</span> Brew
              </span>
              <button
                onClick={() => setOpen(false)}
                aria-label="Close menu"
                className="grid h-10 w-10 place-items-center rounded-full border border-cream/25 transition-colors hover:bg-cream/10"
              >
                <X size={19} />
              </button>
            </div>
            <nav className="flex flex-1 flex-col items-start justify-center gap-2 px-8">
              {LINKS.map((l, i) => (
                <motion.a
                  key={l.label}
                  href={l.href}
                  onClick={() => setOpen(false)}
                  initial={{ x: -40, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ delay: 0.25 + i * 0.08, duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
                  className="group flex items-baseline gap-4 font-display text-5xl font-medium text-cream transition-colors hover:text-petal"
                >
                  <span className="text-sm text-rosewood">0{i + 1}</span>
                  <span className="transition-transform duration-300 group-hover:translate-x-2">{l.label}</span>
                </motion.a>
              ))}
            </nav>
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.7 }}
              className="px-8 pb-10 text-xs uppercase tracking-[0.3em] text-cream/40"
            >
              Open daily · 7:00 — 18:00
            </motion.p>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

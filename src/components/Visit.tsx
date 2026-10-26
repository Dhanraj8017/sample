import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ArrowUpRight, Check, Clock, MapPin, Phone } from "lucide-react";
import { CircularText, Reveal, SectionTag, WordRise } from "./ui";

const HOURS = [
  { d: "Monday — Friday", h: "7:00 — 18:00" },
  { d: "Saturday", h: "8:00 — 18:00" },
  { d: "Sunday", h: "8:00 — 16:00" },
];

const inputCls =
  "w-full rounded-xl border border-cocoa/15 bg-cream px-4 py-3 text-sm text-espresso placeholder:text-cocoa/40 outline-none transition-all focus:border-rosewood focus:ring-2 focus:ring-rosewood/20";

export default function Visit() {
  const [sent, setSent] = useState(false);

  return (
    <section id="visit" className="relative px-3 pb-24 sm:px-5 sm:pb-32">
      <div className="relative mx-auto max-w-7xl overflow-hidden rounded-[2.5rem] bg-espresso py-20 text-cream sm:rounded-[3.5rem] sm:py-28">
        {/* glows + bg word */}
        <div className="pointer-events-none absolute -right-32 -top-32 h-96 w-96 rounded-full bg-rosewood/25 blur-3xl" />
        <div className="pointer-events-none absolute -bottom-40 -left-24 h-96 w-96 rounded-full bg-caramel/20 blur-3xl" />
        <span
          aria-hidden
          className="pointer-events-none absolute bottom-4 right-8 select-none font-display text-[18vw] font-semibold leading-none text-cream/[0.04]"
        >
          OPEN
        </span>

        <div className="relative grid gap-16 px-6 sm:px-12 lg:grid-cols-2 lg:px-16">
          {/* info */}
          <div>
            <Reveal>
              <SectionTag dark>Visit us</SectionTag>
            </Reveal>
            <h2 className="mt-6 font-display text-4xl font-medium leading-[1.05] tracking-tight sm:text-5xl lg:text-6xl">
              <WordRise text="Come for the coffee," />{" "}
              <span className="italic font-light text-petal">
                <WordRise text="stay for the light." delay={0.3} />
              </span>
            </h2>

            <Reveal delay={0.2}>
              <div className="mt-10 space-y-5 text-cream/75">
                <p className="flex items-start gap-4">
                  <span className="mt-0.5 grid h-10 w-10 shrink-0 place-items-center rounded-xl bg-cream/10 text-petal">
                    <MapPin size={17} />
                  </span>
                  <span>
                    14 Rosewater Lane, Old Mill District
                    <br />
                    Portland, OR 97209
                  </span>
                </p>
                <p className="flex items-start gap-4">
                  <span className="mt-0.5 grid h-10 w-10 shrink-0 place-items-center rounded-xl bg-cream/10 text-petal">
                    <Phone size={17} />
                  </span>
                  <span>+1 (503) 555-0174 — call for whole beans</span>
                </p>
              </div>
            </Reveal>

            <Reveal delay={0.3}>
              <div className="mt-10 max-w-md rounded-3xl border border-cream/12 bg-cream/[0.06] p-6 backdrop-blur-sm">
                <p className="flex items-center gap-2.5 text-xs font-bold uppercase tracking-[0.24em] text-petal">
                  <Clock size={14} /> Opening hours
                </p>
                <ul className="mt-4 space-y-3">
                  {HOURS.map((r) => (
                    <li key={r.d} className="flex items-baseline justify-between gap-4 text-sm">
                      <span className="text-cream/70">{r.d}</span>
                      <span className="mx-1 flex-1 border-b border-dotted border-cream/20" />
                      <span className="font-display text-base font-medium text-cream">{r.h}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>

            <Reveal delay={0.4}>
              <a
                href="#top"
                className="group mt-9 inline-flex items-center gap-3 rounded-full bg-petal px-7 py-4 text-sm font-semibold uppercase tracking-[0.14em] text-espresso transition-all duration-300 hover:-translate-y-0.5 hover:bg-cream hover:shadow-[0_18px_35px_rgba(239,201,196,0.3)]"
              >
                Get directions
                <ArrowUpRight size={16} className="transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1" />
              </a>
            </Reveal>
          </div>

          {/* reservation card */}
          <div className="relative">
            <CircularText
              text="FIRST VISIT? THE COFFEE IS ON US · "
              size={120}
              className="absolute -top-14 right-2 z-20 text-petal"
            />
            <Reveal delay={0.15}>
              <div className="relative rounded-[2rem] bg-cream p-7 text-cocoa shadow-2xl sm:p-9">
                <AnimatePresence mode="wait">
                  {sent ? (
                    <motion.div
                      key="done"
                      initial={{ opacity: 0, scale: 0.9 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
                      className="flex min-h-[26rem] flex-col items-center justify-center text-center"
                    >
                      <motion.span
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        transition={{ type: "spring", stiffness: 260, damping: 16, delay: 0.15 }}
                        className="grid h-20 w-20 place-items-center rounded-full bg-blush text-rosewood"
                      >
                        <Check size={34} strokeWidth={2.5} />
                      </motion.span>
                      <h3 className="mt-7 font-display text-3xl font-semibold text-espresso">
                        Table reserved.
                      </h3>
                      <p className="mt-3 max-w-xs text-sm leading-relaxed text-cocoa/65">
                        We'll keep the pink chairs in the sun for you. A
                        confirmation is on its way to your inbox.
                      </p>
                      <button
                        onClick={() => setSent(false)}
                        className="mt-8 text-xs font-bold uppercase tracking-[0.2em] text-rosewood underline underline-offset-4 hover:text-espresso"
                      >
                        Book another
                      </button>
                    </motion.div>
                  ) : (
                    <motion.form
                      key="form"
                      exit={{ opacity: 0, y: -16 }}
                      transition={{ duration: 0.3 }}
                      onSubmit={(e) => {
                        e.preventDefault();
                        setSent(true);
                      }}
                    >
                      <h3 className="font-display text-3xl font-semibold text-espresso">Book a table</h3>
                      <p className="mt-2 text-sm text-cocoa/60">
                        Weekends fill fast — grab your spot by the window.
                      </p>
                      <div className="mt-7 grid gap-4 sm:grid-cols-2">
                        <div className="sm:col-span-2">
                          <input required placeholder="Your name" className={inputCls} />
                        </div>
                        <input required type="date" className={inputCls} />
                        <select className={inputCls} defaultValue="2">
                          {[1, 2, 3, 4, 5, 6].map((n) => (
                            <option key={n} value={n}>
                              {n} {n === 1 ? "guest" : "guests"}
                            </option>
                          ))}
                        </select>
                        <select className={inputCls} defaultValue="Morning (7–11)">
                          <option>Morning (7–11)</option>
                          <option>Midday (11–14)</option>
                          <option>Afternoon (14–18)</option>
                        </select>
                        <input placeholder="Occasion? (optional)" className={inputCls} />
                      </div>
                      <button
                        type="submit"
                        className="group mt-6 flex w-full items-center justify-center gap-2.5 rounded-full bg-espresso py-4 text-sm font-bold uppercase tracking-[0.16em] text-cream transition-all duration-300 hover:bg-rosewood hover:shadow-[0_15px_30px_rgba(181,101,87,0.4)]"
                      >
                        Reserve my spot
                        <ArrowUpRight size={16} className="transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1" />
                      </button>
                      <p className="mt-4 text-center text-[11px] uppercase tracking-[0.2em] text-cocoa/45">
                        First-timers get a coffee on the house
                      </p>
                    </motion.form>
                  )}
                </AnimatePresence>
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}

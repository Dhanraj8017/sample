import { motion } from "framer-motion";
import { ArrowDown, ArrowUpRight, Flame, Milk, Star } from "lucide-react";
import { CircularText, Counter } from "./ui";

const ease = [0.22, 1, 0.36, 1] as const;

function HeadlineWord({ children, delay }: { children: string; delay: number }) {
  return (
    <span className="inline-block overflow-hidden pb-[0.1em] -mb-[0.1em] align-bottom">
      <motion.span
        className="inline-block will-change-transform"
        initial={{ y: "112%" }}
        animate={{ y: "0%" }}
        transition={{ duration: 1, delay, ease }}
      >
        {children}
      </motion.span>
    </span>
  );
}

export default function Hero({ ready }: { ready: boolean }) {
  return (
    <section id="top" className="relative overflow-hidden pt-36 pb-16 sm:pt-40 lg:pb-24">
      {/* ambient blobs */}
      <div className="pointer-events-none absolute -left-40 top-24 h-[34rem] w-[34rem] rounded-full bg-blush blur-3xl" />
      <div className="pointer-events-none absolute -right-52 -top-24 h-[38rem] w-[38rem] rounded-full bg-latte/70 blur-3xl" />
      <div className="pointer-events-none absolute bottom-0 left-1/3 h-72 w-72 rounded-full bg-petal/50 blur-3xl" />

      {/* floating bean accents */}
      <motion.svg
        viewBox="0 0 40 40"
        className="pointer-events-none absolute left-[8%] top-[30%] hidden w-10 text-caramel/50 md:block animate-float"
        fill="currentColor"
      >
        <ellipse cx="20" cy="20" rx="12" ry="18" transform="rotate(25 20 20)" />
        <path d="M14 8c8 8 8 16 4 25" stroke="#faf4ec" strokeWidth="2.4" fill="none" transform="rotate(25 20 20)" />
      </motion.svg>
      <motion.svg
        viewBox="0 0 40 40"
        className="pointer-events-none absolute bottom-[18%] right-[38%] hidden w-7 text-rose/60 md:block animate-float-late"
        fill="currentColor"
      >
        <ellipse cx="20" cy="20" rx="12" ry="18" transform="rotate(-30 20 20)" />
        <path d="M14 8c8 8 8 16 4 25" stroke="#faf4ec" strokeWidth="2.4" fill="none" transform="rotate(-30 20 20)" />
      </motion.svg>

      <div className="relative mx-auto grid max-w-7xl items-center gap-16 px-5 sm:px-8 lg:grid-cols-12 lg:gap-8">
        {/* ——— copy ——— */}
        <div className="lg:col-span-7">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={ready ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.25, ease }}
          >
            <span className="inline-flex items-center gap-2.5 rounded-full border border-cocoa/15 bg-cream/60 px-4 py-1.5 text-[11px] font-semibold uppercase tracking-[0.24em] text-rosewood backdrop-blur">
              <span className="h-1.5 w-1.5 rounded-full bg-rosewood animate-pulse-soft" />
              Specialty coffee house · est. 2017
            </span>
          </motion.div>

          {ready && (
            <h1 className="mt-7 font-display text-[clamp(3rem,9.2vw,7rem)] font-medium leading-[0.98] tracking-[-0.02em] text-espresso">
              <HeadlineWord delay={0.35}>Slow</HeadlineWord>{" "}
              <HeadlineWord delay={0.44}>mornings,</HeadlineWord>
              <br />
              <span className="italic font-light text-rosewood">
                <HeadlineWord delay={0.56}>soft</HeadlineWord>{" "}
                <HeadlineWord delay={0.64}>light,</HeadlineWord>
              </span>{" "}
              <HeadlineWord delay={0.74}>bold</HeadlineWord>
              <span className="text-outline ml-3 sm:ml-5">
                <HeadlineWord delay={0.84}>coffee.</HeadlineWord>
              </span>
            </h1>
          )}

          <motion.p
            initial={{ opacity: 0, y: 24 }}
            animate={ready ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 1.0, ease }}
            className="mt-7 max-w-md text-base leading-relaxed text-cocoa/70 sm:text-lg"
          >
            A sun-washed corner café pouring single-origin espresso, rose-kissed
            lattes and pastries baked before the city wakes.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={ready ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 1.15, ease }}
            className="mt-9 flex flex-wrap items-center gap-5"
          >
            <a
              href="#menu"
              className="group inline-flex items-center gap-3 rounded-full bg-espresso px-7 py-4 text-sm font-semibold uppercase tracking-[0.14em] text-cream transition-all duration-300 hover:-translate-y-0.5 hover:bg-rosewood hover:shadow-[0_18px_35px_rgba(181,101,87,0.35)]"
            >
              Explore the menu
              <ArrowDown size={16} className="transition-transform duration-300 group-hover:translate-y-1" />
            </a>
            <a
              href="#visit"
              className="group inline-flex items-center gap-2 text-sm font-semibold uppercase tracking-[0.14em] text-espresso"
            >
              <span className="border-b-2 border-rose/50 pb-1 transition-colors group-hover:border-rosewood">
                Find the café
              </span>
              <ArrowUpRight size={16} className="transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1" />
            </a>
          </motion.div>

          {/* stats */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={ready ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 1.3, ease }}
            className="mt-12 flex flex-wrap items-center gap-x-10 gap-y-6 border-t border-cocoa/10 pt-8"
          >
            <div>
              <p className="font-display text-3xl font-semibold text-espresso">
                <Counter to={12} />
              </p>
              <p className="mt-1 text-[11px] uppercase tracking-[0.22em] text-cocoa/55">Single origins</p>
            </div>
            <div>
              <p className="font-display text-3xl font-semibold text-espresso">
                <Counter to={48} suffix="h" />
              </p>
              <p className="mt-1 text-[11px] uppercase tracking-[0.22em] text-cocoa/55">Roast to cup</p>
            </div>
            <div>
              <p className="flex items-center gap-1.5 font-display text-3xl font-semibold text-espresso">
                4.9 <Star size={18} className="fill-caramel text-caramel" />
              </p>
              <p className="mt-1 text-[11px] uppercase tracking-[0.22em] text-cocoa/55">2.4k reviews</p>
            </div>
          </motion.div>
        </div>

        {/* ——— visual ——— */}
        <div className="relative lg:col-span-5">
          <motion.div
            initial={{ opacity: 0, scale: 0.85, rotate: -6 }}
            animate={ready ? { opacity: 1, scale: 1, rotate: 0 } : {}}
            transition={{ duration: 1.2, delay: 0.5, ease }}
            className="relative mx-auto aspect-square w-full max-w-[30rem]"
          >
            {/* rotating dashed ring */}
            <div className="absolute -inset-5 rounded-full border-2 border-dashed border-cocoa/25 animate-spin-slow" />
            {/* circular text */}
            <CircularText
              text="FRESHLY ROASTED · SINGLE ORIGIN · BLOOM & BREW · "
              size={120}
              className="absolute -right-4 -top-4 z-20 text-espresso sm:-right-8 sm:-top-8"
            />

            {/* cup image */}
            <div className="absolute inset-0 overflow-hidden rounded-full shadow-[0_40px_80px_-20px_rgba(54,38,27,0.45)] ring-8 ring-cream">
              <motion.img
                src={`${import.meta.env.BASE_URL}images/hero-latte.jpg`}
                alt="Rose latte with rosetta art"
                className="h-full w-full object-cover"
                initial={{ scale: 1.25 }}
                animate={{ scale: 1.05 }}
                transition={{ duration: 2.4, delay: 0.5, ease }}
              />
            </div>

            {/* steam wisps */}
            <div className="pointer-events-none absolute -top-6 left-1/2 z-20 -translate-x-1/2">
              <span className="steam-wisp left-0" />
              <span className="steam-wisp left-5" style={{ animationDelay: "0.9s" }} />
              <span className="steam-wisp -left-5" style={{ animationDelay: "1.7s" }} />
            </div>

            {/* floating badges */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={ready ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8, delay: 1.35, ease }}
              className="absolute -left-6 top-16 z-20 sm:-left-14"
            >
              <div className="flex items-center gap-3 rounded-2xl border border-cocoa/10 bg-cream/80 px-4 py-3 shadow-lg backdrop-blur-xl animate-float">
                <span className="grid h-9 w-9 place-items-center rounded-full bg-petal text-espresso">
                  <Milk size={16} />
                </span>
                <div>
                  <p className="text-xs font-bold text-espresso">Oat · almond · dairy</p>
                  <p className="text-[10px] uppercase tracking-widest text-cocoa/50">milks, your way</p>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={ready ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8, delay: 1.55, ease }}
              className="absolute -right-4 bottom-14 z-20 sm:-right-12"
            >
              <div className="flex items-center gap-3 rounded-2xl border border-cocoa/10 bg-cream/80 px-4 py-3 shadow-lg backdrop-blur-xl animate-float-late">
                <span className="grid h-9 w-9 place-items-center rounded-full bg-rosewood text-cream">
                  <Flame size={16} />
                </span>
                <div>
                  <p className="text-xs font-bold text-espresso">Roasted in-house</p>
                  <p className="text-[10px] uppercase tracking-widest text-cocoa/50">every thursday</p>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* scroll hint */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={ready ? { opacity: 1 } : {}}
        transition={{ delay: 2, duration: 1 }}
        className="relative mx-auto mt-16 flex w-max flex-col items-center gap-3"
      >
        <span className="text-[10px] uppercase tracking-[0.35em] text-cocoa/45">scroll</span>
        <div className="h-12 w-px overflow-hidden bg-cocoa/15">
          <motion.div
            className="h-5 w-px bg-rosewood"
            animate={{ y: [-20, 48] }}
            transition={{ duration: 1.6, repeat: Infinity, ease: "easeInOut" }}
          />
        </div>
      </motion.div>
    </section>
  );
}

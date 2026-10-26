import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { Flame, HandHeart, Leaf } from "lucide-react";
import { Counter, Reveal, SectionTag, WordRise } from "./ui";

const FEATURES = [
  {
    icon: Flame,
    title: "Small-batch roasts",
    text: "Twenty kilos at a time in our vintage Probat — never more, never stale.",
  },
  {
    icon: Leaf,
    title: "Farm-direct beans",
    text: "We buy above fair-trade from twelve family farms across three continents.",
  },
  {
    icon: HandHeart,
    title: "Made by hand",
    text: "Every cup dialed in by baristas who know the regulars by name—and order.",
  },
];

export default function Story() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const imgY = useTransform(scrollYProgress, [0, 1], ["-10%", "10%"]);
  const cardY = useTransform(scrollYProgress, [0, 1], ["14%", "-14%"]);

  return (
    <section id="story" ref={ref} className="relative overflow-hidden py-24 sm:py-32">
      {/* background word */}
      <span
        aria-hidden
        className="pointer-events-none absolute -top-4 left-1/2 -translate-x-1/2 select-none whitespace-nowrap font-display text-[22vw] font-semibold text-cocoa/[0.04]"
      >
        our story
      </span>

      <div className="relative mx-auto grid max-w-7xl items-center gap-16 px-5 sm:px-8 lg:grid-cols-12">
        {/* imagery */}
        <div className="relative lg:col-span-5">
          <Reveal>
            <div className="relative overflow-hidden rounded-t-[999px] rounded-b-[2.5rem] shadow-[0_40px_70px_-30px_rgba(54,38,27,0.5)]">
              <motion.img
                src={`${import.meta.env.BASE_URL}images/story-interior.jpg`}
                alt="Warm café interior with pink chairs"
                style={{ y: imgY }}
                className="h-[30rem] w-full scale-[1.22] object-cover sm:h-[36rem]"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-espresso/25 via-transparent to-transparent" />
            </div>
          </Reveal>

          {/* polaroid card */}
          <motion.div
            style={{ y: cardY }}
            className="absolute -bottom-10 -right-3 z-10 w-40 rotate-6 rounded-2xl border-8 border-cream bg-cream shadow-2xl sm:-right-10 sm:w-52"
          >
            <img src={`${import.meta.env.BASE_URL}images/barista.jpg`} alt="Barista pouring latte art" className="aspect-square w-full rounded-lg object-cover" />
            <p className="py-2.5 text-center font-display text-xs italic text-cocoa/70 sm:text-sm">
              morning ritual, 7:04 am
            </p>
          </motion.div>

          {/* stamp */}
          <div className="absolute -left-4 top-8 grid h-24 w-24 place-items-center rounded-full bg-rosewood text-center text-cream shadow-xl animate-float sm:-left-8">
            <div>
              <p className="font-display text-2xl font-semibold leading-none">9</p>
              <p className="mt-1 px-2 text-[9px] uppercase tracking-[0.18em] leading-tight">years of mornings</p>
            </div>
          </div>
        </div>

        {/* copy */}
        <div className="lg:col-span-6 lg:col-start-7">
          <Reveal>
            <SectionTag>Our story</SectionTag>
          </Reveal>
          <h2 className="mt-6 font-display text-4xl font-medium leading-[1.05] tracking-tight text-espresso sm:text-5xl lg:text-6xl">
            <WordRise text="A little café with a" />{" "}
            <span className="italic font-light text-rosewood">
              <WordRise text="soft heart" delay={0.25} />
            </span>{" "}
            <WordRise text="&" delay={0.35} />{" "}
            <span className="text-outline">
              <WordRise text="strong shots." delay={0.42} />
            </span>
          </h2>

          <Reveal delay={0.2}>
            <p className="mt-7 max-w-xl leading-relaxed text-cocoa/70">
              Bloom & Brew began as a two-seat cart on Rosewater Lane. Nine years
              later, the room got bigger — the philosophy didn't: pour slowly,
              source honestly, and always leave the pink chairs facing the
              morning sun.
            </p>
          </Reveal>

          <div className="mt-10 space-y-6">
            {FEATURES.map((f, i) => (
              <Reveal key={f.title} delay={0.15 + i * 0.12}>
                <div className="group flex gap-5">
                  <span className="grid h-12 w-12 shrink-0 place-items-center rounded-2xl bg-blush text-rosewood transition-all duration-500 group-hover:rotate-12 group-hover:bg-rosewood group-hover:text-cream">
                    <f.icon size={20} />
                  </span>
                  <div>
                    <h3 className="font-display text-xl font-semibold text-espresso">{f.title}</h3>
                    <p className="mt-1 max-w-md text-sm leading-relaxed text-cocoa/65">{f.text}</p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>

          <Reveal delay={0.4}>
            <div className="mt-12 flex flex-wrap items-center gap-x-12 gap-y-6 border-t border-cocoa/10 pt-8">
              <div>
                <p className="font-display text-4xl font-semibold text-espresso">
                  <Counter to={26} />
                </p>
                <p className="mt-1 text-[11px] uppercase tracking-[0.2em] text-cocoa/55">drinks on the board</p>
              </div>
              <div>
                <p className="font-display text-4xl font-semibold text-espresso">
                  <Counter to={8} suffix="k+" />
                </p>
                <p className="mt-1 text-[11px] uppercase tracking-[0.2em] text-cocoa/55">happy regulars</p>
              </div>
              <p className="ml-auto font-display text-2xl italic text-rosewood">— Margot & Elias</p>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

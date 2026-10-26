import { useRef, useState } from "react";
import { AnimatePresence, motion, useMotionValue, useSpring } from "framer-motion";
import { ArrowRight, Plus } from "lucide-react";
import { Reveal, SectionTag, WordRise } from "./ui";

type Drink = {
  name: string;
  notes: string;
  price: string;
  img: string;
  tag?: string;
};

const DRINKS: Drink[] = [
  { name: "Rose Water Latte", notes: "blush espresso · steamed rose milk · petals", price: "5.5", img: "/images/menu-roselatte.jpg", tag: "House icon" },
  { name: "Honey Cardamom Flat White", notes: "wildflower honey · cardamom dust · double ristretto", price: "5.0", img: "/images/menu-espresso.jpg" },
  { name: "Cocoa Cortado", notes: "single-origin shot · dark cocoa · silk cream", price: "4.5", img: "/images/menu-cocoa.jpg" },
  { name: "Bloom Pour Over", notes: "ethiopia guji · bergamot & apricot", price: "6.0", img: "/images/pour.jpg", tag: "Slow bar" },
  { name: "Toasted Almond Cappuccino", notes: "almond foam · amaretto sugar · cocoa rim", price: "5.0", img: "/images/hero-latte.jpg" },
  { name: "Vanilla Bean Cold Brew", notes: "18-hour steep · vanilla cloud · cream top", price: "5.5", img: "/images/barista.jpg" },
  { name: "Pistachio Croissant", notes: "baked at sunrise · pistachio cream · honey glaze", price: "4.0", img: "/images/menu-pastry.jpg", tag: "Bakery" },
];

export default function MenuSection() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [active, setActive] = useState<number | null>(null);

  const mx = useMotionValue(0);
  const my = useMotionValue(0);
  const sx = useSpring(mx, { stiffness: 180, damping: 22, mass: 0.6 });
  const sy = useSpring(my, { stiffness: 180, damping: 22, mass: 0.6 });

  const onMove = (e: React.MouseEvent) => {
    const rect = sectionRef.current?.getBoundingClientRect();
    if (!rect) return;
    mx.set(e.clientX - rect.left);
    my.set(e.clientY - rect.top);
  };

  return (
    <section id="menu" className="relative overflow-hidden bg-parchment py-24 sm:py-32">
      {/* soft blobs */}
      <div className="pointer-events-none absolute -left-40 top-40 h-96 w-96 rounded-full bg-blush/80 blur-3xl" />
      <div className="pointer-events-none absolute -right-32 bottom-24 h-80 w-80 rounded-full bg-latte blur-3xl" />

      <div ref={sectionRef} onMouseMove={onMove} className="relative mx-auto max-w-7xl px-5 sm:px-8">
        {/* header */}
        <div className="flex flex-wrap items-end justify-between gap-6">
          <div>
            <Reveal>
              <SectionTag>The menu</SectionTag>
            </Reveal>
            <h2 className="mt-6 font-display text-4xl font-medium leading-[1.02] tracking-tight text-espresso sm:text-5xl lg:text-6xl">
              <WordRise text="Poured with" />{" "}
              <span className="italic font-light text-rosewood">
                <WordRise text="intention." delay={0.22} />
              </span>
            </h2>
          </div>
          <Reveal delay={0.2}>
            <p className="max-w-xs text-sm leading-relaxed text-cocoa/60">
              Beans rotate with the seasons — hover a line to peek at the pour.
              Served until 5pm, bakery until it's gone.
            </p>
          </Reveal>
        </div>

        {/* cursor-following preview */}
        <AnimatePresence>
          {active !== null && (
            <motion.div
              key={active}
              initial={{ opacity: 0, scale: 0.6, rotate: -10 }}
              animate={{ opacity: 1, scale: 1, rotate: 3 }}
              exit={{ opacity: 0, scale: 0.6, rotate: 8 }}
              transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
              style={{ x: sx, y: sy }}
              className="pointer-events-none absolute left-0 top-0 z-30 hidden lg:block"
            >
              <div className="-ml-24 -mt-32 h-48 w-44 overflow-hidden rounded-3xl border-4 border-cream shadow-2xl">
                <img src={DRINKS[active].img} alt="" className="h-full w-full object-cover" />
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* list */}
        <div className="mt-14 border-t border-cocoa/15">
          {DRINKS.map((d, i) => (
            <Reveal key={d.name} delay={i * 0.05} y={26}>
              <div
                onMouseEnter={() => setActive(i)}
                onMouseLeave={() => setActive(null)}
                className="group relative grid cursor-pointer grid-cols-[auto_1fr_auto] items-center gap-4 border-b border-cocoa/15 py-6 transition-colors duration-300 sm:gap-6 sm:py-7"
              >
                {/* hover wash */}
                <span className="absolute inset-x-[-1.25rem] inset-y-0 -z-0 origin-bottom scale-y-0 rounded-2xl bg-blush transition-transform duration-400 ease-out group-hover:scale-y-100" />

                {/* mobile thumb */}
                <img
                  src={d.img}
                  alt={d.name}
                  className="relative z-10 h-14 w-14 rounded-xl object-cover ring-2 ring-cream transition-transform duration-500 group-hover:rotate-6 group-hover:scale-110 lg:hidden"
                />
                <span className="relative z-10 hidden w-8 font-display text-sm italic text-cocoa/35 lg:block">
                  0{i + 1}
                </span>

                <div className="relative z-10 min-w-0">
                  <div className="flex flex-wrap items-center gap-3">
                    <h3 className="font-display text-xl font-semibold text-espresso transition-transform duration-400 group-hover:translate-x-2 sm:text-2xl lg:text-3xl">
                      {d.name}
                    </h3>
                    {d.tag && (
                      <span className="rounded-full bg-rosewood/10 px-3 py-1 text-[10px] font-bold uppercase tracking-[0.16em] text-rosewood">
                        {d.tag}
                      </span>
                    )}
                  </div>
                  <p className="mt-1 truncate text-xs uppercase tracking-[0.14em] text-cocoa/50 transition-transform duration-400 group-hover:translate-x-2 sm:text-[13px]">
                    {d.notes}
                  </p>
                </div>

                <div className="relative z-10 flex items-center gap-3 sm:gap-5">
                  <span className="font-display text-xl font-semibold text-rosewood sm:text-2xl">
                    <span className="text-sm align-top">$</span>
                    {d.price}
                  </span>
                  <span className="grid h-10 w-10 place-items-center rounded-full border border-cocoa/15 text-cocoa transition-all duration-400 group-hover:rotate-45 group-hover:border-espresso group-hover:bg-espresso group-hover:text-cream">
                    <Plus size={16} />
                  </span>
                </div>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal delay={0.15}>
          <div className="mt-10 flex flex-wrap items-center justify-between gap-4">
            <p className="text-xs uppercase tracking-[0.24em] text-cocoa/50">
              Everything also available iced · decaf on request
            </p>
            <a
              href="#visit"
              className="group inline-flex items-center gap-2 text-sm font-semibold uppercase tracking-[0.14em] text-espresso"
            >
              <span className="border-b-2 border-rose/50 pb-1 transition-colors group-hover:border-rosewood">
                Full seasonal board in store
              </span>
              <ArrowRight size={16} className="transition-transform duration-300 group-hover:translate-x-1" />
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

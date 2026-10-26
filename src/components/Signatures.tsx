import { motion } from "framer-motion";
import { Plus } from "lucide-react";
import { CircularText, Reveal, SectionTag, WordRise } from "./ui";
import { cn } from "../utils/cn";

const CARDS = [
  {
    name: "Rose Water Latte",
    desc: "Our signature blush — espresso folded into rose-steamed milk, finished with Damask petals.",
    price: "$5.50",
    img: `${import.meta.env.BASE_URL}images/menu-roselatte.jpg`,
    featured: true,
  },
  {
    name: "Cocoa Cortado",
    desc: "Half cortado, half chocolate ritual. Single-origin shot under a cloud of cocoa silk.",
    price: "$4.50",
    img: `${import.meta.env.BASE_URL}images/menu-cocoa.jpg`,
    featured: false,
  },
  {
    name: "Golden Espresso",
    desc: "Honeyed crema from our Thursday roast — syrupy, bright, gone in three perfect sips.",
    price: "$3.50",
    img: `${import.meta.env.BASE_URL}images/menu-espresso.jpg`,
    featured: false,
  },
];

export default function Signatures() {
  return (
    <section id="signatures" className="relative overflow-hidden py-24 sm:py-32">
      <div className="pointer-events-none absolute right-0 top-0 h-96 w-96 rounded-full bg-blush blur-3xl" />

      <div className="relative mx-auto max-w-7xl px-5 sm:px-8">
        <div className="flex flex-wrap items-end justify-between gap-6">
          <div>
            <Reveal>
              <SectionTag>House signatures</SectionTag>
            </Reveal>
            <h2 className="mt-6 max-w-2xl font-display text-4xl font-medium leading-[1.02] tracking-tight text-espresso sm:text-5xl lg:text-6xl">
              <WordRise text="Three cups we're" />{" "}
              <span className="italic font-light text-rosewood">
                <WordRise text="known for." delay={0.25} />
              </span>
            </h2>
          </div>
          <Reveal delay={0.2}>
            <p className="max-w-xs text-sm leading-relaxed text-cocoa/60">
              The drinks that built the queue out the door. Ask any regular —
              they'll order one before you finish the question.
            </p>
          </Reveal>
        </div>

        <div className="mt-14 grid gap-8 md:grid-cols-3">
          {CARDS.map((c, i) => (
            <Reveal key={c.name} delay={0.12 * i} y={60}>
              <motion.article
                whileHover={{ y: -12 }}
                transition={{ type: "spring", stiffness: 260, damping: 20 }}
                className={cn(
                  "group relative overflow-hidden rounded-[2rem] border p-4 pb-7 shadow-[0_20px_50px_-25px_rgba(54,38,27,0.35)] transition-colors duration-500",
                  c.featured ? "border-rose/40 bg-blush" : "border-cocoa/10 bg-cream"
                )}
              >
                {c.featured && (
                  <CircularText
                    text="HOUSE FAVORITE · HOUSE FAVORITE · "
                    size={92}
                    className="absolute right-4 top-4 z-20 rounded-full bg-cream/90 p-1.5 text-rosewood shadow-lg backdrop-blur"
                  />
                )}

                <div className="relative overflow-hidden rounded-[1.5rem]">
                  <img
                    src={c.img}
                    alt={c.name}
                    className="aspect-[4/5] w-full object-cover transition-transform duration-700 ease-out group-hover:scale-110 group-hover:rotate-1"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-espresso/30 via-transparent to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
                  <span className="absolute bottom-4 left-4 rounded-full bg-cream/90 px-4 py-1.5 font-display text-lg font-semibold text-espresso shadow backdrop-blur">
                    {c.price}
                  </span>
                </div>

                <div className="px-2 pt-6">
                  <h3 className="font-display text-2xl font-semibold text-espresso">{c.name}</h3>
                  <p className="mt-2.5 text-sm leading-relaxed text-cocoa/65">{c.desc}</p>
                  <button className="mt-6 inline-flex w-full items-center justify-center gap-2 rounded-full border-2 border-espresso py-3 text-xs font-bold uppercase tracking-[0.18em] text-espresso transition-all duration-300 hover:bg-espresso hover:text-cream">
                    <Plus size={15} />
                    Add to order
                  </button>
                </div>
              </motion.article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

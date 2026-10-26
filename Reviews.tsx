import { Star } from "lucide-react";
import { Reveal, SectionTag, WordRise } from "./ui";

const ROW_A = [
  { text: "The rose latte tastes like a love letter. I rearranged my commute for this café.", name: "Amara S.", drink: "Rose Water Latte" },
  { text: "Best flat white outside of Melbourne. The cardamom honey thing is dangerous.", name: "Jonas K.", drink: "Flat White" },
  { text: "Soft light, softer chairs, and espresso that actually respects the bean.", name: "Priya D.", drink: "Golden Espresso" },
  { text: "I've written half my novel in the window seat. The croissants deserve co-author credit.", name: "Leo M.", drink: "Pistachio Croissant" },
  { text: "Their pour over made me throw away my pod machine. No regrets.", name: "Sofia R.", drink: "Bloom Pour Over" },
];

const ROW_B = [
  { text: "Nine years a regular. They started my order when they see my dog round the corner.", name: "Henrik B.", drink: "Cappuccino" },
  { text: "The cocoa cortado is criminally good. I have told everyone I know.", name: "Naomi T.", drink: "Cocoa Cortado" },
  { text: "Came for wifi, stayed for three hours and two vanilla cold brews.", name: "Marcus L.", drink: "Cold Brew" },
  { text: "Pink chairs, warm people, serious coffee. My whole personality now.", name: "June A.", drink: "Rose Latte" },
  { text: "Pro tip: Thursday is roast day. The whole street smells like caramel.", name: "Diego F.", drink: "Espresso" },
];

function Card({ r }: { r: (typeof ROW_A)[number] }) {
  return (
    <article className="w-[19rem] shrink-0 rounded-3xl border border-cocoa/10 bg-cream p-6 shadow-[0_15px_40px_-20px_rgba(54,38,27,0.3)] sm:w-[22rem]">
      <div className="flex gap-1 text-caramel">
        {Array.from({ length: 5 }).map((_, i) => (
          <Star key={i} size={14} className="fill-caramel" />
        ))}
      </div>
      <p className="mt-4 font-display text-lg leading-snug text-espresso">“{r.text}”</p>
      <div className="mt-5 flex items-center gap-3">
        <span className="grid h-10 w-10 place-items-center rounded-full bg-petal font-display text-sm font-semibold text-espresso">
          {r.name[0]}
        </span>
        <div>
          <p className="text-sm font-bold text-espresso">{r.name}</p>
          <p className="text-[11px] uppercase tracking-[0.14em] text-cocoa/50">orders the {r.drink}</p>
        </div>
      </div>
    </article>
  );
}

export default function Reviews() {
  return (
    <section className="relative overflow-hidden bg-blush/60 py-24 sm:py-32">
      <span
        aria-hidden
        className="pointer-events-none absolute -bottom-10 left-1/2 -translate-x-1/2 select-none whitespace-nowrap font-display text-[20vw] font-semibold text-rosewood/[0.06]"
      >
        kind words
      </span>

      <div className="relative mx-auto mb-14 max-w-7xl px-5 text-center sm:px-8">
        <Reveal>
          <SectionTag className="mx-auto">Kind words</SectionTag>
        </Reveal>
        <h2 className="mt-6 font-display text-4xl font-medium leading-[1.02] tracking-tight text-espresso sm:text-5xl lg:text-6xl">
          <span className="italic font-light text-rosewood">
            <WordRise text="Regulars" />
          </span>{" "}
          <WordRise text="say it best." delay={0.15} />
        </h2>
      </div>

      <div className="relative space-y-6">
        <div className="overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_8%,black_92%,transparent)]">
          <div className="flex w-max gap-6 pr-6 animate-marquee hover:[animation-play-state:paused]" style={{ animationDuration: "55s" }}>
            {[...ROW_A, ...ROW_A].map((r, i) => (
              <Card key={i} r={r} />
            ))}
          </div>
        </div>
        <div className="overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_8%,black_92%,transparent)]">
          <div className="flex w-max gap-6 pr-6 animate-marquee-rev hover:[animation-play-state:paused]" style={{ animationDuration: "60s" }}>
            {[...ROW_B, ...ROW_B].map((r, i) => (
              <Card key={i} r={r} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

import { ArrowUp, ArrowUpRight, Coffee } from "lucide-react";
import { Reveal } from "./ui";
import Marquee from "./Marquee";

const SOCIALS = ["Instagram", "TikTok", "Pinterest"];

export default function Footer() {
  return (
    <footer className="relative overflow-hidden bg-midnight text-cream">
      <Marquee
        dark={false}
        items={["SEE YOU AT SUNRISE", "FIRST CUP ON US", "BLOOM & BREW", "EST. 2017"]}
        className="bg-rosewood text-cream"
      />

      <div className="relative mx-auto max-w-7xl px-5 pb-10 pt-20 sm:px-8">
        <Reveal>
          <a href="#top" className="group block text-center">
            <p className="font-display text-[clamp(2.6rem,9vw,7.5rem)] font-medium leading-none tracking-tight">
              Bloom <span className="italic font-light text-petal transition-colors duration-500 group-hover:text-rose">&</span>{" "}
              <span className="text-outline-cream transition-all duration-500 group-hover:text-petal group-hover:[-webkit-text-stroke-width:0px]">
                Brew
              </span>
            </p>
          </a>
        </Reveal>

        <div className="mt-16 grid gap-12 border-t border-cream/10 pt-12 sm:grid-cols-2 lg:grid-cols-4">
          <Reveal delay={0.05}>
            <div>
              <span className="grid h-11 w-11 place-items-center rounded-full bg-petal text-espresso">
                <Coffee size={19} />
              </span>
              <p className="mt-4 max-w-xs text-sm leading-relaxed text-cream/55">
                Slow mornings, soft light, bold coffee. A neighborhood café
                pouring seasonal single-origins since 2017.
              </p>
            </div>
          </Reveal>

          <Reveal delay={0.12}>
            <div>
              <h4 className="text-[11px] font-bold uppercase tracking-[0.28em] text-petal">Explore</h4>
              <ul className="mt-5 space-y-3 text-sm text-cream/65">
                {[
                  ["Our story", "#story"],
                  ["The menu", "#menu"],
                  ["Signatures", "#signatures"],
                  ["Visit us", "#visit"],
                ].map(([label, href]) => (
                  <li key={label}>
                    <a href={href} className="transition-colors duration-300 hover:text-petal">
                      {label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>

          <Reveal delay={0.19}>
            <div>
              <h4 className="text-[11px] font-bold uppercase tracking-[0.28em] text-petal">Find us</h4>
              <p className="mt-5 text-sm leading-relaxed text-cream/65">
                14 Rosewater Lane
                <br />
                Old Mill District
                <br />
                Portland, OR 97209
              </p>
              <p className="mt-4 text-sm text-cream/65">+1 (503) 555-0174</p>
            </div>
          </Reveal>

          <Reveal delay={0.26}>
            <div>
              <h4 className="text-[11px] font-bold uppercase tracking-[0.28em] text-petal">Follow along</h4>
              <div className="mt-5 flex flex-wrap gap-2.5">
                {SOCIALS.map((s) => (
                  <a
                    key={s}
                    href="#top"
                    aria-label={s}
                    className="group inline-flex items-center gap-1.5 rounded-full border border-cream/15 px-4 py-2.5 text-xs font-semibold uppercase tracking-[0.14em] text-cream/70 transition-all duration-300 hover:-translate-y-1 hover:border-petal hover:bg-petal hover:text-espresso"
                  >
                    {s}
                    <ArrowUpRight size={13} className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  </a>
                ))}
              </div>
              <p className="mt-5 text-sm leading-relaxed text-cream/55">
                @bloomandbrew — daily pours, roast days & the occasional café dog.
              </p>
            </div>
          </Reveal>
        </div>

        <div className="mt-14 flex flex-wrap items-center justify-between gap-5 border-t border-cream/10 pt-7 text-xs uppercase tracking-[0.2em] text-cream/40">
          <p>© 2026 Bloom & Brew Coffee House</p>
          <p className="hidden sm:block">Roasted in Portland · brewed with love</p>
          <a
            href="#top"
            className="group inline-flex items-center gap-2 text-cream/60 transition-colors hover:text-petal"
          >
            Back to top
            <span className="grid h-9 w-9 place-items-center rounded-full border border-cream/15 transition-all duration-300 group-hover:-translate-y-1 group-hover:border-petal">
              <ArrowUp size={15} />
            </span>
          </a>
        </div>
      </div>
    </footer>
  );
}

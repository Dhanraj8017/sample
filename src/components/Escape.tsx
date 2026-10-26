import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { Coffee } from "lucide-react";
import { WordRise } from "./ui";

export default function Escape() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], ["-14%", "14%"]);
  const scale = useTransform(scrollYProgress, [0, 0.5, 1], [1.15, 1.05, 1.15]);

  return (
    <section ref={ref} className="relative h-[72vh] min-h-[30rem] overflow-hidden">
      <motion.img
       src={`${import.meta.env.BASE_URL}images/pour.jpg`} 
        alt="Slow pour over brewing"
        style={{ y, scale }}
        className="absolute inset-0 h-full w-full object-cover"
      />
      <div className="absolute inset-0 bg-espresso/55" />
      <div className="absolute inset-0 bg-gradient-to-b from-espresso/40 via-transparent to-espresso/60" />

      <div className="relative z-10 flex h-full flex-col items-center justify-center px-5 text-center text-cream">
        <motion.span
          initial={{ opacity: 0, scale: 0.5 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="grid h-16 w-16 place-items-center rounded-full border border-cream/30 bg-cream/10 backdrop-blur-md"
        >
          <Coffee size={24} className="text-petal" />
        </motion.span>

        <blockquote className="mt-8 max-w-4xl font-display text-4xl font-light leading-[1.15] tracking-tight sm:text-6xl">
          <WordRise text={"\u201CBrew the moment,"} />{" "}
          <span className="italic text-petal">
            <WordRise text={"sip the calm.\u201D"} delay={0.3} />
          </span>
        </blockquote>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.6, duration: 0.8 }}
          className="mt-8 text-[11px] uppercase tracking-[0.4em] text-cream/60"
        >
          — the bloom & brew promise
        </motion.p>
      </div>
    </section>
  );
}

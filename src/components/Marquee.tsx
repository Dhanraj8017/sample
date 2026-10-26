import { Coffee } from "lucide-react";
import { cn } from "../utils/cn";

export default function Marquee({
  items,
  dark = true,
  reverse = false,
  className,
}: {
  items: string[];
  dark?: boolean;
  reverse?: boolean;
  className?: string;
}) {
  const row = [...items, ...items];
  return (
    <div
      className={cn(
        "relative z-10 overflow-hidden py-5",
        dark ? "bg-espresso text-cream" : "bg-petal text-espresso",
        className
      )}
    >
      <div
        className={cn(
          "flex w-max items-center gap-10 whitespace-nowrap",
          reverse ? "animate-marquee-rev" : "animate-marquee"
        )}
      >
        {row.map((item, i) => (
          <span key={i} className="flex items-center gap-10">
            <span
              className={cn(
                "font-display text-2xl sm:text-3xl",
                i % 2 === 0 ? "font-medium" : cn("font-light italic", dark ? "text-petal" : "text-rosewood")
              )}
            >
              {item}
            </span>
            <Coffee size={20} className={cn("shrink-0", dark ? "text-caramel" : "text-rosewood")} />
          </span>
        ))}
      </div>
    </div>
  );
}

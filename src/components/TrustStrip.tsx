import { motion } from "motion/react";
import { usePrefersReducedMotion } from "@/src/hooks/usePrefersReducedMotion";

const items = [
  "3+ live client projects",
  "Full stack delivery",
  "Mobile-first builds",
  "Performance optimized",
  "Available for freelance",
] as const;

export default function TrustStrip() {
  const reduced = usePrefersReducedMotion();
  const doubled = [...items, ...items];

  if (reduced) {
    return (
      <div className="border-border/40 border-y py-4">
        <p className="text-muted-foreground text-center text-xs font-medium tracking-wide uppercase">
          {items.join(" · ")}
        </p>
      </div>
    );
  }

  return (
    <div className="border-border/40 relative overflow-hidden border-y py-4">
      <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-16 bg-gradient-to-r from-background to-transparent" />
      <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-16 bg-gradient-to-l from-background to-transparent" />
      <motion.div
        className="flex w-max gap-10 whitespace-nowrap px-6"
        animate={{ x: ["0%", "-50%"] }}
        transition={{ duration: 28, repeat: Infinity, ease: "linear" }}
      >
        {doubled.map((item, i) => (
          <span
            key={`${item}-${i}`}
            className="text-muted-foreground flex items-center gap-10 text-xs font-semibold tracking-[0.15em] uppercase"
          >
            <span className="text-primary size-1.5 rounded-full bg-current" />
            {item}
          </span>
        ))}
      </motion.div>
    </div>
  );
}

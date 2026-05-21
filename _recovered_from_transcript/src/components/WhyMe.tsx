import { motion } from "motion/react";
import { Check } from "lucide-react";
import { SectionShell } from "@/src/components/SectionShell";
import { SectionHeading } from "@/src/components/motion/SectionHeading";
import { staggerContainer, staggerItem } from "@/src/lib/motion";
import { whyWorkWithMe } from "@/src/content/site";
import { usePrefersReducedMotion } from "@/src/hooks/usePrefersReducedMotion";

export default function WhyMe() {
  const reduced = usePrefersReducedMotion();

  return (
    <SectionShell
      id="why-me"
      className="border-border/40 border-t py-20 sm:py-28"
    >
      <SectionHeading
        label="Why work with me"
        title="The edge clients notice on day one"
        description="Not just pretty pixels—reliable delivery, clear communication, and builds that perform."
      />

      <motion.ul
        initial={reduced ? false : "hidden"}
        whileInView="visible"
        viewport={{ once: true, margin: "-40px" }}
        variants={staggerContainer}
        className="grid gap-3 sm:grid-cols-2 lg:gap-4"
      >
        {whyWorkWithMe.map((line) => (
          <motion.li
            key={line}
            variants={staggerItem}
            whileHover={reduced ? undefined : { x: 4 }}
            className="surface-glass border-border/50 flex items-start gap-3 rounded-xl border px-4 py-3.5"
          >
            <motion.span
              className="bg-primary/15 text-primary mt-0.5 flex size-8 shrink-0 items-center justify-center rounded-lg"
              whileHover={reduced ? undefined : { scale: 1.1 }}
            >
              <Check className="size-4" aria-hidden />
            </motion.span>
            <span className="text-foreground text-sm font-medium leading-snug sm:text-base">
              {line}
            </span>
          </motion.li>
        ))}
      </motion.ul>
    </SectionShell>
  );
}

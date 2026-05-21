import { motion } from "motion/react";
import { SectionShell } from "@/src/components/SectionShell";
import { SectionHeading } from "@/src/components/motion/SectionHeading";
import { staggerContainer, staggerItem } from "@/src/lib/motion";
import { skillGroups } from "@/src/content/site";
import { usePrefersReducedMotion } from "@/src/hooks/usePrefersReducedMotion";

export default function Skills() {
  const reduced = usePrefersReducedMotion();

  return (
    <SectionShell
      id="skills"
      className="border-border/40 border-t py-14 sm:py-24 lg:py-28"
      size="wide"
    >
      <SectionHeading
        label="Skills"
        title="Modern stack, production-ready delivery"
        description="Technologies I use daily—and what I'm actively leveling up next."
      />

      <motion.div
        initial={reduced ? false : "hidden"}
        whileInView="visible"
        viewport={{ once: true, margin: "-50px" }}
        variants={staggerContainer}
        className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3 lg:gap-5"
      >
        {skillGroups.map((group) => (
          <motion.div
            key={group.title}
            variants={staggerItem}
            whileHover={reduced ? undefined : { y: -4 }}
            className="surface-glass border-border/50 rounded-2xl border p-6"
          >
            <h3 className="text-foreground text-sm font-semibold tracking-tight">
              {group.title}
            </h3>
            <ul className="text-muted-foreground mt-4 flex flex-wrap gap-2">
              {group.items.map((item, i) => (
                <motion.li
                  key={item}
                  initial={reduced ? false : { opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.03 }}
                  className="bg-muted/50 border-border/40 hover:border-primary/30 hover:text-foreground rounded-lg border px-2.5 py-1 text-xs font-medium transition-colors"
                >
                  {item}
                </motion.li>
              ))}
            </ul>
          </motion.div>
        ))}
      </motion.div>
    </SectionShell>
  );
}

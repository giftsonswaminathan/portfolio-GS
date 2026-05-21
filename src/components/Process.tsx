import { motion } from "motion/react";
import { SectionShell } from "@/src/components/SectionShell";
import { SectionHeading } from "@/src/components/motion/SectionHeading";
import { staggerContainer, staggerItem } from "@/src/lib/motion";
import { usePrefersReducedMotion } from "@/src/hooks/usePrefersReducedMotion";

const steps = [
  {
    step: "01",
    title: "Discover",
    description:
      "We align on goals, audience, and scope so the build solves a real business problem.",
  },
  {
    step: "02",
    title: "Design & build",
    description:
      "Modern UI, responsive layouts, and clean full stack implementation with regular updates.",
  },
  {
    step: "03",
    title: "Launch & support",
    description:
      "Deploy, optimize performance, and hand off a site you can grow with confidence.",
  },
] as const;

export default function Process() {
  const reduced = usePrefersReducedMotion();

  return (
    <SectionShell
      id="process"
      className="border-border/40 border-t py-20 sm:py-24"
    >
      <SectionHeading
        label="How I work"
        title={
          <>
            A clear path from idea{" "}
            <span className="text-muted-foreground">to launch</span>
          </>
        }
        description="Structured delivery that keeps clients informed and projects moving fast."
      />

      {reduced ? (
        <ol className="grid gap-4 md:grid-cols-3">
          {steps.map((s) => (
            <li
              key={s.step}
              className="surface-glass rounded-2xl border p-6"
            >
              <span className="text-primary text-sm font-bold">{s.step}</span>
              <h3 className="mt-2 text-lg font-semibold">{s.title}</h3>
              <p className="text-muted-foreground mt-2 text-sm">{s.description}</p>
            </li>
          ))}
        </ol>
      ) : (
        <motion.ol
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
          variants={staggerContainer}
          className="relative grid gap-4 md:grid-cols-3 md:gap-6"
        >
          <div className="via-primary/40 absolute top-12 right-[16%] left-[16%] hidden h-px bg-gradient-to-r from-transparent to-transparent md:block" />
          {steps.map((s, i) => (
            <motion.li
              key={s.step}
              variants={staggerItem}
              whileHover={{ y: -6, transition: { duration: 0.25 } }}
              className="surface-glass group relative overflow-hidden rounded-2xl border p-6 md:p-8"
            >
              <motion.div
                className="from-primary/20 absolute -top-12 -right-12 size-32 rounded-full bg-gradient-to-br to-transparent opacity-0 blur-2xl transition-opacity group-hover:opacity-100"
                aria-hidden
              />
              <motion.span
                className="text-primary inline-block text-sm font-bold tabular-nums"
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 + i * 0.1 }}
              >
                {s.step}
              </motion.span>
              <h3 className="mt-3 text-lg font-semibold tracking-tight">
                {s.title}
              </h3>
              <p className="text-muted-foreground mt-2 text-sm leading-relaxed">
                {s.description}
              </p>
            </motion.li>
          ))}
        </motion.ol>
      )}
    </SectionShell>
  );
}

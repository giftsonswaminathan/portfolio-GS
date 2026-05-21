import { motion, useScroll, useSpring } from "motion/react";
import { usePrefersReducedMotion } from "@/src/hooks/usePrefersReducedMotion";

export default function ScrollProgress() {
  const reduced = usePrefersReducedMotion();
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 120,
    damping: 30,
    restDelta: 0.001,
  });

  if (reduced) return null;

  return (
    <motion.div
      className="from-primary via-primary/80 to-[oklch(0.75_0.12_280)] fixed top-0 right-0 left-0 z-[60] h-[2px] origin-left bg-gradient-to-r shadow-[0_0_12px_oklch(0.55_0.14_195/0.6)]"
      style={{ scaleX }}
      aria-hidden
    />
  );
}

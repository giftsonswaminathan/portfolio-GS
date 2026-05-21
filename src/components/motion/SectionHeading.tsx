import type { ReactNode } from "react";
import { motion } from "motion/react";
import { fadeUp, staggerContainer, staggerItem } from "@/src/lib/motion";
import { cn } from "@/lib/utils";
import { usePrefersReducedMotion } from "@/src/hooks/usePrefersReducedMotion";

type SectionHeadingProps = {
  label: string;
  title: ReactNode;
  description?: string;
  align?: "left" | "center";
  className?: string;
};

export function SectionHeading({
  label,
  title,
  description,
  align = "left",
  className,
}: SectionHeadingProps) {
  const reduced = usePrefersReducedMotion();
  const center = align === "center";

  if (reduced) {
    return (
      <div className={center ? "mx-auto max-w-2xl text-center" : "max-w-2xl"}>
        <p className="text-primary mb-3 text-xs font-semibold tracking-[0.2em] uppercase">
          {label}
        </p>
        <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl lg:text-5xl">
          {title}
        </h2>
        {description ? (
          <p className="text-muted-foreground mt-4 text-base leading-relaxed">
            {description}
          </p>
        ) : null}
      </div>
    );
  }

  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-80px" }}
      variants={staggerContainer}
      className={cn(
        center ? "mx-auto mb-12 max-w-2xl text-center lg:mb-14" : "mb-12 max-w-2xl lg:mb-14",
        className,
      )}
    >
      <motion.p
        variants={staggerItem}
        className="text-primary mb-3 text-xs font-semibold tracking-[0.2em] uppercase"
      >
        {label}
      </motion.p>
      <motion.h2
        variants={staggerItem}
        className="text-3xl font-semibold tracking-tight sm:text-4xl lg:text-5xl"
      >
        {title}
      </motion.h2>
      {description ? (
        <motion.p
          variants={staggerItem}
          className="text-muted-foreground mt-4 text-base leading-relaxed"
        >
          {description}
        </motion.p>
      ) : null}
    </motion.div>
  );
}

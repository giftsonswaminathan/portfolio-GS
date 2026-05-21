import { motion, useSpring } from "motion/react";
import { useRef, type MouseEvent, type ReactNode } from "react";
import { usePrefersReducedMotion } from "@/src/hooks/usePrefersReducedMotion";
import { cn } from "@/lib/utils";

type TiltCardProps = {
  children: ReactNode;
  className?: string;
};

export function TiltCard({ children, className }: TiltCardProps) {
  const reduced = usePrefersReducedMotion();
  const ref = useRef<HTMLDivElement>(null);
  const rotateX = useSpring(0, { stiffness: 220, damping: 24 });
  const rotateY = useSpring(0, { stiffness: 220, damping: 24 });

  if (reduced) {
    return <div className={className}>{children}</div>;
  }

  const handleMove = (e: MouseEvent<HTMLDivElement>) => {
    const el = ref.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    rotateX.set(((y - rect.height / 2) / (rect.height / 2)) * -5);
    rotateY.set(((x - rect.width / 2) / (rect.width / 2)) * 5);
  };

  const handleLeave = () => {
    rotateX.set(0);
    rotateY.set(0);
  };

  return (
    <motion.div
      ref={ref}
      onMouseMove={handleMove}
      onMouseLeave={handleLeave}
      style={{
        rotateX,
        rotateY,
        transformPerspective: 1200,
      }}
      className={cn(className)}
    >
      {children}
    </motion.div>
  );
}

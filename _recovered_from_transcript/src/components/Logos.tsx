import { useAnimationFrame } from "motion/react";
import { useRef } from "react";
import { techLogos } from "@/src/content/site";
import { SectionShell } from "@/src/components/SectionShell";
import { usePrefersReducedMotion } from "@/src/hooks/usePrefersReducedMotion";

export default function Logos() {
  const reduced = usePrefersReducedMotion();
  const xRef = useRef(0);
  const stripRef = useRef<HTMLDivElement>(null);

  useAnimationFrame((_t, delta) => {
    if (reduced || !stripRef.current) return;
    xRef.current -= delta * 0.018;
    const width = stripRef.current.scrollWidth / 3;
    if (xRef.current <= -width) xRef.current = 0;
    stripRef.current.style.transform = `translate3d(${xRef.current}px,0,0)`;
  });

  const triple = [...techLogos, ...techLogos, ...techLogos];

  return (
    <SectionShell className="border-border/40 border-y py-10 sm:py-12" size="wide">
      <p className="text-muted-foreground mb-6 text-center text-xs font-semibold tracking-[0.25em] uppercase">
        Stack & tooling
      </p>
      <div className="relative overflow-hidden [mask-image:linear-gradient(90deg,transparent,black_8%,black_92%,transparent)]">
        {reduced ? (
          <div className="flex flex-wrap items-center justify-center gap-x-10 gap-y-4 px-4">
            {techLogos.map((logo) => (
              <div
                key={logo.name}
                className="text-muted-foreground flex items-center gap-2.5"
              >
                <span className="text-lg font-semibold tabular-nums">
                  {logo.icon}
                </span>
                <span className="text-xs font-semibold tracking-wider uppercase">
                  {logo.name}
                </span>
              </div>
            ))}
          </div>
        ) : (
          <div className="flex">
            <div
              ref={stripRef}
              className="flex shrink-0 items-center gap-14 px-8 will-change-transform"
            >
              {triple.map((logo, i) => (
                <div
                  key={`${logo.name}-${i}`}
                  className="text-muted-foreground hover:text-foreground flex cursor-default items-center gap-2.5 transition-colors"
                >
                  <span className="text-xl font-semibold">{logo.icon}</span>
                  <span className="text-xs font-semibold tracking-wider uppercase">
                    {logo.name}
                  </span>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </SectionShell>
  );
}

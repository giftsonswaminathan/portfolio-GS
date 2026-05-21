import { cn } from "@/lib/utils";
import type { ReactNode } from "react";

type SectionShellProps = {
  id?: string;
  children: ReactNode;
  className?: string;
  innerClassName?: string;
  size?: "default" | "wide";
};

export function SectionShell({
  id,
  children,
  className,
  innerClassName,
  size = "default",
}: SectionShellProps) {
  return (
    <section
      id={id}
      className={cn(
        "scroll-mt-24 border-border/40 px-4 sm:scroll-mt-28 sm:px-6 lg:px-8",
        className,
      )}
    >
      <div
        className={cn(
          "mx-auto w-full max-w-6xl",
          size === "wide" && "max-w-[88rem]",
          innerClassName,
        )}
      >
        {children}
      </div>
    </section>
  );
}

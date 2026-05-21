import { useEffect, useState } from "react";
import { usePrefersReducedMotion } from "@/src/hooks/usePrefersReducedMotion";

export default function CustomCursor() {
  const reduced = usePrefersReducedMotion();
  const [hovering, setHovering] = useState(false);
  const [pos, setPos] = useState({ x: 0, y: 0 });
  const [ringPos, setRingPos] = useState({ x: 0, y: 0 });

  useEffect(() => {
    if (reduced) return;

    const onMove = (e: MouseEvent) => {
      setPos({ x: e.clientX, y: e.clientY });
      requestAnimationFrame(() => {
        setRingPos((prev) => ({
          x: prev.x + (e.clientX - prev.x) * 0.15,
          y: prev.y + (e.clientY - prev.y) * 0.15,
        }));
      });
    };

    const onOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement | null;
      if (!target) return;
      const interactive = target.closest(
        "a, button, [role='button'], input, textarea, select, label",
      );
      setHovering(!!interactive);
    };

    window.addEventListener("mousemove", onMove);
    document.addEventListener("mouseover", onOver);
    return () => {
      window.removeEventListener("mousemove", onMove);
      document.removeEventListener("mouseover", onOver);
    };
  }, [reduced]);

  if (reduced) return null;

  return (
    <>
      <div
        className={`custom-cursor ${hovering ? "custom-cursor-hover" : ""}`}
        style={{ left: pos.x, top: pos.y }}
        aria-hidden
      />
      <div
        className={`custom-cursor-ring ${hovering ? "custom-cursor-ring-hover" : ""}`}
        style={{ left: ringPos.x, top: ringPos.y }}
        aria-hidden
      />
    </>
  );
}

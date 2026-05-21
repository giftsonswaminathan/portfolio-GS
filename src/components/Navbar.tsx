import { useEffect, useId, useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import { PERSON } from "@/src/content/site";
import { usePrefersReducedMotion } from "@/src/hooks/usePrefersReducedMotion";
import { cn } from "@/lib/utils";

const navItems = [
  { name: "Work", href: "#portfolio" },
  { name: "About", href: "#about" },
  { name: "Services", href: "#services" },
  { name: "Process", href: "#process" },
  { name: "Skills", href: "#skills" },
] as const;

function scrollToId(hash: string) {
  const id = hash.replace("#", "");
  document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
}

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const menuId = useId();
  const reduced = usePrefersReducedMotion();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", onKey);
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = prev;
    };
  }, [open]);

  return (
    <motion.header
      initial={reduced ? false : { y: -24, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
      className="fixed top-0 right-0 left-0 z-50 px-4 pt-4 sm:px-6"
    >
      <motion.div
        layout
        className={cn(
          "surface-glass glow-cyan mx-auto flex max-w-5xl items-center justify-between gap-3 rounded-2xl px-3 py-2.5 transition-shadow duration-300 sm:px-5 sm:py-3",
          scrolled && "border-primary/20 shadow-2xl shadow-black/30",
        )}
      >
        <a
          href="#hero"
          onClick={(e) => {
            e.preventDefault();
            scrollToId("#hero");
            setOpen(false);
          }}
          className="group flex items-center gap-2.5 rounded-lg focus-visible:ring-ring outline-none focus-visible:ring-2"
        >
          <motion.div
            whileHover={reduced ? undefined : { rotate: [0, -8, 8, 0] }}
            transition={{ duration: 0.5 }}
            className="from-primary to-primary/70 text-primary-foreground flex h-9 w-9 items-center justify-center rounded-xl bg-gradient-to-br shadow-lg shadow-primary/25"
          >
            <span className="text-xs font-bold tracking-tight">
              {PERSON.initials}
            </span>
          </motion.div>
          <span className="hidden text-sm font-semibold tracking-tight sm:inline">
            {PERSON.name.split(" ")[0]}
          </span>
        </a>

        <nav
          className="hidden items-center gap-0.5 md:flex"
          aria-label="Primary"
        >
          {navItems.map((item) => (
            <a
              key={item.name}
              href={item.href}
              onClick={(e) => {
                e.preventDefault();
                scrollToId(item.href);
              }}
              className="text-muted-foreground hover:text-foreground group relative rounded-lg px-3 py-2 text-sm font-medium transition-colors"
            >
              {item.name}
              <span className="bg-primary absolute bottom-1 left-3 right-3 h-px origin-left scale-x-0 transition-transform duration-300 group-hover:scale-x-100" />
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <motion.div whileHover={reduced ? undefined : { scale: 1.03 }} whileTap={{ scale: 0.98 }}>
            <Button
              size="sm"
              className="hidden rounded-full px-5 shadow-lg shadow-primary/20 sm:inline-flex"
              onClick={() => {
                document.getElementById("contact")?.scrollIntoView({
                  behavior: "smooth",
                });
              }}
            >
              Hire me
            </Button>
          </motion.div>

          <Button
            type="button"
            variant="outline"
            size="icon"
            className="surface-glass md:hidden"
            aria-expanded={open}
            aria-controls={menuId}
            aria-label={open ? "Close menu" : "Open menu"}
            onClick={() => setOpen((v) => !v)}
          >
            {open ? <X className="size-5" /> : <Menu className="size-5" />}
          </Button>
        </div>
      </motion.div>

      <AnimatePresence>
        {open ? (
          <motion.div
            id={menuId}
            initial={{ opacity: 0, y: -8, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -8, scale: 0.98 }}
            transition={{ duration: 0.22, ease: [0.22, 1, 0.36, 1] }}
            className="surface-glass border-border/60 mx-auto mt-3 max-w-5xl overflow-hidden rounded-2xl border p-2 md:hidden"
            role="dialog"
            aria-modal="true"
            aria-label="Mobile navigation"
          >
            <nav className="flex flex-col gap-0.5" aria-label="Mobile primary">
              {navItems.map((item, i) => (
                <motion.a
                  key={item.name}
                  href={item.href}
                  initial={{ opacity: 0, x: -12 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.05 }}
                  className="hover:bg-muted/50 rounded-xl px-4 py-3 text-base font-medium"
                  onClick={(e) => {
                    e.preventDefault();
                    scrollToId(item.href);
                    setOpen(false);
                  }}
                >
                  {item.name}
                </motion.a>
              ))}
              <Button
                className="mt-2 w-full rounded-xl"
                onClick={() => {
                  document.getElementById("contact")?.scrollIntoView({
                    behavior: "smooth",
                  });
                  setOpen(false);
                }}
              >
                Hire me
              </Button>
            </nav>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </motion.header>
  );
}

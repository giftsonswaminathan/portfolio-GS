import { motion } from "motion/react";
import { Button } from "@/components/ui/button";
import {
  ArrowRight,
  ChevronDown,
  Gauge,
  Layout,
  MonitorSmartphone,
  ShoppingBag,
  Sparkles,
} from "lucide-react";
import { staggerContainer, staggerItem, easeOut } from "@/src/lib/motion";
import { usePrefersReducedMotion } from "@/src/hooks/usePrefersReducedMotion";

const highlights = [
  { label: "Responsive design", icon: MonitorSmartphone },
  { label: "Ecommerce solutions", icon: ShoppingBag },
  { label: "Fast performance", icon: Gauge },
  { label: "Modern UI/UX", icon: Layout },
  { label: "Scalable web apps", icon: Sparkles },
] as const;

export default function Hero() {
  const reduced = usePrefersReducedMotion();

  return (
    <section
      id="hero"
      className="relative min-h-[92dvh] overflow-hidden px-4 pt-28 pb-16 sm:px-6 sm:pt-32 lg:px-8 lg:pt-36"
    >
      <div className="pointer-events-none absolute inset-0 -z-10">
        {!reduced ? (
          <>
            <motion.div
              className="bg-primary/25 absolute top-[18%] left-[20%] h-72 w-72 rounded-full blur-[90px]"
              animate={{ y: [0, -24, 0], x: [0, 12, 0] }}
              transition={{ duration: 9, repeat: Infinity, ease: "easeInOut" }}
            />
            <motion.div
              className="absolute top-[30%] right-[15%] h-80 w-80 rounded-full bg-[oklch(0.32_0.12_280/0.35)] blur-[100px]"
              animate={{ y: [0, 20, 0], x: [0, -14, 0] }}
              transition={{ duration: 11, repeat: Infinity, ease: "easeInOut" }}
            />
            <motion.div
              className="bg-primary/10 absolute bottom-[10%] left-1/2 h-64 w-[min(90vw,480px)] -translate-x-1/2 rounded-full blur-[80px]"
              animate={{ scale: [1, 1.08, 1] }}
              transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
            />
          </>
        ) : (
          <div className="bg-primary/20 absolute top-1/4 left-1/2 h-[min(80vw,520px)] w-[min(80vw,520px)] -translate-x-1/2 rounded-full blur-[100px]" />
        )}
        <div
          className="absolute inset-0 opacity-[0.15]"
          style={{
            backgroundImage:
              "linear-gradient(oklch(0.5 0.05 270 / 0.4) 1px, transparent 1px), linear-gradient(90deg, oklch(0.5 0.05 270 / 0.4) 1px, transparent 1px)",
            backgroundSize: "64px 64px",
            maskImage:
              "radial-gradient(ellipse 70% 60% at 50% 40%, black, transparent)",
          }}
        />
        {!reduced ? (
          <>
            <div
              className="floating-shape-1 pointer-events-none absolute top-[12%] right-[8%] h-24 w-24 rounded-full border border-[#6C63FF]/20 bg-[#6C63FF]/5"
              aria-hidden
            />
            <div
              className="floating-shape-2 pointer-events-none absolute bottom-[18%] left-[6%] h-16 w-16 rotate-45 border border-[#00D4FF]/20 bg-[#00D4FF]/5"
              aria-hidden
            />
          </>
        ) : null}
      </div>

      <div className="mx-auto grid max-w-6xl items-center gap-12 lg:grid-cols-[1.1fr_0.9fr] lg:gap-16 lg:pt-8">
        <motion.div
          initial={reduced ? false : "hidden"}
          animate="visible"
          variants={staggerContainer}
          className="flex flex-col items-center text-center lg:items-start lg:text-left"
        >
          <motion.div
            variants={staggerItem}
            className="border-border/60 bg-card/40 mb-8 inline-flex items-center gap-2 rounded-full border px-3 py-1.5 text-xs font-medium shadow-sm backdrop-blur-md"
          >
            <span className="relative flex h-2 w-2">
              <span className="bg-primary absolute inline-flex h-full w-full animate-ping rounded-full opacity-40" />
              <span className="bg-primary relative inline-flex h-2 w-2 rounded-full" />
            </span>
            Full stack web developer · Open to projects
          </motion.div>

          <motion.h1
            variants={staggerItem}
            className="text-3xl leading-[1.12] font-semibold tracking-tight sm:text-5xl sm:leading-[1.08] lg:text-[3.25rem] lg:leading-[1.06]"
          >
            <span className="text-foreground">
              I Build Modern Websites, Ecommerce Platforms
            </span>
            <br />
            <span className="text-gradient-shimmer">
              &amp; Scalable Web Applications
            </span>
          </motion.h1>

          <motion.p
            variants={staggerItem}
            className="text-muted-foreground mt-6 max-w-xl text-base leading-relaxed sm:text-lg"
          >
            I&apos;m Giftson, a full stack web developer focused on building fast,
            responsive, and modern digital solutions for businesses, startups, and
            individuals.
          </motion.p>

          <motion.div
            variants={staggerItem}
            className="mt-10 flex w-full max-w-md flex-col gap-3 sm:max-w-none sm:flex-row lg:justify-start"
          >
            <Button
              size="lg"
              className="from-primary to-primary/85 text-primary-foreground group relative h-12 overflow-hidden rounded-full bg-gradient-to-r px-8 text-base shadow-xl shadow-primary/25"
              onClick={() =>
                document.getElementById("portfolio")?.scrollIntoView({
                  behavior: "smooth",
                })
              }
            >
              <span className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/20 to-transparent transition-transform duration-700 group-hover:translate-x-full" />
              View my work
              <ArrowRight
                className="ml-2 size-5 transition-transform group-hover:translate-x-1"
                aria-hidden
              />
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="surface-glass h-12 rounded-full border px-8 text-base transition-transform hover:scale-[1.02]"
              onClick={() =>
                document.getElementById("contact")?.scrollIntoView({
                  behavior: "smooth",
                })
              }
            >
              Contact me
            </Button>
          </motion.div>

          <motion.ul
            variants={staggerItem}
            className="text-muted-foreground mt-12 flex max-w-xl flex-wrap items-center justify-center gap-x-5 gap-y-3 text-xs font-medium lg:justify-start sm:text-sm"
          >
            {highlights.map(({ label, icon: Icon }) => (
              <motion.li
                key={label}
                whileHover={reduced ? undefined : { y: -2 }}
                className="surface-glass flex items-center gap-2 rounded-full border px-3 py-1.5"
              >
                <Icon className="text-primary size-3.5 shrink-0" aria-hidden />
                <span>{label}</span>
              </motion.li>
            ))}
          </motion.ul>
        </motion.div>

        <motion.div
          initial={reduced ? false : { opacity: 0, scale: 0.92, x: 24 }}
          animate={reduced ? undefined : { opacity: 1, scale: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: easeOut }}
          className="relative mx-auto hidden max-w-sm lg:block lg:max-w-none"
        >
          <motion.div
            className="from-primary/30 absolute -inset-4 rounded-[2rem] bg-gradient-to-br to-transparent blur-2xl"
            animate={reduced ? undefined : { opacity: [0.4, 0.7, 0.4] }}
            transition={{ duration: 5, repeat: Infinity }}
          />
          <div className="border-primary/25 absolute inset-0 translate-x-4 translate-y-4 rounded-[1.75rem] border bg-gradient-to-br from-primary/10 to-transparent" />
          <motion.img
            src="/founder.png"
            alt="Giftson Swaminathan"
            className="border-border/50 relative aspect-[4/5] w-full rounded-[1.75rem] border object-cover object-top shadow-2xl"
            whileHover={reduced ? undefined : { scale: 1.02 }}
            transition={{ type: "spring", stiffness: 200, damping: 20 }}
          />
          <motion.div
            className="surface-glass absolute -bottom-4 -left-4 rounded-2xl border px-4 py-3 shadow-xl"
            initial={reduced ? false : { opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.5 }}
          >
            <p className="text-primary text-[10px] font-bold tracking-widest uppercase">
              Trusted delivery
            </p>
            <p className="text-foreground text-sm font-semibold">
              Websites · Ecommerce · Apps
            </p>
          </motion.div>
        </motion.div>
      </div>

      {!reduced ? (
        <motion.button
          type="button"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
          onClick={() =>
            document.getElementById("portfolio")?.scrollIntoView({
              behavior: "smooth",
            })
          }
          className="text-muted-foreground hover:text-foreground absolute bottom-8 left-1/2 flex -translate-x-1/2 flex-col items-center gap-1 text-xs font-medium transition-colors"
          aria-label="Scroll to work"
        >
          <span className="sr-only">Scroll down</span>
          <motion.span
            animate={{ y: [0, 6, 0] }}
            transition={{ duration: 1.6, repeat: Infinity, ease: "easeInOut" }}
          >
            <ChevronDown className="size-5" />
          </motion.span>
        </motion.button>
      ) : null}
    </section>
  );
}

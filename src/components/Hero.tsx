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
      className="relative overflow-hidden px-4 pt-20 pb-16 sm:px-6 sm:pt-24 sm:pb-20 lg:px-8 lg:pt-32 lg:pb-24"
    >
      <div className="pointer-events-none absolute inset-0 -z-10">
        {!reduced ? (
          <>
            <motion.div
              className="bg-primary/20 absolute top-[15%] left-[10%] h-48 w-48 rounded-full blur-[80px] sm:h-72 sm:w-72"
              animate={{ y: [0, -20, 0] }}
              transition={{ duration: 9, repeat: Infinity, ease: "easeInOut" }}
            />
            <motion.div
              className="absolute top-[25%] right-[5%] h-56 w-56 rounded-full bg-[#6C63FF]/20 blur-[90px] sm:h-80 sm:w-80"
              animate={{ y: [0, 16, 0] }}
              transition={{ duration: 11, repeat: Infinity, ease: "easeInOut" }}
            />
          </>
        ) : (
          <div className="bg-primary/15 absolute top-1/4 left-1/2 h-64 w-64 -translate-x-1/2 rounded-full blur-[80px]" />
        )}
      </div>

      <div className="mx-auto grid w-full max-w-6xl items-center gap-8 sm:gap-10 lg:grid-cols-2 lg:gap-14 xl:gap-16">
        <motion.div
          initial={reduced ? false : "hidden"}
          animate="visible"
          variants={staggerContainer}
          className="order-1 flex flex-col items-center text-center lg:items-start lg:text-left"
        >
          <motion.div
            variants={staggerItem}
            className="border-border/60 bg-card/40 mb-6 inline-flex max-w-full items-center gap-2 rounded-full border px-3 py-1.5 text-[11px] font-medium shadow-sm backdrop-blur-md sm:text-xs"
          >
            <span className="relative flex h-2 w-2 shrink-0">
              <span className="bg-primary absolute inline-flex h-full w-full animate-ping rounded-full opacity-40" />
              <span className="bg-primary relative inline-flex h-2 w-2 rounded-full" />
            </span>
            <span className="truncate">Full stack developer · Open to projects</span>
          </motion.div>

          <motion.h1
            variants={staggerItem}
            className="font-[family-name:var(--font-heading)] max-w-xl text-[1.65rem] leading-[1.15] font-bold tracking-tight text-balance sm:text-3xl sm:leading-[1.12] md:text-4xl lg:text-[2.35rem] lg:leading-[1.1]"
          >
            <span className="text-foreground block">
              I Build Modern Websites, Ecommerce Platforms
            </span>
            <span className="text-gradient-shimmer mt-1 block sm:mt-2">
              &amp; Scalable Web Applications
            </span>
          </motion.h1>

          <motion.p
            variants={staggerItem}
            className="text-muted-foreground mt-4 max-w-lg text-sm leading-relaxed sm:mt-5 sm:text-base md:text-lg"
          >
            I&apos;m Giftson, a full stack web developer focused on building fast,
            responsive, and modern digital solutions for businesses, startups, and
            individuals.
          </motion.p>

          <motion.div
            variants={staggerItem}
            className="mt-6 flex w-full max-w-xs flex-col gap-3 sm:mt-8 sm:max-w-none sm:flex-row sm:flex-wrap sm:justify-center sm:gap-4 lg:justify-start"
          >
            <Button
              size="lg"
              className="from-primary to-primary/85 text-primary-foreground h-12 w-full rounded-full bg-gradient-to-r px-6 text-sm font-semibold shadow-lg shadow-primary/25 sm:w-auto sm:px-8 sm:text-base"
              onClick={() =>
                document.getElementById("portfolio")?.scrollIntoView({
                  behavior: "smooth",
                })
              }
            >
              View my work
              <ArrowRight className="ml-2 size-4 sm:size-5" aria-hidden />
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="surface-glass h-12 w-full rounded-full border px-6 text-sm font-semibold sm:w-auto sm:px-8 sm:text-base"
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
            className="text-muted-foreground mt-6 flex max-w-lg flex-wrap items-center justify-center gap-2 sm:mt-8 sm:gap-3 lg:justify-start"
          >
            {highlights.map(({ label, icon: Icon }) => (
              <li
                key={label}
                className="surface-glass flex items-center gap-1.5 rounded-full border px-2.5 py-1 text-[10px] font-medium sm:gap-2 sm:px-3 sm:py-1.5 sm:text-xs"
              >
                <Icon className="text-primary size-3 shrink-0 sm:size-3.5" aria-hidden />
                <span>{label}</span>
              </li>
            ))}
          </motion.ul>
        </motion.div>

        <motion.div
          initial={reduced ? false : { opacity: 0, y: 20 }}
          animate={reduced ? undefined : { opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.15, ease: easeOut }}
          className="order-2 mx-auto w-full max-w-[240px] sm:max-w-[280px] md:max-w-sm lg:mx-0 lg:max-w-md lg:justify-self-end"
        >
          <div className="relative">
            <div className="from-primary/25 pointer-events-none absolute -inset-3 rounded-[1.75rem] bg-gradient-to-br to-transparent blur-2xl" />
            <div className="border-primary/20 pointer-events-none absolute inset-0 translate-x-2 translate-y-2 rounded-[1.5rem] border bg-gradient-to-br from-primary/10 to-transparent sm:translate-x-3 sm:translate-y-3 sm:rounded-[1.75rem]" />
            <img
              src="/founder.png"
              alt="Giftson Swaminathan"
              width={400}
              height={500}
              className="media-cover relative aspect-[4/5] w-full rounded-[1.5rem] border border-white/10 object-cover object-top shadow-2xl sm:rounded-[1.75rem]"
              loading="eager"
              decoding="async"
            />
            <div className="surface-glass absolute bottom-3 left-3 right-3 rounded-xl border px-3 py-2.5 shadow-lg sm:bottom-4 sm:left-4 sm:right-auto sm:max-w-[220px]">
              <p className="text-primary text-[9px] font-bold tracking-widest uppercase sm:text-[10px]">
                Trusted delivery
              </p>
              <p className="text-foreground text-xs font-semibold sm:text-sm">
                Websites · Ecommerce · Apps
              </p>
            </div>
          </div>
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
          className="text-muted-foreground hover:text-foreground absolute bottom-4 left-1/2 hidden -translate-x-1/2 flex-col items-center gap-1 text-xs font-medium transition-colors sm:flex"
          aria-label="Scroll to work"
        >
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

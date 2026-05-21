import { motion } from "motion/react";
import { Badge } from "@/components/ui/badge";
import { SectionShell } from "@/src/components/SectionShell";
import { staggerContainer, staggerItem } from "@/src/lib/motion";
import { usePrefersReducedMotion } from "@/src/hooks/usePrefersReducedMotion";

export default function About() {
  const reduced = usePrefersReducedMotion();

  return (
    <SectionShell
      id="about"
      className="border-border/40 border-t py-14 sm:py-24 lg:py-28"
    >
      <motion.div
        initial={reduced ? false : "hidden"}
        whileInView="visible"
        viewport={{ once: true, margin: "-80px" }}
        variants={staggerContainer}
        className="mx-auto max-w-3xl"
      >
        <motion.p
          variants={staggerItem}
          className="text-primary mb-3 text-xs font-semibold tracking-[0.2em] uppercase"
        >
          About
        </motion.p>
        <motion.h2
          variants={staggerItem}
          className="text-3xl font-semibold tracking-tight sm:text-4xl lg:text-5xl"
        >
          Full stack developer, product-minded builder
        </motion.h2>
        <motion.div
          variants={staggerItem}
          className="text-muted-foreground mt-6 space-y-5 text-base leading-relaxed sm:text-lg"
        >
          <p>
            I&apos;m a full stack web developer passionate about building modern
            digital experiences that are fast, scalable, and user-focused. I
            work across both frontend and backend technologies to create
            professional websites, ecommerce platforms, dashboards, and custom
            web applications.
          </p>
          <p>
            My development approach focuses on clean architecture, responsive
            design, performance optimization, and intuitive user experience. I
            enjoy transforming ideas into real-world digital products that not
            only look modern but also function efficiently across all devices.
          </p>
          <p>
            Alongside web development, I continuously explore automation systems,
            AI-powered workflows, and scalable application structures to expand
            the kinds of solutions I can build for clients and businesses.
          </p>
        </motion.div>
        <motion.div
          variants={staggerItem}
          className="mt-10 flex flex-wrap gap-2"
        >
          {["Full stack development", "UI / UX", "Performance & SEO"].map(
            (label) => (
              <motion.div
                key={label}
                whileHover={reduced ? undefined : { scale: 1.05 }}
              >
                <Badge
                  variant="secondary"
                  className="rounded-full px-4 py-2 text-[10px] font-bold tracking-widest uppercase"
                >
                  {label}
                </Badge>
              </motion.div>
            ),
          )}
        </motion.div>
      </motion.div>
    </SectionShell>
  );
}

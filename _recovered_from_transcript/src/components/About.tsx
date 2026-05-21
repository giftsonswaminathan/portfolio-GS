import { motion, useScroll, useTransform } from "motion/react";
import { useRef } from "react";
import { Badge } from "@/components/ui/badge";
import { SectionShell } from "@/src/components/SectionShell";
import { SectionHeading } from "@/src/components/motion/SectionHeading";
import { slideFromLeft, slideFromRight } from "@/src/lib/motion";
import { PERSON } from "@/src/content/site";
import { usePrefersReducedMotion } from "@/src/hooks/usePrefersReducedMotion";

export default function About() {
  const reduced = usePrefersReducedMotion();
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const imageY = useTransform(scrollYProgress, [0, 1], [40, -40]);

  return (
    <SectionShell
      id="about"
      className="border-border/40 border-t py-20 sm:py-28"
    >
      <div ref={ref} className="grid grid-cols-1 items-center gap-14 lg:grid-cols-2 lg:gap-20">
        <motion.div
          initial={reduced ? false : "hidden"}
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          variants={slideFromLeft}
          className="relative mx-auto aspect-[4/5] max-w-md lg:mx-0 lg:max-w-none"
        >
          <motion.div
            className="from-primary/25 absolute -inset-3 -z-10 rounded-[2rem] bg-gradient-to-br to-transparent blur-2xl"
            animate={reduced ? undefined : { opacity: [0.35, 0.65, 0.35] }}
            transition={{ duration: 5, repeat: Infinity }}
          />
          <div className="border-primary/20 absolute inset-0 -z-10 translate-x-3 translate-y-3 rounded-[1.75rem] border bg-gradient-to-br from-primary/10 to-transparent" />
          <motion.img
            src="/founder.png"
            alt={`${PERSON.name}, ${PERSON.role}`}
            style={reduced ? undefined : { y: imageY }}
            className="border-border/50 size-full rounded-[1.75rem] border object-cover object-top shadow-2xl shadow-black/40"
            loading="lazy"
            decoding="async"
          />
          <motion.div
            initial={reduced ? false : { opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="surface-glass absolute bottom-5 left-5 max-w-[min(100%,280px)] rounded-2xl border p-4 shadow-lg"
          >
            <p className="text-xs font-semibold tracking-widest text-primary uppercase">
              {PERSON.role}
            </p>
            <p className="text-foreground mt-1 text-lg font-semibold tracking-tight">
              {PERSON.name}
            </p>
            <p className="text-muted-foreground text-sm">
              Websites · ecommerce · web apps
            </p>
          </motion.div>
        </motion.div>

        <motion.div
          initial={reduced ? false : "hidden"}
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          variants={slideFromRight}
        >
          <SectionHeading
            label="About"
            title="Full stack developer, product-minded builder"
          />
          <div className="text-muted-foreground -mt-6 space-y-5 text-base leading-relaxed sm:text-lg">
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
          </div>
          <motion.div
            initial={reduced ? false : "hidden"}
            whileInView="visible"
            viewport={{ once: true }}
            variants={{
              visible: { transition: { staggerChildren: 0.06 } },
            }}
            className="mt-10 flex flex-wrap gap-2"
          >
            {[
              "Full stack development",
              "UI / UX",
              "Performance & SEO",
            ].map((label) => (
              <motion.div
                key={label}
                variants={{
                  hidden: { opacity: 0, scale: 0.9 },
                  visible: { opacity: 1, scale: 1 },
                }}
                whileHover={reduced ? undefined : { scale: 1.05 }}
              >
                <Badge
                  variant="secondary"
                  className="rounded-full px-4 py-2 text-[10px] font-bold tracking-widest uppercase"
                >
                  {label}
                </Badge>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </SectionShell>
  );
}

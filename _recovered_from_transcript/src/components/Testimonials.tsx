import { motion } from "motion/react";
import { Quote } from "lucide-react";
import { SectionShell } from "@/src/components/SectionShell";
import { SectionHeading } from "@/src/components/motion/SectionHeading";
import { staggerContainer, staggerItem } from "@/src/lib/motion";
import { usePrefersReducedMotion } from "@/src/hooks/usePrefersReducedMotion";

const testimonials = [
  {
    quote:
      "Giftson delivered a polished, fast website that matched our brand perfectly. Communication was clear throughout.",
    name: "Client — Salon project",
    role: "Business website",
  },
  {
    quote:
      "The portfolio site looks premium on every device. Great attention to UI detail and performance.",
    name: "Client — Architecture portfolio",
    role: "Design-forward build",
  },
  {
    quote:
      "Our ecommerce flow feels smooth and modern. Solid full stack work from design through deployment.",
    name: "Client — Ecommerce platform",
    role: "Custom web application",
  },
] as const;

export default function Testimonials() {
  const reduced = usePrefersReducedMotion();

  return (
    <SectionShell
      id="testimonials"
      className="border-border/40 border-t py-[64px] lg:py-[120px]"
    >
      <SectionHeading
        label="Testimonials"
        title={
          <>
            Trusted by <span className="text-gradient">real projects</span>
          </>
        }
        description="Feedback from builds shipped for salons, portfolios, and ecommerce brands."
      />

      <motion.div
        initial={reduced ? false : "hidden"}
        whileInView="visible"
        viewport={{ once: true, margin: "-50px" }}
        variants={staggerContainer}
        className="grid gap-6 md:grid-cols-3"
      >
        {testimonials.map((t) => (
          <motion.blockquote
            key={t.name}
            variants={staggerItem}
            className="surface-glass glow-hover flex h-full flex-col rounded-2xl border p-6"
          >
            <Quote className="text-[#6C63FF] mb-4 size-8 opacity-80" aria-hidden />
            <p className="text-[#cbd5e1] flex-grow text-sm leading-relaxed">
              &ldquo;{t.quote}&rdquo;
            </p>
            <footer className="mt-6 border-t border-white/5 pt-4">
              <cite className="text-white not-italic text-sm font-bold">
                {t.name}
              </cite>
              <p className="text-muted-foreground mt-1 text-xs">{t.role}</p>
            </footer>
          </motion.blockquote>
        ))}
      </motion.div>
    </SectionShell>
  );
}

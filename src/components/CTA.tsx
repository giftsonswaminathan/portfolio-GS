import { motion } from "motion/react";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { SectionShell } from "@/src/components/SectionShell";
import { SectionHeading } from "@/src/components/motion/SectionHeading";
import { usePrefersReducedMotion } from "@/src/hooks/usePrefersReducedMotion";

export default function CTA() {
  const reduced = usePrefersReducedMotion();

  return (
    <SectionShell
      id="cta"
      className="relative py-16 sm:py-24 lg:py-28"
      size="wide"
    >
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_70%_60%_at_50%_50%,rgba(108,99,255,0.2),transparent)]" />
      <motion.div
        initial={reduced ? false : { opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        className="surface-glass glow-hover mx-auto max-w-4xl rounded-2xl border border-white/10 p-6 text-center sm:rounded-3xl sm:p-10 lg:p-14"
      >
        <SectionHeading
          label="Ready to start?"
          title={
            <>
              Let&apos;s turn your idea into a{" "}
              <span className="text-gradient">high-performing website</span>
            </>
          }
          description="Book a free consultation—clear scope, fast delivery, and a modern build tailored to your business."
          align="center"
          className="mb-8"
        />
        <Button
          size="lg"
          className="bg-gradient-to-r from-[#6C63FF] to-[#00D4FF] text-white font-bold h-12 px-8 rounded-full border-0 cta-btn-glow cursor-pointer"
          onClick={() =>
            document.getElementById("contact")?.scrollIntoView({
              behavior: "smooth",
            })
          }
        >
          Get a Free Quote
          <ArrowRight className="ml-2 size-5" aria-hidden />
        </Button>
      </motion.div>
    </SectionShell>
  );
}

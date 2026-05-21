import { motion } from "motion/react";
import {
  Building2,
  Layers,
  LayoutDashboard,
  RefreshCw,
  ShoppingCart,
} from "lucide-react";
import { SectionShell } from "@/src/components/SectionShell";
import { SectionHeading } from "@/src/components/motion/SectionHeading";
import { staggerContainer, staggerItem } from "@/src/lib/motion";
import { services, type ServiceIcon } from "@/src/content/site";
import { usePrefersReducedMotion } from "@/src/hooks/usePrefersReducedMotion";

const icons: Record<ServiceIcon, typeof Building2> = {
  business: Building2,
  ecommerce: ShoppingCart,
  app: LayoutDashboard,
  stack: Layers,
  refresh: RefreshCw,
};

export default function Services() {
  const reduced = usePrefersReducedMotion();

  return (
    <SectionShell
      id="services"
      className="border-border/40 border-t py-14 sm:py-24 lg:py-28"
    >
      <SectionHeading
        label="Services"
        title={
          <>
            What I build for{" "}
            <span className="text-muted-foreground">your business</span>
          </>
        }
        description="Clear offerings—from marketing sites to full-stack products—so clients know exactly what they're hiring you for."
      />

      <motion.div
        initial={reduced ? false : "hidden"}
        whileInView="visible"
        viewport={{ once: true, margin: "-60px" }}
        variants={staggerContainer}
        className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3 lg:gap-5"
      >
        {services.map((service) => {
          const Icon = icons[service.icon];
          return (
            <motion.article
              key={service.title}
              variants={staggerItem}
              whileHover={
                reduced
                  ? undefined
                  : { y: -8, transition: { duration: 0.25 } }
              }
              className="surface-glass group border-border/50 hover:border-primary/30 relative overflow-hidden rounded-2xl border p-6 transition-colors lg:p-8"
            >
              <motion.div
                className="from-primary/20 pointer-events-none absolute inset-0 bg-gradient-to-br to-transparent opacity-0 transition-opacity group-hover:opacity-100"
                aria-hidden
              />
              <motion.div
                whileHover={reduced ? undefined : { rotate: [0, -6, 6, 0] }}
                transition={{ duration: 0.45 }}
                className="bg-primary/15 text-primary mb-5 inline-flex size-11 items-center justify-center rounded-xl"
              >
                <Icon className="size-5" aria-hidden />
              </motion.div>
              <h3 className="relative text-lg font-semibold tracking-tight capitalize">
                {service.title}
              </h3>
              <p className="text-muted-foreground relative mt-2 text-sm leading-relaxed">
                {service.description}
              </p>
            </motion.article>
          );
        })}
      </motion.div>
    </SectionShell>
  );
}

import { motion } from "motion/react";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Check } from "lucide-react";
import { SectionShell } from "@/src/components/SectionShell";
import { BOOKING_FORM_URL, pricingPlans } from "@/src/content/site";

export default function Pricing() {
  return (
    <section
      id="pricing"
      className="scroll-mt-28 border-border/40 relative border-y py-20 sm:py-28"
    >
      <div className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(ellipse_80%_50%_at_50%_0%,oklch(0.25_0.08_195/0.35),transparent)]" />
      <SectionShell>
        <div className="mb-14 text-center lg:mb-20">
          <p className="text-primary mb-3 text-xs font-semibold tracking-[0.2em] uppercase">
            Pricing
          </p>
          <h2 className="mx-auto max-w-3xl text-3xl font-semibold tracking-tight sm:text-4xl lg:text-5xl">
            Get more customers for your business
          </h2>
          <p className="text-muted-foreground mx-auto mt-4 max-w-2xl text-base leading-relaxed sm:text-lg">
            Stop losing enquiries to competitors. Transparent tiers built for
            local businesses that need calls, WhatsApp leads, and credibility
            fast.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-5 md:grid-cols-3 lg:gap-6">
          {pricingPlans.map((plan, i) => (
            <motion.div
              key={plan.name}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{
                duration: 0.45,
                delay: i * 0.08,
                ease: [0.22, 1, 0.36, 1],
              }}
            >
              <Card
                className={`surface-glass relative flex h-full flex-col overflow-hidden rounded-2xl border py-0 transition-shadow duration-500 hover:shadow-xl ${
                  plan.popular
                    ? "border-primary/50 ring-primary/30 shadow-primary/10 ring-2 shadow-lg"
                    : "border-border/50"
                }`}
              >
                {plan.popular ? (
                  <div className="absolute top-4 right-4">
                    <span className="bg-primary text-primary-foreground rounded-full px-2.5 py-1 text-[10px] font-bold tracking-widest uppercase">
                      Most popular
                    </span>
                  </div>
                ) : null}

                <CardHeader className="border-border/40 border-b px-6 pt-8 pb-4">
                  <CardTitle className="text-xl font-semibold tracking-tight capitalize">
                    {plan.name}
                  </CardTitle>
                  <CardDescription className="text-muted-foreground mt-2 text-sm leading-relaxed">
                    {plan.description}
                  </CardDescription>
                </CardHeader>

                <CardContent className="flex flex-1 flex-col px-6 pt-6">
                  <div className="mb-6">
                    <span className="text-4xl font-semibold tracking-tight">
                      {plan.price}
                    </span>
                    <span className="text-muted-foreground ml-2 text-sm">
                      one-time
                    </span>
                  </div>
                  <ul className="flex flex-1 flex-col gap-3.5">
                    {plan.features.map((feature) => (
                      <li
                        key={feature}
                        className="text-muted-foreground flex gap-3 text-sm leading-snug"
                      >
                        <Check
                          className="text-primary mt-0.5 size-4 shrink-0"
                          aria-hidden
                        />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </CardContent>

                <CardFooter className="border-border/40 border-t p-6">
                  <Button
                    className="h-11 w-full rounded-full text-sm font-semibold shadow-lg shadow-primary/15"
                    variant={plan.popular ? "default" : "secondary"}
                    onClick={() =>
                      window.open(BOOKING_FORM_URL, "_blank", "noopener,noreferrer")
                    }
                  >
                    {plan.cta}
                  </Button>
                </CardFooter>
              </Card>
            </motion.div>
          ))}
        </div>
      </SectionShell>
    </section>
  );
}

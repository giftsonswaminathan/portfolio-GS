import { motion } from "motion/react";
import { Button, buttonVariants } from "@/components/ui/button";
import { ArrowRight, Instagram, Linkedin, Mail } from "lucide-react";
import { WhatsAppIcon } from "@/src/components/WhatsAppButton";
import { cn } from "@/lib/utils";
import {
  BOOKING_FORM_URL,
  CONTACT_MAILTO,
  CONTACT_EMAIL,
  PERSON,
  SOCIAL,
} from "@/src/content/site";

const footerTagline =
  "Building modern websites, ecommerce platforms, and scalable digital experiences with clean design and performance-focused development.";

export default function Footer() {
  return (
    <footer
      id="contact"
      className="scroll-mt-24 border-border/40 relative border-t px-4 pt-16 pb-24 sm:scroll-mt-28 sm:px-6 sm:pt-24 sm:pb-28 lg:px-8"
    >
      <div className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(ellipse_70%_60%_at_70%_100%,oklch(0.28_0.1_280/0.25),transparent)]" />
      <div className="mx-auto max-w-6xl">
        <div className="grid grid-cols-1 gap-14 lg:grid-cols-12 lg:gap-10">
          <motion.div
            className="lg:col-span-6"
            initial={{ opacity: 0, y: 28 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          >
            <h2 className="text-2xl leading-[1.12] font-semibold tracking-tight sm:text-3xl lg:text-4xl">
              Let&apos;s build{" "}
              <span className="text-gradient-shimmer">something great together</span>
            </h2>
            <p className="text-muted-foreground mt-6 max-w-xl text-lg leading-relaxed">
              Whether you need a business website, ecommerce platform, portfolio,
              or custom web application, I can help build a modern, scalable, and
              high-performing digital solution tailored to your needs.
            </p>
            <div className="mt-10 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
              <Button
                size="lg"
                className="from-primary to-primary/85 text-primary-foreground group relative h-12 rounded-full bg-gradient-to-r px-8 text-base shadow-xl shadow-primary/25"
                onClick={() =>
                  window.open(BOOKING_FORM_URL, "_blank", "noopener,noreferrer")
                }
              >
                <Mail className="mr-2 size-5" aria-hidden />
                Send a message
                <ArrowRight
                  className="ml-2 size-5 transition-transform group-hover:translate-x-0.5"
                  aria-hidden
                />
              </Button>
              <a
                href={CONTACT_MAILTO}
                className={cn(
                  buttonVariants({ variant: "outline", size: "lg" }),
                  "surface-glass h-12 rounded-full border px-8 text-base",
                )}
              >
                Email me
              </a>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 28 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
            className="surface-glass glow-cyan flex flex-col justify-between rounded-3xl border p-8 lg:col-span-6 lg:min-h-[280px]"
          >
            <div>
              <div className="mb-6 flex items-center gap-2">
                <span
                  className="bg-primary size-2 animate-pulse rounded-full"
                  aria-hidden
                />
                <span className="text-muted-foreground text-xs font-bold tracking-[0.2em] uppercase">
                  Open to collaborations
                </span>
              </div>
              <h3 className="text-2xl font-semibold tracking-tight">
                {PERSON.name}
              </h3>
              <p className="text-muted-foreground mt-1 text-sm capitalize">
                {PERSON.role}
              </p>
            </div>
            <a
              href={CONTACT_MAILTO}
              className="text-foreground group mt-8 inline-flex items-center text-lg font-semibold break-all underline-offset-4 hover:underline sm:text-xl"
            >
              {CONTACT_EMAIL}
              <ArrowRight
                className="ml-2 size-5 shrink-0 opacity-0 transition-all group-hover:translate-x-0 group-hover:opacity-100"
                aria-hidden
              />
            </a>
          </motion.div>
        </div>

        <p className="text-muted-foreground mx-auto mt-14 max-w-3xl text-center text-sm leading-relaxed sm:text-base">
          {footerTagline}
        </p>

        <div className="border-border/40 mt-12 flex flex-col items-center justify-between gap-6 border-t pt-10 text-sm sm:flex-row">
          <div className="flex items-center gap-2 text-center sm:text-left">
            <div className="from-primary to-primary/70 text-primary-foreground flex size-8 items-center justify-center rounded-lg bg-gradient-to-br text-[10px] font-bold">
              {PERSON.initials}
            </div>
            <span className="text-muted-foreground font-medium">
              {PERSON.name} © {new Date().getFullYear()}
            </span>
          </div>
          <div className="flex items-center gap-2 sm:gap-4">
            <a
              href={SOCIAL.whatsapp}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-xl p-2 text-[#25D366] transition-colors hover:bg-[#25D366]/10"
              aria-label="WhatsApp"
            >
              <WhatsAppIcon className="size-6" />
            </a>
            <a
              href={SOCIAL.instagram}
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-foreground rounded-xl p-2 transition-colors hover:bg-white/5"
              aria-label="Instagram"
            >
              <Instagram className="size-6" />
            </a>
            <a
              href={SOCIAL.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-foreground rounded-xl p-2 transition-colors hover:bg-white/5"
              aria-label="LinkedIn"
            >
              <Linkedin className="size-6" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

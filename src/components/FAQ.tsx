import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { SectionShell } from "@/src/components/SectionShell";
import { faqs } from "@/src/content/site";

export default function FAQ() {
  return (
    <SectionShell id="faq" className="py-20 sm:py-28">
      <div className="mb-10 max-w-2xl lg:mb-14">
        <p className="text-primary mb-3 text-xs font-semibold tracking-[0.2em] uppercase">
          FAQ
        </p>
        <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl lg:text-5xl">
          Straight answers
        </h2>
        <p className="text-muted-foreground mt-3 text-base">
          Scope, timelines, pricing, and stack—without the fluff.
        </p>
      </div>

      <Accordion type="single" collapsible className="w-full space-y-3">
        {faqs.map((faq, i) => (
          <AccordionItem
            key={faq.question}
            value={`item-${i}`}
            className="surface-glass border-border/50 rounded-2xl border px-1 transition-colors"
          >
            <AccordionTrigger className="text-foreground px-5 py-5 text-left text-base font-semibold hover:no-underline sm:text-lg">
              {faq.question}
            </AccordionTrigger>
            <AccordionContent className="text-muted-foreground px-5 pt-0 pb-5 text-sm leading-relaxed sm:text-base">
              {faq.answer}
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </SectionShell>
  );
}

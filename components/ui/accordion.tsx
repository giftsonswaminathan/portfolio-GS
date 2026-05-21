import * as React from "react";
import { ChevronDownIcon } from "lucide-react";

import { cn } from "@/lib/utils";

type AccordionContextValue = {
  open: string | undefined;
  toggle: (value: string) => void;
  collapsible: boolean;
};

const AccordionContext = React.createContext<AccordionContextValue | null>(
  null,
);

const ItemContext = React.createContext<string | null>(null);

function useAccordion() {
  const ctx = React.useContext(AccordionContext);
  if (!ctx) {
    throw new Error("Accordion components must be used within Accordion");
  }
  return ctx;
}

function useAccordionItem() {
  const value = React.useContext(ItemContext);
  if (!value) {
    throw new Error("AccordionTrigger/Content must be inside AccordionItem");
  }
  return value;
}

function Accordion({
  type: _type = "single",
  collapsible = false,
  className,
  children,
  ...props
}: React.ComponentProps<"div"> & {
  type?: "single";
  collapsible?: boolean;
}) {
  const [open, setOpen] = React.useState<string | undefined>(undefined);

  const toggle = React.useCallback(
    (value: string) => {
      setOpen((current) => {
        if (current === value) {
          return collapsible ? undefined : value;
        }
        return value;
      });
    },
    [collapsible],
  );

  return (
    <AccordionContext.Provider value={{ open, toggle, collapsible }}>
      <div data-slot="accordion" className={className} {...props}>
        {children}
      </div>
    </AccordionContext.Provider>
  );
}

function AccordionItem({
  value,
  className,
  children,
  ...props
}: React.ComponentProps<"div"> & { value: string }) {
  return (
    <ItemContext.Provider value={value}>
      <div
        data-slot="accordion-item"
        data-value={value}
        className={cn("border-b last:border-b-0", className)}
        {...props}
      >
        {children}
      </div>
    </ItemContext.Provider>
  );
}

function AccordionTrigger({
  className,
  children,
  ...props
}: React.ComponentProps<"button">) {
  const item = useAccordionItem();
  const { open, toggle } = useAccordion();
  const isOpen = open === item;

  return (
    <h3 className="flex">
      <button
        type="button"
        data-slot="accordion-trigger"
        data-state={isOpen ? "open" : "closed"}
        aria-expanded={isOpen}
        className={cn(
          "flex flex-1 items-start justify-between gap-4 rounded-md py-4 text-left text-sm font-medium transition-all outline-none hover:underline focus-visible:border-ring focus-visible:ring-[3px] focus-visible:ring-ring/50 disabled:pointer-events-none disabled:opacity-50 [&[data-state=open]>svg]:rotate-180",
          className,
        )}
        onClick={() => toggle(item)}
        {...props}
      >
        {children}
        <ChevronDownIcon className="pointer-events-none size-4 shrink-0 translate-y-0.5 text-muted-foreground transition-transform duration-200" />
      </button>
    </h3>
  );
}

function AccordionContent({
  className,
  children,
  ...props
}: React.ComponentProps<"div">) {
  const item = useAccordionItem();
  const { open } = useAccordion();
  const isOpen = open === item;

  if (!isOpen) return null;

  return (
    <div
      data-slot="accordion-content"
      data-state="open"
      className="overflow-hidden text-sm"
      {...props}
    >
      <div className={cn("pt-0 pb-4", className)}>{children}</div>
    </div>
  );
}

export { Accordion, AccordionItem, AccordionTrigger, AccordionContent };

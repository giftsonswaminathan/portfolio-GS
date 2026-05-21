import { useMemo, useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ExternalLink, Github } from "lucide-react";
import { SectionShell } from "@/src/components/SectionShell";
import { SectionHeading } from "@/src/components/motion/SectionHeading";
import { TiltCard } from "@/src/components/motion/TiltCard";
import {
  projects,
  type Project,
  type ProjectCategory,
} from "@/src/content/site";
import { springPop } from "@/src/lib/motion";
import { cn } from "@/lib/utils";

type Filter = "all" | ProjectCategory;

const filters: { id: Filter; label: string }[] = [
  { id: "all", label: "All" },
  { id: "business", label: "Business sites" },
  { id: "ecommerce", label: "Ecommerce" },
];

function matchesFilter(project: Project, filter: Filter) {
  if (filter === "all") return true;
  return project.categories.includes(filter);
}

export default function Portfolio() {
  const [filter, setFilter] = useState<Filter>("all");

  const visible = useMemo(
    () => projects.filter((p) => matchesFilter(p, filter)),
    [filter],
  );

  return (
    <SectionShell
      id="portfolio"
      className="py-20 sm:py-28"
      size="wide"
      innerClassName="max-w-6xl"
    >
      <div className="mb-12 flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
        <SectionHeading
          className="mb-0 max-w-xl"
          label="Portfolio"
          title="Proof you can hire with confidence"
          description="Live client-style builds—responsive, modern, and built to convert visitors into leads."
        />
        <div
          className="flex flex-wrap gap-2 lg:shrink-0"
          role="tablist"
          aria-label="Filter projects"
        >
          {filters.map((f) => (
            <button
              key={f.id}
              type="button"
              role="tab"
              aria-selected={filter === f.id}
              onClick={() => setFilter(f.id)}
              className={cn(
                "relative rounded-full px-4 py-2 text-sm font-medium transition-colors outline-none focus-visible:ring-2 focus-visible:ring-ring",
                filter === f.id
                  ? "text-primary-foreground"
                  : "text-muted-foreground hover:text-foreground border-border/60 bg-card/30 border",
              )}
            >
              {filter === f.id ? (
                <motion.span
                  layoutId="portfolio-filter"
                  className="bg-primary absolute inset-0 rounded-full shadow-lg shadow-primary/25"
                  transition={springPop}
                />
              ) : null}
              <span className="relative z-10">{f.label}</span>
            </button>
          ))}
        </div>
      </div>

      <motion.div layout className="grid grid-cols-1 gap-5 md:grid-cols-2 xl:grid-cols-3 xl:gap-6">
        <AnimatePresence mode="popLayout">
          {visible.map((project, i) => (
            <motion.article
              key={project.title}
              layout
              initial={{ opacity: 0, scale: 0.94, y: 24 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.94, y: 12 }}
              transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
              className={cn(
                i === 0 && filter === "all" && "xl:col-span-2",
              )}
            >
              <TiltCard className="h-full">
                <Card
                  className={cn(
                    "surface-glass border-border/50 group h-full overflow-hidden rounded-2xl border-0 py-0 transition-shadow duration-500 hover:shadow-2xl hover:shadow-primary/10",
                    i === 0 && filter === "all" && "xl:flex xl:max-h-[22rem] xl:flex-row",
                  )}
                >
                  <div
                    className={cn(
                      "relative overflow-hidden",
                      i === 0 && filter === "all"
                        ? "aspect-[4/3] xl:aspect-auto xl:h-auto xl:w-1/2 xl:min-h-[16rem]"
                        : "aspect-[16/11] sm:aspect-[5/3]",
                    )}
                  >
                    <motion.img
                      src={project.image}
                      alt={`${project.title} preview`}
                      loading="lazy"
                      decoding="async"
                      className="size-full object-cover"
                      whileHover={{ scale: 1.05 }}
                      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/20 to-transparent" />
                    <div className="absolute inset-0 flex items-center justify-center gap-3 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                      <motion.a
                        href={project.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.95 }}
                        className="bg-background text-foreground flex size-12 items-center justify-center rounded-full shadow-lg"
                        aria-label={`Open live site: ${project.title}`}
                      >
                        <ExternalLink className="size-5" />
                      </motion.a>
                      {project.github ? (
                        <motion.a
                          href={project.github}
                          target="_blank"
                          rel="noopener noreferrer"
                          whileHover={{ scale: 1.1 }}
                          whileTap={{ scale: 0.95 }}
                          className="bg-background text-foreground flex size-12 items-center justify-center rounded-full shadow-lg"
                          aria-label={`View source for ${project.title}`}
                        >
                          <Github className="size-5" />
                        </motion.a>
                      ) : null}
                    </div>
                  </div>
                  <CardContent
                    className={cn(
                      "flex flex-col p-5 sm:p-6",
                      i === 0 && filter === "all" && "xl:w-1/2 xl:justify-center",
                    )}
                  >
                    <div className="mb-3 flex flex-wrap gap-2">
                      {project.tags.map((tag) => (
                        <span
                          key={tag}
                          className="bg-muted/80 text-muted-foreground rounded-md px-2 py-1 text-[10px] font-semibold tracking-wider uppercase"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                    <h3 className="text-xl font-semibold tracking-tight">
                      {project.title}
                    </h3>
                    <p className="text-muted-foreground mt-2 text-sm leading-relaxed">
                      {project.description}
                    </p>
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-primary mt-4 inline-flex items-center gap-1.5 text-sm font-medium sm:hidden"
                    >
                      View live site
                      <ExternalLink className="size-3.5" aria-hidden />
                    </a>
                  </CardContent>
                </Card>
              </TiltCard>
            </motion.article>
          ))}
        </AnimatePresence>
      </motion.div>

      {visible.length === 0 ? (
        <p className="text-muted-foreground mt-10 text-center text-sm">
          No projects in this category yet.
        </p>
      ) : null}

      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        whileHover={{ scale: 1.01 }}
        transition={{ duration: 0.5 }}
        className="surface-glass glow-cyan border-primary/20 from-primary/10 relative mt-16 overflow-hidden rounded-3xl border bg-gradient-to-br to-transparent p-8 text-center sm:p-12 lg:mt-20"
      >
        <motion.div
          className="bg-primary/20 pointer-events-none absolute -top-24 left-1/2 h-48 w-96 -translate-x-1/2 rounded-full blur-3xl"
          animate={{ opacity: [0.3, 0.6, 0.3] }}
          transition={{ duration: 4, repeat: Infinity }}
          aria-hidden
        />
        <h3 className="relative text-2xl font-semibold tracking-tight sm:text-3xl">
          Ready to be my next success story?
        </h3>
        <p className="text-muted-foreground relative mx-auto mt-3 max-w-lg text-sm sm:text-base">
          Share your idea—I&apos;ll reply with a clear plan, timeline, and how we
          can launch fast.
        </p>
        <motion.div
          className="relative mt-8"
          whileHover={{ scale: 1.03 }}
          whileTap={{ scale: 0.98 }}
        >
          <Button
            size="lg"
            className="rounded-full px-8 shadow-xl shadow-primary/20"
            onClick={() =>
              document.getElementById("contact")?.scrollIntoView({
                behavior: "smooth",
              })
            }
          >
            Start your project
          </Button>
        </motion.div>
      </motion.div>
    </SectionShell>
  );
}

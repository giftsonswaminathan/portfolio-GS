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
  { id: "design", label: "Web design" },
  { id: "development", label: "Development" },
];

function matchesFilter(project: Project, filter: Filter) {
  if (filter === "all") return true;
  return project.categories.includes(filter);
}

function ProjectImage({ project, priority }: { project: Project; priority?: boolean }) {
  const [failed, setFailed] = useState(false);
  const [srcIndex, setSrcIndex] = useState(0);

  const sources = useMemo(
    () => [project.image, project.imageFallback].filter(Boolean) as string[],
    [project.image, project.imageFallback],
  );

  if (failed) {
    return (
      <div className="absolute inset-0 flex flex-col items-center justify-center gap-2 bg-gradient-to-br from-primary/25 via-muted/50 to-background p-4 text-center">
        <span className="text-foreground text-base font-semibold sm:text-lg">
          {project.title}
        </span>
        <a
          href={project.link}
          target="_blank"
          rel="noopener noreferrer"
          className="text-primary text-xs font-medium underline-offset-2 hover:underline"
        >
          Open live site
        </a>
      </div>
    );
  }

  return (
    <img
      src={sources[srcIndex]}
      alt={`${project.title} website preview`}
      width={800}
      height={500}
      loading={priority ? "eager" : "lazy"}
      decoding="async"
      onError={() => {
        if (srcIndex < sources.length - 1) {
          setSrcIndex((i) => i + 1);
        } else {
          setFailed(true);
        }
      }}
      className="media-cover portfolio-preview absolute inset-0 block"
    />
  );
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
      className="py-14 sm:py-24"
      size="wide"
      innerClassName="max-w-6xl"
    >
      <div className="mb-8 flex flex-col gap-5 sm:mb-12 lg:flex-row lg:items-end lg:justify-between lg:gap-8">
        <SectionHeading
          className="mb-0 max-w-xl"
          label="Portfolio"
          title="Proof you can hire with confidence"
          description="Live client-style builds—responsive, modern, and built to convert visitors into leads."
        />
        <div
          className="flex snap-x snap-mandatory gap-2 overflow-x-auto pb-1 [-ms-overflow-style:none] [scrollbar-width:none] lg:flex-wrap lg:overflow-visible [&::-webkit-scrollbar]:hidden"
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
                "relative shrink-0 snap-start rounded-full px-4 py-2.5 text-sm font-medium transition-colors outline-none focus-visible:ring-2 focus-visible:ring-ring min-h-[44px]",
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

      <motion.div
        layout
        className="grid grid-cols-1 gap-5 min-[480px]:grid-cols-1 sm:grid-cols-2 sm:gap-6 lg:grid-cols-3"
      >
        <AnimatePresence mode="popLayout">
          {visible.map((project, index) => (
            <motion.article
              key={project.title}
              layout
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 8 }}
              transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
              className="min-w-0"
            >
              <TiltCard className="h-full w-full min-w-0">
                <Card className="surface-glass border-border/50 group flex h-full min-w-0 flex-col overflow-hidden rounded-2xl border-0 py-0">
                  <div className="relative aspect-[16/10] w-full shrink-0 overflow-hidden bg-[#161829] sm:aspect-[5/3]">
                    <ProjectImage project={project} priority={index === 0} />
                    <div className="pointer-events-none absolute inset-x-0 bottom-0 h-1/4 bg-gradient-to-t from-background/50 to-transparent" />
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="bg-background/95 text-foreground absolute right-3 bottom-3 left-3 inline-flex min-h-[44px] items-center justify-center gap-1.5 rounded-full py-2.5 text-xs font-semibold shadow-md backdrop-blur-sm sm:hidden"
                    >
                      View live site
                      <ExternalLink className="size-3.5 shrink-0" aria-hidden />
                    </a>
                    <div className="absolute inset-0 hidden items-center justify-center gap-3 bg-background/30 opacity-0 transition-opacity duration-300 group-hover:opacity-100 md:flex">
                      <a
                        href={project.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="bg-background text-foreground flex size-11 items-center justify-center rounded-full shadow-lg"
                        aria-label={`Open live site: ${project.title}`}
                      >
                        <ExternalLink className="size-5" />
                      </a>
                      {project.github ? (
                        <a
                          href={project.github}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="bg-background text-foreground flex size-11 items-center justify-center rounded-full shadow-lg"
                          aria-label={`View source for ${project.title}`}
                        >
                          <Github className="size-5" />
                        </a>
                      ) : null}
                    </div>
                  </div>
                  <CardContent className="flex flex-1 flex-col p-4 sm:p-6">
                    <div className="mb-2 flex flex-wrap gap-1.5 sm:mb-3 sm:gap-2">
                      {project.tags.map((tag) => (
                        <span
                          key={tag}
                          className="bg-muted/80 text-muted-foreground rounded-md px-2 py-0.5 text-[10px] font-semibold tracking-wider uppercase sm:py-1"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                    <h3 className="text-base font-semibold tracking-tight sm:text-xl">
                      {project.title}
                    </h3>
                    <p className="text-muted-foreground mt-1.5 flex-1 text-sm leading-relaxed sm:mt-2">
                      {project.description}
                    </p>
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-primary mt-3 hidden min-h-[44px] items-center gap-1.5 text-sm font-medium sm:mt-4 sm:inline-flex"
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
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="surface-glass border-primary/20 from-primary/10 relative mt-10 overflow-hidden rounded-2xl border bg-gradient-to-br to-transparent p-6 text-center sm:mt-16 sm:rounded-3xl sm:p-10"
      >
        <h3 className="text-lg font-semibold tracking-tight sm:text-2xl">
          Ready to be my next success story?
        </h3>
        <p className="text-muted-foreground mx-auto mt-2 max-w-lg text-sm sm:mt-3 sm:text-base">
          Share your idea—I&apos;ll reply with a clear plan, timeline, and how we
          can launch fast.
        </p>
        <Button
          size="lg"
          className="mt-5 h-12 w-full rounded-full px-8 shadow-xl shadow-primary/20 sm:mt-8 sm:w-auto"
          onClick={() =>
            document.getElementById("contact")?.scrollIntoView({
              behavior: "smooth",
            })
          }
        >
          Start your project
        </Button>
      </motion.div>
    </SectionShell>
  );
}

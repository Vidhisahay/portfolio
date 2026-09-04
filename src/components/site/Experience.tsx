import { useState } from "react";
import { Plus } from "lucide-react";
import { Reveal, Section, SectionHeading } from "./primitives";
import { cn } from "@/lib/utils";

const roles = [
  {
    year: "2026",
    title: "AI / Automation Intern",
    org: "Saundh · Mumbai",
    period: "Aug 2026 — Oct 2026",
    focus: ["AI Automation", "Cloud", "Workflows", "Dashboards"],
    details: [
      "Identified manual, repetitive business processes and mapped them to AI-driven automation opportunities.",
      "Built and deployed automation workflows connecting internal tools, APIs and cloud services.",
      "Designed dashboards that surfaced operational metrics for non-technical stakeholders.",
    ],
  },
  {
    year: "2025",
    title: "Backend Development Intern",
    org: "EduMettle · Rourkela",
    period: "Oct 2025 — Dec 2025",
    focus: ["Python", "APIs", "Databases", "Git/GitHub", "Backend"],
    details: [
      "Developed and maintained Python-based backend APIs supporting core application features.",
      "Modelled and queried relational data for new product requirements.",
      "Collaborated through Git/GitHub workflows with code review and structured releases.",
    ],
  },
  {
    year: "2021",
    title: "Graphic Designer",
    org: "Ansah Technologies · Part-time",
    period: "Dec 2021 — Sep 2025",
    focus: ["Graphic Design", "UI/UX", "WordPress", "SEO", "Digital Marketing"],
    details: [
      "Designed digital and marketing creatives including social content, banners and presentations.",
      "Built and maintained WordPress sites with an eye on usability and performance.",
      "Supported SEO and digital marketing work, connecting design decisions to measurable outcomes.",
    ],
  },
];

export function Experience() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <Section id="experience">
      <SectionHeading
        label="Experience"
        title="EXPERIENCE"
        intro="Different domains. Same curiosity."
      />

      <div className="relative mt-14 pl-6 sm:pl-10">
        <div className="absolute top-2 bottom-6 left-0 w-px bg-gradient-to-b from-deepblue via-violet to-magenta opacity-60 sm:left-2" />

        <div className="space-y-5">
          {roles.map((r, i) => {
            const isOpen = open === i;
            return (
              <Reveal key={r.title} delay={i * 90}>
                <div className="relative">
                  <span className="absolute top-8 -left-6 h-2 w-2 -translate-x-1/2 bg-magenta sm:-left-8" />
                  <span className="label-mono absolute -top-1 -left-6 hidden sm:-left-8 sm:inline">
                    {r.year}
                  </span>

                  <article className="glass glass-hover overflow-hidden rounded-3xl">
                    <button
                      type="button"
                      onClick={() => setOpen(isOpen ? null : i)}
                      aria-expanded={isOpen}
                      className="flex w-full items-start gap-5 p-6 text-left sm:p-7"
                    >
                      <div className="flex-1">
                        <h3 className="font-display text-lg font-semibold tracking-tight sm:text-xl">
                          {r.title}
                        </h3>
                        <p className="mt-1 text-sm text-muted-foreground">{r.org}</p>
                        <p className="label-mono mt-2">{r.period}</p>
                        <div className="mt-4 flex flex-wrap gap-2">
                          {r.focus.map((f) => (
                            <span
                              key={f}
                              className="rounded-full border border-border px-3 py-1 font-mono text-[10px] tracking-[0.14em] text-foreground/70 uppercase"
                            >
                              {f}
                            </span>
                          ))}
                        </div>
                      </div>
                      <span
                        className={cn(
                          "glass mt-1 rounded-full p-2 transition-transform duration-500",
                          isOpen && "rotate-45",
                        )}
                      >
                        <Plus className="size-4" />
                      </span>
                    </button>

                    <div
                      className={cn(
                        "grid transition-all duration-500 ease-out",
                        isOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0",
                      )}
                    >
                      <div className="overflow-hidden">
                        <ul className="space-y-3 border-t border-border px-6 py-6 sm:px-7">
                          {r.details.map((d) => (
                            <li
                              key={d}
                              className="flex gap-3 text-sm leading-relaxed text-muted-foreground"
                            >
                              <span className="mt-2 h-1 w-1 shrink-0 bg-violet" />
                              {d}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </article>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </Section>
  );
}

import {
  BrainCircuit,
  Box,
  Cloud,
  Code2,
  Database,
  GitBranch,
  type LucideIcon,
} from "lucide-react";

type Technology = { name: string; icon: LucideIcon };

const technologies: Technology[] = [
  { name: "Python", icon: Code2 },
  { name: "LangChain", icon: BrainCircuit },
  { name: "LangGraph", icon: BrainCircuit },
  { name: "OpenAI", icon: BrainCircuit },
  { name: "Hugging Face", icon: BrainCircuit },
  { name: "FastAPI", icon: Code2 },
  { name: "PostgreSQL", icon: Database },
  { name: "Docker", icon: Box },
  { name: "AWS", icon: Cloud },
  { name: "Git", icon: GitBranch },
  { name: "GitHub", icon: GitBranch },
  { name: "PyTorch", icon: BrainCircuit },
  { name: "Scikit-learn", icon: BrainCircuit },
  { name: "Redis", icon: Database },
  { name: "Power BI", icon: Database },
];

function Logo({ technology }: { technology: Technology }) {
  const Icon = technology.icon;
  return (
    <div className="flex shrink-0 items-center gap-2.5 px-5 text-foreground/55 sm:px-7">
      <Icon className="size-5" strokeWidth={1.5} aria-hidden />
      <span className="font-mono text-[11px] tracking-[0.16em] uppercase">{technology.name}</span>
    </div>
  );
}

export function TechMarquee() {
  const loop = [...technologies, ...technologies];
  return (
    <section
      className="tech-marquee relative w-full overflow-hidden py-3"
      aria-label="Technologies I use"
    >
      <div className="tech-marquee__track" aria-hidden>
        {loop.map((technology, index) => (
          <Logo key={`${technology.name}-${index}`} technology={technology} />
        ))}
      </div>
      <div className="sr-only">{technologies.map(({ name }) => name).join(", ")}</div>
    </section>
  );
}

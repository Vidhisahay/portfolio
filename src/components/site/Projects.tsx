import { ArrowUpRight } from "lucide-react";
import anganai from "@/assets/proj-anganai.jpg";
import rag from "@/assets/proj-rag.jpg";
import copilot from "@/assets/proj-copilot.jpg";
import bloodnet from "@/assets/proj-bloodnet.jpg";
import legal from "@/assets/proj-legal.jpg";
import zepto from "@/assets/proj-zepto.jpg";
import { Reveal, Section, SectionHeading, Tag } from "./primitives";
import { cn } from "@/lib/utils";

type Project = {
  title: string;
  subtitle: string;
  body: string;
  tags: string[];
  image: string;
  href: string;
};

const featured: Project = {
  title: "AnganAI",
  subtitle: "Multi-Agent AI Decision Support",
  body: "A multi-agent AI system that turns child growth data into structured assessments, personalized nutrition recommendations, and visit reports.",
  tags: ["Multi-Agent AI", "LangGraph", "LLMs", "FastAPI", "MLOps"],
  image: anganai,
  href: "https://github.com/Vidhisahay/AnganAI",
};

const rest: Project[] = [
  {
    title: "RAG Tech Assistant",
    subtitle: "Self-Corrective RAG for Technical Docs",
    body: "A self-corrective RAG assistant that rewrites queries, evaluates retrieved context, retries when needed, and generates grounded answers with citations.",
    tags: ["RAG", "LangGraph", "LLMs", "ChromaDB", "FastAPI"],
    image: rag,
    href: "https://github.com/Vidhisahay/RAG-Tech-Assistant",
  },
  {
    title: "Engineering Copilot",
    subtitle: "Production-Grade Engineering RAG",
    body: "An engineering knowledge assistant grounded in technical documentation, with conversational memory, authentication, monitoring, testing, and automated deployment.",
    tags: ["RAG", "LangChain", "Pinecone", "AWS", "LLM"],
    image: copilot,
    href: "https://github.com/Vidhisahay/Engineering-Copilot",
  },
  {
    title: "BloodNet",
    subtitle: "Intelligent Blood Donor Matching",
    body: "An intelligent donor-matching system that combines geospatial search and ML to rank potential donors by compatibility, distance, and predicted response likelihood.",
    tags: ["Machine Learning", "XGBoost", "PostGIS", "FastAPI", "Redis"],
    image: bloodnet,
    href: "https://github.com/Vidhisahay/bloodnet",
  },
  {
    title: "AI Legal & Risk Intelligence Platform",
    subtitle: "Legal Intelligence & Risk Analytics",
    body: "An end-to-end AI pipeline that processes large-scale legal documents, extracts entities, classifies legal risk, and turns unstructured data into actionable analytics.",
    tags: ["NLP", "Machine Learning", "Airflow", "scikit-learn", "Data Pipeline"],
    image: legal,
    href: "https://github.com/Vidhisahay/AI-Driven-Legal-and-Risk-Intelligence-Platform",
  },
  {
    title: "Zepto SQL & Power BI Analysis",
    subtitle: "Retail Analytics & Business Intelligence",
    body: "An end-to-end analysis of sales, pricing, discounts, and inventory health, transformed from raw data into an executive-ready Power BI dashboard.",
    tags: ["SQL", "PostgreSQL", "Power BI", "DAX", "Data Analytics"],
    image: zepto,
    href: "https://github.com/Vidhisahay/Zepto-SQL-PowerBI-Analysis",
  },
];

function ArrowBadge() {
  return (
    <span className="glass absolute top-5 right-5 z-10 rounded-full p-2.5 transition-transform duration-500 group-hover:-translate-y-1 group-hover:translate-x-1">
      <ArrowUpRight className="size-4" />
    </span>
  );
}

function Tags({ tags }: { tags: string[] }) {
  return (
    <div className="mt-5 flex gap-2 overflow-x-auto pb-1 [scrollbar-width:none] sm:flex-wrap sm:overflow-visible">
      {tags.map((t) => (
        <Tag key={t}>{t}</Tag>
      ))}
    </div>
  );
}

function Card({ p, wide }: { p: Project; wide?: boolean }) {
  return (
    <a
      href={p.href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={`View ${p.title} on GitHub`}
      className={cn(
        "glass glass-hover group relative flex h-full flex-col overflow-hidden rounded-3xl",
        wide && "sm:flex-row",
      )}
    >
      <ArrowBadge />
      <div className={cn("relative overflow-hidden", wide ? "sm:w-1/2" : "")}>
        <img
          src={p.image}
          alt={`${p.title} — ${p.subtitle}`}
          loading="lazy"
          width={1200}
          height={800}
          className="h-52 w-full object-cover transition-transform duration-[900ms] ease-out group-hover:scale-[1.07] sm:h-full sm:min-h-56"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background/85 via-background/10 to-transparent" />
      </div>
      <div className={cn("flex flex-1 flex-col p-6", wide && "sm:w-1/2")}>
        <h3 className="font-display text-xl font-semibold tracking-tight">{p.title}</h3>
        <p className="mt-1 font-mono text-[11px] tracking-[0.12em] text-magenta/90 uppercase">
          {p.subtitle}
        </p>
        <p className="mt-4 text-sm leading-relaxed text-muted-foreground">{p.body}</p>
        <div className="mt-auto">
          <Tags tags={p.tags} />
        </div>
      </div>
    </a>
  );
}

export function Projects() {
  return (
    <Section id="projects">
      <SectionHeading
        label="Projects"
        title="A COLLECTION OF IDEAS I'VE TURNED"
        accent="INTO WORKING SYSTEMS."
        intro="From machine learning models and GenAI applications to agentic workflows and automation. Each project started with a problem, a question, or simply a “what if?” and ended with something I could actually build, test, and learn from."
      />

      <div className="mt-14 space-y-5">
        <Reveal>
          <a
            href={featured.href}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="View AnganAI on GitHub"
            className="glass glass-hover group relative grid overflow-hidden rounded-[2rem] lg:grid-cols-[1.15fr_1fr]"
          >
            <ArrowBadge />
            <div className="relative overflow-hidden">
              <img
                src={featured.image}
                alt="AnganAI multi-agent decision support interface"
                loading="lazy"
                width={1600}
                height={1000}
                className="h-64 w-full object-cover transition-transform duration-[1100ms] ease-out group-hover:scale-105 lg:h-full lg:min-h-[26rem]"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent lg:bg-gradient-to-r" />
              <span className="glass absolute top-5 left-5 rounded-full px-3 py-1 font-mono text-[10px] tracking-[0.2em] uppercase">
                Featured
              </span>
            </div>
            <div className="flex flex-col justify-center p-7 sm:p-10">
              <h3 className="font-display text-3xl font-bold tracking-tight sm:text-4xl">
                {featured.title}
              </h3>
              <p className="mt-2 font-mono text-[11px] tracking-[0.14em] text-magenta/90 uppercase">
                {featured.subtitle}
              </p>
              <p className="mt-5 text-sm leading-relaxed text-muted-foreground sm:text-base">
                {featured.body}
              </p>
              <Tags tags={featured.tags} />
            </div>
          </a>
        </Reveal>

        <div className="grid gap-5 lg:grid-cols-2">
          {rest.map((p, i) => (
            <Reveal
              key={p.title}
              delay={(i % 2) * 90}
              className={cn("h-full", i === 4 && "lg:col-span-2")}
            >
              <Card p={p} wide={i === 4} />
            </Reveal>
          ))}
        </div>
      </div>
    </Section>
  );
}

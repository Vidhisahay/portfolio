import { Reveal, Section, SectionHeading } from "./primitives";

const groups = [
  {
    title: "Generative AI",
    tools: ["LangChain", "Hugging Face", "OpenAI API", "Groq", "FAISS", "ChromaDB", "Pinecone"],
    concepts: ["LLMs", "Prompt Engineering", "RAG", "Embeddings", "Vector Search"],
  },
  {
    title: "Agentic AI",
    tools: ["LangGraph", "LangChain", "n8n", "APIs"],
    concepts: ["AI Agents", "Tool Calling", "Multi-Agent Systems", "Orchestration", "Memory"],
  },
  {
    title: "Machine Learning",
    tools: ["Scikit-learn", "PyTorch", "Pandas", "NumPy", "OpenCV"],
    concepts: [
      "Regression",
      "Classification",
      "Clustering",
      "Feature Engineering",
      "Model Evaluation",
    ],
  },
  {
    title: "Automation",
    tools: ["Python", "APIs", "Automation Platforms"],
    concepts: ["Workflow Automation", "API Integration", "Process Optimization", "AI Workflows"],
  },
  {
    title: "Backend & Systems",
    tools: ["Python", "FastAPI", "PostgreSQL", "Redis", "Docker"],
    concepts: ["REST APIs", "Microservices", "Databases", "Caching", "Authentication"],
  },
  {
    title: "Cloud, MLOps & Developer Tools",
    tools: ["AWS", "Docker", "Git", "GitHub Actions", "Prometheus", "Grafana"],
    concepts: ["CI/CD", "Containerization", "Deployment", "Monitoring", "Observability", "Testing"],
  },
];

export function TechStack() {
  return (
    <Section id="tech-stack">
      <SectionHeading
        label="Tech Stack"
        title="MY TECH STACK"
        intro="Tools, frameworks and technologies I work with to turn ideas into real systems."
      />

      <div className="mt-14 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
        {groups.map((g, i) => (
          <Reveal key={g.title} delay={(i % 3) * 80} className="h-full">
            <article className="glass glass-hover group h-full rounded-3xl p-6">
              <div className="flex items-start justify-between">
                <h3 className="font-display text-lg font-semibold tracking-tight">{g.title}</h3>
                <div className="flex gap-1 pt-1.5" aria-hidden>
                  <span className="h-1.5 w-1.5 bg-violet/70 transition-colors group-hover:bg-violet" />
                  <span className="h-1.5 w-1.5 bg-magenta/40 transition-colors group-hover:bg-magenta" />
                </div>
              </div>

              <p className="label-mono mt-6">Tools</p>
              <div className="mt-3 flex flex-wrap gap-2">
                {g.tools.map((t) => (
                  <span
                    key={t}
                    className="rounded-lg border border-border bg-foreground/[0.03] px-2.5 py-1 font-mono text-[11px] text-foreground/80 transition-colors hover:border-violet/50 hover:text-foreground"
                  >
                    {t}
                  </span>
                ))}
              </div>

              <p className="label-mono mt-6">Concepts</p>
              <div className="mt-3 flex flex-wrap gap-2">
                {g.concepts.map((c) => (
                  <span
                    key={c}
                    className="rounded-lg px-2.5 py-1 font-mono text-[11px] text-muted-foreground transition-colors hover:text-magenta"
                  >
                    {c}
                  </span>
                ))}
              </div>
            </article>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}

import { Reveal, Section, SectionHeading, Tag } from "./primitives";

const builds = [
  {
    code: "Future Build 01",
    title: "Personal AI Action Agent",
    subtitle: "Browser Extension × Personal Context × AI",
    body: "A browser-based agent that securely stores reusable personal information, understands forms and webpages, fills repetitive fields, and answers general questions without breaking the user's flow.",
    tags: ["Browser Extension", "LLM", "Tool Calling", "RAG", "Agentic AI"],
    nodes: ["Context Vault", "Page Understanding", "Action Layer"],
  },
  {
    code: "Future Build 02",
    title: "Report → Humanizer",
    subtitle: "AI Report Generation & Refinement Platform",
    body: "Give it raw data, notes, documents or analysis. It researches, structures, generates a report, checks it for gaps, and transforms the final output into clear, natural, human-readable communication.",
    tags: ["Multi-Agent", "RAG", "LLMs", "Document Intelligence", "Evaluation"],
    nodes: ["Raw Data", "Insight", "Human-Ready"],
  },
  {
    code: "Future Build 03",
    title: "The Autonomous Researcher",
    subtitle: "An AI research team, not a chatbot.",
    body: "Give it a question. It decomposes the problem, searches multiple sources, evaluates credibility, identifies conflicting information, synthesizes findings, and produces a cited research report.",
    tags: ["Multi-Agent AI", "Web Agents", "RAG", "Knowledge Graphs", "LLMs", "Evaluation"],
    nodes: ["Search", "Analyze", "Verify", "Synthesize", "Report"],
  },
  {
    code: "Future Build 04",
    title: "Multimodal Knowledge Engine",
    subtitle: "Turn an entire organization into something AI can understand.",
    body: "A multimodal knowledge system that ingests documents, images, diagrams, tables, presentations and audio, builds a connected knowledge layer, and lets agents reason across all of it.",
    tags: ["Document Intelligence", "Multimodal", "Knowledge Graph", "Hybrid Retrieval"],
    nodes: [
      "Document Intelligence",
      "Multimodal Embeddings",
      "Knowledge Graph",
      "Hybrid Retrieval",
      "Agentic RAG",
    ],
  },
];

export function BucketList() {
  return (
    <Section id="bucket-list">
      <SectionHeading
        label="Bucket List"
        title="THE BUILD"
        accent="BUCKET LIST."
        intro="systems I want to build next."
      />

      <div className="mt-14 grid gap-5 lg:grid-cols-2">
        {builds.map((b, i) => (
          <Reveal key={b.title} delay={(i % 2) * 90} className="h-full">
            <article className="glass glass-hover group relative flex h-full flex-col overflow-hidden rounded-3xl p-7">
              <div className="pointer-events-none absolute inset-0 opacity-[0.07] transition-opacity duration-500 group-hover:opacity-[0.14]">
                <div
                  className="h-full w-full"
                  style={{
                    backgroundImage:
                      "linear-gradient(to right, currentColor 1px, transparent 1px), linear-gradient(to bottom, currentColor 1px, transparent 1px)",
                    backgroundSize: "22px 22px",
                  }}
                />
              </div>

              <div className="relative flex items-start justify-between">
                <span className="glass rounded-full px-3 py-1 font-mono text-[10px] tracking-[0.2em] uppercase">
                  {b.code}
                  <span className="ml-2 inline-block h-1.5 w-1.5 translate-y-[1px] bg-magenta" />
                </span>
              </div>

              <h3 className="relative mt-6 font-display text-2xl font-bold tracking-tight uppercase">
                {b.title}
              </h3>
              <p className="relative mt-2 text-sm text-foreground/70">{b.subtitle}</p>
              <p className="relative mt-4 text-sm leading-relaxed text-muted-foreground">
                {b.body}
              </p>

              <div className="relative mt-6 flex flex-wrap items-center gap-2">
                {b.nodes.map((n, k) => (
                  <span key={n} className="flex items-center gap-2">
                    <span className="rounded-md border border-violet/30 bg-violet/10 px-2 py-1 font-mono text-[10px] tracking-[0.1em] text-foreground/80 uppercase">
                      {n}
                    </span>
                    {k < b.nodes.length - 1 ? (
                      <span className="h-px w-3 bg-border" aria-hidden />
                    ) : null}
                  </span>
                ))}
              </div>

              <div className="relative mt-auto flex flex-wrap gap-2 pt-6">
                {b.tags.map((t) => (
                  <Tag key={t}>{t}</Tag>
                ))}
              </div>
            </article>
          </Reveal>
        ))}
      </div>

      <Reveal delay={120}>
        <div className="glass mt-5 flex flex-col gap-4 rounded-3xl p-7 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-sm leading-relaxed text-muted-foreground">
            Some ideas are experiments. Some are problems looking for solutions. A few are probably
            unnecessarily ambitious.
          </p>
          <p className="font-display text-base font-medium text-foreground">
            Those are usually <span className="text-gradient">my favorites.</span>
          </p>
        </div>
      </Reveal>
    </Section>
  );
}

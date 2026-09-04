import { Reveal, Section, SectionHeading, useReveal } from "./primitives";

const wins = [
  {
    metric: "4th",
    title: "National 4th Place",
    org: "AI for Good Hackathon · NSCIF 2026",
    body: "Recognized among the top 0.5% of 860+ participants for RaktaNet, an ML-driven blood supply and forecasting platform designed to improve blood availability and donor coordination.",
    tags: ["Machine Learning", "Forecasting", "Team Lead"],
  },
  {
    metric: "23%",
    title: "Amazon ML Summer School Finalist",
    org: "MLSS 2026",
    body: "Selected among the top 23% of 134,421 participants for Amazon's machine learning program.",
    tags: ["Machine Learning", "Amazon", "Top 23%"],
  },
  {
    metric: "WIN",
    title: "SIH 2024 Campus Winner",
    org: "Smart India Hackathon 2024 · ISRO",
    body: "Won the campus round by building a deep learning solution for SAR satellite image colorization, transforming grayscale radar backscatter into optical-like terrain imagery for ISRO.",
    tags: ["Deep Learning", "Computer Vision", "SAR Imaging", "ISRO"],
  },
  {
    metric: "BEST PAPER",
    title: "Best Paper Award",
    org: "STEM 2023 International Conference · VIT Bhopal",
    body: "Awarded Best Paper for research on AI-based edge computing for real-time biomechanical exercise monitoring using computer vision.",
    tags: ["Computer Vision", "Edge AI", "Research", "AI"],
  },
];

function Metric({ value }: { value: string }) {
  const { ref, shown } = useReveal<HTMLSpanElement>();

  return (
    <span
      ref={ref}
      className="text-gradient font-display block leading-none font-bold tracking-tight transition-all duration-700"
      style={{
        fontSize: value.length > 4 ? "1.75rem" : "3.25rem",
        opacity: shown ? 1 : 0,
        transform: shown ? "none" : "translateY(14px)",
      }}
    >
      {value}
    </span>
  );
}

export function Achievements() {
  return (
    <Section id="achievements">
      <SectionHeading
        label="Achievements"
        title="THE WINS"
        intro="Recognitions for ideas, effort and impact."
      />

      <div className="mt-14 grid gap-5 sm:grid-cols-2">
        {wins.map((w, i) => (
          <Reveal key={w.title} delay={(i % 2) * 90} className="h-full">
            <article className="glass glass-hover flex h-full flex-col rounded-3xl p-7">
              <Metric value={w.metric} />
              <h3 className="mt-5 font-display text-lg font-semibold tracking-tight uppercase">
                {w.title}
              </h3>
              <p className="mt-1 font-mono text-[11px] tracking-[0.12em] text-magenta/90 uppercase">
                {w.org}
              </p>
              <p className="mt-4 text-sm leading-relaxed text-muted-foreground">{w.body}</p>
              <div className="mt-auto flex flex-wrap gap-2 pt-6">
                {w.tags.map((t) => (
                  <span
                    key={t}
                    className="rounded-full border border-border px-3 py-1 font-mono text-[10px] tracking-[0.14em] text-foreground/70 uppercase"
                  >
                    {t}
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

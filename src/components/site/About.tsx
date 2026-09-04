import { Reveal, Section, SectionHeading } from "./primitives";

const arc = ["Design", "Development", "AI / ML"];

export function About() {
  return (
    <Section id="about">
      <div className="grid gap-14 lg:grid-cols-[0.95fr_1.05fr] lg:gap-20">
        <SectionHeading label="About" title="A LITTLE" accent="ABOUT ME." />

        <div className="space-y-5 text-sm leading-relaxed text-muted-foreground sm:text-base">
          <Reveal delay={60}>
            <p>
              I'm an AI/ML engineer working across Generative AI, agentic systems, machine learning
              and automation.
            </p>
          </Reveal>
          <Reveal delay={120}>
            <p>
              My work involves turning ideas and problems into working systems — from designing AI
              workflows and multi-agent architectures to building the APIs, integrations and
              infrastructure around them.
            </p>
          </Reveal>
          <Reveal delay={180}>
            <p>
              I enjoy working across the stack, learning new technologies quickly and figuring out
              how to make emerging technology genuinely useful.
            </p>
          </Reveal>
          <Reveal delay={240}>
            <p className="font-display text-base font-medium text-foreground sm:text-lg">
              Curiosity gets me started.{" "}
              <span className="text-gradient">Building keeps me there.</span>
            </p>
          </Reveal>

          <Reveal delay={300}>
            <div className="glass mt-8 flex items-center gap-3 rounded-2xl px-5 py-4">
              {arc.map((step, i) => (
                <div key={step} className="flex flex-1 items-center gap-3">
                  <div className="flex items-center gap-2">
                    <span
                      className="h-2 w-2 shrink-0"
                      style={{
                        background:
                          i === 0
                            ? "var(--deepblue)"
                            : i === 1
                              ? "var(--violet)"
                              : "var(--magenta)",
                      }}
                    />
                    <span className="font-mono text-[10px] tracking-[0.18em] text-foreground/80 uppercase">
                      {step}
                    </span>
                  </div>
                  {i < arc.length - 1 ? (
                    <span className="h-px flex-1 bg-gradient-to-r from-border to-transparent" />
                  ) : null}
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </div>
    </Section>
  );
}

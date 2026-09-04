import { Reveal, Section } from "./primitives";

const certifications = [
  {
    name: "Applied Machine Learning in Python",
    issuer: "Coursera",
    href: "https://coursera.org/share/7f5b051f1638b69ccd6ba74cef20c159",
  },
  {
    name: "Meta Database Engineer Professional Certificate",
    issuer: "Meta",
    href: "https://www.coursera.org/account/accomplishments/verify/P3JULECLLBDW?utm_source=link&utm_medium=certificate&utm_content=cert_image&utm_campaign=sharing_cta&utm_product=course",
  },
  { name: "Digital Marketing Strategy", issuer: "Great Learning" },
];

export function Education() {
  return (
    <Section id="education" className="py-16 lg:py-20">
      <Reveal>
        <div className="flex items-center gap-3">
          <span className="inline-block h-1.5 w-1.5 bg-violet" />
          <span className="label-mono">Education</span>
        </div>
      </Reveal>
      <div className="mt-6 grid gap-5">
        <Reveal delay={80}>
          <div className="glass flex h-full flex-col gap-6 rounded-3xl p-6 sm:flex-row sm:items-center sm:justify-between sm:p-8">
            <div>
              <h3 className="font-display text-xl font-semibold tracking-tight">
                Vellore Institute of Technology
              </h3>
              <p className="mt-2 text-sm text-muted-foreground">
                Integrated M.Tech. in Computer Science Engineering (Computational And Data Science)
              </p>
              <p className="label-mono mt-3">Sep 2022 — Jun 2027</p>
            </div>
            <div className="shrink-0 border-border sm:border-l sm:pl-8">
              <p className="label-mono">CGPA</p>
              <p className="font-display text-3xl font-bold tracking-tight">
                8.54<span className="text-muted-foreground">/10</span>
              </p>
            </div>
          </div>
        </Reveal>
        <Reveal delay={150}>
          <div className="glass h-full rounded-3xl p-6 sm:p-8">
            <h3 className="font-display text-xl font-semibold tracking-tight">Certification</h3>
            <ul className="mt-5 space-y-4 text-sm text-muted-foreground">
              {certifications.map((certification) => (
                <li key={certification.name}>
                  {certification.href ? (
                    <a
                      className="text-foreground transition-colors hover:text-magenta focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
                      href={certification.href}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      {certification.name}
                    </a>
                  ) : (
                    <p className="text-foreground">{certification.name}</p>
                  )}
                  <p className="label-mono mt-1">{certification.issuer}</p>
                </li>
              ))}
            </ul>
          </div>
        </Reveal>
      </div>
    </Section>
  );
}

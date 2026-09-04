import { ArrowUpRight, Github, Linkedin, Mail } from "lucide-react";
import { Reveal, Section } from "./primitives";

const links = [
  { icon: Mail, label: "Email", href: "mailto:vidhisahay25@gmail.com" },
  { icon: Linkedin, label: "LinkedIn", href: "https://www.linkedin.com/in/vidhisahay/" },
  { icon: Github, label: "GitHub", href: "https://github.com/Vidhisahay" },
];

export function Contact() {
  return (
    <Section id="contact" className="lg:py-40">
      <div className="grid items-center gap-14 lg:grid-cols-[1.1fr_0.9fr]">
        <div>
          <Reveal>
            <div className="flex items-center gap-3">
              <span className="inline-block h-1.5 w-1.5 bg-magenta" />
              <span className="label-mono">Contact</span>
            </div>
          </Reveal>
          <Reveal delay={70}>
            <h2 className="mt-6 text-[clamp(2.75rem,8vw,5.5rem)] leading-[0.92] font-bold tracking-[-0.03em] uppercase">
              Let's
              <br />
              <span className="text-gradient">Connect.</span>
            </h2>
          </Reveal>
          <Reveal delay={140}>
            <p className="mt-8 max-w-xl text-sm leading-relaxed text-muted-foreground sm:text-base">
              I'm interested in opportunities and conversations around:{" "}
              <span className="text-foreground">
                Generative AI · Agentic Systems · Machine Learning · Automation
              </span>
            </p>
          </Reveal>
          <Reveal delay={200}>
            <p className="mt-4 max-w-xl text-sm leading-relaxed text-muted-foreground sm:text-base">
              Whether you're building something, solving a difficult problem, or looking for someone
              who enjoys figuring things out — I'd love to hear from you.
            </p>
          </Reveal>
          <Reveal delay={260}>
            <div className="mt-10 flex flex-wrap gap-3">
              {links.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  target={link.href.startsWith("http") ? "_blank" : undefined}
                  rel={link.href.startsWith("http") ? "noopener noreferrer" : undefined}
                  className="glass glass-hover group inline-flex items-center gap-3 rounded-2xl px-6 py-4 font-mono text-[11px] tracking-[0.2em] uppercase"
                >
                  <link.icon className="size-4 text-magenta" />
                  {link.label}
                  <ArrowUpRight className="size-3.5 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                </a>
              ))}
            </div>
          </Reveal>
        </div>
        <Reveal delay={200}>
          <div className="glass relative aspect-[4/3] overflow-hidden rounded-[2rem]">
            <div className="absolute -top-20 -right-20 h-56 w-56 rounded-full bg-magenta/20 blur-3xl" />
            <img
              src="/contact/contact.jpg"
              alt=""
              className="relative h-full w-full object-cover"
            />
          </div>
        </Reveal>
      </div>
    </Section>
  );
}

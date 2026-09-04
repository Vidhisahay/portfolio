import { ArrowRight, Github, Linkedin, Mail } from "lucide-react";
import heroArt from "@/assets/hero-art.jpg";
import { PixelCluster, Reveal } from "./primitives";

const labels = ["GEN AI", "AGENTS", "ML", "AUTOMATION"];

export function Hero() {
  return (
    <section
      id="home"
      className="relative mx-auto flex min-h-[100svh] w-full max-w-6xl flex-col justify-center px-5 pt-32 pb-20 sm:px-8"
    >
      <div className="grid items-center gap-12 lg:grid-cols-[1.05fr_0.95fr]">
        <div>
          <Reveal>
            <div className="flex items-center gap-3">
              <PixelCluster />
              <span className="label-mono">// Hello, I am</span>
            </div>
          </Reveal>

          <Reveal delay={80}>
            <h1 className="mt-6 text-[clamp(3rem,10vw,6.5rem)] leading-[0.9] font-bold tracking-[-0.03em] uppercase">
              Vidhi
              <br />
              <span className="text-gradient">Sahay</span>
            </h1>
          </Reveal>

          <Reveal delay={160}>
            <p className="mt-6 font-display text-xl font-medium tracking-tight sm:text-2xl">
              AI / ML Engineer
              <span className="animate-blink ml-2 inline-block h-5 w-2 translate-y-0.5 bg-magenta align-middle" />
            </p>
          </Reveal>

          <Reveal delay={220}>
            <p className="mt-6 max-w-xl text-sm leading-relaxed text-muted-foreground sm:text-base">
              From machine learning models to generative and agentic systems — I build technology
              that solves problems, automates work, and creates possibilities.
            </p>
          </Reveal>

          <Reveal delay={300}>
            <div className="mt-9 flex flex-wrap items-center gap-3">
              <a
                href="#projects"
                className="group inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-violet to-magenta px-6 py-3 text-sm font-medium text-primary-foreground transition-transform duration-300 hover:scale-[1.03]"
              >
                View My Projects
                <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" />
              </a>
              <a
                href="#contact"
                className="glass glass-hover inline-flex items-center gap-2 rounded-full px-6 py-3 text-sm font-medium"
              >
                Let's Connect
              </a>
            </div>
          </Reveal>

          <Reveal delay={360}>
            <div className="mt-9 flex items-center gap-3">
              {[
                {
                  icon: Linkedin,
                  href: "https://www.linkedin.com/in/vidhisahay/",
                  label: "LinkedIn",
                },
                { icon: Github, href: "https://github.com/Vidhisahay", label: "GitHub" },
                { icon: Mail, href: "mailto:vidhisahay25@gmail.com", label: "Email" },
              ].map(({ icon: Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  target={href.startsWith("http") ? "_blank" : undefined}
                  rel={href.startsWith("http") ? "noopener noreferrer" : undefined}
                  aria-label={label}
                  className="glass glass-hover rounded-xl p-3 text-muted-foreground hover:text-foreground"
                >
                  <Icon className="size-4" />
                </a>
              ))}
            </div>
          </Reveal>
        </div>

        <Reveal delay={200} className="relative">
          <div className="glass relative overflow-hidden rounded-[2rem] p-3">
            <img
              src={heroArt}
              alt="Abstract glass and voxel artwork representing AI systems"
              width={1400}
              height={1400}
              className="h-full w-full rounded-[1.6rem] object-cover"
            />
            <div className="glass animate-floaty absolute bottom-8 left-8 rounded-2xl px-4 py-3">
              <div className="flex items-center gap-3">
                <span className="h-2 w-2 rounded-full bg-emerald-400" />
                <div className="font-mono text-[10px] leading-4 tracking-[0.18em] uppercase">
                  Curiosity
                  <br />
                  in progress...
                </div>
              </div>
            </div>
          </div>

          <ul className="mt-4 flex flex-wrap items-center gap-x-5 gap-y-2 px-2">
            {labels.map((l) => (
              <li key={l} className="label-mono flex items-center gap-2">
                <span className="h-1 w-1 bg-violet/70" aria-hidden />
                {l}
              </li>
            ))}
          </ul>
        </Reveal>
      </div>
    </section>
  );
}

import { useEffect, useRef, useState, type ReactNode } from "react";
import { cn } from "@/lib/utils";

export function useReveal<T extends HTMLElement>(delay = 0) {
  const ref = useRef<T | null>(null);
  const [shown, setShown] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    let done = false;
    const reveal = () => {
      if (done) return;
      done = true;
      window.setTimeout(() => setShown(true), delay);
      io.disconnect();
      window.removeEventListener("scroll", check);
      window.removeEventListener("resize", check);
    };
    const check = () => {
      const r = el.getBoundingClientRect();
      if (r.top < window.innerHeight * 0.94 && r.bottom > 0) reveal();
    };
    const io = new IntersectionObserver(
      (entries) => {
        if (entries[0]?.isIntersecting) reveal();
      },
      { threshold: 0, rootMargin: "0px 0px -6% 0px" },
    );
    io.observe(el);
    window.addEventListener("scroll", check, { passive: true });
    window.addEventListener("resize", check);
    check();
    return () => {
      io.disconnect();
      window.removeEventListener("scroll", check);
      window.removeEventListener("resize", check);
    };
  }, [delay]);

  return { ref, shown };
}

export function Reveal({
  children,
  delay = 0,
  className,
  as: Tag = "div",
}: {
  children: ReactNode;
  delay?: number;
  className?: string;
  as?: "div" | "section" | "li" | "article";
}) {
  const { ref, shown } = useReveal<HTMLDivElement>(delay);
  return (
    <Tag
      ref={ref as never}
      className={className}
      style={{
        opacity: shown ? 1 : 0,
        transform: shown ? "none" : "translateY(26px)",
        transition:
          "opacity 0.8s cubic-bezier(0.22,1,0.36,1), transform 0.8s cubic-bezier(0.22,1,0.36,1)",
      }}
    >
      {children}
    </Tag>
  );
}

export function SectionHeading({
  label,
  title,
  accent,
  intro,
  className,
}: {
  label: string;
  title: string;
  accent?: string;
  intro?: string;
  className?: string;
}) {
  return (
    <Reveal className={cn("max-w-3xl", className)}>
      <div className="flex items-center gap-3">
        <span className="inline-block h-1.5 w-1.5 bg-magenta" />
        <span className="label-mono">{label}</span>
      </div>
      <h2 className="mt-5 text-4xl leading-[1.05] font-bold tracking-tight sm:text-5xl lg:text-6xl">
        {title} {accent ? <span className="text-gradient">{accent}</span> : null}
      </h2>
      {intro ? (
        <p className="mt-5 max-w-2xl text-sm leading-relaxed text-muted-foreground sm:text-base">
          {intro}
        </p>
      ) : null}
    </Reveal>
  );
}

export function Tag({ children }: { children: ReactNode }) {
  return (
    <span className="glass inline-flex shrink-0 rounded-full px-3 py-1 font-mono text-[10px] tracking-[0.14em] text-foreground/75 uppercase">
      {children}
    </span>
  );
}

export function PixelCluster({ className }: { className?: string }) {
  return (
    <div className={cn("pointer-events-none flex gap-1", className)} aria-hidden>
      <span className="h-1.5 w-1.5 bg-violet/80" />
      <span className="h-1.5 w-1.5 bg-magenta/70" />
      <span className="h-1.5 w-1.5 bg-deepblue/70" />
    </div>
  );
}

export function Section({
  id,
  children,
  className,
}: {
  id: string;
  children: ReactNode;
  className?: string;
}) {
  return (
    <section
      id={id}
      className={cn("relative mx-auto w-full max-w-6xl px-5 py-24 sm:px-8 lg:py-32", className)}
    >
      {children}
    </section>
  );
}

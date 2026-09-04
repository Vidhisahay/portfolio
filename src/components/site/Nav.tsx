import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";

const items = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Projects", href: "#projects" },
  { label: "Experience", href: "#experience" },
  { label: "Contact", href: "#contact" },
];

export function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className="fixed inset-x-0 top-0 z-50 px-3 pt-3 sm:px-6 sm:pt-5">
      <nav
        className={cn(
          "glass mx-auto flex max-w-6xl items-center justify-between rounded-2xl px-4 py-3 transition-all duration-500 sm:px-6",
          scrolled && "bg-background/70 shadow-2xl backdrop-blur-2xl",
        )}
      >
        <a href="#home" className="group flex items-baseline gap-3">
          <span className="font-display text-sm font-bold tracking-[0.24em] uppercase">
            Vidhi Sahay
          </span>
          <span className="label-mono hidden sm:inline">AI / ML Engineer</span>
        </a>

        <div className="hidden items-center gap-1 md:flex">
          {items.map((i) => (
            <a
              key={i.href}
              href={i.href}
              className="relative rounded-full px-4 py-2 font-mono text-[11px] tracking-[0.18em] text-muted-foreground uppercase transition-colors hover:bg-foreground/5 hover:text-foreground"
            >
              {i.label}
            </a>
          ))}
        </div>

        <button
          type="button"
          aria-label="Toggle menu"
          onClick={() => setOpen((v) => !v)}
          className="glass rounded-xl p-2 md:hidden"
        >
          {open ? <X className="size-4" /> : <Menu className="size-4" />}
        </button>
      </nav>

      {open ? (
        <div className="glass mx-auto mt-2 max-w-6xl rounded-2xl p-2 md:hidden">
          {items.map((i) => (
            <a
              key={i.href}
              href={i.href}
              onClick={() => setOpen(false)}
              className="block rounded-xl px-4 py-3 font-mono text-[11px] tracking-[0.2em] text-muted-foreground uppercase hover:bg-foreground/5 hover:text-foreground"
            >
              {i.label}
            </a>
          ))}
        </div>
      ) : null}
    </header>
  );
}

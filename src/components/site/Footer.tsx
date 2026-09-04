export function Footer() {
  return (
    <footer className="relative border-t border-border">
      <div className="mx-auto flex max-w-6xl flex-col gap-6 px-5 py-10 sm:px-8 md:flex-row md:items-center md:justify-between">
        <div>
          <p className="font-display text-sm font-bold tracking-[0.24em] uppercase">Vidhi Sahay</p>
          <p className="label-mono mt-2">AI / ML Engineer</p>
        </div>

        <p className="label-mono">Gen AI · Agentic AI · ML · Automation</p>

        <div className="flex items-center gap-6">
          <span className="label-mono flex items-center gap-2">
            <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
            System Status · Online
          </span>
          <span className="label-mono">© 2026</span>
        </div>
      </div>
    </footer>
  );
}

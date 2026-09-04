export function Ambient() {
  return (
    <div className="pointer-events-none fixed inset-0 -z-10 overflow-hidden" aria-hidden>
      <div className="animate-drift absolute -top-40 -left-40 h-[46rem] w-[46rem] rounded-full bg-violet/12 blur-[140px]" />
      <div
        className="animate-drift absolute -top-24 right-[-12rem] h-[38rem] w-[38rem] rounded-full bg-deepblue/12 blur-[150px]"
        style={{ animationDelay: "-8s" }}
      />
      <div
        className="animate-drift absolute bottom-[-16rem] left-1/3 h-[42rem] w-[42rem] rounded-full bg-magenta/10 blur-[160px]"
        style={{ animationDelay: "-15s" }}
      />
      <div
        className="absolute inset-0 opacity-[0.05]"
        style={{
          backgroundImage:
            "linear-gradient(to right, currentColor 1px, transparent 1px), linear-gradient(to bottom, currentColor 1px, transparent 1px)",
          backgroundSize: "64px 64px",
          maskImage: "radial-gradient(ellipse at 50% 0%, black, transparent 75%)",
        }}
      />
    </div>
  );
}

import speaking from "@/assets/act-speaking.jpg";
import hackathon from "@/assets/act-hackathon.jpg";
import building from "@/assets/act-building.jpg";
import team from "@/assets/act-team.jpg";
import presenting from "@/assets/act-presenting.jpg";
import { Reveal, Section, SectionHeading } from "./primitives";
import { cn } from "@/lib/utils";

const shots = [
  { src: speaking, alt: "Speaking at an event", area: "sm:col-span-2 sm:row-span-2" },
  { src: hackathon, alt: "Hackathon moments", area: "" },
  { src: building, alt: "Building", area: "sm:row-span-2" },
  { src: presenting, alt: "Presenting ideas", area: "" },
  { src: team, alt: "Team at SIH 2024", area: "sm:col-span-2" },
];

export function Activities() {
  return (
    <Section id="activities">
      <SectionHeading
        label="Beyond Work"
        title="BEYOND WORK"
        intro="Ideas, people and experiences that keep me inspired."
      />
      <div className="mt-14 grid auto-rows-[11rem] grid-cols-1 gap-4 sm:grid-cols-4">
        {shots.map((shot, index) => (
          <Reveal key={shot.alt} delay={index * 70} className={cn("h-full", shot.area)}>
            <div className="glass relative h-full overflow-hidden rounded-2xl">
              <img
                src={shot.src}
                alt={shot.alt}
                loading="lazy"
                className="h-full w-full object-cover transition-transform duration-[900ms] ease-out hover:scale-[1.03]"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/40 via-transparent to-transparent" />
            </div>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}

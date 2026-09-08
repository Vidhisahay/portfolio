import { createFileRoute } from "@tanstack/react-router";
import { Ambient } from "@/components/site/Ambient";
import { Nav } from "@/components/site/Nav";
import { Hero } from "@/components/site/Hero";
import { About } from "@/components/site/About";
import { TechMarquee } from "@/components/site/TechMarquee";
import { Projects } from "@/components/site/Projects";
import { Experience } from "@/components/site/Experience";
import { TechStack } from "@/components/site/TechStack";
import { Education } from "@/components/site/Education";
import { Achievements } from "@/components/site/Achievements";
import { BucketList } from "@/components/site/BucketList";
import { Contact } from "@/components/site/Contact";
import { Footer } from "@/components/site/Footer";

const title = "Vidhi Sahay — AI / ML Engineer";
const description =
  "Portfolio of Vidhi Sahay, an AI/ML engineer building generative AI, agentic systems, machine learning models and automation that solve real problems.";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <div className="grain relative min-h-screen overflow-x-hidden">
      <Ambient />
      <Nav />
      <main>
        <Hero />
        <About />
        <TechMarquee />
        <Projects />
        <Experience />
        <TechStack />
        <Education />
        <Achievements />
        <BucketList />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

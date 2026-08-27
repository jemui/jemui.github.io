import Image from "next/image";
import { projects } from "@/data/projects";
import type { ProjectCategory } from "@/types/project";
import ProjectCard from "@/components/ProjectCard";
import CategorySection from "@/components/CategorySection";

/***
 * NOTE: DISCLAIMERS NEEDED , ECOMMERCE MIGHT BE GOOD TO MENTION... 
 */
const categoryOrder: ProjectCategory[] = ["current", "3d", "2d", "personal"];
const categoryLabels: Record<ProjectCategory, string> = {
  current: "Recent Work (2D Playable Ads)",
  "3d": "3D Playable Ads - Video Demo",
  "2d": "2D Playable Ads - Video Demo",
  personal: "Game Projects",
};

// const currentProjects = projects.filter((p) => p.category === "current");

export default function Home() {
  return (
    <main className="max-w-4xl mx-auto px-4 py-12">
      {categoryOrder.map((category) => {
        const items = projects.filter((p) => p.category === category);

        if (items.length === 0) return null; // skip empty sections

        return (
          <CategorySection key={category} title={categoryLabels[category]}>
            <div className={category === "personal" ? "flex flex-col items-center gap-6" : "flex flex-wrap justify-center gap-4"}>
              {items.map((project) => (
                <ProjectCard
                  key={project.title}
                  project={project}
                  layout={category === "personal" ? "horizontal" : "vertical"}
                />
              ))}
            </div>
          </CategorySection>
        );
      })}

      <p className="text-xs text-zinc-400 text-center mt-16 max-w-xl mx-auto">
        All product names, logos, brands, trademarks and registered trademarks are property of their respective owners. All company, product and service names used in this playable ad are for identification purposes only. Use of these names, trademarks and brands does not imply endorsement.
      </p>
      {/* <p className="text-sm italic text-accent text-center mt-4">
        I've also built eCommerce HTML ads (product showcases with reviews) for brands like Everyday Dose, Barkbox, Ketone-IQ, and more.
      </p> */}
    </main>
  );
}

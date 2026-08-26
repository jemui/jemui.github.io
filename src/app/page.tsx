import Image from "next/image";
import { projects } from "@/data/projects";
import type { ProjectCategory } from "@/types/project";

const categoryOrder: ProjectCategory[] = ["current", "3d", "2d", "personal"];
const categoryLabels: Record<ProjectCategory, string> = {
  current: "Current / Recent Work",
  "3d": "3D Interactive Experiences",
  "2d": "2D Interactive Experiences",
  personal: "Personal Games",
};

const currentProjects = projects.filter((p) => p.category === "current");

export default function Home() {
  return (
    <main className="max-w-4xl mx-auto px-4 py-12">
      {categoryOrder.map((category) => {
        const items = projects.filter((p) => p.category === category);

        if (items.length === 0) return null; // skip empty sections

        return (
          <section key={category} className="mb-12">
            <h2 className="text-xl font-semibold mb-4">
              {categoryLabels[category]}
            </h2>

            <div className="grid gap-6 sm:grid-cols-2">
              {items.map((project) => (
                // your job: render one project's card here.
                // needs: project.title, and conditionally:
                //   - project.description (if present)
                //   - project.video → a <video> tag (controls, loop, muted, src={project.video})
                //   - project.link → an <a> tag (target="_blank", rel="noopener noreferrer")
                //   - project.thumbnail → an <img> tag, if present (use next/image eventually,
                //     plain <img> is fine to start)

                <div key={project.title} className="border rounded-lg p-4">
                  <h3 className="font-medium mb-2">{project.title}</h3>

                  {project.year && (
                    <p className="text-sm text-zinc-500 mb-2">{project.year}</p>
                  )}

                  {project.description && (
                    <p className="text-sm mb-3">{project.description}</p>
                  )}

                  {project.thumbnail && (
                    <img src={project.thumbnail} alt={project.title} className="w-full rounded mb-3" />
                  )}

                  {project.video && (
                    <video controls loop muted className="w-full rounded mb-3">
                      <source src={project.video} />
                    </video>
                  )}

                  {project.link && (
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-sm underline"
                      >
                        View Project
                    </a>
                  )}

                </div>
              ))}
            </div>
          </section>
        );
      })}
    </main>
  );
}

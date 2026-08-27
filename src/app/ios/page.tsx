import { iosProjects } from "@/data/ios-projects";
import ProjectCard from "@/components/ProjectCard";

export default function IosPage() {
  return (
    <main className="max-w-4xl mx-auto px-4 py-12">
      <h1 className="text-lg font-bold uppercase tracking-widest text-center mb-8">
        iOS Projects
      </h1>

      <div className="flex flex-wrap justify-center gap-4">
        {iosProjects.map((project) => (
          <ProjectCard key={project.title} project={project} />
        ))}
      </div>
    </main>
  );
}
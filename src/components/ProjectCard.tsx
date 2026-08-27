import type { Project } from "@/types/project";
import { Play, Film, Link } from "lucide-react";

interface ProjectCardProps {
    project: Project;
    layout?: "vertical" | "horizontal";
}

export default function ProjectCard({ project, layout = "vertical" }: ProjectCardProps) {
    const isHorizontal = layout === "horizontal";

    return (
        <div
            className={
                isHorizontal
                    ? "flex gap-4 border rounded-lg p-4 w-full max-w-2xl"
                    : "w-40 sm:w-48 lg:w-56 border rounded-lg p-4"
            }
        >
            {project.video && (
                <video
                    autoPlay={project.autoplay}
                    controls
                    loop
                    muted
                    className={
                        isHorizontal
                            ? "w-40 aspect-[9/16] object-cover rounded flex-shrink-0"
                            : "w-full aspect-[9/16] object-cover rounded mb-3"
                    }
                >
                    <source src={project.video} type="video/mp4" />
                </video>
            )}

            <div className="text-center">
                <h3 className="font-medium mb-2">{project.title}</h3>

                {project.year && (
                    <p className="text-sm text-accent mb-2">{project.year}</p>
                )}

                {project.description && (
                    <p className="text-sm mb-3 whitespace-pre-line">{project.description}</p>
                )}

                {project.thumbnail && (
                    <img src={project.thumbnail} alt={project.title} className="w-full rounded mb-3" />
                )}

                {/* LINKS */}
                {project.link && (
                    <a href={project.link} target="_blank" rel="noopener noreferrer" className="text-sm underline">
                        View Project
                    </a>
                )}

                {(project.trailerLink || project.playLink) && (
                    <div className="flex flex-col items-center gap-2 mt-2">
                        {project.playLink && (
                            <a
                                href={project.playLink}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex items-center gap-2 text-sm font-medium text-foreground hover:text-accent-hover transition-colors"
                            >
                                <Play size={16} /> {project.category === "current" ? "Play Ad" : "Play Game"}
                            </a>
                        )}

                        {project.trailerLink && (
                            <a
                                href={project.trailerLink}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex items-center gap-2 text-sm hover:text-accent-hover transition-colors"
                            >
                                <Film size={16} /> Watch Trailer
                            </a>
                        )}
                    </div>
                )
                }
                {project.githubLink && (
                    <div className="flex flex-col items-center mt-2">
                        <a
                            href={project.githubLink}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center gap-2 text-sm font-medium text-foreground hover:text-accent-hover transition-colors"
                        >
                            <Link size={16} /> GitHub
                        </a>
                    </div>
                )}
            </div >
        </div >
    );
}
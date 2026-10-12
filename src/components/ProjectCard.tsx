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
                    ? "flex flex-col border rounded-lg p-3 w-full h-full"
                    : "w-40 sm:w-44 lg:w-48 border rounded-lg p-3 flex flex-col"
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
                            ? "w-full aspect-video object-cover rounded mb-3"
                            : "w-full aspect-[9/16] object-cover rounded mb-3"
                    }
                >
                    <source src={project.video} type="video/mp4" />
                </video>
            )}

            {project.thumbnail && (
                <img
                    src={project.thumbnail}
                    alt={project.title}
                    className={
                        isHorizontal
                            ? "w-full aspect-video object-cover rounded mb-3"
                            : "w-full aspect-video object-cover rounded mb-3"
                    }
                />
            )}

            <div className="flex flex-col text-center flex-1">
                <h3 className={`${isHorizontal ? "font-bold" : "font-medium"} mb-1`}>
                    {project.title}
                </h3>

                {project.year && (
                    <p className="text-sm text-accent mb-2">{project.year}</p>
                )}

                {project.description && (
                    <p className="text-sm mb-3 whitespace-pre-line">
                        {project.description}
                    </p>
                )}

                <div className="mt-auto pt-2 flex flex-col items-center gap-2">
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

                    {project.playLink && (
                        <a
                            href={project.playLink}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center gap-2 text-sm font-medium text-foreground hover:text-accent-hover transition-colors"
                        >
                            <Play size={16} />
                            {project.category === "current" ? "Play Ad" : "Play Game"}
                        </a>
                    )}

                    {project.trailerLink && (
                        <a
                            href={project.trailerLink}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center gap-2 text-sm hover:text-accent-hover transition-colors"
                        >
                            <Film size={16} />
                            Watch Trailer
                        </a>
                    )}

                    {project.githubLink && (
                        <a
                            href={project.githubLink}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center gap-2 text-sm font-medium text-foreground hover:text-accent-hover transition-colors"
                        >
                            <Link size={16} />
                            GitHub
                        </a>
                    )}
                </div>
            </div>
        </div>
    );
}
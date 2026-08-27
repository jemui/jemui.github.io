export type ProjectCategory = "current" | "3d" | "2d" | "personal";

export interface Project {
  title: string;
  category?: ProjectCategory;
  year?: string;
  description?: string;
  thumbnail?: string;
  video?: string;
  autoplay?: boolean;
  link?: string;         // generic "view project" link — used by 3D/2D/current categories
  trailerLink?: string;  // YouTube trailer, etc.
  playLink?: string;      // itch.io or wherever it's actually playable
  githubLink?: string;
}
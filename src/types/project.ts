export type ProjectCategory = "current" | "3d" | "2d" | "personal";

export interface Project {
  title: string;
  category: ProjectCategory;
  year?: string;
  description?: string;
  thumbnail?: string;
  video?: string;
  link?: string;
}
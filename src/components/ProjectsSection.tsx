import ProjectCard from "./ProjectCard";
import type { ProjectData } from "../hooks/usePortfolio";

type ProjectsSectionProps = {
  projects: ProjectData[];
};

export default function ProjectsSection({ projects }: ProjectsSectionProps) {
  return (
    <section id="projects" className="mb-8">
      <h2 className="text-2xl font-bold mb-4">Projects</h2>
      <div className="grid gap-4 md:grid-cols-2">
        {projects.map((project, index) => (
          <ProjectCard
            key={index}
            name={project.name}
            description={project.description}
            technologies={project.technologies}
            projectLink={project.projectLink ?? undefined}
            stars={project.stars ?? undefined}
            forks={project.forks ?? undefined}
          />
        ))}
      </div>
    </section>
  );
}

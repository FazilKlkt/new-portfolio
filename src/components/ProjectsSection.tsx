import { Star, GitFork, BookOpen } from "lucide-react";
import type { ProjectData } from "../hooks/usePortfolio";

function ProjectCard({ name, description, technologies, projectLink, stars, forks }: ProjectData) {
  return (
    <div className="bg-white border border-gray-200 rounded-lg p-4 flex flex-col justify-between h-full">
      <div>
        <div className="flex items-center mb-2">
          <BookOpen className="h-5 w-5 text-gray-500 mr-2 flex-shrink-0" />
          <h3 className="text-xl font-semibold text-blue-600 hover:underline break-words">
            {projectLink ? (
              <a href={projectLink} target="_blank" rel="noopener noreferrer">
                {name}
              </a>
            ) : (
              name
            )}
          </h3>
        </div>
        <p className="text-gray-600 mb-4 text-sm">{description}</p>
      </div>
      <div>
        <div className="flex flex-wrap gap-2 mb-4">
          {technologies.map((tech, index) => (
            <span
              key={index}
              className="bg-gray-100 text-gray-800 text-xs font-medium px-2.5 py-0.5 rounded"
            >
              {tech}
            </span>
          ))}
        </div>
        {(stars != null || forks != null) && (
          <div className="flex items-center space-x-4 text-sm text-gray-500">
            {stars != null && (
              <span className="flex items-center">
                <Star className="h-4 w-4 mr-1" />
                {stars}
              </span>
            )}
            {forks != null && (
              <span className="flex items-center">
                <GitFork className="h-4 w-4 mr-1" />
                {forks}
              </span>
            )}
          </div>
        )}
      </div>
    </div>
  );
}

type ProjectsSectionProps = {
  projects: ProjectData[];
};

export default function ProjectsSection({ projects }: ProjectsSectionProps) {
  return (
    <section id="projects" className="mb-8">
      <h2 className="text-2xl font-bold mb-4">Projects</h2>
      <div className="grid gap-4 md:grid-cols-2">
        {projects.map((project, index) => (
          <ProjectCard key={index} {...project} />
        ))}
      </div>
    </section>
  );
}

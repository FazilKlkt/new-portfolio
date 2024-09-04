import { Star, GitFork } from "lucide-react";

type ProjectCardProps = {
  name: string;
  description: string;
  technologies: string[];
  stars: number;
  forks: number;
};

export default function ProjectCard({
  name,
  description,
  technologies,
  stars,
  forks,
}: ProjectCardProps) {
  return (
    <div className="bg-white border border-gray-200 rounded-lg p-4">
      <h3 className="text-xl font-semibold mb-2 text-blue-600">{name}</h3>
      <p className="text-gray-600 mb-4">{description}</p>
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
      <div className="flex items-center space-x-4 text-sm text-gray-500">
        <span className="flex items-center">
          <Star className="h-4 w-4 mr-1" />
          {stars}
        </span>
        <span className="flex items-center">
          <GitFork className="h-4 w-4 mr-1" />
          {forks}
        </span>
      </div>
    </div>
  );
}

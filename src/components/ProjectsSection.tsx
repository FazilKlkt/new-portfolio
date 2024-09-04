import ProjectCard from "./ProjectCard";

export default function ProjectsSection() {
  return (
    <section id="projects" className="mb-8">
      <h2 className="text-2xl font-bold mb-4">Projects</h2>
      <div className="grid gap-4 md:grid-cols-2">
        <ProjectCard
          name="E-commerce Platform"
          description="A full-stack e-commerce solution with React and Node.js"
          technologies={["React", "Node.js", "MongoDB"]}
          stars={128}
          forks={32}
        />
        <ProjectCard
          name="Task Management App"
          description="A Kanban-style task management application"
          technologies={["Vue.js", "Express", "PostgreSQL"]}
          stars={64}
          forks={16}
        />
      </div>
    </section>
  );
}

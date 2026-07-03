import ProjectCard from "./ProjectCard";

export default function ProjectsSection() {
  return (
    <section id="projects" className="mb-8">
      <h2 className="text-2xl font-bold mb-4">Projects</h2>
      <div className="grid gap-4 md:grid-cols-2">
        <ProjectCard
          name="WAN Link - File Sharing Platform"
          description="A website made using ReactJS and NodeJS. Users can upload and share files seamlessly with a compact and minimalistic UI for ease of use."
          technologies={["ReactJS", "NodeJS"]}
        />
        <ProjectCard
          name="PetMart Website"
          description="A Website made using Django and MySQL. Allows shop owners to showcase and manage pets in their shop to sell, complete with an Admin dashboard."
          technologies={["Django", "MySQL", "Python"]}
        />
      </div>
    </section>
  );
}

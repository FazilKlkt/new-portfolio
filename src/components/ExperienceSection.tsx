import ExperienceCard from "./ExperienceCard";

export default function ExperienceSection() {
  return (
    <section id="experience" className="mb-8">
      <h2 className="text-2xl font-bold mb-4">Work Experience</h2>
      <div className="space-y-4">
        <ExperienceCard
          company="Tech Innovators Inc."
          position="Senior Full Stack Developer"
          duration="2020 - Present"
          description="Lead development of multiple web applications, mentored junior developers, and implemented CI/CD pipelines."
        />
        <ExperienceCard
          company="WebSolutions Co."
          position="Full Stack Developer"
          duration="2018 - 2020"
          description="Developed and maintained client websites, collaborated with design team, and optimized database queries for improved performance."
        />
      </div>
    </section>
  );
}

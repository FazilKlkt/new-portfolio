import ExperienceCard from "./ExperienceCard";
import type { ExperienceData } from "../hooks/usePortfolio";

type ExperienceSectionProps = {
  experiences: ExperienceData[];
};

export default function ExperienceSection({ experiences }: ExperienceSectionProps) {
  return (
    <section id="experience" className="mb-8">
      <h2 className="text-2xl font-bold mb-4">Work Experience &amp; Internships</h2>
      <div className="space-y-4">
        {experiences.map((exp, index) => (
          <ExperienceCard
            key={index}
            company={exp.company}
            companyLink={exp.companyLink ?? undefined}
            position={exp.position}
            duration={exp.duration}
            location={exp.location}
            isInternship={exp.isInternship}
            bullets={exp.bullets}
          />
        ))}
      </div>
    </section>
  );
}

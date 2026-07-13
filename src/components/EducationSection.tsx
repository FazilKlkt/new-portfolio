import EducationCard from "./EducationCard";
import type { EducationData } from "../hooks/usePortfolio";

type EducationSectionProps = {
  educations: EducationData[];
};

export default function EducationSection({ educations }: EducationSectionProps) {
  return (
    <section id="education" className="mb-8">
      <h2 className="text-2xl font-bold mb-4">Education</h2>
      <div className="space-y-4">
        {educations.map((edu, index) => (
          <EducationCard
            key={index}
            school={edu.school}
            degree={edu.degree}
            duration={edu.duration}
            location={edu.location}
          />
        ))}
      </div>
    </section>
  );
}

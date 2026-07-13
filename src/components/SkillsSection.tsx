import SkillTag from "./SkillTag";
import type { PortfolioData } from "../hooks/usePortfolio";

type SkillsSectionProps = {
  skills: PortfolioData["skills"];
};

export default function SkillsSection({ skills }: SkillsSectionProps) {
  return (
    <section id="skills" className="mb-8">
      <h2 className="text-2xl font-bold mb-4">Skills</h2>
      <div className="bg-white border border-gray-200 rounded-lg p-6 space-y-6">
        <div>
          <h3 className="text-lg font-semibold mb-3 text-gray-800">Programming Languages</h3>
          <div className="flex flex-wrap gap-3">
            {skills.programmingLanguages.map((skill, index) => (
              <SkillTag key={index} name={skill} />
            ))}
          </div>
        </div>
        <div>
          <h3 className="text-lg font-semibold mb-3 text-gray-800">Technologies Worked On</h3>
          <div className="flex flex-wrap gap-3">
            {skills.technologies.map((skill, index) => (
              <SkillTag key={index} name={skill} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

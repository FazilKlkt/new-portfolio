import { Code } from "lucide-react";
import type { PortfolioData } from "../hooks/usePortfolio";

function SkillTag({ name }: { name: string }) {
  return (
    <div className="flex items-center bg-gray-100 hover:bg-slate-200 rounded-full px-3 py-1">
      <Code className="h-4 w-4 text-gray-500 mr-2" />
      <span className="text-sm font-medium text-gray-700">{name}</span>
    </div>
  );
}

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

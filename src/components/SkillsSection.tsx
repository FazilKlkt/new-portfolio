import SkillTag from "./SkillTag";

export default function SkillsSection() {
  const skills = [
    "React.js",
    "Node.js",
    "Python",
    "JavaScript",
    "MongoDB",
    "MySQL",
    "Docker",
    "Linux",
    "Git",
  ];

  return (
    <section id="skills" className="mb-8">
      <h2 className="text-2xl font-bold mb-4">Skills</h2>
      <div className="bg-white border border-gray-200 rounded-lg p-6">
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          {skills.map((skill, index) => (
            <SkillTag key={index} name={skill} />
          ))}
        </div>
      </div>
    </section>
  );
}

import { Briefcase } from "lucide-react";

type ExperienceCardProps = {
  company: string;
  companyLink: string;
  position: string;
  duration: string;
  description: string;
};

export default function ExperienceCard({
  company,
  companyLink,
  position,
  duration,
  description,
}: ExperienceCardProps) {
  return (
    <div className="bg-white border border-gray-200 rounded-lg p-4">
      <div className="flex items-center mb-2">
        <a href={companyLink} target="_blank">
          <Briefcase className="h-5 w-5 text-gray-500 mr-2" />
        </a>
        <h3 className="text-xl font-semibold">{company}</h3>
      </div>
      <p className="text-gray-600 mb-1">{position}</p>
      <p className="text-gray-500 text-sm mb-2">{duration}</p>
      <p className="text-gray-700">{description}</p>
    </div>
  );
}

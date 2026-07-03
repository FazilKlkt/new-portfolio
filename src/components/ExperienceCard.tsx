import { Briefcase, MapPin } from "lucide-react";

type ExperienceCardProps = {
  company: string;
  companyLink?: string;
  position: string;
  duration: string;
  location?: string;
  description?: string;
  bullets?: string[];
};

export default function ExperienceCard({
  company,
  companyLink,
  position,
  duration,
  location,
  description,
  bullets,
}: ExperienceCardProps) {
  return (
    <div className="bg-white border border-gray-200 rounded-lg p-4">
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-2">
        <div className="flex items-center">
          {companyLink ? (
            <a href={companyLink} target="_blank" rel="noopener noreferrer">
              <Briefcase className="h-5 w-5 text-gray-500 mr-2 hover:text-blue-600 transition-colors" />
            </a>
          ) : (
            <Briefcase className="h-5 w-5 text-gray-500 mr-2" />
          )}
          <h3 className="text-xl font-semibold">{company}</h3>
        </div>
        <span className="text-gray-500 text-sm mt-1 sm:mt-0">{duration}</span>
      </div>
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between text-gray-600 text-sm mb-3">
        <span className="font-medium">{position}</span>
        {location && (
          <span className="flex items-center text-gray-500 mt-1 sm:mt-0">
            <MapPin className="h-4 w-4 mr-1" />
            {location}
          </span>
        )}
      </div>
      {description && <p className="text-gray-700 text-sm mb-2">{description}</p>}
      {bullets && bullets.length > 0 && (
        <ul className="list-disc pl-5 space-y-1 text-gray-700 text-sm">
          {bullets.map((bullet, idx) => (
            <li key={idx}>{bullet}</li>
          ))}
        </ul>
      )}
    </div>
  );
}

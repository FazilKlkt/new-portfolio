import { GraduationCap, MapPin } from "lucide-react";

type EducationCardProps = {
  school: string;
  degree: string;
  duration: string;
  location: string;
  grade?: string;
};

export default function EducationCard({
  school,
  duration,
  location,
}: EducationCardProps) {
  return (
    <div className="bg-white border border-gray-200 rounded-lg p-4">
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-2">
        <div className="flex items-center">
          <GraduationCap className="h-5 w-5 text-gray-500 mr-2" />
          <h3 className="text-xl font-semibold">{school}</h3>
        </div>
        <span className="text-gray-500 text-sm mt-1 sm:mt-0">{duration}</span>
      </div>
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between text-gray-600 text-sm">
        <span className="flex items-center text-gray-500 mt-1 sm:mt-0">
          <MapPin className="h-4 w-4 mr-1" />
          {location}
        </span>
      </div>
    </div>
  );
}

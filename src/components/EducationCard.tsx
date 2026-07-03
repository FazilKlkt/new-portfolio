import { GraduationCap, MapPin } from "lucide-react";

type EducationCardProps = {
  school: string;
  degree: string;
  duration: string;
  location: string;
};

export default function EducationCard({
  school,
  degree,
  duration,
  location
}: EducationCardProps) {
  return (
    <div className="bg-white border border-gray-200 rounded-lg p-4">
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-2">
        <div className="flex items-center">
          <GraduationCap className="h-5 w-5 text-gray-500 mr-2" />
          <h3 className="text-xl font-semibold">{degree}</h3>
        </div>
        <span className="text-gray-500 text-sm mt-1 sm:mt-0">{duration}</span>
      </div>
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between text-gray-600 text-sm">
        <span className="font-medium text-gray-700">{school}</span>
        <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4 mt-1 sm:mt-0">

          <span className="flex items-center text-gray-500">
            <MapPin className="h-4 w-4 mr-1" />
            {location}
          </span>
        </div>
      </div>
    </div>
  );
}


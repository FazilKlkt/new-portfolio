import { Code } from "lucide-react";

type SkillTagProps = {
  name: string;
};

export default function SkillTag({ name }: SkillTagProps) {
  return (
    <div className="flex items-center bg-gray-100 rounded-full px-3 py-1">
      <Code className="h-4 w-4 text-gray-500 mr-2" />
      <span className="text-sm font-medium text-gray-700">{name}</span>
    </div>
  );
}

import { Mail, MapPin, Linkedin, Github } from "lucide-react";
import type { PortfolioData } from "../hooks/usePortfolio";

type ProfileSectionProps = {
  profile: PortfolioData["profile"];
};

export default function ProfileSection({ profile }: ProfileSectionProps) {
  return (
    <section className="mb-8">
      <div className="bg-white border border-gray-200 rounded-lg p-6">
        <h1 className="text-3xl font-bold mb-2">{profile.name}</h1>
        <p className="text-xl text-gray-600 mb-4 font-medium">{profile.title}</p>

        <div className="flex items-center mb-4">
          <MapPin className="h-5 w-5 text-gray-500 mr-3 flex-shrink-0" />
          <span>{profile.location}</span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-3 mb-6 text-gray-700">
          <div className="flex items-center">
            <Mail className="h-5 w-5 text-gray-500 mr-3 flex-shrink-0" />
            <a href={`mailto:${profile.email}`} className="text-blue-600 hover:underline text-sm">
              {profile.email}
            </a>
          </div>
          <div className="flex items-center">
            <Linkedin className="h-5 w-5 text-gray-500 mr-3 flex-shrink-0" />
            <a
              href={profile.linkedin.url}
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 hover:underline text-sm"
            >
              {profile.linkedin.display}
            </a>
          </div>
          <div className="flex items-center">
            <Github className="h-5 w-5 text-gray-500 mr-3 flex-shrink-0" />
            <a
              href={profile.github.url}
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 hover:underline text-sm"
            >
              {profile.github.display}
            </a>
          </div>
        </div>

        <div className="flex space-x-4">
          <a
            href={profile.cvLink}
            target="_blank"
            rel="noopener noreferrer"
          >
            <button className="px-4 py-2 text-white bg-green-600 font-semibold rounded-md hover:bg-green-700 transition-colors">
              Download CV
            </button>
          </a>
        </div>
      </div>
    </section>
  );
}

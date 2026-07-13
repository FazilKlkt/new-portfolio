import { usePortfolio } from "./hooks/usePortfolio";
import Header from "./components/Header";
import Footer from "./components/Footer";
import ProfileSection from "./components/ProfileSection";
import ProjectsSection from "./components/ProjectsSection";
import ExperienceSection from "./components/ExperienceSection";
import EducationSection from "./components/EducationSection";
import SkillsSection from "./components/SkillsSection";
import ScrollToTop from "./components/ScrollToTop";

export default function App() {
  const { data, loading, error } = usePortfolio();

  if (loading) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <p className="text-gray-500 text-sm">Loading...</p>
      </div>
    );
  }

  if (error || !data) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <p className="text-red-500 text-sm">{error ?? "Failed to load portfolio data."}</p>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 text-gray-900 flex flex-col relative">
      <Header brandName={data.header.brandName} navItems={data.header.navItems} />
      <main className="flex-grow container mx-auto px-4 py-8 max-w-4xl">
        <ProfileSection profile={data.profile} />
        <ExperienceSection experiences={data.experience} />
        <ProjectsSection projects={data.projects} />
        <SkillsSection skills={data.skills} />
        <EducationSection educations={data.education} />
      </main>
      <Footer footer={data.footer} />
      <ScrollToTop />
    </div>
  );
}

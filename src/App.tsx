import Header from "./components/Header";
import Footer from "./components/Footer";
import ProfileSection from "./components/ProfileSection";
import ProjectsSection from "./components/ProjectsSection";
import ExperienceSection from "./components/ExperienceSection";
import EducationSection from "./components/EducationSection";
import SkillsSection from "./components/SkillsSection";
import ScrollToTop from "./components/ScrollToTop";

export default function App() {
  return (
    <div className="min-h-screen bg-gray-50 text-gray-900 flex flex-col relative">
      <Header />
      <main className="flex-grow container mx-auto px-4 py-8 max-w-4xl">
        <ProfileSection />
        <ExperienceSection />
        <ProjectsSection />
        <SkillsSection />
        <EducationSection />
      </main>
      <Footer />
      <ScrollToTop />
    </div>
  );
}


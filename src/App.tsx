import Header from "./components/Header";
import Footer from "./components/Footer";
import ProfileSection from "./components/ProfileSection";
// import ProjectsSection from "./components/ProjectsSection";
import ExperienceSection from "./components/ExperienceSection";
import SkillsSection from "./components/SkillsSection";

export default function App() {
  return (
    <div className="min-h-screen bg-gray-50 text-gray-900 flex flex-col">
      <Header />
      <main className="flex-grow container mx-auto px-4 py-8">
        <ProfileSection />
        {/* <ProjectsSection /> */}
        <ExperienceSection />
        <SkillsSection />
      </main>
      <Footer />
    </div>
  );
}

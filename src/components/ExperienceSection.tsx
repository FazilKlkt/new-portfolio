import ExperienceCard from "./ExperienceCard";

export default function ExperienceSection() {
  return (
    <section id="experience" className="mb-8">
      <h2 className="text-2xl font-bold mb-4">Work Experience</h2>
      <div className="space-y-4">
        <ExperienceCard
          company="Deepfleet Pvt. Ltd."
          companyLink="https://deepfleet.com/"
          position="Software Engineer Intern"
          duration="2024 Jan - Apr"
          description="Worked in a collaborative envirornment to develop an EV Roaming platform"
        />
        <ExperienceCard
          company="Ganglia Technologies"
          companyLink="https://ganglia.in/"
          position="Software Engineer Intern"
          duration="2023 Jun - Jul"
          description="Developed and maintained websites"
        />
      </div>
    </section>
  );
}

import EducationCard from "./EducationCard";

export default function EducationSection() {
  return (
    <section id="education" className="mb-8">
      <h2 className="text-2xl font-bold mb-4">Education</h2>
      <div className="space-y-4">
        <EducationCard
          school="Manipal Institute of Technology"
          degree="Master of Computer Application"
          duration="2022 – 2024"
          location="Manipal, Karnataka"
          grade="8.6"
        />
        <EducationCard
          school="Mangalore University"
          degree="Bachelor of Computer Application"
          duration="2019 – 2022"
          location="Udupi, Karnataka"
          grade="8.1"
        />
      </div>
    </section>
  );
}

import ExperienceCard from "./ExperienceCard";

export default function ExperienceSection() {
  return (
    <section id="experience" className="mb-8">
      <h2 className="text-2xl font-bold mb-4">Work Experience & Internships</h2>
      <div className="space-y-4">
        <ExperienceCard
          company="Tata Consultancy Services Ltd."
          position="System Engineer"
          duration="Feb 2025 – Present"
          location="Hyderabad, India"
          bullets={[
            "Experience in API Management using Apigee, delivering secure, scalable, and high available API solutions.",
            "Strong expertise in API security, traffic management, authentication, and enterprise integrations for telecom domain.",
            "Hands-on experience in API lifecycle management, production support, troubleshooting, and performance optimization across UAT and Production environments.",
            "Implemented API security using OAuth 2.0, JWT, Regular Expression and threat protection policies for secure API transactions.",
            "Developed and maintained a centralized Access Token API used across all gateway APIs, ensuring consistency and secure OAuth authentication.",
            "Developed reusable Shared Flows, Flow Hooks, and traffic management policies to enhance API scalability, reliability, consistency, and operational efficiency across API proxies.",
            "Created and maintained API documentation, improving collaboration and on-boarding efficiency.",
            "Collaborated with security teams, business stakeholders, and external partners to deliver secure, scalable API integrations across UAT and Production environments."
          ]}
        />
        <ExperienceCard
          company="Deepfleet Pvt Ltd."
          companyLink="https://deepfleet.com/"
          position="Software Engineer Intern"
          duration="2024, Jan – Apr"
          location="Bangalore, India"
          isInternship={true}
          bullets={[
            "Developed a comprehensive monitoring and alerting system using Prometheus and Alertmanager to ensure system health and proactively identify issues.",
            "Integrated data visualization components into the web application, providing stakeholders with actionable insights through interactive graphs and charts.",
            "Architected and built an invoice and report generation module to streamline partner billing processes.",
            "Refined the user interface and improved the user experience."
          ]}
        />
        <ExperienceCard
          company="Ganglia Technologies"
          companyLink="https://ganglia.in/"
          position="Software Engineer Intern"
          duration="2023, Jun – Jul"
          location="Manipal, India"
          isInternship={true}
          bullets={[
            "Collaborated with the frontend team to develop responsive, mobile-first web pages using ReactJS and Bootstrap.",
            "Configured and deployed web applications on AWS EC2 instances, including domain registration and server management."
          ]}
        />
        <ExperienceCard
          company="Vyavsay"
          position="Backend Developer Intern"
          duration="2022, Feb – Apr"
          location="Remote, India"
          isInternship={true}
          bullets={[
            "Executed a complete migration of the backend codebase from PHP/Laravel to a modern Node.js architecture, improving performance and maintainability.",
            "Implemented a multi-channel notification system by integrating third-party APIs for SMS and Email alerts."
          ]}
        />
      </div>
    </section>
  );
}


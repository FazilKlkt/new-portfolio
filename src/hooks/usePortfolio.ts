import { useState, useEffect } from "react";

export type SocialLinkData = {
  label: string;
  href: string;
  icon: "github" | "linkedin" | "mail";
};

export type NavItemData = {
  label: string;
  href: string;
};

export type ExperienceData = {
  company: string;
  companyLink: string | null;
  position: string;
  duration: string;
  location: string;
  isInternship: boolean;
  bullets: string[];
};

export type ProjectData = {
  name: string;
  description: string;
  technologies: string[];
  projectLink: string | null;
  stars: number | null;
  forks: number | null;
};

export type EducationData = {
  school: string;
  degree: string;
  duration: string;
  location: string;
};

export type PortfolioData = {
  profile: {
    name: string;
    title: string;
    location: string;
    email: string;
    linkedin: { url: string; display: string };
    github: { url: string; display: string };
    cvLink: string;
  };
  header: {
    brandName: string;
    navItems: NavItemData[];
  };
  experience: ExperienceData[];
  projects: ProjectData[];
  skills: {
    programmingLanguages: string[];
    technologies: string[];
  };
  education: EducationData[];
  footer: {
    name: string;
    socialLinks: SocialLinkData[];
  };
};

type UsePortfolioResult = {
  data: PortfolioData | null;
  loading: boolean;
  error: string | null;
};

export function usePortfolio(): UsePortfolioResult {
  const [data, setData] = useState<PortfolioData | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const controller = new AbortController();

    fetch("/portfolio.json", { signal: controller.signal })
      .then((res) => {
        if (!res.ok) throw new Error(`Failed to fetch portfolio data (${res.status})`);
        return res.json();
      })
      .then((json: PortfolioData) => {
        setData(json);
      })
      .catch((err: Error) => {
        if (err.name !== "AbortError") {
          setError(err.message);
        }
      })
      .finally(() => {
        setLoading(false);
      });

    return () => controller.abort();
  }, []);

  return { data, loading, error };
}

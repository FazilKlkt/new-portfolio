import { Github, Mail, Linkedin } from "lucide-react";
import type { PortfolioData, SocialLinkData } from "../hooks/usePortfolio";

type FooterProps = {
  footer: PortfolioData["footer"];
};

const iconMap: Record<SocialLinkData["icon"], React.ReactNode> = {
  github: <Github />,
  linkedin: <Linkedin />,
  mail: <Mail />,
};

function SocialLink({ href, icon, label }: SocialLinkData) {
  return (
    <a
      href={href}
      className="text-gray-400 hover:text-gray-600 transition-colors duration-300"
      target="_blank"
      rel="noopener noreferrer"
      aria-label={label}
    >
      <span className="sr-only">{label}</span>
      {iconMap[icon]}
    </a>
  );
}

export default function Footer({ footer }: FooterProps) {
  return (
    <footer id="contact" className="bg-white border-t border-gray-200 py-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <p className="text-sm text-gray-600">
              © {new Date().getFullYear()} {footer.name}. All rights reserved.
            </p>
          </div>
          <div className="flex space-x-6">
            {footer.socialLinks.map((link) => (
              <SocialLink key={link.label} {...link} />
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}

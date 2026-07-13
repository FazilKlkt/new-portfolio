import { Github, Mail, Linkedin } from "lucide-react";
import SocialLink from "./SocialLink";
import type { PortfolioData } from "../hooks/usePortfolio";

type FooterProps = {
  footer: PortfolioData["footer"];
};

const iconMap = {
  github: <Github />,
  linkedin: <Linkedin />,
  mail: <Mail />,
};

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
              <SocialLink
                key={link.label}
                href={link.href}
                icon={iconMap[link.icon]}
                label={link.label}
              />
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}

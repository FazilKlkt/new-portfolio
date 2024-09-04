import { Github, Mail, Linkedin } from "lucide-react";
import SocialLink from "./SocialLink";

export default function Footer() {
  return (
    <footer id="contact" className="bg-white border-t border-gray-200 py-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <p className="text-sm text-gray-600">
              © {new Date().getFullYear()} Fazil. All rights reserved.
            </p>
          </div>
          <div className="flex space-x-6">
            <SocialLink
              href="https://github.com/FazilKlkt"
              icon={<Github />}
              label="GitHub"
            />
            <SocialLink
              href="https://www.linkedin.com/in/i-am-fazil/"
              icon={<Linkedin />}
              label="LinkedIn"
            />
            <SocialLink
              href="mailto:fazil.husen6@gmail.com"
              icon={<Mail />}
              label="Email"
            />
          </div>
        </div>
      </div>
    </footer>
  );
}

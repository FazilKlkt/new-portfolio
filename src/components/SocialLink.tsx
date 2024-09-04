type SocialLinkProps = {
  href: string;
  icon: React.ReactNode;
  label: string;
};

export default function SocialLink({ href, icon, label }: SocialLinkProps) {
  return (
    <a
      href={href}
      className="text-gray-400 hover:text-gray-600 transition-colors duration-300"
      target="_blank"
      rel="noopener noreferrer"
      aria-label={label}
    >
      <span className="sr-only">{label}</span>
      {icon}
    </a>
  );
}

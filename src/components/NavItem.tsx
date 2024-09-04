type NavItemProps = {
  href: string;
  children: React.ReactNode;
};

export default function NavItem({ href, children }: NavItemProps) {
  return (
    <a
      href={href}
      className="text-gray-600 hover:text-gray-900 px-3 py-2 rounded-md text-sm font-medium transition-colors duration-300 ease-in-out"
    >
      {children}
    </a>
  );
}

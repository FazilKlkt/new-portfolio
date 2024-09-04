type MobileNavItemProps = {
  href: string;
  onClick: () => void;
  children: React.ReactNode;
};

export default function MobileNavItem({
  href,
  onClick,
  children,
}: MobileNavItemProps) {
  return (
    <a
      href={href}
      onClick={onClick}
      className="block text-gray-600 hover:text-gray-900 hover:bg-gray-100 px-3 py-2 rounded-md text-base font-medium transition-colors duration-300 ease-in-out"
    >
      {children}
    </a>
  );
}

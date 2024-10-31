export interface NavItem {
  label: string;
  href: string;
}

export interface NavbarProps {
  items: NavItem[];
}

export const navItems = [
  { label: "About", href: "#about" },
  // { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Contact", href: "#contact" },
];

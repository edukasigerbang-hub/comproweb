// Primary site navigation.
// Single source of truth consumed by Header and Footer so route definitions
// are not duplicated across components.

export type NavItem = {
  label: string;
  href: string;
  /** Optional compact description rendered in richer nav contexts. */
  description?: string;
  children?: NavItem[];
};

export const navigation: NavItem[] = [
  { label: 'Home', href: '/' },
  {
    label: 'About',
    href: '/about',
    children: [
      { label: 'Company Profile', href: '/about' },
      { label: 'Vision & Mission', href: '/about#vision-mission' },
      { label: 'Organization', href: '/about#organization' },
      { label: 'Company Strengths', href: '/about#strengths' },
    ],
  },
  { label: 'Services', href: '/services' },
  { label: 'Industries', href: '/industries' },
  { label: 'Solutions', href: '/solutions' },
  { label: 'Contact', href: '/contact' },
];

/** Footer navigation grouped by column. */
export const footerNavigation = {
  company: [
    { label: 'About GCS', href: '/about' },
    { label: 'Services', href: '/services' },
    { label: 'Industries', href: '/industries' },
    { label: 'Contact', href: '/contact' },
  ],
  solutions: [
    { label: 'Solutions', href: '/solutions' },
    { label: 'Gerbang Edukasi', href: '/gerbang-edukasi' },
  ],
};
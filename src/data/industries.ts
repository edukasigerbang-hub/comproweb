// Industries / sectors served — source-grounded from Compro GCS.ppt (Lingkup Pelayanan).

export type Industry = {
  id: string;
  name: string;
  description: string;
  icon: string;
};

export const industries: Industry[] = [
  {
    id: 'education',
    name: 'Education',
    description: 'Higher education institutions and schools.',
    icon: 'education',
  },
  {
    id: 'government',
    name: 'Government',
    description:
      'Central government, regional government (Pemda/Dinas), and e-government initiatives.',
    icon: 'government',
  },
  {
    id: 'health',
    name: 'Health',
    description: 'Health-sector technology solutions for public and institutional services.',
    icon: 'health',
  },
  {
    id: 'industry',
    name: 'Industry',
    description:
      'Industrial and enterprise operations — procurement, production, sales, HRD, assets, and finance.',
    icon: 'industry',
  },
  {
    id: 'cooperatives',
    name: 'Cooperatives / Small Business',
    description: 'Support for cooperatives, small businesses, and BKK.',
    icon: 'cooperative',
  },
];
// Solutions under the GCS ecosystem.
// GCS is the (parent) company; Gerbang Edukasi is a product/solution labeled
// "A GCS Product / Solution". It is never presented as the parent company.

export type Solution = {
  id: string;
  name: string;
  description: string;
  icon: string;
  /** Route within the GCS site. */
  route: string;
  /** True when the solution is a distinct branded product (e.g. Gerbang Edukasi). */
  product: boolean;
};

export const solutions: Solution[] = [
  {
    id: 'information-systems',
    name: 'Information Systems',
    description:
      'Information systems for organizations — planning, implementation, and support across sectors.',
    icon: 'information-systems',
    route: '/solutions#information-systems',
    product: false,
  },
  {
    id: 'education-solutions',
    name: 'Education Solutions',
    description:
      'Technology solutions for education — higher education institutions and schools.',
    icon: 'education-solutions',
    route: '/solutions#education-solutions',
    product: false,
  },
  {
    id: 'interactive-multimedia',
    name: 'Interactive Multimedia',
    description:
      'Interactive content, presentation, and multimedia solutions for modern engagement.',
    icon: 'interactive-multimedia',
    route: '/solutions#interactive-multimedia',
    product: false,
  },
  {
    id: 'gerbang-edukasi',
    name: 'Gerbang Edukasi',
    description:
      'Interactive learning media for modern education — developed by PT. Gerbang Cipta Sarana.',
    icon: 'gerbang-edukasi',
    route: '/gerbang-edukasi',
    product: true,
  },
  {
    id: 'other-solutions',
    name: 'Other Solutions',
    description:
      'Additional technology solutions tailored to organizational needs. [CONTENT TO BE PROVIDED]',
    icon: 'other-solutions',
    route: '/solutions#other-solutions',
    product: false,
  },
];

export const gerbangEdukasiProductLabel = 'A GCS Product / Solution';

/** External Gerbang Edukasi website URL — not confirmed as final. */
export const GERBANG_EDUKASI_URL = '[TO BE PROVIDED]';
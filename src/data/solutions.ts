// Solutions under the GCS ecosystem.
// GCS is the (parent) company; Gerbang Edukasi is a product/solution labeled
// "A GCS Product / Solution". It is never presented as the parent company.

export type Solution = {
  id: string;
  name: string;
  /** English display name (EN homepage). */
  nameEn?: string;
  description: string;
  descriptionEn?: string;
  icon: string;
  /** Route within the GCS site. */
  route: string;
  /** True when the solution is a distinct branded product (e.g. Gerbang Edukasi). */
  product: boolean;
};

export const solutions: Solution[] = [
  {
    id: 'information-systems',
    name: 'Sistem Informasi',
    nameEn: 'Information Systems',
    description:
      'Sistem informasi untuk organisasi — perencanaan, implementasi, dan dukungan lintas sektor.',
    descriptionEn:
      'Information systems for organizations — planning, implementation, and support across sectors.',
    icon: 'information-systems',
    route: '/solutions#information-systems',
    product: false,
  },
  {
    id: 'education-solutions',
    name: 'Solusi Pendidikan',
    nameEn: 'Education Solutions',
    description:
      'Solusi teknologi untuk pendidikan — institusi pendidikan tinggi dan sekolah.',
    descriptionEn:
      'Technology solutions for education — higher education institutions and schools.',
    icon: 'education-solutions',
    route: '/solutions#education-solutions',
    product: false,
  },
  {
    id: 'interactive-multimedia',
    name: 'Multimedia Interaktif',
    nameEn: 'Interactive Multimedia',
    description:
      'Konten interaktif, presentasi, dan solusi multimedia untuk komunikasi modern.',
    descriptionEn:
      'Interactive content, presentation, and multimedia solutions for modern engagement.',
    icon: 'interactive-multimedia',
    route: '/solutions#interactive-multimedia',
    product: false,
  },
  {
    id: 'gerbang-edukasi',
    name: 'Gerbang Edukasi',
    nameEn: 'Gerbang Edukasi',
    description:
      'Media pembelajaran interaktif untuk pendidikan modern — dikembangkan oleh PT. Gerbang Cipta Sarana.',
    descriptionEn:
      'Interactive learning media for modern education — developed by PT. Gerbang Cipta Sarana.',
    icon: 'gerbang-edukasi',
    route: '/gerbang-edukasi',
    product: true,
  },
  {
    id: 'other-solutions',
    name: 'Solusi Lainnya',
    nameEn: 'Other Solutions',
    // Public copy stays neutral; detailed offerings are added when verified.
    description:
      'Solusi teknologi tambahan yang disesuaikan dengan kebutuhan spesifik organisasi Anda.',
    descriptionEn:
      'Additional technology solutions tailored to your organization\'s specific needs.',
    icon: 'other-solutions',
    route: '/solutions#other-solutions',
    product: false,
  },
];

export const gerbangEdukasiProductLabel = 'A GCS Product / Solution';

/** External Gerbang Edukasi website URL — not confirmed as final. */
export const GERBANG_EDUKASI_URL = '[TO BE PROVIDED]';
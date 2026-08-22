// Industries / sectors served — source-grounded from Compro GCS.ppt (Lingkup Pelayanan).

export type Industry = {
  id: string;
  name: string;
  nameEn?: string;
  description: string;
  descriptionEn?: string;
  icon: string;
};

export const industries: Industry[] = [
  {
    id: 'education',
    name: 'Pendidikan',
    nameEn: 'Education',
    description: 'Institusi pendidikan tinggi dan sekolah.',
    descriptionEn: 'Higher education institutions and schools.',
    icon: 'education',
  },
  {
    id: 'government',
    name: 'Pemerintahan',
    nameEn: 'Government',
    description:
      'Pemerintah pusat, pemerintah daerah (Pemda/Dinas), dan inisiatif e-government.',
    descriptionEn:
      'Central government, regional government (Pemda/Dinas), and e-government initiatives.',
    icon: 'government',
  },
  {
    id: 'health',
    name: 'Kesehatan',
    nameEn: 'Health',
    description:
      'Solusi teknologi sektor kesehatan untuk layanan publik dan institusi.',
    descriptionEn:
      'Health-sector technology solutions for public and institutional services.',
    icon: 'health',
  },
  {
    id: 'industry',
    name: 'Industri',
    nameEn: 'Industry',
    description:
      'Operasional industri dan perusahaan — pengadaan, produksi, penjualan, HRD, aset, dan keuangan.',
    descriptionEn:
      'Industrial and enterprise operations — procurement, production, sales, HRD, assets, and finance.',
    icon: 'industry',
  },
  {
    id: 'cooperatives',
    name: 'Koperasi / Usaha Kecil',
    nameEn: 'Cooperatives / Small Business',
    description: 'Dukungan untuk koperasi, usaha kecil, dan BKK.',
    descriptionEn: 'Support for cooperatives, small businesses, and BKK.',
    icon: 'cooperative',
  },
];
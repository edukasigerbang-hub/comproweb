// Primary service capability areas (source-grounded from Compro GCS.ppt).
// The six areas are fixed by the approved information architecture and reflect
// GCS's IT consulting scope. No unrelated modern technology services are added.

export type Service = {
  id: string;
  name: string;
  nameEn?: string;
  shortDescription: string;
  shortDescriptionEn?: string;
  icon: string;
};

export const services: Service[] = [
  {
    id: 'it-consulting',
    name: 'Konsultasi TI',
    nameEn: 'IT Consulting',
    shortDescription:
      'Perencanaan, implementasi, evaluasi, dan konsultansi terkait teknologi informasi untuk organisasi.',
    shortDescriptionEn:
      'Technology planning, implementation, evaluation, and IT-related consulting for organizations.',
    icon: 'consulting',
  },
  {
    id: 'software-development',
    name: 'Pengembangan Perangkat Lunak',
    nameEn: 'Software Development',
    shortDescription:
      'Pengembangan sistem informasi dan solusi perangkat lunak sesuai kebutuhan organisasi.',
    shortDescriptionEn:
      'Development of information systems and software solutions tailored to organizational needs.',
    icon: 'development',
  },
  {
    id: 'business-process-management',
    name: 'Manajemen Proses Bisnis',
    nameEn: 'Business Process Management',
    shortDescription:
      'Analisis dan pengelolaan proses untuk meningkatkan efisiensi dan efektivitas bisnis.',
    shortDescriptionEn:
      'Process analysis and management to improve business efficiency and effectiveness.',
    icon: 'process',
  },
  {
    id: 'training',
    name: 'Pelatihan & Transfer Pengetahuan',
    nameEn: 'Training & Knowledge Transfer',
    shortDescription:
      'Pengembangan profesional, pelatihan, dan transfer pengetahuan untuk adopsi yang berkelanjutan.',
    shortDescriptionEn:
      'Professional development, training, and knowledge transfer to support sustainable adoption.',
    icon: 'training',
  },
  {
    id: 'interactive-multimedia',
    name: 'Multimedia Interaktif',
    nameEn: 'Interactive Multimedia',
    shortDescription:
      'Konten interaktif, presentasi, dan solusi multimedia untuk komunikasi modern.',
    shortDescriptionEn:
      'Interactive content, presentation, and multimedia solutions for modern communication.',
    icon: 'multimedia',
  },
  {
    id: 'educational-media',
    name: 'Media Pendidikan',
    nameEn: 'Educational Media',
    shortDescription:
      'Media pembelajaran dan solusi teknologi berorientasi pendidikan untuk pengajaran yang efektif.',
    shortDescriptionEn:
      'Learning media and education-oriented technology solutions for effective teaching.',
    icon: 'education',
  },
];
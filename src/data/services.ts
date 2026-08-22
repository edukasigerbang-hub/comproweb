// Primary service capability areas (source-grounded from Compro GCS.ppt).
// The six areas are fixed by the approved information architecture and reflect
// GCS's IT consulting scope. No unrelated modern technology services are added.

export type Service = {
  id: string;
  name: string;
  shortDescription: string;
  icon: string;
};

export const services: Service[] = [
  {
    id: 'it-consulting',
    name: 'IT Consulting',
    shortDescription:
      'Technology planning, implementation, evaluation, and IT-related consulting for organizations.',
    icon: 'consulting',
  },
  {
    id: 'software-development',
    name: 'Software Development',
    shortDescription:
      'Development of information systems and software solutions tailored to organizational needs.',
    icon: 'development',
  },
  {
    id: 'business-process-management',
    name: 'Business Process Management',
    shortDescription:
      'Process analysis and management to improve business efficiency and effectiveness.',
    icon: 'process',
  },
  {
    id: 'training',
    name: 'Training & Knowledge Transfer',
    shortDescription:
      'Professional development, training, and knowledge transfer to support sustainable adoption.',
    icon: 'training',
  },
  {
    id: 'interactive-multimedia',
    name: 'Interactive Multimedia',
    shortDescription:
      'Interactive content, presentation, and multimedia solutions for modern communication.',
    icon: 'multimedia',
  },
  {
    id: 'educational-media',
    name: 'Educational Media',
    shortDescription:
      'Learning media and education-oriented technology solutions for effective teaching.',
    icon: 'education',
  },
];
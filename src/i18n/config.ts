// i18n configuration — Indonesian (default) + English.
// ID lives at the bare route (/about); EN lives under /en (/en/about).

export type Lang = 'id' | 'en';

export const langs: Lang[] = ['id', 'en'];

/** Prefix a route with the language namespace (EN only). */
export function lp(lang: Lang, path: string): string {
  if (lang !== 'en') return path;
  return path === '/' ? '/en/' : `/en${path}`;
}

/** Given the current canonical path and language, return the equivalent page in the OTHER language. */
export function altPath(lang: Lang, currentPath: string): string {
  if (lang === 'en') {
    // /en/about → /about ; /en/ → /
    const stripped = currentPath.replace(/^\/en/, '');
    return stripped === '' ? '/' : stripped;
  }
  // /about → /en/about ; / → /en/
  return currentPath === '/' ? '/en/' : `/en${currentPath === '' ? '/' : currentPath}`;
}

/** hreflang triple for a given page pair. */
export function hreflangs(lang: Lang, currentPath: string) {
  const base = import.meta.env.SITE || 'https://gerbangciptasarana.co.id';
  const other = altPath(lang, currentPath);
  return [
    { hreflang: 'id-ID', href: new URL(lang === 'id' ? currentPath : other, base).href },
    { hreflang: 'en', href: new URL(lang === 'en' ? currentPath : other, base).href },
    { hreflang: 'x-default', href: new URL(lang === 'id' ? currentPath : other, base).href },
  ];
}

/** Global UI strings shared across pages (nav, footer, switcher, misc). */
export const ui = {
  nav: {
    id: {
      home: 'Beranda',
      about: 'Tentang',
      services: 'Layanan',
      industries: 'Industri',
      solutions: 'Solusi',
      contact: 'Kontak',
    },
    en: {
      home: 'Home',
      about: 'About',
      services: 'Services',
      industries: 'Industries',
      solutions: 'Solutions',
      contact: 'Contact',
    },
  } as Record<Lang, Record<string, string>>,

    aboutChildren: {
    id: [
      { label: 'Profil Perusahaan', anchor: '/about' },
      { label: 'Visi & Misi', anchor: '/about#vision-mission' },
      { label: 'Keunggulan', anchor: '/about#strengths' },
    ],
    en: [
      { label: 'Company Profile', anchor: '/about' },
      { label: 'Vision & Mission', anchor: '/about#vision-mission' },
      { label: 'Company Strengths', anchor: '/about#strengths' },
    ],
  } as Record<Lang, { label: string; anchor: string }[]>,

  footer: {
    id: {
      taglineNote: 'Perusahaan teknologi & solusi dengan pengalaman lintas sektor pendidikan, pemerintahan, dan bisnis.',
      companyTitle: 'Perusahaan',
      solutionsTitle: 'Solusi',
      aboutGcs: 'Tentang GCS',
      gerbangEdukasiLabel: 'Produk GCS / Solusi',
      rights: 'Seluruh hak cipta dilindungi.',
      contactFallback: 'Detail kontak tersedia atas permintaan.',
    },
    en: {
      taglineNote: 'A technology and solutions company with experience across education, government, and business sectors.',
      companyTitle: 'Company',
      solutionsTitle: 'Solutions',
      aboutGcs: 'About GCS',
      gerbangEdukasiLabel: 'A GCS Product / Solution',
      rights: 'All rights reserved.',
      contactFallback: 'Contact details are available upon request.',
    },
  } as Record<Lang, Record<string, string>>,

  skipLink: { id: 'Langsung ke konten utama', en: 'Skip to main content' } as Record<Lang, string>,
};

// Project experience — source-grounded from Compro GCS.ppt (Pengalaman Kami).
// Project and client names are preserved exactly as written in the source
// (including any source spelling anomalies) because they are official records.
// Description/year are only populated when supported by the source; omitted here.

export type ProjectSector =
  | 'Higher Education'
  | 'Education'
  | 'Government'
  | 'Information Systems'
  | 'Other';

export type Project = {
  id: string;
  project: string;
  client: string;
  sector: ProjectSector;
};

export const projects: Project[] = [
  {
    id: 'p01',
    project: 'Implementasi UNISYSS di STMIK BUMIGORA Mataram Tahap 1',
    client: 'STMIK BUMIGORA Mataram',
    sector: 'Higher Education',
  },
  {
    id: 'p02',
    project:
      'Implementasi UNISYSS (SIM Perguruan Tinggi) di UPN Vetran Jakarta Tahap 1',
    client: 'UPN Veteran Jakarta',
    sector: 'Higher Education',
  },
  {
    id: 'p03',
    project:
      'Implementasi UNISYSS (SIM Perguruan Tinggi) di STMIK-STIE Darmajaya Tahap 1',
    client: 'STMIK-STIE Darmajaya',
    sector: 'Higher Education',
  },
  {
    id: 'p04',
    project: 'Penyusunan Sistem Informasi Keuangan Daerah',
    client: 'Biro Keuangan Provinsi Sulawesi Barat',
    sector: 'Government',
  },
  {
    id: 'p05',
    project: 'Pengembangan IT Madrasah di 56 lokasi Madrasah',
    client: 'Ditjen Mapenda Depag, Jakarta',
    sector: 'Education',
  },
  {
    id: 'p06',
    project:
      'Implementasi UNISYSS (Sistem Informasi Manajemen Perguruan Tinggi) di STAIN Datokarmaa Palu Sulawesi Tengah : Modul PMB, Akademik dan Keuangan, Perpustakaan dan Pengembangan Web',
    client: 'STAIN Datokarama – Palu Sulawesi Tengah',
    sector: 'Higher Education',
  },
  {
    id: 'p07',
    project:
      'Pengembangan Sistem Informasi Badan Penyelenggara Jalan Tol, BPJT',
    client: 'BPJT, Jakarta',
    sector: 'Government',
  },
  {
    id: 'p08',
    project: 'Pembangunan SIM Sarana Prasarana Rehab',
    client: 'Biro Perencanaan dan KLN Depdiknas, Jakarta',
    sector: 'Government',
  },
  {
    id: 'p09',
    project: 'Implementasi Sistem Informasi Keuangan Daerah Kabupaten Sukoharjo',
    client: 'Kabupaten Sukoharjo',
    sector: 'Government',
  },
  {
    id: 'p10',
    project: 'Implementasi Sistem Informasi Keuangan Daerah Kota Surakarta',
    client: 'Kota Surakarta',
    sector: 'Government',
  },
  {
    id: 'p11',
    project: 'Implementasi Sistem Informasi Keuangan Daerah Kabupaten Kendal',
    client: 'Kabupaten Kendal',
    sector: 'Government',
  },
  {
    id: 'p12',
    project:
      'Pengembangan Sistem Layanan Informasi Manajemen Pendidikan Kanwil Depag Propinsi Sulawesi Tenggara (Modul Madrasah, Pelayanan, SDM, Asset, Payroll, Layanan Pendidikan dan SI Eksekutif)',
    client: 'Kanwil Depag Propinsi Sulawesi Tenggara',
    sector: 'Education',
  },
  {
    id: 'p13',
    project:
      'Implementasi UNISYSS (Sistem Informasi Manajemen Perguruan Tinggi) Tahap 1 di Politeknik Negeri Jakarta : Modul PMB, Akademik dan Keuangan',
    client: 'Politeknik Negeri Jakarta – Depok',
    sector: 'Higher Education',
  },
  {
    id: 'p14',
    project:
      'Implementasi UNISYSS (Sistem Informasi Manajemen Perguruan Tinggi) Tahap 2 di ISTN : Modul Kepegawaian',
    client: 'ISTN – Jakarta',
    sector: 'Higher Education',
  },
  {
    id: 'p15',
    project:
      'Implementasi UNISYSS (Sistem Informasi Manajemen Perguruan Tinggi) Tahap 2 di STMA Trisakti : Modul Kepegawaian dan Sarana Prasarana (Aktiva Tetap)',
    client: 'Sekolah Tinggi Manajemen Asuransi TRISAKTI',
    sector: 'Higher Education',
  },
  {
    id: 'p16',
    project:
      'Penyusunan Potensi Perekonomian Rakyat dan Koperasi di Kota Bekasi',
    client: 'Dinas Perekonomian Rakyat dan Koperasi Kota Bekasi',
    sector: 'Government',
  },
  {
    id: 'p17',
    project: 'Pengembangan Sistem Informasi Angkutan Umum',
    client: 'Dinas Perhubungan Kota Bekasi',
    sector: 'Government',
  },
  {
    id: 'p18',
    project:
      'Penyusunan Pola Pengembangan SDM Disesuaikan dengan SDA di Propinsi Sulawesi Selatan',
    client: 'Departemen Kementrian Percepatan Kawasan Timur Indonesia',
    sector: 'Government',
  },
  {
    id: 'p19',
    project:
      'Implementasi UNISYSS (Sistem Informasi Manajemen Perguruan Tinggi) Tahap 1 di ISTN : Modul PMB, Akademik dan Keuangan',
    client: 'ISTN – Jakarta',
    sector: 'Higher Education',
  },
  {
    id: 'p20',
    project:
      'Implementasi UNISYSS (Sistem Informasi Manajemen Perguruan Tinggi) Tahap 1 di STMA Trisakti : Modul PMB, Akademik dan Keuangan',
    client: 'Sekolah Tinggi Manajemen Asuransi TRISAKTI',
    sector: 'Higher Education',
  },
];

export const projectCount = projects.length; // 20

/** Sector/category filter options for the Experience page. */
export const projectFilters: Array<'All' | ProjectSector> = [
  'All',
  'Education',
  'Government',
  'Higher Education',
  'Information Systems',
  'Other',
];
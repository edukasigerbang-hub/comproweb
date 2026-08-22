// Leadership roles only — client request (Phase 7.1):
// personal names of Komisaris/Direktur are not published on the website.

export type LeadershipRole = {
  position: string;
};

export const leadershipRoles: LeadershipRole[] = [
  { position: 'Komisaris' },
  { position: 'Direktur Utama' },
  { position: 'Direktur' },
];
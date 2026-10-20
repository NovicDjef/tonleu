// Same order as the project list on the home page
export const projects = [
  { slug: 'planevia', title: 'Planevia' },
  { slug: 'koursier', title: 'Koursier' },
  { slug: 'koursier-delivery', title: 'Koursier Livreur' },
  { slug: 'raphycar', title: 'RaphyCar' },
  { slug: 'reminder', title: 'MedRemind' },
  { slug: 'hotel-sept-iles', title: 'Hôtel Sept-Îles' },
  { slug: 'hotel-sept-iles-admin', title: 'Hôtel Sept-Îles — Gestion' },
  { slug: 'j3-immobilier', title: 'J3 Immobilier' },
  { slug: 'jt-trade-services', title: 'JT Trade and Services' },
  { slug: 'burns-immobilier', title: 'Burns Immobilier' },
];

export function getNextProject(slug) {
  const index = projects.findIndex(project => project.slug === slug);
  if (index === -1) return null;
  return projects[(index + 1) % projects.length];
}

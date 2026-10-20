import contracts from '~/assets/case-studies/admin-dashboard/contracts.webp';
import overview from '~/assets/case-studies/admin-dashboard/overview.webp';
import { CaseStudy } from '~/layouts/case-study';
import { baseMeta } from '~/utils/meta';

const title = 'Koursier Admin';
const description =
  'Tableau de bord d’administration de l’écosystème Koursier : commandes, livreurs, clients, commissions et statistiques, pilotés depuis une seule interface web.';

export const meta = () => {
  return baseMeta({ title: `${title} - Tableau de Bord d’Administration`, description, prefix: 'Projets' });
};

export const AdminDashboard = () => (
  <CaseStudy
    slug="admin-dashboard"
    accent="#a855f7"
    device="browser"
    category="Application web · Back-office"
    title={title}
    tagline="Toute l’opération Koursier, en un coup d’œil."
    description={description}
    links={{ website: 'https://admin.koursier.com' }}
    hero={[
      { src: overview, alt: 'Vue d’ensemble du tableau de bord' },
      { src: contracts, alt: 'Gestion des utilisateurs' },
    ]}
    specs={[
      { label: 'Produit', value: 'Back-office d’administration' },
      { label: 'Plateforme', value: 'Web' },
      { label: 'Périmètre', value: 'Commandes · Livreurs · Revenus' },
      { label: 'Écosystème', value: 'Koursier' },
    ]}
    challenge={{
      title: 'Piloter trois services de livraison en même temps',
      text: 'Commandes de repas, de colis et de gaz, livreurs sur le terrain, clients et commissions : sans vue centralisée, les administrateurs manquaient de visibilité en temps réel pour réagir et prendre des décisions.',
    }}
    solution={{
      title: 'Un centre de contrôle unique',
      text: 'Le tableau de bord suit les commandes en direct, permet d’assigner les livreurs, de gérer les utilisateurs et les restaurants partenaires, et présente les revenus et indicateurs clés dans des graphiques clairs.',
    }}
    features={[
      {
        title: 'Vue d’ensemble & statistiques',
        text: 'Commandes, clients, revenus et tendances présentés dans des indicateurs et graphiques en temps réel.',
        src: overview,
        alt: 'Vue d’ensemble',
      },
      {
        title: 'Gestion des utilisateurs',
        text: 'Recherche, filtres et fiches détaillées pour gérer clients, livreurs et partenaires.',
        src: contracts,
        alt: 'Gestion des utilisateurs',
      },
    ]}
    stack={['Next.js', 'React', 'Node.js', 'API REST', 'Graphiques temps réel']}
    cta={{
      title: 'Accéder au back-office',
      text: 'L’interface d’administration est accessible aux équipes Koursier.',
    }}
  />
);

import accounting from '~/assets/case-studies/hotel-admin/accounting.webp';
import alerts from '~/assets/case-studies/hotel-admin/alerts.webp';
import overview from '~/assets/case-studies/hotel-admin/overview.webp';
import reservations from '~/assets/case-studies/hotel-admin/reservations.webp';
import roomsPlan from '~/assets/case-studies/hotel-admin/rooms-plan.webp';
import background from '~/assets/case-studies/hotel-admin/background.webp';
import { CaseStudy } from '~/layouts/case-study';
import { baseMeta } from '~/utils/meta';

const title = 'Hôtel Sept-Îles Gestion';
const description =
  'Console de gestion interne de l’Hôtel Sept-Îles : réservations, plan des 155 chambres, clients et fidélité, ménage, alertes, comptabilité TPS/TVQ et paiements, synchronisés avec le site public.';

export const meta = () => {
  return baseMeta({ title: `${title} - Console de Gestion Hôtelière`, description, prefix: 'Projets' });
};

export const HotelSeptIlesAdmin = () => (
  <CaseStudy
    slug="hotel-sept-iles-admin"
    background={background}
    device="browser"
    title={title}
    description={description}
    links={{ website: 'https://admin.novic.dev' }}
    hero={[
      { src: overview, alt: 'Vue d’ensemble de la console' },
      { src: roomsPlan, alt: 'Plan des chambres par étage' },
    ]}
    challenge="Arrivées, départs, chambres à attribuer, ménage, encaissements et taxes étaient suivis dans des outils séparés. Le personnel manquait d’une vue en temps réel sur l’état de l’hôtel et la direction d’une comptabilité fiable."
    solution="Chaque matin, la réception voit les mouvements du jour, les réservations à confirmer et les chambres à attribuer. Le plan des chambres affiche l’état de chaque unité en direct, les alertes signalent ce qui demande une action et la comptabilité ventile automatiquement la TPS et la TVQ."
    features={[
      {
        title: 'Réservations',
        text: 'Statuts, canaux, paiements partiels, arrivées sans réservation et export des séjours.',
        src: reservations,
        alt: 'Réservations',
      },
      {
        title: 'Plan des chambres',
        text: 'Les 155 chambres par étage avec leur état : disponible, réservée, occupée, à nettoyer, maintenance.',
        src: roomsPlan,
        alt: 'Plan des chambres',
      },
      {
        title: 'Alertes intelligentes',
        text: 'Calculées en direct à partir des réservations, des tâches et des chambres, les plus urgentes en premier.',
        src: alerts,
        alt: 'Alertes',
      },
      {
        title: 'Comptabilité TPS/TVQ',
        text: 'Journal des encaissements, ventilation des taxes, rapprochement avec les factures et export.',
        src: accounting,
        alt: 'Comptabilité',
      },
    ]}
    roles={['Next.js', 'React', 'Node.js', 'Stripe', 'Gestion des rôles']}
    outcome={{
      title: 'Résultat',
      text: 'La console couvre toute l’exploitation de l’hôtel, de la réception à la comptabilité. Les réservations et paiements effectués sur le site public y apparaissent directement.',
    }}
  />
);

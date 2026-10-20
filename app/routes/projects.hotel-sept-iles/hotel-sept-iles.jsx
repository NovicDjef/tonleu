import hero from '~/assets/case-studies/hotel/hero.webp';
import restaurant from '~/assets/case-studies/hotel/restaurant.webp';
import roomDetail from '~/assets/case-studies/hotel/room-detail.webp';
import rooms from '~/assets/case-studies/hotel/rooms.webp';
import spa from '~/assets/case-studies/hotel/spa.webp';
import background from '~/assets/case-studies/hotel/background.webp';
import { CaseStudy } from '~/layouts/case-study';
import { baseMeta } from '~/utils/meta';

const title = 'Hôtel Sept-Îles';
const description =
  'Site web et moteur de réservation de l’Hôtel Sept-Îles sur la Côte-Nord : chambres avec disponibilités en temps réel, réservation et paiement en ligne, services spa et restaurant.';

export const meta = () => {
  return baseMeta({ title: `${title} - Site & Réservation en Ligne`, description, prefix: 'Projets' });
};

export const HotelSeptIles = () => (
  <CaseStudy
    slug="hotel-sept-iles"
    background={background}
    device="browser"
    title={title}
    description={description}
    links={{ website: 'https://hotel.novic.dev' }}
    hero={[
      { src: hero, alt: 'Page d’accueil de l’Hôtel Sept-Îles' },
      { src: roomDetail, alt: 'Fiche d’une chambre avec réservation' },
    ]}
    challenge="L’hôtel avait besoin d’une vitrine à la hauteur de son offre (chambres, spa, restaurant) et surtout d’un moyen de recevoir des réservations directes, sans passer systématiquement par des intermédiaires et leurs commissions."
    solution="Recherche par dates et nombre de personnes, filtres par prix et équipements, fiches chambres détaillées avec galerie et tarifs semaine / fin de semaine, réduction automatique sur les longs séjours et paiement en ligne sécurisé, le tout connecté à la console de gestion interne."
    features={[
      {
        title: 'Recherche de chambres',
        text: 'Dates, nombre de personnes, catégories, gamme de prix et équipements pour trouver la bonne chambre.',
        src: rooms,
        alt: 'Recherche et filtres',
      },
      {
        title: 'Fiche chambre & réservation',
        text: 'Galerie photo, capacité, superficie, check-in, prix par nuit et réduction sur 3 nuits et plus.',
        src: roomDetail,
        alt: 'Fiche chambre',
      },
      {
        title: 'Services spa',
        text: 'Hammam, massages et soins présentés avec durées et tarifs pour compléter le séjour.',
        src: spa,
        alt: 'Services spa',
      },
      {
        title: 'Restaurant & bar',
        text: 'Cuisine régionale, bar à vin, heures d’ouverture et réservation de table.',
        src: restaurant,
        alt: 'Restaurant',
      },
    ]}
    roles={['Next.js', 'React', 'Node.js', 'Stripe', 'Nginx']}
    outcome={{
      title: 'Résultat',
      text: 'Le site est en ligne sur hotel.novic.dev. Les réservations et paiements faits en ligne sont transmis directement à la console de gestion interne.',
    }}
  />
);

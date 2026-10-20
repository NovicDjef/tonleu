import chat from '~/assets/case-studies/raphycar/chat.webp';
import details from '~/assets/case-studies/raphycar/details.webp';
import filters from '~/assets/case-studies/raphycar/filters.webp';
import home from '~/assets/case-studies/raphycar/home.webp';
import background from '~/assets/case-studies/raphycar/background.webp';
import { CaseStudy } from '~/layouts/case-study';
import { baseMeta } from '~/utils/meta';

const title = 'RaphyCar';
const description =
  'Application mobile de location de véhicules pour le marché camerounais : recherche filtrée, réservation, messagerie avec les propriétaires et assistant IA, plus un espace de gestion de flotte pour les agences.';

export const meta = () => {
  return baseMeta({ title: `${title} - Location de Véhicules avec IA`, description, prefix: 'Projets' });
};

export const Raphycar = () => (
  <CaseStudy
    slug="raphycar"
    background={background}
    title={title}
    description={description}
    links={{ website: 'https://raphycar.com' }}
    hero={[
      { src: home, alt: 'Accueil RaphyCar' },
      { src: details, alt: 'Fiche d’un véhicule' },
      { src: chat, alt: 'Messagerie avec le propriétaire' },
    ]}
    challenge="Au Cameroun, louer un véhicule passait surtout par le bouche-à-oreille : peu de visibilité sur les prix et la disponibilité, aucun historique, et des propriétaires sans outil pour gérer leur flotte."
    solution="Les clients filtrent par prix, carburant, transmission et nombre de places, consultent les fiches et réservent. Les agences publient et gèrent leurs véhicules. Un assistant IA et une messagerie intégrée répondent aux questions avant la location."
    features={[
      {
        title: 'Recherche par marque',
        text: 'Marques populaires, véhicules disponibles et réservation directe depuis l’accueil.',
        src: home,
        alt: 'Accueil avec marques',
      },
      {
        title: 'Filtres avancés',
        text: 'Fourchette de prix, carburant, transmission et nombre de places combinés en un seul écran.',
        src: filters,
        alt: 'Filtres de recherche',
      },
      {
        title: 'Fiche véhicule',
        text: 'Caractéristiques, équipements, note et prix par jour avant de réserver.',
        src: details,
        alt: 'Détails du véhicule',
      },
      {
        title: 'Messagerie & IA',
        text: 'Discussion avec le propriétaire et assistant intelligent pour confirmer disponibilité et modalités.',
        src: chat,
        alt: 'Messagerie',
      },
    ]}
    roles={['React Native', 'Node.js', 'Chatbot IA', 'Messagerie temps réel', 'Notifications push']}
    outcome={{
      title: 'Résultat',
      text: 'RaphyCar réunit les clients et les agences de location sur une même plateforme, avec une application mobile et un site web sur raphycar.com.',
    }}
  />
);

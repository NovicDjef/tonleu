import chat from '~/assets/case-studies/raphycar/chat.webp';
import details from '~/assets/case-studies/raphycar/details.webp';
import filters from '~/assets/case-studies/raphycar/filters.webp';
import home from '~/assets/case-studies/raphycar/home.webp';
import background from '~/assets/case-studies/raphycar/background.webp';
import webCatalog from '~/assets/case-studies/raphycar/web-catalog.webp';
import webClients from '~/assets/case-studies/raphycar/web-clients.webp';
import webHero from '~/assets/case-studies/raphycar/web-hero.webp';
import webPricing from '~/assets/case-studies/raphycar/web-pricing.webp';
import webPro from '~/assets/case-studies/raphycar/web-pro.webp';
import webSignup from '~/assets/case-studies/raphycar/web-signup.webp';
import { CaseStudy } from '~/layouts/case-study';
import { baseMeta } from '~/utils/meta';

const title = 'RaphyCar';
const description =
  'Plateforme de location de véhicules au Cameroun : une application mobile pour comparer, réserver et payer, et un espace pro web où les agences publient et gèrent leur flotte, leurs réservations et leurs revenus.';

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
    web={{
      title: 'La plateforme web',
      text: 'Sur raphycar.com, les agences ouvrent leur espace pro et pilotent leur flotte depuis le navigateur, pendant que les clients réservent depuis l’application.',
      hero: { src: webHero, alt: 'Page d’accueil de raphycar.com' },
      features: [
        {
          title: 'Catalogue en ligne',
          text: 'Les véhicules publiés par les agences partenaires, filtrables par ville, type, carburant, transmission et prix.',
          src: webCatalog,
          alt: 'Catalogue des véhicules',
        },
        {
          title: 'Espace pro',
          text: 'Flotte, réservations, messages, statistiques et revenus : l’agence gère tout depuis le web, sans application à installer.',
          src: webPro,
          alt: 'Présentation de l’espace pro',
        },
        {
          title: 'Formules d’abonnement',
          text: 'Quatre formules selon le nombre de véhicules publiés, modifiables à tout moment depuis l’espace de l’agence.',
          src: webPricing,
          alt: 'Grille tarifaire',
        },
        {
          title: 'Inscription en deux étapes',
          text: 'Informations de la société puis choix de la formule : l’agence est en ligne en quelques minutes.',
          src: webSignup,
          alt: 'Création d’un espace pro',
        },
        {
          title: 'L’application présentée',
          text: 'Une page dédiée aux clients met en avant l’application mobile et ses liens de téléchargement.',
          src: webClients,
          alt: 'Page de présentation de l’application',
        },
      ],
    }}
    roles={['React Native', 'Next.js', 'Node.js', 'Messagerie temps réel', 'Mobile money']}
    outcome={{
      title: 'Résultat',
      text: 'RaphyCar réunit les clients et les agences de location sur une même plateforme, avec une application mobile et un site web sur raphycar.com.',
    }}
  />
);

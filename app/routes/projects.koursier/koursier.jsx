import gas from '~/assets/case-studies/koursier/gas.webp';
import home from '~/assets/case-studies/koursier/home.webp';
import parcelTracking from '~/assets/case-studies/koursier/parcel-tracking.webp';
import parcel from '~/assets/case-studies/koursier/parcel.webp';
import restaurant from '~/assets/case-studies/koursier/restaurant.webp';
import restaurants from '~/assets/case-studies/koursier/restaurants.webp';
import background from '~/assets/case-studies/koursier/background.webp';
import { CaseStudy } from '~/layouts/case-study';
import { baseMeta } from '~/utils/meta';

const title = 'Koursier';
const description =
  'Application mobile de livraison multi-services au Cameroun : repas des restaurants partenaires, envoi de colis et livraison de bouteilles de gaz, avec suivi en temps réel et paiement mobile.';

export const meta = () => {
  return baseMeta({ title: `${title} - Plateforme de Livraison Multi-Services`, description, prefix: 'Projets' });
};

export const Koursier = () => (
  <CaseStudy
    slug="koursier"
    background={background}
    title={title}
    description={description}
    links={{
      appStore: 'https://apps.apple.com/ca/app/koursier/id6761641187?l=fr-CA',
      website: 'https://koursier.cm',
    }}
    hero={[
      { src: restaurant, alt: 'Fiche restaurant dans Koursier' },
      { src: home, alt: 'Accueil de l’application Koursier' },
      { src: parcelTracking, alt: 'Suivi d’un colis livré' },
    ]}
    challenge="Commander un repas, envoyer un colis ou se faire livrer une bouteille de gaz demandait d’utiliser des services séparés, avec des interfaces incohérentes, un suivi peu fiable et des moyens de paiement mal adaptés au marché camerounais."
    solution="Koursier regroupe les trois services dans une seule application : catalogue de restaurants, expédition de colis avec code de validation, commande de gaz par marque et par vendeur, suivi en temps réel et paiement par Orange Money, MTN Mobile Money ou espèces."
    features={[
      {
        title: 'Restaurants partenaires',
        text: 'Catalogue par catégorie, plats notés, restaurants favoris et à proximité avec distance et temps estimé.',
        src: restaurants,
        alt: 'Liste des restaurants',
      },
      {
        title: 'Livraison de gaz',
        text: 'Choix du vendeur, des marques disponibles et de la position de livraison, avec temps et frais affichés.',
        src: gas,
        alt: 'Service de livraison de gaz',
      },
      {
        title: 'Envoi de colis',
        text: 'Adresses favorites, point de départ, destination et informations du destinataire en quelques étapes.',
        src: parcel,
        alt: 'Formulaire d’envoi de colis',
      },
      {
        title: 'Suivi en temps réel',
        text: 'Étapes de la commande, détails du colis et code de validation pour sécuriser la remise.',
        src: parcelTracking,
        alt: 'Suivi de colis',
      },
    ]}
    roles={['React Native', 'Node.js', 'WebSocket', 'Google Maps', 'Mobile money']}
    outcome={{
      title: 'Résultat',
      text: 'L’application client est publiée sur l’App Store. Elle fonctionne avec l’application des livreurs et le back-office de la plateforme.',
    }}
  />
);

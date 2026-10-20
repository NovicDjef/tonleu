import gas from '~/assets/case-studies/koursier/gas.webp';
import home from '~/assets/case-studies/koursier/home.webp';
import parcelTracking from '~/assets/case-studies/koursier/parcel-tracking.webp';
import parcel from '~/assets/case-studies/koursier/parcel.webp';
import restaurant from '~/assets/case-studies/koursier/restaurant.webp';
import restaurants from '~/assets/case-studies/koursier/restaurants.webp';
import background from '~/assets/case-studies/koursier/background.webp';
import adminBanners from '~/assets/case-studies/koursier/admin-banners.webp';
import adminCommissions from '~/assets/case-studies/koursier/admin-commissions.webp';
import adminRestaurants from '~/assets/case-studies/koursier/admin-restaurants.webp';
import webHero from '~/assets/case-studies/koursier/web-hero.webp';
import webOrder from '~/assets/case-studies/koursier/web-order.webp';
import webRestaurant from '~/assets/case-studies/koursier/web-restaurant.webp';
import { CaseStudy } from '~/layouts/case-study';
import { baseMeta } from '~/utils/meta';

const title = 'Koursier';
const description =
  'Plateforme de livraison au Cameroun : application mobile client, site de commande en ligne, espace restaurant et back-office d’administration pour les repas, les colis et le gaz domestique, avec suivi en temps réel et paiement par mobile money.';

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
    web={{
      title: 'Le site et le back-office',
      text: 'Sur koursier.cm, les clients commandent aussi depuis le navigateur, les restaurants gèrent leurs commandes dans leur espace, et l’équipe Koursier pilote toute la plateforme depuis un back-office d’administration.',
      hero: { src: webHero, alt: 'Page d’accueil de koursier.cm' },
      features: [
        {
          title: 'Commande en ligne',
          text: 'Catégories, bannières promotionnelles, plats populaires et restaurants triés par distance, avec le prix de livraison calculé selon l’adresse.',
          src: webOrder,
          alt: 'Page de commande en ligne',
        },
        {
          title: 'Espace restaurant',
          text: 'Les commandes arrivent en temps réel avec une sonnerie, le restaurant accepte, prépare et marque prête ; menu et horaires se gèrent en un clic.',
          src: webRestaurant,
          alt: 'Présentation de l’espace restaurant',
        },
        {
          title: 'Commissions & revenus',
          text: 'Chiffre d’affaires, commissions par service (repas, colis, gaz) et historique complet des livraisons avec export.',
          src: adminCommissions,
          alt: 'Tableau de bord des commissions',
        },
        {
          title: 'Gestion des restaurants',
          text: 'Restaurants partenaires, notes, répartition des commissions, catégories et repas administrés depuis une seule interface.',
          src: adminRestaurants,
          alt: 'Gestion des restaurants',
        },
        {
          title: 'Bannières application & site',
          text: 'Les bannières du carrousel sont publiées une seule fois et apparaissent à la fois dans l’application mobile et sur le site.',
          src: adminBanners,
          alt: 'Gestion des bannières',
        },
      ],
    }}
    roles={['React Native', 'Next.js', 'Node.js', 'WebSocket', 'Mobile money']}
    outcome={{
      title: 'Résultat',
      text: 'L’application client est publiée sur l’App Store et le site koursier.cm est en ligne à Douala et Yaoundé. Clients, restaurants, livreurs et administrateurs travaillent sur les mêmes données, mises à jour en temps réel.',
    }}
  />
);

import active from '~/assets/case-studies/koursier-delivery/active.webp';
import available from '~/assets/case-studies/koursier-delivery/available.webp';
import dashboard from '~/assets/case-studies/koursier-delivery/dashboard.webp';
import wallet from '~/assets/case-studies/koursier-delivery/wallet.webp';
import background from '~/assets/case-studies/koursier-delivery/background.webp';
import { CaseStudy } from '~/layouts/case-study';
import { baseMeta } from '~/utils/meta';

const title = 'Koursier Livreur';
const description =
  'Application dédiée aux livreurs Koursier : réception des commandes en temps réel, navigation vers le client, suivi des livraisons et portefeuille de gains, synchronisés avec la plateforme principale.';

export const meta = () => {
  return baseMeta({ title: `${title} - Application Livreur`, description, prefix: 'Projets' });
};

export const KoursierDelivery = () => (
  <CaseStudy
    slug="koursier-delivery"
    background={background}
    title={title}
    description={description}
    links={{
      appStore: 'https://apps.apple.com/ca/app/koursier-app/id6810741237?l=fr-CA',
    }}
    hero={[
      { src: available, alt: 'Commandes disponibles pour le livreur' },
      { src: dashboard, alt: 'Tableau de bord du livreur' },
      { src: wallet, alt: 'Portefeuille du livreur' },
    ]}
    challenge="Les livreurs devaient recevoir les commandes rapidement, savoir où aller, confirmer chaque étape et suivre leurs gains, le tout depuis la route, avec une connexion parfois instable et sans perdre de temps dans l’interface."
    solution="Mode en ligne / hors ligne, commandes disponibles poussées en temps réel, parcours en trois actions (accepter, démarrer, terminer), navigation GPS vers le restaurant et le client, et un portefeuille clair avec historique et statistiques de gains."
    features={[
      {
        title: 'Commandes disponibles',
        text: 'Nouvelles commandes reçues en direct avec montant, adresse et client, acceptées en un geste.',
        src: available,
        alt: 'Liste des commandes disponibles',
      },
      {
        title: 'Livraisons en cours',
        text: 'Étapes claires de la prise en charge à la remise, avec confirmation pour éviter les erreurs.',
        src: active,
        alt: 'Livraison en cours',
      },
      {
        title: 'Tableau de bord',
        text: 'Statut en ligne, livraisons par service, revenus et actions rapides dès l’ouverture.',
        src: dashboard,
        alt: 'Tableau de bord livreur',
      },
      {
        title: 'Portefeuille',
        text: 'Solde disponible, gains totaux, objectif mensuel et gains journaux en graphique.',
        src: wallet,
        alt: 'Portefeuille et gains',
      },
    ]}
    roles={['React Native', 'Node.js', 'WebSocket', 'Géolocalisation', 'Notifications push']}
    outcome={{
      title: 'Résultat',
      text: 'L’application livreur est publiée sur l’App Store et reçoit en temps réel les commandes passées depuis l’application client Koursier.',
    }}
  />
);

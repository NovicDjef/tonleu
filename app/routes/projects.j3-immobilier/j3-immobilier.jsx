import background from '~/assets/case-studies/j3-immobilier/background.webp';
import collection from '~/assets/case-studies/j3-immobilier/collection.webp';
import hero from '~/assets/case-studies/j3-immobilier/hero.webp';
import messaging from '~/assets/case-studies/j3-immobilier/messaging.webp';
import overview from '~/assets/case-studies/j3-immobilier/overview.webp';
import property from '~/assets/case-studies/j3-immobilier/property.webp';
import { CaseStudy } from '~/layouts/case-study';
import { baseMeta } from '~/utils/meta';

const title = 'J3 Immobilier';
const description =
  'Site et plateforme de gestion locative de J3 Immobilier à Gatineau : collection de logements filtrable, réservation de visites, espace locataire et back-office pour les propriétés, la maintenance, la messagerie et les actualités.';

export const meta = () => {
  return baseMeta({ title: `${title} - Site & Gestion Locative`, description, prefix: 'Projets' });
};

export const J3Immobilier = () => (
  <CaseStudy
    slug="j3-immobilier"
    background={background}
    device="browser"
    title={title}
    description={description}
    links={{ website: 'https://lavenderblush-hawk-228944.hostingersite.com' }}
    hero={[{ src: hero, alt: 'Page d’accueil du site J3 Immobilier' }]}
    challenge="J3 Immobilier gère un parc de logements haut de gamme dans l’Outaouais et s’adresse à deux publics : des locataires qui cherchent un logement et des propriétaires qui veulent confier la gestion de leur immeuble. La gestionnaire devait aussi traiter les demandes d’entretien et les échanges avec les locataires sans outil dédié."
    solution="Un site public qui présente la collection de logements, les services aux locataires et aux investisseurs et permet de réserver une visite, relié à un back-office sur mesure. Les logements, actualités et images ajoutés dans l’administration apparaissent immédiatement sur le site, et les demandes de maintenance sont triées automatiquement par gravité."
    features={[
      {
        title: 'Collection de logements',
        text: 'Condos, appartements, penthouses, maisons de ville et studios filtrables par type et par nombre de chambres, avec prix et disponibilité.',
        src: collection,
        alt: 'Collection de logements avec filtres',
      },
      {
        title: 'Fiche logement',
        text: 'Galerie photo, visite vidéo, caractéristiques, emplacement et réservation de visite ou demande de location depuis la même page.',
        src: property,
        alt: 'Fiche d’un logement avec galerie photo',
      },
      {
        title: 'Maintenance priorisée',
        text: 'Les demandes des locataires sont classées par gravité, avec assignation d’un technicien et date d’intervention.',
        src: overview,
        alt: 'File de demandes de maintenance priorisée',
      },
      {
        title: 'Messagerie locataires',
        text: 'Une conversation directe avec chaque locataire, rattachée à son logement, sans passer par le courriel ou le téléphone.',
        src: messaging,
        alt: 'Messagerie avec un locataire',
      },
    ]}
    roles={['Next.js', 'React', 'Back-office sur mesure', 'Espace locataire', 'SEO']}
    outcome={{
      title: 'Résultat',
      text: 'Le site public et l’espace de gestion partagent les mêmes données : un logement ajouté dans l’administration apparaît immédiatement sur le site, avec ses photos et sa visite vidéo.',
    }}
  />
);

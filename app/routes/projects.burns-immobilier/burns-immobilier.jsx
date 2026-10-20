import albums from '~/assets/case-studies/burns/albums.webp';
import gallery from '~/assets/case-studies/burns/gallery.webp';
import hero from '~/assets/case-studies/burns/hero.webp';
import mission from '~/assets/case-studies/burns/mission.webp';
import types from '~/assets/case-studies/burns/types.webp';
import background from '~/assets/case-studies/burns/background.webp';
import { CaseStudy } from '~/layouts/case-study';
import { baseMeta } from '~/utils/meta';

const title = 'Burns Immobilier';
const description =
  'Site web de gestion locative pour la Côte-Nord du Québec : présentation des logements du studio au 6½, albums photo par type d’appartement et demande de visite en ligne.';

export const meta = () => {
  return baseMeta({ title: `${title} - Gestion Locative Côte-Nord`, description, prefix: 'Projets' });
};

export const BurnsImmobilier = () => (
  <CaseStudy
    slug="burns-immobilier"
    background={background}
    device="browser"
    title={title}
    description={description}
    links={{ website: 'https://jb.novic.dev' }}
    hero={[
      { src: hero, alt: 'Page d’accueil Burns Immobilier' },
      { src: types, alt: 'Types d’appartements disponibles' },
    ]}
    challenge="Le gestionnaire recevait la plupart des demandes par téléphone, sans support pour présenter clairement ses différents types d’appartements, leurs prix et leurs photos."
    solution="Chaque type de logement a sa fiche (caractéristiques, prix de départ) et son album photo. Les visiteurs envoient une demande de visite directement depuis le site, transmise par courriel via EmailJS."
    features={[
      {
        title: 'Types de logements',
        text: 'Du studio au duplex 6½, avec caractéristiques incluses et prix de départ.',
        src: types,
        alt: 'Types d’appartements',
      },
      {
        title: 'Albums par appartement',
        text: 'Photos filtrées par type de logement pour se projeter avant la visite.',
        src: albums,
        alt: 'Albums photo',
      },
      {
        title: 'Galerie des logements',
        text: 'Chambres, cuisines et salons présentés en grand avec descriptions.',
        src: gallery,
        alt: 'Galerie',
      },
      {
        title: 'Mission & confiance',
        text: 'Expertise locale, réactivité 24/7 et chiffres clés mis en avant.',
        src: mission,
        alt: 'Notre mission',
      },
    ]}
    roles={['React', 'Node.js', 'Tailwind CSS', 'EmailJS']}
    outcome={{
      title: 'Résultat',
      text: 'Le site est en ligne et permet aux futurs locataires de consulter les logements et d’envoyer une demande de visite sans passer par le téléphone.',
    }}
  />
);

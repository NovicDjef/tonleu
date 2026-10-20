import countries from '~/assets/case-studies/jt-trade/countries.webp';
import hero from '~/assets/case-studies/jt-trade/hero.webp';
import languages from '~/assets/case-studies/jt-trade/languages.webp';
import process from '~/assets/case-studies/jt-trade/process.webp';
import services from '~/assets/case-studies/jt-trade/services.webp';
import background from '~/assets/case-studies/jt-trade/background.webp';
import { CaseStudy } from '~/layouts/case-study';
import { baseMeta } from '~/utils/meta';

const title = 'JT Trade and Services';
const description =
  'Site web de JT Trade and Services, entreprise d’import-export et de transport de colis basée à Douala : envois vers le Canada, l’Italie, l’Allemagne et le Royaume-Uni, formations en langues et accompagnement visa.';

export const meta = () => {
  return baseMeta({ title: `${title} - Import-Export & Transport de Colis`, description, prefix: 'Projets' });
};

export const JtTradeServices = () => (
  <CaseStudy
    slug="jt-trade-services"
    background={background}
    device="browser"
    title={title}
    description={description}
    links={{ website: 'https://jttradeservices.com' }}
    hero={[
      { src: hero, alt: 'Page d’accueil JT Trade and Services' },
      { src: countries, alt: 'Pays desservis' },
    ]}
    challenge="Les clients voulaient savoir rapidement où l’entreprise expédie, comment se déroule un envoi et combien cela coûte, tout en ayant confiance dans un service à distance. L’offre de formations en langues devait aussi trouver sa place."
    solution="Le site présente les corridors de livraison pays par pays, explique l’envoi en quatre étapes, met en avant les garanties (entreprise agréée, suivi, colis sécurisés), propose un simulateur et une demande de devis gratuite, et regroupe les cours de langues et l’accompagnement visa."
    features={[
      {
        title: 'Services logistiques',
        text: 'Envoi de colis, fret maritime et aérien, livraison porte-à-porte.',
        src: services,
        alt: 'Services',
      },
      {
        title: 'Pays desservis',
        text: 'Canada, Italie, Allemagne, Royaume-Uni et base logistique à Douala, avec les services par pays.',
        src: countries,
        alt: 'Pays desservis',
      },
      {
        title: 'Envoi en 4 étapes',
        text: 'Devis, collecte et emballage, expédition, livraison, puis les raisons de faire confiance.',
        src: process,
        alt: 'Processus d’envoi',
      },
      {
        title: 'Formations en langues',
        text: 'Préparation TCF / TEF, allemand, italien, anglais / IELTS et accompagnement visa.',
        src: languages,
        alt: 'Formations en langues',
      },
    ]}
    roles={['Next.js', 'React', 'SEO', 'Simulateur de tarifs', 'Formulaire de devis']}
    outcome={{
      title: 'Résultat',
      text: 'Le site est en ligne sur jttradeservices.com. Il présente clairement l’offre logistique et les formations, et dirige les visiteurs vers la demande de devis.',
    }}
  />
);

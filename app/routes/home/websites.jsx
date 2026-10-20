import { Divider } from '~/components/divider';
import { Heading } from '~/components/heading';
import { Link as RouterLink } from 'react-router-dom';
import { Section } from '~/components/section';
import { Text } from '~/components/text';
import { cssProps, numToMs } from '~/utils/style';
import styles from './websites.module.css';

const websites = [
  {
    name: 'Planevia',
    url: 'https://planevia.ca',
    project: '/projects/planevia',
    category: 'SaaS · Web & mobile',
    description:
      'Plateforme de gestion pour spas, cliniques et salons : réservation en ligne, dossiers clients, pointage et comptabilité.',
    location: 'Sept-Îles, QC',
  },
  {
    name: 'Koursier',
    url: 'https://koursier.cm',
    project: '/projects/koursier',
    category: 'Livraison · Web & mobile',
    description:
      'Commande de repas, envoi de colis et livraison de gaz, espace restaurant et back-office d’administration.',
    location: 'Douala & Yaoundé, Cameroun',
  },
  {
    name: 'RaphyCar',
    url: 'https://raphycar.com',
    project: '/projects/raphycar',
    category: 'Location de véhicules · Web & mobile',
    description:
      'Catalogue de véhicules, espace pro pour les agences et application mobile de réservation.',
    location: 'Douala, Cameroun',
  },
  {
    name: 'Hôtel Sept-Îles',
    url: 'https://hotel.novic.dev',
    project: '/projects/hotel-sept-iles',
    category: 'Hôtellerie · Réservation en ligne',
    description:
      'Site et moteur de réservation : chambres, spa et restaurant, avec paiement en ligne et console de gestion interne.',
    location: 'Sept-Îles, QC',
  },
  {
    name: 'J3 Immobilier',
    url: 'https://lavenderblush-hawk-228944.hostingersite.com',
    project: '/projects/j3-immobilier',
    category: 'Immobilier · Gestion locative',
    description:
      'Collection de logements, réservation de visites, espace locataire et back-office de maintenance.',
    location: 'Gatineau, QC',
  },
  {
    name: 'JT Trade and Services',
    url: 'https://jttradeservices.com',
    project: '/projects/jt-trade-services',
    category: 'Import-export & logistique',
    description:
      'Transport de colis et fret entre l’Afrique, le Canada et l’Europe, formations en langues et accompagnement visa.',
    location: 'Douala, Cameroun',
  },
  {
    name: 'Burns Immobilier',
    url: 'https://jb.novic.dev',
    project: '/projects/burns-immobilier',
    category: 'Immobilier · Location',
    description:
      'Présentation des logements du 1½ au 6½, albums photo par appartement et demande de visite en ligne.',
    location: 'Sept-Îles, QC',
  },
  {
    name: 'Callora',
    url: 'https://callora.ca',
    category: 'SaaS · Intelligence artificielle',
    description:
      'Standard téléphonique IA disponible 24/7 qui répond aux appels, prend les rendez-vous et rappelle les clients.',
    location: 'Sept-Îles, QC',
  },
  {
    name: 'Spa Renaissance',
    url: 'https://sparenaissance.ca',
    category: 'Spa & bien-être',
    description:
      'Massothérapie, soins esthétiques et parcours thermal (sauna, bains, infrathérapie) en bordure du Saint-Laurent.',
    location: 'Sept-Îles, QC',
  },
  {
    name: 'Clinique OptimVie',
    url: 'https://optimvie.ca',
    category: 'Clinique esthétique & santé',
    description:
      'Endermologie LPG, cryolipolyse, santé pelvienne, kinésithérapie et massothérapie, sans chirurgie ni temps d’arrêt.',
    location: 'Montréal, QC',
  },
  {
    name: 'J3 beauté',
    url: 'https://j3beaute.ca',
    category: 'Institut de beauté',
    description:
      'Coiffure, esthétique, microblading, tricopigmentation et soins de la peau par une trentaine de professionnels.',
    location: 'Gatineau, QC',
  },
  {
    name: 'NOVÆ Systems',
    url: 'https://novae-systems.ca',
    category: 'Agence web & logiciel',
    description:
      'Conception de sites web, d’applications iOS et Android, de solutions SaaS et d’outils d’IA sur mesure.',
    location: 'Sept-Îles, QC',
  },
];

const Arrow = ({ external }) => (
  <svg className={styles.arrow} viewBox="0 0 16 16" aria-hidden="true">
    <path
      d={external ? 'M5 11 11 5M6 5h5v5' : 'M3 8h10M9 4l4 4-4 4'}
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

const SiteCard = ({ site }) => {
  const content = (
    <>
      <span className={styles.category}>{site.category}</span>
      <span className={styles.name}>{site.name}</span>
      <span className={styles.description}>{site.description}</span>
      <span className={styles.footer}>
        <span className={styles.location}>{site.location}</span>
        <span className={styles.domain}>
          {site.project ? 'Voir le projet' : site.url.replace('https://', '')}
          <Arrow external={!site.project} />
        </span>
      </span>
    </>
  );

  if (site.project) {
    return (
      <RouterLink className={styles.card} to={site.project}>
        {content}
      </RouterLink>
    );
  }

  return (
    <a
      className={styles.card}
      href={site.url}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={`Visiter ${site.name} (${site.url.replace('https://', '')})`}
    >
      {content}
    </a>
  );
};

export const Websites = ({ id, visible, sectionRef }) => {
  const titleId = `${id}-title`;

  return (
    <Section
      className={styles.websites}
      as="section"
      id={id}
      ref={sectionRef}
      aria-labelledby={titleId}
      tabIndex={-1}
    >
      <div className={styles.content}>
        <div className={styles.tag} aria-hidden>
          <Divider notchWidth="64px" notchHeight="8px" collapsed={!visible} collapseDelay={400} />
          <div className={styles.tagText} data-visible={visible}>
            Sites web en ligne
          </div>
        </div>
        <Heading className={styles.title} data-visible={visible} level={3} as="h2" id={titleId}>
          Sites web réalisés
        </Heading>
        <Text className={styles.intro} data-visible={visible} size="l" as="p">
          {websites.length} sites conçus, développés et mis en ligne pour des entreprises
          au Québec et au Cameroun. Les projets détaillés présentent le travail réalisé ;
          les autres mènent directement au site.
        </Text>
        <ul className={styles.grid}>
          {websites.map((site, index) => (
            <li
              key={site.url}
              className={styles.item}
              data-visible={visible}
              style={cssProps({ delay: numToMs(300 + index * 80) })}
            >
              <SiteCard site={site} />
            </li>
          ))}
        </ul>
      </div>
    </Section>
  );
};

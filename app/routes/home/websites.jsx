import { Divider } from '~/components/divider';
import { Heading } from '~/components/heading';
import { Section } from '~/components/section';
import { Text } from '~/components/text';
import { cssProps, numToMs } from '~/utils/style';
import styles from './websites.module.css';

const websites = [
  {
    name: 'Planevia',
    domain: 'planevia.ca',
    category: 'SaaS · Web & mobile',
    description:
      'Plateforme de gestion pour spas, cliniques et salons : réservation en ligne 24/7, dossiers clients, pointage et comptabilité.',
    location: 'Sept-Îles, QC',
  },
  {
    name: 'Callora',
    domain: 'callora.ca',
    category: 'SaaS · Intelligence artificielle',
    description:
      'Standard téléphonique IA disponible 24/7 qui répond aux appels, prend les rendez-vous et rappelle les clients.',
    location: 'Sept-Îles, QC',
  },
  {
    name: 'Spa Renaissance',
    domain: 'sparenaissance.ca',
    category: 'Spa & bien-être',
    description:
      'Massothérapie, soins esthétiques et parcours thermal (sauna, bains, infrathérapie) en bordure du Saint-Laurent.',
    location: 'Sept-Îles, QC',
  },
  {
    name: 'Clinique OptimVie',
    domain: 'optimvie.ca',
    category: 'Clinique esthétique & santé',
    description:
      'Endermologie LPG, cryolipolyse, santé pelvienne, kinésithérapie et massothérapie, sans chirurgie ni temps d’arrêt.',
    location: 'Montréal, QC',
  },
  {
    name: 'J3 beauté',
    domain: 'j3beaute.ca',
    category: 'Institut de beauté',
    description:
      'Coiffure, esthétique, microblading, tricopigmentation et soins de la peau par une trentaine de professionnels.',
    location: 'Gatineau, QC',
  },
  {
    name: 'NOVÆ Systems',
    domain: 'novae-systems.ca',
    category: 'Agence web & logiciel',
    description:
      'Conception de sites web, d’applications iOS et Android, de solutions SaaS et d’outils d’IA sur mesure.',
    location: 'Sept-Îles, QC',
  },
  {
    name: 'RaphyCar',
    domain: 'raphycar.com',
    category: 'Location de véhicules',
    description:
      'Location de voitures en ligne avec filtres intelligents, assistant IA et gestion complète de la flotte.',
    location: 'Cameroun',
  },
  {
    name: 'Koursier',
    domain: 'koursier.cm',
    category: 'Livraison',
    description:
      'Livraison de repas, de colis et de gaz domestique avec paiement Orange Money, MTN Mobile Money ou espèces.',
    location: 'Douala & Yaoundé, Cameroun',
  },
];

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
          au Québec et au Cameroun. Cliquez sur un site pour le visiter.
        </Text>
        <ul className={styles.grid}>
          {websites.map((site, index) => (
            <li
              key={site.domain}
              className={styles.item}
              data-visible={visible}
              style={cssProps({ delay: numToMs(300 + index * 80) })}
            >
              <a
                className={styles.card}
                href={`https://${site.domain}`}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`Visiter ${site.name} (${site.domain})`}
              >
                <span className={styles.category}>{site.category}</span>
                <span className={styles.name}>{site.name}</span>
                <span className={styles.description}>{site.description}</span>
                <span className={styles.footer}>
                  <span className={styles.location}>{site.location}</span>
                  <span className={styles.domain}>
                    {site.domain}
                    <svg className={styles.arrow} viewBox="0 0 16 16" aria-hidden="true">
                      <path
                        d="M5 11 11 5M6 5h5v5"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </span>
                </span>
              </a>
            </li>
          ))}
        </ul>
      </div>
    </Section>
  );
};

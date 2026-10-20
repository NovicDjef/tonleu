import { Fragment, useState } from 'react';
import { Link as RouterLink } from 'react-router-dom';
import { Button } from '~/components/button';
import { DecoderText } from '~/components/decoder-text';
import { Divider } from '~/components/divider';
import { Footer } from '~/components/footer';
import { Heading } from '~/components/heading';
import { Section } from '~/components/section';
import { Text } from '~/components/text';
import { baseMeta } from '~/utils/meta';
import styles from './about.module.css';

const title = 'À propos';
const description = 'Mon parcours, ma façon de travailler et mon intérêt pour le développement React Native et les technologies web et mobiles.';

export const meta = () => {
  return baseMeta({
    title,
    description,
  });
};

const aboutData = {
  intro: {
    philosophy:
      'Je suis développeur full stack web et mobile, basé à Sept-Îles. Depuis 2022, je conçois et développe des applications React Native, des plateformes web en Next.js et les API Node.js qui les font fonctionner, de la maquette jusqu’à la mise en production.',
    background:
      'J’ai commencé dans la fintech chez iLink World Corporation, sur des applications de transfert d’argent, d’assurance santé et de collecte de taxes municipales. Je développe aujourd’hui des plateformes comme Planevia et Koursier, ainsi que des sites et des outils de gestion pour des entreprises du Québec et du Cameroun.',
    mindset:
      'Je travaille en méthode agile, avec intégration et déploiement continus, et j’accorde autant d’importance à la qualité du code qu’à l’expérience des personnes qui utilisent l’application.',
  },

  services: [
    {
      title: 'Développement mobile',
      description:
        'Applications multiplateformes Android et iOS avec React Native, de la conception à la publication sur l’App Store et Google Play.',
      icon: 'MOB',
      technologies: ['React Native', 'Expo', 'TypeScript', 'Redux', 'Notifications push', 'Biométrie'],
    },
    {
      title: 'Développement back-end',
      description:
        'API, logique métier, authentification et paiements : la partie invisible qui fait fonctionner les applications web et mobiles.',
      icon: 'API',
      technologies: ['Node.js', 'Express', 'PostgreSQL', 'Prisma', 'API REST', 'JWT'],
    },
    {
      title: 'Développement web',
      description:
        'Plateformes SaaS, back-offices, sites de réservation et sites vitrines rapides et bien référencés.',
      icon: 'WEB',
      technologies: ['React', 'Next.js', 'TypeScript', 'Tailwind CSS', 'SEO'],
    },
    {
      title: 'DevOps & CI/CD',
      description:
        'Tests, intégration continue et déploiements automatisés pour livrer des versions fiables, souvent.',
      icon: 'OPS',
      technologies: ['GitHub Actions', 'Docker', 'Nginx', 'Publication sur les stores', 'Tests automatisés'],
    },
  ],

  projects: [
    {
      name: 'Planevia',
      type: 'SaaS de gestion pour spas, cliniques et salons',
      category: 'Web & mobile',
      description: 'Réservation en ligne, dossiers clients, pointage, comptabilité TPS/TVQ et API publique.',
      technologies: ['React Native', 'Next.js', 'Node.js', 'TypeScript'],
      link: '/projects/planevia',
    },
    {
      name: 'Koursier',
      type: 'Livraison de repas, colis et gaz',
      category: 'Web & mobile',
      period: '2024 - aujourd’hui',
      description: 'Applications client et livreur, site de commande, espace restaurant et back-office.',
      technologies: ['React Native', 'Next.js', 'Node.js', 'Prisma'],
      link: '/projects/koursier',
    },
    {
      name: 'RaphyCar',
      type: 'Location de véhicules',
      category: 'Web & mobile',
      period: '2024',
      description: 'Application de réservation pour les clients et espace pro web pour les agences.',
      technologies: ['React Native', 'Next.js', 'Node.js', 'Mobile money'],
      link: '/projects/raphycar',
    },
    {
      name: 'Hôtel Sept-Îles',
      type: 'Hôtellerie',
      category: 'Web',
      description: 'Site et moteur de réservation, et console de gestion interne de 155 chambres.',
      technologies: ['Next.js', 'Node.js', 'Stripe'],
      link: '/projects/hotel-sept-iles',
    },
    {
      name: 'J3 Immobilier',
      type: 'Gestion locative',
      category: 'Web',
      description: 'Collection de logements, réservation de visites, maintenance et messagerie locataires.',
      technologies: ['Next.js', 'React'],
      link: '/projects/j3-immobilier',
    },
    {
      name: 'JT Trade and Services',
      type: 'Import-export et logistique',
      category: 'Web',
      description: 'Site de transport de colis Afrique-Canada-Europe avec demande de devis.',
      technologies: ['Next.js', 'SEO'],
      link: '/projects/jt-trade-services',
    },
    {
      name: 'Suite fintech iLink World',
      type: 'Fintech / Insurtech',
      category: 'Mobile',
      period: '2022 - 2024',
      description: 'Transfert d’argent international et paiement d’assurance santé.',
      technologies: ['React Native', 'PHP', 'Node.js', 'MySQL'],
    },
    {
      name: 'iLinkCity',
      type: 'Services municipaux',
      category: 'Mobile',
      period: '2022 - 2023',
      description: 'Recouvrement des taxes municipales pour les mairies d’arrondissement de Douala.',
      technologies: ['React Native', 'PHP', 'Node.js', 'MySQL'],
    },
    {
      name: 'MedRemind',
      type: 'Santé',
      category: 'Mobile',
      period: '2023',
      description: 'Rappels de médicaments, suivi des prises et accès protégé par code PIN.',
      technologies: ['React Native', 'Expo', 'Notifications'],
      link: '/projects/reminder',
    },
  ],

  companies: [
    'iLink World Corporation',
    'Institut Universitaire de la Côte',
    'Orange Cameroun',
    'Koursier SARL',
    'Media Press Africa',
    'Appstud',
    'InnovaTechSolution',
    'Chrono Service',
    'Destiny Sono Pro',
  ],
};

const ServiceCard = ({ service, index }) => {
  const [isHovered, setIsHovered] = useState(false);
  const [isScanning, setIsScanning] = useState(false);
  
  const handleMouseEnter = () => {
    setIsHovered(true);
    setIsScanning(true);
    setTimeout(() => setIsScanning(false), 2000);
  };
  
  return (
    <div 
      className={`${styles.serviceCard} ${isScanning ? styles.scanning : ''}`}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={() => setIsHovered(false)}
      style={{ animationDelay: `${index * 0.15}s` }}
    >
      <div className={styles.serviceHeader}>
        <div className={styles.serviceIcon}>{service.icon}</div>
        <div className={styles.servicePower}>
          <div className={styles.powerIndicator}></div>
          <div className={styles.powerIndicator}></div>
          <div className={styles.powerIndicator}></div>
        </div>
      </div>
      
      <div className={styles.serviceContent}>
        <Heading level={3} as="h3" className={styles.serviceTitle}>
          <span className={styles.titleGlitch} data-text={service.title}>
            {service.title}
          </span>
        </Heading>
        <Text size="s" className={styles.serviceDescription}>
          {service.description}
        </Text>
        <div className={styles.serviceTech}>
          {service.technologies.map((tech, i) => (
            <span key={i} className={styles.techBadge}>
              <span className={styles.techPrefix}>/</span>
              {tech}
            </span>
          ))}
        </div>
      </div>
      
      <div className={styles.scannerLines}>
        <div className={styles.scannerLine}></div>
        <div className={styles.scannerLine}></div>
      </div>
      
      {isHovered && (
        <div className={styles.serviceOverlay}>
          <div className={styles.overlayGrid}></div>
          <span className={styles.serviceOverlayText}>
            <span className={styles.overlayPrefix}>&gt;</span> SYSTÈME_PRÊT
          </span>
        </div>
      )}
    </div>
  );
};

const ProjectCard = ({ project, index }) => {
  const content = (
    <>
      <div className={styles.clientHeader}>
        <div className={styles.clientHeaderMain}>
          <Heading level={4} as="h3" className={styles.clientName}>
            {project.name}
          </Heading>
          <span className={styles.clientCategory}>{project.category}</span>
        </div>
        {project.period && <span className={styles.clientPeriod}>{project.period}</span>}
      </div>
      <Text size="s" as="p" className={styles.clientType}>
        {project.type}
      </Text>
      <Text size="s" as="p" className={styles.clientDescription}>
        {project.description}
      </Text>
      <div className={styles.clientTech}>
        {project.technologies.map(tech => (
          <span key={tech} className={styles.clientTechBadge}>
            {tech}
          </span>
        ))}
      </div>
    </>
  );

  const style = { animationDelay: `${index * 0.05}s` };

  if (project.link) {
    return (
      <RouterLink
        to={project.link}
        className={`${styles.clientCard} ${styles.clientCardLink}`}
        style={style}
      >
        {content}
      </RouterLink>
    );
  }

  return (
    <div className={styles.clientCard} style={style}>
      {content}
    </div>
  );
};

export function About() {

  return (
    <Fragment>
      <Section className={styles.about}>
        {/* Hero Section */}
        <div className={styles.hero}>
          <div className={styles.heroContent}>
            <div className={styles.heroMain}>
              <Heading level={1} as="h1" className={styles.title}>
                <DecoderText text={title} delay={300} />
              </Heading>
            </div>
          </div>
          <Divider className={styles.divider} />
        </div>

        {/* Content */}
        <div className={styles.content}>
          {/* About Content */}
          <section className={styles.section}>
            <Heading level={2} as="h2" className={styles.sectionTitle}>
              À propos de moi
            </Heading>
            <div className={styles.aboutText}>
              <div className={styles.terminalStatus}>SYSTÈME_EN_LIGNE</div>
              <div className={styles.matrixGrid}></div>
              <div className={styles.scanLines}></div>
              <div className={styles.holoShimmer}></div>
              <div className={styles.aboutTextContent}>
                <Text size="l" as="p" className={styles.paragraph}>
                  {aboutData.intro.philosophy}
                </Text>
                <Text size="l" as="p" className={styles.paragraph}>
                  {aboutData.intro.background}
                </Text>
                <Text size="l" as="p" className={styles.paragraph}>
                  {aboutData.intro.mindset}
                </Text>
              </div>
            </div>
          </section>

          {/* Services Section */}
          <section className={styles.section}>
            <div className={styles.sectionHeader}>
              <Heading level={2} as="h2" className={styles.sectionTitle}>
                Ce que je fais
              </Heading>
              <Button 
                secondary 
                iconHoverShift 
                icon="arrow-right" 
                href="/cv"
                className={styles.cvButton}
              >
                Voir le CV
              </Button>
            </div>
            <div className={styles.servicesGrid}>
              {aboutData.services.map((service, index) => (
                <ServiceCard key={index} service={service} index={index} />
              ))}
            </div>
          </section>

          {/* Clients Section */}
          <section className={styles.section}>
            <Heading level={2} as="h2" className={styles.sectionTitle}>
              Projets
            </Heading>
            <div className={styles.clientsGrid}>
              {aboutData.projects.map((project, index) => (
                <ProjectCard key={project.name} project={project} index={index} />
              ))}
            </div>
          </section>

          {/* Companies Section */}
          <section className={styles.section}>
            <div className={styles.companiesContainer}>
              <div className={styles.companiesHeader}>
                <div className={styles.hackingIndicator}>
                  <span className={styles.hackingText}>CHARGEMENT</span>
                  <div className={styles.hackingDots}>
                    <span></span><span></span><span></span>
                  </div>
                </div>
                <Heading level={2} as="h2" className={styles.companiesSectionTitle}>
                  &gt; COLLABORATIONS
                </Heading>
                <div className={styles.networkStatus}>
                  <span className={styles.statusText}>HISTORIQUE</span>
                  <div className={styles.signalBars}>
                    <div className={styles.bar}></div>
                    <div className={styles.bar}></div>
                    <div className={styles.bar}></div>
                    <div className={styles.bar}></div>
                  </div>
                </div>
              </div>
              
              <div className={styles.scrollingCompanies}>
                <div className={styles.companiesTrack}>
                  {[...aboutData.companies, ...aboutData.companies].map((company, index) => (
                    <div key={index} className={styles.companyItem}>
                      <span className={styles.companyPrefix}>[{String(index % aboutData.companies.length + 1).padStart(2, '0')}]</span>
                      <span className={styles.companyName}>{company}</span>
                    </div>
                  ))}
                </div>
              </div>
              
              <div className={styles.hackingFooter}>
                <div className={styles.progressBar}>
                  <div className={styles.progressFill}></div>
                </div>
                <span className={styles.footerText}>[CHARGEMENT_TERMINÉ] {aboutData.companies.length} entreprises et organisations</span>
              </div>
            </div>
          </section>
        </div>
      </Section>
      <Footer />
    </Fragment>
  );
}
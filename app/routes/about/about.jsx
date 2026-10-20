import { Fragment, useState } from 'react';
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
    tagline: 'Vivre, coder, recommencer',
    philosophy: 'Je suis développeur React Native et je conçois des applications mobiles performantes, soignées et faciles à utiliser. Avec plus de 3 ans d’expérience en développement mobile multiplateforme, je maîtrise bien l’écosystème JavaScript, et plus particulièrement les technologies React.',
    
    background: 'Habitué aux méthodes agiles, je maîtrise aussi les technologies back-end, les outils et pratiques DevOps ainsi que les bases de données SQL et NoSQL. Je connais bien les systèmes d’exploitation mobiles et les langages couramment utilisés en développement mobile.',
    
    mindset: 'Au-delà de la technique, j’aime apprendre, je travaille bien en équipe et je suis à l’aise face à de nouveaux défis, ce qui me permet d’aborder facilement de nouveaux domaines.'
  },

  contact: {
    location: 'Sept-Îles, QC, Canada',
    email: 'contact@novic.dev'
  },

  services: [
    {
      title: 'Développement mobile',
      description: 'Les applications mobiles font partie de notre quotidien. Mon activité principale est le développement d’applications mobiles multiplateformes avec React Native, pour Android et iOS.',
      icon: '📱',
      technologies: ['React Native', 'Expo', 'TypeScript', 'Redux', 'Notifications push', 'Biométrie']
    },
    {
      title: 'Développement back-end',
      description: 'Une belle interface reste une coquille vide sans un back-end solide. Je conçois, développe et déploie la logique métier propre à chaque projet.',
      icon: '⚡',
      technologies: ['Node.js', 'Express', 'PostgreSQL', 'Prisma', 'API REST', 'JWT']
    },
    {
      title: 'Développement web',
      description: 'Je réalise des applications web, des sites vitrines et des plateformes de commerce en ligne avec des technologies actuelles.',
      icon: '🌐',
      technologies: ['React', 'Next.js', 'TypeScript', 'Tailwind CSS', 'Vercel']
    },
    {
      title: 'DevOps & CI/CD',
      description: 'En plus du développement, j’applique les bonnes pratiques DevOps pour livrer un produit fiable dans des délais raisonnables.',
      icon: '🚀',
      technologies: ['GitHub Actions', 'Docker', 'Déploiement Play Store', 'Tests automatisés']
    }
  ],

  clients: [
    {
      name: 'iLink World Corporation',
      type: 'Fintech/Insurtech',
      category: 'Application mobile',
      period: '2021 - 2023',
      description: 'Plateforme de transfert d’argent international et de paiement d’assurance santé',
      technologies: ['React Native', 'PHP', 'Node.js', 'MySQL']
    },
    {
      name: 'iLink World Corporation',
      type: 'Fintech/Insurtech',
      category: 'Application mobile',
      period: '2022 - 2023',
      description: 'Plateforme de recouvrement des taxes municipales pour les mairies d’arrondissement de Douala',
      technologies: ['React Native', 'PHP', 'Node.js', 'MySQL']
    },
    {
      name: 'Koursier Platform',
      type: 'Livraison de repas',
      category: 'Écosystème mobile',
      period: '2023 - aujourd’hui',
      description: 'Applications client et livreur, et plateforme d’administration',
      technologies: ['React Native', 'Next.js', 'Prisma', 'GitHub Actions']
    },
    {
      name: 'RaphyCar',
      type: 'Location de véhicules',
      category: 'Application web',
      period: '2024',
      description: 'Plateforme de location de véhicules avec IA et vérification d’identité',
      technologies: ['Next.js', 'Chatbot IA', 'PostgreSQL', 'Stripe']
    },
    {
      name: 'Reminder',
      type: 'Santé',
      category: 'Application mobile',
      period: '2023',
      description: 'Application de rappel de médicaments avec authentification biométrique',
      technologies: ['React Native', 'Expo', 'Face ID', 'Notifications push']
    },
    {
      name: 'Admin Dashboard Analytics',
      type: 'Gestion',
      category: 'Application web',
      period: '2024',
      description: 'Tableau de bord d’administration avec statistiques en temps réel',
      technologies: ['React', 'TypeScript', 'Chart.js', 'Material-UI']
    }
  ],

  companies: [
    'iLink World Corporation',
    'Institut Universitaire de la Côte',
    'Orange Cameroun',
    'koursier Sarl',
    'Media Press Africa',
    'Appstud',
    'InnovaTechSolution',
    'Chrono Service',
    'Destiny Sono Pro'
  ]
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

const ClientCard = ({ client, index }) => (
  <div 
    className={styles.clientCard}
    style={{ animationDelay: `${index * 0.05}s` }}
  >
    <div className={styles.clientHeader}>
      <div className={styles.clientHeaderMain}>
        <Heading level={4} as="h4" className={styles.clientName}>
          {client.name}
        </Heading>
        <span className={styles.clientCategory}>{client.category}</span>
      </div>
      <span className={styles.clientPeriod}>{client.period}</span>
    </div>
    <Text size="s" className={styles.clientType}>
      {client.type}
    </Text>
    <Text size="s" className={styles.clientDescription}>
      {client.description}
    </Text>
    <div className={styles.clientTech}>
      {client.technologies.map((tech, i) => (
        <span key={i} className={styles.clientTechBadge}>{tech}</span>
      ))}
    </div>
  </div>
);

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
                icon="download" 
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
              Projets et clients
            </Heading>
            <div className={styles.clientsGrid}>
              {aboutData.clients.map((client, index) => (
                <ClientCard key={index} client={client} index={index} />
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
                  &gt; ENTREPRISES_PARTENAIRES
                </Heading>
                <div className={styles.networkStatus}>
                  <span className={styles.statusText}>STATUT : ACTIF</span>
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
                      <div className={styles.companyStatus}>
                        <span className={styles.statusDot}></span>
                        <span className={styles.statusLabel}>ACTIF</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              
              <div className={styles.hackingFooter}>
                <div className={styles.progressBar}>
                  <div className={styles.progressFill}></div>
                </div>
                <span className={styles.footerText}>[CHARGEMENT_TERMINÉ] Base des partenaires chargée • {aboutData.companies.length} entreprises</span>
              </div>
            </div>
          </section>
        </div>
      </Section>
      <Footer />
    </Fragment>
  );
}
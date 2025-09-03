import { Fragment, useState } from 'react';
import { Button } from '~/components/button';
import { DecoderText } from '~/components/decoder-text';
import { Divider } from '~/components/divider';
import { Footer } from '~/components/footer';
import { Heading } from '~/components/heading';
import { Image } from '~/components/image';
import { Section } from '~/components/section';
import { Text } from '~/components/text';
import { baseMeta } from '~/utils/meta';
import { media } from '~/utils/style';
import { useWindowSize } from '~/hooks';
import styles from './about.module.css';

const title = 'À Propos de Moi';
const description = 'Découvrez mon parcours, ma philosophie et ma passion pour le développement React Native et les technologies modernes.';

export const meta = () => {
  return baseMeta({
    title,
    description,
  });
};

const aboutData = {
  intro: {
    tagline: 'Live, code, repeat',
    philosophy: 'Je suis un développeur React Native spécialisé dans la création d\'applications mobiles performantes, élégantes et intuitives. Avec plus de 3 ans d\'expérience dans le développement mobile cross-platform, j\'ai une solide maîtrise de l\'écosystème JavaScript et des technologies React en particulier.',
    
    background: 'Familier des méthodes agiles, je possède par ailleurs une bonne maîtrise des technologies back-end, des outils et pratiques DevOps et des bases de données SQL/NoSQL. J\'ai une solide compréhension des systèmes d\'exploitation mobiles, ainsi que des langages de programmation couramment utilisés dans le développement mobile.',
    
    mindset: 'Au-delà de mes compétences techniques, mon envie insatiable de connaissances, mon bon sens du relationnel et ma volonté manifeste de faire face à de nouveaux défis me permettent aisément de m\'aventurer dans de nouveaux sentiers battus.'
  },

  contact: {
    location: 'Sept-Îles, QC, Canada',
    email: 'contact@novic.dev'
  },

  services: [
    {
      title: 'Développement Mobile',
      description: 'Les applications mobiles font partie intégrante de notre quotidien. Mon créneau principal consiste à développer des applications mobiles professionnelles cross-platform avec React Native, à la fois sur Android et iOS.',
      icon: '📱',
      technologies: ['React Native', 'Expo', 'TypeScript', 'Redux', 'Notifications Push', 'Biométrie']
    },
    {
      title: 'Développement Backend',
      description: 'Une belle interface reste une coquille vide si elle n\'est pas associée à un back-end robuste. Je conçois, développe et déploie la logique métier inhérente à chaque projet.',
      icon: '⚡',
      technologies: ['Node.js', 'Express', 'PostgreSQL', 'Prisma', 'API RESTful', 'JWT']
    },
    {
      title: 'Développement Web',
      description: 'Fort de mon expérience dans ce domaine, je crée des applications web, sites internet et plateformes e-commerce professionnelles en utilisant les technologies les plus récentes.',
      icon: '🌐',
      technologies: ['React', 'Next.js', 'TypeScript', 'Tailwind CSS', 'Vercel']
    },
    {
      title: 'DevOps & CI/CD',
      description: 'Outre ma casquette de développeur, je mets un point d\'honneur à utiliser les bonnes pratiques DevOps afin de garantir un produit de qualité dans les plus brefs délais.',
      icon: '🚀',
      technologies: ['GitHub Actions', 'Docker', 'Play Store Deploy', 'Automated Testing']
    }
  ],

  clients: [
    {
      name: 'iLink World Corporation',
      type: 'Fintech/Insurtech',
      category: 'Application mobile',
      description: 'Plateforme de transferts d\'argent internationaux et paiements d\'assurance santé',
      technologies: ['React Native', 'PHP', 'Node.js', 'MySQL']
    },
    {
      name: 'iLink World Corporation',
      type: 'Fintech/Insurtech',
      category: 'Application mobile',
      description: 'Plateforme de regroupement de taxes communales dans les mairies d\'arrondissements de la ville de Douala',
      technologies: ['React Native', 'PHP', 'Node.js', 'MySQL']
    },
    {
      name: 'Koursier Platform',
      type: 'Food Delivery',
      category: 'Écosystème mobile',
      description: 'Applications client/livreur et plateforme admin de gestion',
      technologies: ['React Native', 'Next.js', 'Prisma', 'GitHub Actions']
    },
    {
      name: 'RaphyCar',
      type: 'Car Rental',
      category: 'Application web',
      description: 'Plateforme de location de véhicules avec IA et vérification d\'identité',
      technologies: ['Next.js', 'AI Chatbot', 'PostgreSQL', 'Stripe']
    },
    {
      name: 'Reminder',
      type: 'Healthcare',
      category: 'Application mobile',
      description: 'Application de rappel de prise de médicaments avec biométrie',
      technologies: ['React Native', 'Expo', 'Face ID', 'Push Notifications']
    },
    {
      name: 'Admin Dashboard Analytics',
      type: 'Management',
      category: 'Application web',
      description: 'Dashboard d\'administration avec analytics temps réel',
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
            <span className={styles.overlayPrefix}>&gt;</span> SYSTEM_READY
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
      <Heading level={4} as="h4" className={styles.clientName}>
        {client.name}
      </Heading>
      <span className={styles.clientCategory}>{client.category}</span>
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
  const { width } = useWindowSize();
  const isMobile = width <= media.mobile;

  return (
    <Fragment>
      <Section className={styles.about}>
        {/* Hero Section */}
        <div className={styles.hero}>
          <div className={styles.heroContent}>
            <div className={styles.heroText}>
              <Heading level={1} as="h1" className={styles.title}>
                <DecoderText text={title} delay={300} />
              </Heading>
              <Text size="xl" className={styles.tagline}>
                {aboutData.intro.tagline}
              </Text>
              <Divider className={styles.divider} />
            </div>
            
            <div className={styles.contactInfo}>
              <div className={styles.contactItem}>
                <span className={styles.contactIcon}>📍</span>
                <Text size="m">{aboutData.contact.location}</Text>
              </div>
              <div className={styles.contactItem}>
                <span className={styles.contactIcon}>📧</span>
                <Text size="m">{aboutData.contact.email}</Text>
              </div>
            </div>
          </div>
        </div>

        {/* About Content */}
        <div className={styles.content}>
          <section className={styles.section}>
            <Heading level={2} as="h2" className={styles.sectionTitle}>
              À Propos de Moi
            </Heading>
            <div className={styles.aboutText}>
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
          </section>

          {/* Services Section */}
          <section className={styles.section}>
            <Heading level={2} as="h2" className={styles.sectionTitle}>
              Ce que je fais
            </Heading>
            <div className={styles.servicesGrid}>
              {aboutData.services.map((service, index) => (
                <ServiceCard key={index} service={service} index={index} />
              ))}
            </div>
          </section>

          {/* Clients Section */}
          <section className={styles.section}>
            <Heading level={2} as="h2" className={styles.sectionTitle}>
              Projets & Clients
            </Heading>
            <div className={styles.clientsGrid}>
              {aboutData.clients.map((client, index) => (
                <ClientCard key={index} client={client} index={index} />
              ))}
            </div>
          </section>

          {/* Companies Section */}
          <section className={styles.section}>
            <Heading level={2} as="h2" className={styles.sectionTitle}>
              Entreprises Partenaires
            </Heading>
            <div className={styles.companiesGrid}>
              {aboutData.companies.map((company, index) => (
                <div key={index} className={styles.companyCard}>
                  <Text size="m" className={styles.companyName}>
                    {company}
                  </Text>
                </div>
              ))}
            </div>
          </section>
        </div>
      </Section>
      <Footer />
    </Fragment>
  );
}
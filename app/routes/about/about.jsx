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

const title = 'About Me';
const description = 'Discover my journey, philosophy and passion for React Native development and modern technologies.';

export const meta = () => {
  return baseMeta({
    title,
    description,
  });
};

const aboutData = {
  intro: {
    tagline: 'Live, code, repeat',
    philosophy: 'I am a React Native developer specialized in creating high-performance, elegant and intuitive mobile applications. With over 3 years of experience in cross-platform mobile development, I have a solid mastery of the JavaScript ecosystem and React technologies in particular.',
    
    background: 'Familiar with agile methodologies, I also have good command of back-end technologies, DevOps tools and practices, and SQL/NoSQL databases. I have a solid understanding of mobile operating systems, as well as programming languages commonly used in mobile development.',
    
    mindset: 'Beyond my technical skills, my insatiable desire for knowledge, my good interpersonal sense and my clear willingness to face new challenges allow me to easily venture into new paths.'
  },

  contact: {
    location: 'Sept-Îles, QC, Canada',
    email: 'contact@novic.dev'
  },

  services: [
    {
      title: 'Mobile Development',
      description: 'Mobile applications are an integral part of our daily lives. My main focus is developing professional cross-platform mobile applications with React Native, both on Android and iOS.',
      icon: '📱',
      technologies: ['React Native', 'Expo', 'TypeScript', 'Redux', 'Push Notifications', 'Biometrics']
    },
    {
      title: 'Backend Development',
      description: 'A beautiful interface remains an empty shell if it is not associated with a robust back-end. I design, develop and deploy the business logic inherent to each project.',
      icon: '⚡',
      technologies: ['Node.js', 'Express', 'PostgreSQL', 'Prisma', 'RESTful APIs', 'JWT']
    },
    {
      title: 'Web Development',
      description: 'Drawing on my experience in this field, I create professional web applications, websites and e-commerce platforms using the latest technologies.',
      icon: '🌐',
      technologies: ['React', 'Next.js', 'TypeScript', 'Tailwind CSS', 'Vercel']
    },
    {
      title: 'DevOps & CI/CD',
      description: 'In addition to my developer role, I make it a point of honor to use DevOps best practices to guarantee a quality product in the shortest possible time.',
      icon: '🚀',
      technologies: ['GitHub Actions', 'Docker', 'Play Store Deploy', 'Automated Testing']
    }
  ],

  clients: [
    {
      name: 'iLink World Corporation',
      type: 'Fintech/Insurtech',
      category: 'Mobile Application',
      period: '2021 - 2023',
      description: 'International money transfer platform and health insurance payments',
      technologies: ['React Native', 'PHP', 'Node.js', 'MySQL']
    },
    {
      name: 'iLink World Corporation',
      type: 'Fintech/Insurtech',
      category: 'Mobile Application',
      period: '2022 - 2023',
      description: 'Municipal tax consolidation platform in district town halls of Douala city',
      technologies: ['React Native', 'PHP', 'Node.js', 'MySQL']
    },
    {
      name: 'Koursier Platform',
      type: 'Food Delivery',
      category: 'Mobile Ecosystem',
      period: '2023 - Present',
      description: 'Client/delivery applications and admin management platform',
      technologies: ['React Native', 'Next.js', 'Prisma', 'GitHub Actions']
    },
    {
      name: 'RaphyCar',
      type: 'Car Rental',
      category: 'Web Application',
      period: '2024',
      description: 'Vehicle rental platform with AI and identity verification',
      technologies: ['Next.js', 'AI Chatbot', 'PostgreSQL', 'Stripe']
    },
    {
      name: 'Reminder',
      type: 'Healthcare',
      category: 'Mobile Application',
      period: '2023',
      description: 'Medication reminder application with biometric authentication',
      technologies: ['React Native', 'Expo', 'Face ID', 'Push Notifications']
    },
    {
      name: 'Admin Dashboard Analytics',
      type: 'Management',
      category: 'Web Application',
      period: '2024',
      description: 'Administration dashboard with real-time analytics',
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
  const { width } = useWindowSize();
  const isMobile = width <= media.mobile;

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
              About Me
            </Heading>
            <div className={styles.aboutText}>
              <div className={styles.terminalStatus}>SYSTEM_ONLINE</div>
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
                What I Do
              </Heading>
              <Button 
                secondary 
                iconHoverShift 
                icon="download" 
                href="/cv"
                className={styles.cvButton}
              >
                View CV
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
              Projects & Clients
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
                  <span className={styles.hackingText}>LOADING_DATA</span>
                  <div className={styles.hackingDots}>
                    <span></span><span></span><span></span>
                  </div>
                </div>
                <Heading level={2} as="h2" className={styles.companiesSectionTitle}>
                  &gt; PARTNER_COMPANIES
                </Heading>
                <div className={styles.networkStatus}>
                  <span className={styles.statusText}>STATUS: ACTIVE</span>
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
                        <span className={styles.statusLabel}>ACTIVE</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              
              <div className={styles.hackingFooter}>
                <div className={styles.progressBar}>
                  <div className={styles.progressFill}></div>
                </div>
                <span className={styles.footerText}>[LOAD_COMPLETE] Partnership database loaded • {aboutData.companies.length} companies connected</span>
              </div>
            </div>
          </section>
        </div>
      </Section>
      <Footer />
    </Fragment>
  );
}
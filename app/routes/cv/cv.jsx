import { Fragment, useRef, useState, useEffect } from 'react';
import { Button } from '~/components/button';
import { Heading } from '~/components/heading';
import { Section } from '~/components/section';
import { Text } from '~/components/text';
import { Footer } from '~/components/footer';
import { baseMeta } from '~/utils/meta';
import styles from './cv.module.css';

const title = 'CV - Novic Tonleu';
const description = 'Curriculum vitae de Novic Tonleu, développeur full stack JavaScript/TypeScript spécialisé en React et Node.js.';

export const meta = () => {
  return baseMeta({
    title,
    description,
  });
};

const cvData = {
  personal: {
    name: 'NOVIC MELATAGUIA',
    title: 'Développeur React Native | Développeur full stack',
    // subtitle: 'Visa Sponsorship Eligible | フルスタック開発者',
    subtitle: '| フルスタック開発者',
    email: 'contact@novic.dev',
    phone: '+1 418 350 7343',
    location: 'Sept-Îles, QC G4R 1J5, Canada',
    portfolio: 'https://novic.dev',
    github: 'github.com/NovicDjef',
    linkedin: 'linkedin.com/in/n-d-melataguia-tonleu'
  },
  
  summary: {
    text: 'Développeur React Native avec plus de 3 ans d’expérience dans la création d’applications mobiles multiplateformes, avec déploiement continu sur le Play Store via GitHub Actions. Habitué au travail en équipe et à la livraison de solutions évolutives avec React Native (Expo et CLI), Redux et TypeScript. Je m’attache à offrir des expériences mobiles performantes sur iOS et Android. Ouvert au visa H-1B | Autorisé à travailler au Canada | Disponible pour une relocalisation aux États-Unis.'
  },

  skills: {
    mobile: ['React Native (Expo & CLI)', 'Redux', 'TypeScript', 'JavaScript ES6+', 'Développement iOS/Android'],
    frontend: ['React.js', 'Next.js', 'Tailwind CSS', 'Redux', 'CSS moderne'],
    backend: ['Node.js', 'Express.js', 'API REST', 'Prisma ORM', 'Authentification JWT'],
    databases: ['PostgreSQL', 'MySQL', 'Modélisation de bases de données', 'ORM/ODM'],
    devops: ['Git', 'GitHub Actions', 'Pipelines CI/CD', 'Bitbucket', 'Jira', 'VPS'],
    languages: ['TypeScript', 'JavaScript ES6+', 'SQL', 'HTML5/CSS3']
  },

  experience: [
    {
      title: 'Développeur mobile (projets personnels)',
      company: 'Développement indépendant',
      period: 'Janvier 2025 - aujourd’hui',
      location: 'À distance',
      achievements: [
        'Reminder (2023) - Application de rappel de médicaments avec React Native Expo, Face ID, biométrie et notifications intelligentes',
        'RaphyCar, location de véhicules (2024) - Plateforme de location de véhicules avec IA, chatbot intégré et vérification d’identité sécurisée'
      ]
    },
    {
      title: 'Développeur full stack (pigiste)',
      company: 'Koursier Platform',
      period: 'Août 2024 - aujourd’hui',
      location: 'À distance',
      achievements: [
        'Développement de l’écosystème Koursier : applications mobiles client et livreur (React Native)',
        'Création de la plateforme web d’administration (Next.js) pour gérer les deux applications mobiles',
        'Mise en place d’une architecture back-end évolutive avec Node.js, Express, PostgreSQL et Prisma ORM',
        'Mise en place de pipelines CI/CD avec GitHub Actions pour le déploiement automatisé'
      ]
    },
    {
      title: 'Développeur React Native',
      company: 'iLink World Corporation (Fintech/Insurtech)',
      period: 'Février 2022 - décembre 2024',
      location: 'Sur place - Douala, Cameroun',
      achievements: [
        'Développement et maintenance d’applications mobiles de transfert d’argent international et de paiement d’assurance santé en Afrique',
        'Développement d’iLinkCity, plateforme de perception des taxes municipales permettant aux commerces de payer par mobile',
        'Intégration de paiements sécurisés avec authentification biométrique et notifications push intelligentes',
        'Travail en équipe agile et automatisation du déploiement sur le Play Store avec des pipelines CI/CD'
      ]
    }
  ],

  projects: [
    {
      name: 'Application mobile Koursier Livreur (août 2024 - aujourd’hui)',
      technologies: ['React Native', 'Google Maps API', 'Notifications push', 'Suivi en temps réel', 'Intégration des paiements'],
      description: 'Application mobile destinée aux livreurs Koursier pour recevoir et gérer les commandes, avec géolocalisation en temps réel, notifications Google Maps et paiements intégrés.',
      achievements: ['Suivi GPS en temps réel', 'Notifications push Google Maps', 'Gestion des commandes de livraison', 'Paiements intégrés']
    },
    {
      name: 'Tableau de bord d’administration Koursier (août 2024 - aujourd’hui)',
      technologies: ['Next.js', 'React', 'PostgreSQL', 'Prisma', 'Chart.js', 'Statistiques en temps réel'],
      description: 'Interface d’administration pour la gestion de l’écosystème Koursier : commandes, commissions, livreurs, utilisateurs, statistiques et configuration du système.',
      achievements: ['Gestion complète du système', 'Statistiques détaillées', 'Gestion des commissions', 'Administration en temps réel']
    },
    {
      name: 'RaphyCar, location de véhicules (2024)',
      technologies: ['Next.js', 'Chatbot IA', 'Prisma', 'PostgreSQL', 'Vérification d’identité'],
      description: 'Plateforme de location de véhicules avec IA pour le marché français, avec chatbot intégré, filtres avancés et vérification d’identité sécurisée.',
      achievements: ['IA conversationnelle', 'Vérification d’identité automatique', 'Interface multilingue']
    },
    {
      name: 'Reminder, application de rappel de médicaments (2023)',
      technologies: ['React Native', 'Expo', 'Authentification biométrique', 'Notifications push', 'CI/CD'],
      description: 'Application de gestion des médicaments avec authentification biométrique, notifications push intelligentes et déploiement automatisé sur le Play Store.',
      achievements: ['Sécurité biométrique', 'Notifications intelligentes', 'Déploiement automatisé']
    },
    {
      name: 'iLinkCity, plateforme de taxes municipales (2022-2023)',
      technologies: ['React Native', 'Back-end PHP', 'MySQL', 'Paiements mobiles', 'API municipales'],
      description: 'Application mobile de regroupement et de paiement des taxes municipales dans les communes d’arrondissement de Douala, au Cameroun.',
      achievements: ['Numérisation des taxes municipales', 'Paiements mobiles intégrés', 'Interface multi-communes', 'Reçus numériques']
    },
    {
      name: 'Suite fintech iLinkWorld (2022-2024)',
      technologies: ['React Native', 'Node.js', 'API de paiement', 'Authentification biométrique', 'Multipays'],
      description: 'Suite d’applications mobiles fintech pour le transfert d’argent international et le paiement d’assurance santé en Afrique.',
      achievements: ['Prise en charge multipays', 'Paiements sécurisés', 'Authentification robuste']
    }
  ],

  education: [
    {
      degree: 'Baccalauréat en génie logiciel',
      school: 'Institut Universitaire de la Côte',
      period: 'Diplômé en 07/2023',
      location: 'Douala, Cameroun',
      specialization: 'Évalué par WES - équivalent d’un baccalauréat américain'
    }
  ],

  certifications: [
    'Développeur certifié React Native',
    'Spécialiste CI/CD GitHub Actions',
    'Administrateur de bases de données PostgreSQL',
    'Expert en sécurité des applications mobiles',
    'Certifié plateforme Expo',
    'Développeur TypeScript avancé'
  ],

  languages: [
    { name: 'Anglais', level: 'Courant (niveau professionnel)' },
    { name: 'Français', level: 'Langue maternelle' }
  ]
};

const skillLevels = {
  'React Native (Expo & CLI)': 95,
  'Redux': 90,
  'TypeScript': 92,
  'JavaScript ES6+': 95,
  'Développement iOS/Android': 88,
  'React.js': 90,
  'Next.js': 85,
  'Tailwind CSS': 87,
  'CSS moderne': 85,
  'Node.js': 90,
  'Express.js': 88,
  'API REST': 92,
  'Prisma ORM': 85,
  'Authentification JWT': 90,
  'PostgreSQL': 87,
  'MySQL': 85,
  'Modélisation de bases de données': 88,
  'ORM/ODM': 86,
  'Git': 95,
  'GitHub Actions': 92,
  'Pipelines CI/CD': 90,
  'Bitbucket': 85,
  'Jira': 80,
  'VPS': 82,
  'SQL': 88,
  'HTML5/CSS3': 90
};

const SkillCategory = ({ title, skills }) => {
  const [progressBars, setProgressBars] = useState({});

  // Niveaux de compétence simulés (en pourcentage)

  useEffect(() => {
    const timer = setTimeout(() => {
      const newProgressBars = {};
      skills.forEach(skill => {
        newProgressBars[skill] = skillLevels[skill] || 80;
      });
      setProgressBars(newProgressBars);
    }, 500);

    return () => clearTimeout(timer);
  }, [skills]);
  
  return (
    <div className={styles.skillCategory}>
      <Text className={styles.skillTitle} size="s" weight="medium">{title}</Text>
      <div className={styles.skillList}>
        {skills.map((skill, index) => (
          <div
            key={index} 
            className={styles.skillItem}
            style={{ animationDelay: `${index * 0.1}s` }}
          >
            <div className={styles.skillHeader}>
              <span className={styles.skillTag}>
                {skill}
              </span>
              <span className={styles.skillLevel}>
                {progressBars[skill] || 80}%
              </span>
            </div>
            <div className={styles.skillProgress}>
              <div 
                className={styles.skillProgressBar}
                style={{ 
                  width: `${progressBars[skill] || 0}%`,
                  animationDelay: `${index * 0.2}s`
                }}
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

const ExperienceItem = ({ experience }) => (
  <div className={styles.experienceItem}>
    <div className={styles.experienceHeader}>
      <div>
        <Heading level={4} as="h3" className={styles.experienceTitle}>
          {experience.title}
        </Heading>
        <Text className={styles.experienceCompany} size="m" weight="medium">
          {experience.company} • {experience.location}
        </Text>
      </div>
      <Text className={styles.experiencePeriod} size="s">{experience.period}</Text>
    </div>
    <ul className={styles.achievementsList}>
      {experience.achievements.map((achievement, index) => (
        <li key={index}>{achievement}</li>
      ))}
    </ul>
  </div>
);

const ProjectItem = ({ project }) => (
  <div className={styles.projectItem}>
    <div className={styles.projectHeader}>
      <Heading level={4} as="h3" className={styles.projectTitle}>
        {project.name}
      </Heading>
      <div className={styles.projectTech}>
        {project.technologies.map((tech, index) => (
          <span key={index} className={styles.techTag}>{tech}</span>
        ))}
      </div>
    </div>
    <Text size="s" className={styles.projectDescription}>
      {project.description}
    </Text>
    <div className={styles.projectAchievements}>
      {project.achievements.map((achievement, index) => (
        <span key={index} className={styles.achievementTag}>{achievement}</span>
      ))}
    </div>
  </div>
);

const EducationItem = ({ education }) => (
  <div className={styles.educationItem}>
    <div className={styles.educationHeader}>
      <div>
        <Heading level={4} as="h3" className={styles.educationDegree}>
          {education.degree}
        </Heading>
        <Text className={styles.educationSchool} size="m">
          {education.school} • {education.location}
        </Text>
        {education.specialization && (
          <Text className={styles.educationSpec} size="s">
            {education.specialization}
          </Text>
        )}
      </div>
      <Text className={styles.educationPeriod} size="s">{education.period}</Text>
    </div>
  </div>
);

const downloadPDF = () => {
  // Télécharger le CV PDF depuis le dossier public
  const link = document.createElement('a');
  link.href = '/cv.pdf';
  link.download = 'CV-Novic-Melataguia-Tonleu.pdf';
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
};

// Composant pour les statistiques animées
const AnimatedStats = () => {
  const [yearsExp, setYearsExp] = useState(0);
  const [projects, setProjects] = useState(0);
  const [technologies, setTechnologies] = useState(0);
  
  useEffect(() => {
    const animateValue = (setter, target, duration = 2000) => {
      let start = 0;
      const increment = target / (duration / 50);
      const timer = setInterval(() => {
        start += increment;
        if (start >= target) {
          setter(target);
          clearInterval(timer);
        } else {
          setter(Math.floor(start));
        }
      }, 50);
    };
    
    // Délai pour commencer les animations
    setTimeout(() => {
      animateValue(setYearsExp, 3);
      animateValue(setProjects, 15);
      animateValue(setTechnologies, 25);
    }, 1000);
  }, []);
  
  return (
    <div className={styles.statsContainer}>
      <div className={styles.statItem}>
        <div className={styles.statNumber}>{yearsExp}+</div>
        <div className={styles.statLabel}>Années d’expérience</div>
      </div>
      <div className={styles.statItem}>
        <div className={styles.statNumber}>{projects}+</div>
        <div className={styles.statLabel}>Projets réalisés</div>
      </div>
      <div className={styles.statItem}>
        <div className={styles.statNumber}>{technologies}+</div>
        <div className={styles.statLabel}>Technologies maîtrisées</div>
      </div>
    </div>
  );
};

export function CV() {
  const cvRef = useRef(null);

  return (
    <Fragment>
      <Section className={styles.cv}>
        <div className={styles.cvContainer} ref={cvRef}>
          {/* Header with personal information */}
          <header className={styles.header}>
            <div className={styles.headerMain}>
              <div className={styles.personalInfo}>
                <Heading level={1} as="h1" className={styles.name}>
                  {cvData.personal.name}
                </Heading>
                <Text className={styles.jobTitle} size="xl" weight="medium">
                  {cvData.personal.title}
                </Text>
                <Text className={styles.subtitle} size="m">
                  {cvData.personal.subtitle}
                </Text>
                
                <Button 
                  className={styles.downloadButton}
                  onClick={downloadPDF}
                  icon="download"
                  size="s"
                  secondary
                >
                  Télécharger le PDF
                </Button>
              </div>
              
              <div className={styles.contactSection}>
                <div className={styles.contactInfo}>
                  <div className={styles.contactGroup}>
                    <div className={styles.contactItem}>
                      <span className={styles.contactIcon}>📧</span>
                      <Text size="s">{cvData.personal.email}</Text>
                    </div>
                    <div className={styles.contactItem}>
                      <span className={styles.contactIcon}>📱</span>
                      <Text size="s">{cvData.personal.phone}</Text>
                    </div>
                    <div className={styles.contactItem}>
                      <span className={styles.contactIcon}>📍</span>
                      <Text size="s">{cvData.personal.location}</Text>
                    </div>
                  </div>
                  <div className={styles.contactGroup}>
                    <div className={styles.contactItem}>
                      <span className={styles.contactIcon}>🌐</span>
                      <Text size="s">{cvData.personal.portfolio}</Text>
                    </div>
                    <div className={styles.contactItem}>
                      <span className={styles.contactIcon}>💻</span>
                      <Text size="s">{cvData.personal.github}</Text>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </header>

          {/* Animated Statistics */}
          <AnimatedStats />

          {/* Professional Summary */}
          <section className={styles.section}>
            <Heading level={2} as="h2" className={styles.sectionTitle}>
              Profil professionnel
            </Heading>
            <Text size="m" className={styles.summary}>
              {cvData.summary.text}
            </Text>
          </section>

          {/* Technical Skills */}
          <section className={styles.section}>
            <Heading level={2} as="h2" className={styles.sectionTitle}>
              Compétences techniques
            </Heading>
            <div className={styles.skillsGrid}>
              <SkillCategory title="Développement mobile" skills={cvData.skills.mobile} />
              <SkillCategory title="Front-end" skills={cvData.skills.frontend} />
              <SkillCategory title="Back-end" skills={cvData.skills.backend} />
              <SkillCategory title="Bases de données" skills={cvData.skills.databases} />
              <SkillCategory title="DevOps & CI/CD" skills={cvData.skills.devops} />
              <SkillCategory title="Langages" skills={cvData.skills.languages} />
            </div>
          </section>

          {/* Professional Experience */}
          <section className={styles.section}>
            <Heading level={2} as="h2" className={styles.sectionTitle}>
              Expérience professionnelle
            </Heading>
            <div className={styles.experienceList}>
              {cvData.experience.map((exp, index) => (
                <ExperienceItem key={index} experience={exp} />
              ))}
            </div>
          </section>

          {/* Notable Projects */}
          <section className={styles.section}>
            <Heading level={2} as="h2" className={styles.sectionTitle}>
              Projets marquants
            </Heading>
            <div className={styles.projectsGrid}>
              {cvData.projects.map((project, index) => (
                <ProjectItem key={index} project={project} />
              ))}
            </div>
          </section>

          {/* Education */}
          <section className={styles.section}>
            <Heading level={2} as="h2" className={styles.sectionTitle}>
              Formation
            </Heading>
            <div className={styles.educationList}>
              {cvData.education.map((edu, index) => (
                <EducationItem key={index} education={edu} />
              ))}
            </div>
          </section>

          {/* Certifications and Languages */}
          <section className={styles.section}>
            <div className={styles.twoColumns}>
              <div className={styles.column}>
                <Heading level={3} as="h3" className={styles.subsectionTitle}>
                  Certifications
                </Heading>
                <ul className={styles.certificationsList}>
                  {cvData.certifications.map((cert, index) => (
                    <li key={index}>{cert}</li>
                  ))}
                </ul>
              </div>
              
              <div className={styles.column}>
                <Heading level={3} as="h3" className={styles.subsectionTitle}>
                  Langues
                </Heading>
                <div className={styles.languagesList}>
                  {cvData.languages.map((lang, index) => (
                    <div key={index} className={styles.languageItem}>
                      <Text size="s" weight="medium">{lang.name}</Text>
                      <Text size="s">{lang.level}</Text>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </section>
        </div>
      </Section>
      <Footer />
    </Fragment>
  );
}
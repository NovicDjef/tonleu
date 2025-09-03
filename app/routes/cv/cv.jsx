import { Fragment, useRef, useState, useEffect } from 'react';
import { Button } from '~/components/button';
import { DecoderText } from '~/components/decoder-text';
import { Heading } from '~/components/heading';
import { Section } from '~/components/section';
import { Text } from '~/components/text';
import { Footer } from '~/components/footer';
import { baseMeta } from '~/utils/meta';
import styles from './cv.module.css';

const title = 'CV - Novic Tonleu';
const description = 'Curriculum Vitae de Novic Tonleu, Développeur Full Stack JavaScript/TypeScript spécialisé en React, Node.js et technologies modernes.';

export const meta = () => {
  return baseMeta({
    title,
    description,
  });
};

const cvData = {
  personal: {
    name: 'NOVIC-DJEF MELATAGUIA TONLEU',
    title: 'React Native Developer | Full Stack Engineer',
    subtitle: 'Visa Sponsorship Eligible | フルスタック開発者',
    email: 'contact@novic.dev',
    phone: '+1 418 350 7343',
    location: 'Sept-Îles, QC G4R 1J5, Canada',
    portfolio: 'https://novic.dev',
    github: 'github.com/NovicDjef',
    linkedin: 'linkedin.com/in/n-d-melataguia-tonleu'
  },
  
  summary: {
    text: 'Développeur React Native passionné avec 3+ années d\'expérience dans la création d\'applications mobiles cross-platform avec déploiement continu vers Play Store via GitHub Actions. Expertise prouvée en collaboration d\'équipe et livraison de solutions scalables utilisant React Native (Expo & CLI), Redux et TypeScript. Dédié à créer des expériences mobiles haute performance sur iOS et Android. Ouvert au visa H-1B | Autorisé à travailler au Canada | Prêt à déménager aux États-Unis.'
  },

  skills: {
    mobile: ['React Native (Expo & CLI)', 'Redux', 'TypeScript', 'JavaScript ES6+', 'iOS/Android Development'],
    frontend: ['React.js', 'Next.js', 'Tailwind CSS', 'Redux', 'Modern CSS'],
    backend: ['Node.js', 'Express.js', 'RESTful APIs', 'Prisma ORM', 'JWT Authentication'],
    databases: ['PostgreSQL', 'MySQL', 'Database Design', 'ORM/ODM'],
    devops: ['Git', 'GitHub Actions', 'CI/CD Pipelines', 'Bitbucket', 'Jira', 'VPS'],
    languages: ['TypeScript', 'JavaScript ES6+', 'SQL', 'HTML5/CSS3']
  },

  experience: [
    {
      title: 'Full Stack Developer (Freelance)',
      company: 'Koursier Platform',
      period: 'Janvier 2025 - Présent',
      location: 'Remote',
      achievements: [
        'Développement de l\'écosystème complet Koursier : applications mobile client et livreur (React Native)',
        'Création de la plateforme d\'administration web (Next.js) pour la gestion des deux applications mobiles',
        'Architecture backend scalable avec Node.js, Express et PostgreSQL avec Prisma ORM',
        'Implémentation des pipelines CI/CD avec GitHub Actions pour déploiement automatisé'
      ]
    },
    {
      title: 'React Native Developer',
      company: 'iLink World Corporation (Fintech/Insurtech)',
      period: 'Février 2022 - Décembre 2024',
      location: 'Présentiel - Douala, Cameroun',
      achievements: [
        'Développé et maintenu des applications mobiles pour transferts d\'argent internationaux et paiements d\'assurance santé en Afrique',
        'Construit iLinkCity - plateforme de collecte de taxes municipales pour paiements de taxes d\'entreprises locales via mobile',
        'Implémenté des systèmes de paiement sécurisés avec authentification biométrique et notifications push intelligentes',
        'Collaboration en équipe agile et déploiement automatisé vers Play Store avec pipelines CI/CD'
      ]
    },
    {
      title: 'Mobile Developer (Projets Personnels)',
      company: 'Développement Indépendant',
      period: '2021 - 2024',
      location: 'Remote',
      achievements: [
        'Reminder - Application de rappel de prise de médicaments avec React Native (Expo), Face ID, biométrie et notifications push',
        'RaphyCar Vehicle Rental - Plateforme AI-powered pour marché français avec chatbot et vérification d\'ID sécurisée',
        'Admin Dashboard Analytics - Interface d\'administration avec visualisations temps réel et gestion utilisateurs',
        'Utilisation systématique des pipelines CI/CD GitHub Actions pour déploiement automatique Play Store'
      ]
    }
  ],

  projects: [
    {
      name: 'Koursier Food Delivery Platform',
      technologies: ['React Native', 'Next.js', 'Node.js', 'PostgreSQL', 'Prisma', 'GitHub Actions'],
      description: 'Écosystème complet avec 3 applications interconnectées : app mobile client/livreur, dashboard admin, backend Node.js et pipeline CI/CD automatisé.',
      achievements: ['Géolocalisation temps réel', 'Système de paiement intégré', 'Deploy automatique Play Store']
    },
    {
      name: 'RaphyCar Vehicle Rental',
      technologies: ['Next.js', 'AI Chatbot', 'Prisma', 'PostgreSQL', 'ID Verification'],
      description: 'Plateforme AI-powered de location de véhicules pour le marché français avec chatbot intégré, filtrage avancé et système de vérification d\'identité sécurisé.',
      achievements: ['IA conversationnelle', 'Vérification ID automatique', 'Interface multilingue']
    },
    {
      name: 'Reminder Medication App',
      technologies: ['React Native', 'Expo', 'Biometric Auth', 'Push Notifications', 'CI/CD'],
      description: 'Application complète de gestion de médicaments avec authentification biométrique, notifications push intelligentes et déploiement automatisé Play Store.',
      achievements: ['Sécurité biométrique', 'Notifications intelligentes', 'Deploy automatique']
    },
    {
      name: 'iLinkWorld Fintech Suite',
      technologies: ['React Native', 'Node.js', 'Payment APIs', 'Biometric Auth', 'Multi-country'],
      description: 'Suite d\'applications mobiles fintech pour transferts d\'argent internationaux et paiements d\'assurance santé à travers l\'Afrique.',
      achievements: ['Multi-pays support', 'Paiements sécurisés', 'Authentification robuste']
    }
  ],

  education: [
    {
      degree: 'Bachelor\'s Degree in Software Engineering',
      school: 'Institut Universitaire de la Côte',
      period: 'Graduated 07/2023',
      location: 'Douala, Cameroon',
      specialization: 'WES Evaluated - Equivalent to U.S. Bachelor\'s Degree'
    }
  ],

  certifications: [
    'React Native Certified Developer',
    'GitHub Actions CI/CD Specialist',
    'PostgreSQL Database Administrator',
    'Mobile App Security Expert',
    'Expo Platform Certified',
    'TypeScript Advanced Developer'
  ],

  languages: [
    { name: 'English', level: 'Fluent (Professional Working)' },
    { name: 'French', level: 'Native' }
  ]
};

const SkillCategory = ({ title, skills }) => {
  const [hoveredSkill, setHoveredSkill] = useState(null);
  const [progressBars, setProgressBars] = useState({});

  // Niveaux de compétence simulés (en pourcentage)
  const skillLevels = {
    'React Native (Expo & CLI)': 95,
    'Redux': 90,
    'TypeScript': 92,
    'JavaScript ES6+': 95,
    'iOS/Android Development': 88,
    'React.js': 90,
    'Next.js': 85,
    'Tailwind CSS': 87,
    'Modern CSS': 85,
    'Node.js': 90,
    'Express.js': 88,
    'RESTful APIs': 92,
    'Prisma ORM': 85,
    'JWT Authentication': 90,
    'PostgreSQL': 87,
    'MySQL': 85,
    'Database Design': 88,
    'ORM/ODM': 86,
    'Git': 95,
    'GitHub Actions': 92,
    'CI/CD Pipelines': 90,
    'Bitbucket': 85,
    'Jira': 80,
    'VPS': 82,
    'SQL': 88,
    'HTML5/CSS3': 90
  };

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
            onMouseEnter={() => setHoveredSkill(index)}
            onMouseLeave={() => setHoveredSkill(null)}
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
  // Cette fonction générera le PDF côté client
  window.print();
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
        <div className={styles.statLabel}>Années d'expérience</div>
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
          {/* Header avec informations personnelles */}
          <header className={styles.header}>
            <div className={styles.headerContent}>
              <div className={styles.personalInfo}>
                <Heading level={1} as="h1" className={styles.name}>
                  <DecoderText text={cvData.personal.name} delay={100} />
                </Heading>
                <Text className={styles.jobTitle} size="xl" weight="medium">
                  {cvData.personal.title}
                </Text>
                <Text className={styles.subtitle} size="m">
                  {cvData.personal.subtitle}
                </Text>
              </div>
              
              <div className={styles.contactInfo}>
                <div className={styles.contactItem}>
                  <span>📧</span>
                  <Text size="s">{cvData.personal.email}</Text>
                </div>
                <div className={styles.contactItem}>
                  <span>📱</span>
                  <Text size="s">{cvData.personal.phone}</Text>
                </div>
                <div className={styles.contactItem}>
                  <span>📍</span>
                  <Text size="s">{cvData.personal.location}</Text>
                </div>
                <div className={styles.contactItem}>
                  <span>🌐</span>
                  <Text size="s">{cvData.personal.portfolio}</Text>
                </div>
                <div className={styles.contactItem}>
                  <span>💻</span>
                  <Text size="s">{cvData.personal.github}</Text>
                </div>
                <div className={styles.contactItem}>
                  <span>👔</span>
                  <Text size="s">{cvData.personal.linkedin}</Text>
                </div>
              </div>
            </div>

            <div className={styles.downloadSection}>
              <Button 
                className={styles.downloadButton}
                onClick={downloadPDF}
                icon="download"
              >
                Télécharger PDF
              </Button>
            </div>
          </header>

          {/* Statistiques animées */}
          <AnimatedStats />

          {/* Résumé professionnel */}
          <section className={styles.section}>
            <Heading level={2} as="h2" className={styles.sectionTitle}>
              Profil Professionnel
            </Heading>
            <Text size="m" className={styles.summary}>
              {cvData.summary.text}
            </Text>
          </section>

          {/* Compétences techniques */}
          <section className={styles.section}>
            <Heading level={2} as="h2" className={styles.sectionTitle}>
              Compétences Techniques
            </Heading>
            <div className={styles.skillsGrid}>
              <SkillCategory title="Mobile Development" skills={cvData.skills.mobile} />
              <SkillCategory title="Frontend" skills={cvData.skills.frontend} />
              <SkillCategory title="Backend" skills={cvData.skills.backend} />
              <SkillCategory title="Databases" skills={cvData.skills.databases} />
              <SkillCategory title="DevOps & CI/CD" skills={cvData.skills.devops} />
              <SkillCategory title="Languages" skills={cvData.skills.languages} />
            </div>
          </section>

          {/* Expérience professionnelle */}
          <section className={styles.section}>
            <Heading level={2} as="h2" className={styles.sectionTitle}>
              Expérience Professionnelle
            </Heading>
            <div className={styles.experienceList}>
              {cvData.experience.map((exp, index) => (
                <ExperienceItem key={index} experience={exp} />
              ))}
            </div>
          </section>

          {/* Projets remarquables */}
          <section className={styles.section}>
            <Heading level={2} as="h2" className={styles.sectionTitle}>
              Projets Remarquables
            </Heading>
            <div className={styles.projectsGrid}>
              {cvData.projects.map((project, index) => (
                <ProjectItem key={index} project={project} />
              ))}
            </div>
          </section>

          {/* Formation */}
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

          {/* Certifications et Langues */}
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
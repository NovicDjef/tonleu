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
const description = 'Curriculum Vitae of Novic Tonleu, Full Stack JavaScript/TypeScript Developer specialized in React, Node.js and modern technologies.';

export const meta = () => {
  return baseMeta({
    title,
    description,
  });
};

const cvData = {
  personal: {
    name: 'NOVIC MELATAGUIA',
    title: 'React Native Developer | Full Stack Engineer',
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
    text: 'Passionate React Native Developer with 3+ years of experience creating cross-platform mobile applications with continuous deployment to Play Store via GitHub Actions. Proven expertise in team collaboration and delivering scalable solutions using React Native (Expo & CLI), Redux, and TypeScript. Dedicated to creating high-performance mobile experiences on iOS and Android. Open to H-1B visa | Authorized to work in Canada | Ready to relocate to the United States.'
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
      title: 'Mobile Developer (Personal Projects)',
      company: 'Independent Development',
      period: 'January 2025 - Present',
      location: 'Remote',
      achievements: [
        'Reminder (2023) - Medication reminder app with React Native Expo, Face ID, biometrics and intelligent notifications',
        'RaphyCar Vehicle Rental (2024) - AI-powered vehicle rental platform with integrated chatbot and secure identity verification'
      ]
    },
    {
      title: 'Full Stack Developer (Freelance)',
      company: 'Koursier Platform',
      period: 'August 2024 - Present',
      location: 'Remote',
      achievements: [
        'Developed complete Koursier ecosystem: client and delivery mobile applications (React Native)',
        'Created web administration platform (Next.js) for managing both mobile applications',
        'Built scalable backend architecture with Node.js, Express and PostgreSQL with Prisma ORM',
        'Implemented CI/CD pipelines with GitHub Actions for automated deployment'
      ]
    },
    {
      title: 'React Native Developer',
      company: 'iLink World Corporation (Fintech/Insurtech)',
      period: 'February 2022 - December 2024',
      location: 'On-site - Douala, Cameroon',
      achievements: [
        'Developed and maintained mobile applications for international money transfers and health insurance payments in Africa',
        'Built iLinkCity - municipal tax collection platform for local business tax payments via mobile',
        'Implemented secure payment systems with biometric authentication and intelligent push notifications',
        'Collaborated in agile teams and automated deployment to Play Store with CI/CD pipelines'
      ]
    }
  ],

  projects: [
    {
      name: 'Koursier Delivery Mobile App (August 2024 - Present)',
      technologies: ['React Native', 'Google Maps API', 'Push Notifications', 'Real-time Tracking', 'Payment Integration'],
      description: 'Dedicated mobile application for Koursier delivery drivers to receive and manage orders with real-time geolocation, Google Maps notifications and integrated payments.',
      achievements: ['Real-time GPS tracking', 'Google Maps push notifications', 'Delivery order management', 'Integrated payments']
    },
    {
      name: 'Koursier Admin Dashboard (August 2024 - Present)',
      technologies: ['Next.js', 'React', 'PostgreSQL', 'Prisma', 'Chart.js', 'Real-time Analytics'],
      description: 'Complete administration interface for global management of Koursier ecosystem: orders, commissions, drivers, users, analytics and complete system.',
      achievements: ['Complete system management', 'Advanced analytics', 'Commission management', 'Real-time admin interface']
    },
    {
      name: 'RaphyCar Vehicle Rental (2024)',
      technologies: ['Next.js', 'AI Chatbot', 'Prisma', 'PostgreSQL', 'ID Verification'],
      description: 'AI-powered vehicle rental platform for French market with integrated chatbot, advanced filtering and secure identity verification system.',
      achievements: ['Conversational AI', 'Automatic ID verification', 'Multilingual interface']
    },
    {
      name: 'Reminder Medication App (2023)',
      technologies: ['React Native', 'Expo', 'Biometric Auth', 'Push Notifications', 'CI/CD'],
      description: 'Complete medication management application with biometric authentication, intelligent push notifications and automated Play Store deployment.',
      achievements: ['Biometric security', 'Intelligent notifications', 'Automated deployment']
    },
    {
      name: 'iLinkCity Municipal Tax Platform (2022-2023)',
      technologies: ['React Native', 'PHP Backend', 'MySQL', 'Mobile Payments', 'Municipal APIs'],
      description: 'Mobile application for consolidating and paying municipal taxes in district communes of Douala city, Cameroon.',
      achievements: ['Municipal tax digitalization', 'Integrated mobile payments', 'Multi-commune interface', 'Digital receipt system']
    },
    {
      name: 'iLinkWorld Fintech Suite (2022-2024)',
      technologies: ['React Native', 'Node.js', 'Payment APIs', 'Biometric Auth', 'Multi-country'],
      description: 'Suite of fintech mobile applications for international money transfers and health insurance payments across Africa.',
      achievements: ['Multi-country support', 'Secure payments', 'Robust authentication']
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
        <div className={styles.statLabel}>Years Experience</div>
      </div>
      <div className={styles.statItem}>
        <div className={styles.statNumber}>{projects}+</div>
        <div className={styles.statLabel}>Projects Completed</div>
      </div>
      <div className={styles.statItem}>
        <div className={styles.statNumber}>{technologies}+</div>
        <div className={styles.statLabel}>Technologies Mastered</div>
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
                  Download PDF
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
              Professional Profile
            </Heading>
            <Text size="m" className={styles.summary}>
              {cvData.summary.text}
            </Text>
          </section>

          {/* Technical Skills */}
          <section className={styles.section}>
            <Heading level={2} as="h2" className={styles.sectionTitle}>
              Technical Skills
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

          {/* Professional Experience */}
          <section className={styles.section}>
            <Heading level={2} as="h2" className={styles.sectionTitle}>
              Professional Experience
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
              Notable Projects
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
              Education
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
                  Languages
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
import backgroundSpr from '~/assets/spr-background.jpg';
import reminder1 from '~/assets/reminder1.png';
import reminder2 from '~/assets/reminder2.png';
import { Footer } from '~/components/footer';
import { Image } from '~/components/image';
import {
  ProjectBackground,
  ProjectContainer,
  ProjectHeader,
  ProjectSection,
  ProjectSectionColumns,
  ProjectSectionContent,
  ProjectSectionHeading,
  ProjectSectionText,
  ProjectTextRow,
} from '~/layouts/project';
import { Fragment } from 'react';
import { media } from '~/utils/style';
import { baseMeta } from '~/utils/meta';
import styles from './reminder.module.css';

const title = 'Système Intelligent de Gestion de Médicaments';
const description =
  'Application mobile complète conçue pour aider les utilisateurs à gérer leurs horaires de médicaments avec des rappels intelligents, des capacités de suivi et un historique détaillé des prises pour améliorer l\'observance thérapeutique.';
const roles = [
  'Développement React Native',
  'Système de Notifications Push',
  'Design UX/UI',
  'Gestion des Données de Santé',
  'Développement Cross-platform'
];

export const meta = () => {
  return baseMeta({ title, description, prefix: 'Projets' });
};

export const Reminder = () => {
  return (
    <Fragment>
      <ProjectContainer className={styles.reminder}>
        <ProjectBackground
          src={backgroundSpr}
          srcSet={`${backgroundSpr} 1280w, ${backgroundSpr} 2560w`}
          width={1280}
          height={800}
          placeholder={backgroundSpr}
          opacity={0.8}
        />
        <ProjectHeader
          title={title}
          description={description}
          url="https://play.google.com/store/apps/details?id=com.novic.reminder"
          roles={roles}
        />

        {/* Section d'aperçu principal */}
        <ProjectSection padding="top">
          <ProjectSectionContent>
            <ProjectTextRow>
              <ProjectSectionHeading>Interface de Gestion Médicale</ProjectSectionHeading>
              <ProjectSectionText>
                Solution mobile intuitive pour la gestion quotidienne des médicaments avec 
                interface utilisateur optimisée pour tous les âges et capacités de suivi avancées.
              </ProjectSectionText>
            </ProjectTextRow>
            <ProjectSectionColumns centered>
              <div className={styles.mobileScreenshot}>
                <Image
                  raised
                  srcSet={`${reminder1} 200w, ${reminder1} 400w`}
                  width={200}
                  height={400}
                  placeholder={reminder1}
                  alt="Interface de planification des médicaments avec calendrier intelligent"
                  sizes={`(max-width: ${media.mobile}px) 150px, (max-width: ${media.tablet}px) 180px, 200px`}
                />
                <p className={styles.screenshotCaption}>Planification intelligente</p>
              </div>
              <div className={styles.mobileScreenshot}>
                <Image
                  raised
                  srcSet={`${reminder2} 200w, ${reminder2} 400w`}
                  width={200}
                  height={400}
                  placeholder={reminder2}
                  alt="Tableau de bord de suivi et d'analytiques avec graphiques détaillés"
                  sizes={`(max-width: ${media.mobile}px) 150px, (max-width: ${media.tablet}px) 180px, 200px`}
                />
                <p className={styles.screenshotCaption}>Suivi et analytiques</p>
              </div>
            </ProjectSectionColumns>
          </ProjectSectionContent>
        </ProjectSection>

        {/* Section défi */}
        <ProjectSection>
          <ProjectTextRow>
            <ProjectSectionHeading>Le Défi de l'Observance Thérapeutique</ProjectSectionHeading>
            <ProjectSectionText>
              La non-observance médicamenteuse est un enjeu critique de santé publique affectant 
              des millions de personnes dans le monde, entraînant des échecs de traitement et 
              des coûts de santé accrus. Les patients peinent avec des horaires de médicaments 
              complexes, oublient des doses et manquent de systèmes de suivi appropriés. Le défi 
              était de créer une solution intuitive qui améliorerait l'observance médicamenteuse 
              grâce à des rappels intelligents et un suivi complet.
            </ProjectSectionText>
          </ProjectTextRow>
        </ProjectSection>

        {/* Section système de planification */}
        <ProjectSection light>
          <ProjectSectionContent>
            <ProjectSectionColumns>
              <ProjectSectionContent>
                <ProjectTextRow>
                  <ProjectSectionHeading>Système de Planification Intelligent</ProjectSectionHeading>
                  <ProjectSectionText>
                    L'application dispose d'un moteur de planification sophistiqué permettant aux 
                    utilisateurs de configurer des routines médicamenteuses complexes avec des 
                    fréquences personnalisées, des dosages et des périodes de durée. Le système 
                    s'adapte à divers types de médicaments, des vitamines quotidiennes aux régimes 
                    de prescription complexes, garantissant la flexibilité pour des besoins de 
                    santé diversifiés.
                  </ProjectSectionText>
                </ProjectTextRow>
              </ProjectSectionContent>
              <div className={styles.featureImage}>
                <Image
                  raised
                  srcSet={`${reminder2} 250w, ${reminder2} 500w`}
                  width={250}
                  height={500}
                  placeholder={reminder2}
                  alt="Interface de suivi des médicaments et historique détaillé"
                  sizes={`(max-width: ${media.mobile}px) 200px, (max-width: ${media.tablet}px) 220px, 250px`}
                />
              </div>
            </ProjectSectionColumns>
          </ProjectSectionContent>
        </ProjectSection>

        {/* Section moteur de notifications */}
        <ProjectSection>
          <ProjectSectionContent>
            <ProjectSectionColumns>
              <div className={styles.featureImage}>
                <Image
                  raised
                  srcSet={`${reminder1} 250w, ${reminder1} 500w`}
                  width={250}
                  height={500}
                  placeholder={reminder1}
                  alt="Système de notifications push et interface de rappels"
                  sizes={`(max-width: ${media.mobile}px) 200px, (max-width: ${media.tablet}px) 220px, 250px`}
                />
              </div>
              <ProjectSectionContent>
                <ProjectTextRow>
                  <ProjectSectionHeading>Moteur de Notifications Intelligent</ProjectSectionHeading>
                  <ProjectSectionText>
                    Développé avec des capacités natives de notifications push, le système délivre 
                    des rappels de médicaments ponctuels sur les plateformes Android. Le système 
                    de notifications inclut une planification intelligente pour éviter de perturber 
                    les cycles de sommeil, des tonalités d'alerte personnalisables et des rappels 
                    persistants jusqu'à confirmation de la prise de médicament.
                  </ProjectSectionText>
                </ProjectTextRow>
              </ProjectSectionContent>
            </ProjectSectionColumns>
          </ProjectSectionContent>
        </ProjectSection>

        {/* Section suivi et analytiques */}
        <ProjectSection light>
          <ProjectSectionColumns>
            <ProjectSectionContent>
              <ProjectTextRow>
                <ProjectSectionHeading>
                  Suivi Complet et Analytiques
                </ProjectSectionHeading>
                <ProjectSectionText>
                  L'application maintient un historique détaillé des prises avec des analytiques 
                  visuelles pour aider les utilisateurs et les professionnels de santé à comprendre 
                  les modèles d'observance médicamenteuse. Les utilisateurs peuvent suivre les doses 
                  manquées, identifier des patterns et générer des rapports pour les consultations 
                  médicales, favorisant de meilleurs résultats de santé grâce à des insights basés 
                  sur les données.
                </ProjectSectionText>
              </ProjectTextRow>
            </ProjectSectionContent>
            <div className={styles.sidebarImages}>
              <div className={styles.mobileScreenshot}>
                <Image
                  className={styles.sidebarImage}
                  srcSet={`${reminder1} 150w, ${reminder1} 300w`}
                  width={150}
                  height={300}
                  placeholder={reminder1}
                  alt="Interface d'historique et de suivi des médicaments"
                  sizes={`(max-width: ${media.mobile}px) 120px, (max-width: ${media.tablet}px) 140px, 150px`}
                />
                <p className={styles.screenshotCaption}>Historique médical</p>
              </div>
              <div className={styles.mobileScreenshot}>
                <Image
                  className={styles.sidebarImage}
                  srcSet={`${reminder2} 150w, ${reminder2} 300w`}
                  width={150}
                  height={300}
                  placeholder={reminder2}
                  alt="Tableau de bord d'analytiques et de rapports"
                  sizes={`(max-width: ${media.mobile}px) 120px, (max-width: ${media.tablet}px) 140px, 150px`}
                />
                <p className={styles.screenshotCaption}>Rapports détaillés</p>
              </div>
            </div>
          </ProjectSectionColumns>
        </ProjectSection>

        {/* Section optimisation UX */}
        <ProjectSection>
          <ProjectSectionContent>
            <ProjectSectionColumns>
              <ProjectTextRow>
                <ProjectSectionHeading>Optimisation de l'Expérience Utilisateur</ProjectSectionHeading>
                <ProjectSectionText>
                  L'interface a été conçue en tenant compte de l'accessibilité, avec de grandes 
                  zones tactiles, une typographie claire et une navigation intuitive adaptée aux 
                  utilisateurs de tous âges. L'application supporte plusieurs langues et inclut 
                  des indices visuels pour aider les utilisateurs à identifier rapidement 
                  différents médicaments et confirmer les actions de prise.
                </ProjectSectionText>
              </ProjectTextRow>
              <div className={styles.featureImage}>
                <Image
                  raised
                  srcSet={`${reminder2} 250w, ${reminder2} 500w`}
                  width={250}
                  height={500}
                  placeholder={reminder2}
                  alt="Interface utilisateur montrant les fonctionnalités d'accessibilité et design intuitif"
                  sizes={`(max-width: ${media.mobile}px) 200px, (max-width: ${media.tablet}px) 220px, 250px`}
                />
              </div>
            </ProjectSectionColumns>
          </ProjectSectionContent>
        </ProjectSection>

        {/* Section résultats du projet */}
        <ProjectSection light>
          <ProjectSectionContent>
            <ProjectTextRow center centerMobile noMargin>
              <ProjectSectionHeading>Impact et Résultats</ProjectSectionHeading>
              <ProjectSectionText>
                Le Système Intelligent de Gestion de Médicaments répond avec succès aux défis 
                d'observance médicamenteuse grâce à une planification intelligente, des notifications 
                fiables et un suivi complet. Disponible sur Google Play Store, l'application 
                démontre comment un design mobile réfléchi peut considérablement impacter les 
                résultats de santé et améliorer la qualité de vie des patients grâce à une 
                observance médicamenteuse constante.
              </ProjectSectionText>
            </ProjectTextRow>
          </ProjectSectionContent>
        </ProjectSection>
      </ProjectContainer>
      <Footer />
    </Fragment>
  );
};
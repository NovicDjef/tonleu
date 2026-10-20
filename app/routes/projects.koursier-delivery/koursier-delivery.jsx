import backgroundSpr from '~/assets/spr-background.jpg';
import deliveryHome from '~/assets/Delivery/home.png';
import deliveryWallet from '~/assets/Delivery/wallet.png';
import deliveryHome2 from '~/assets/Delivery/home2.png';
import deliveryScreen5 from '~/assets/Delivery/Simulator Screenshot - iPhone 15 - 2025-08-05 at 01.31.50.png';
import deliveryScreen6 from '~/assets/Delivery/Simulator Screenshot - iPhone 15 - 2025-08-05 at 01.33.17.png';
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
import styles from './koursier-delivery.module.css';

const title = 'Koursier Delivery - Système de Gestion de Livraison';
const description =
  'Application complète pour livreurs permettant la gestion des commandes, le suivi en temps réel et la coordination transparente avec la plateforme principale Koursier pour assurer des opérations de livraison efficaces.';
const roles = [
  'Développement React Native',
  'Gestion Commandes Temps Réel',
  'Intégration Suivi GPS',
  'Design Interface Livreur',
  'Développement Cross-platform'
];

export const meta = () => {
  return baseMeta({ title, description, prefix: 'Projets' });
};

export const KoursierDelivery = () => {
  return (
    <Fragment>
      <ProjectContainer className={styles.koursierDelivery}>
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
          links={[
            { label: 'App Store', url: 'https://apps.apple.com/ca/app/koursier-app/id6810741237?l=fr-CA' },
            { label: 'Google Play', url: 'https://play.google.com/store/apps/details?id=com.Lkoursier.app' },
          ]}
          roles={roles}
        />

        {/* Section d'aperçu principal */}
        <ProjectSection padding="top">
          <ProjectSectionContent>
            <ProjectTextRow>
              <ProjectSectionHeading>Interface Livreur Professionnelle</ProjectSectionHeading>
              <ProjectSectionText>
                Application mobile spécialisée pour les livreurs avec interface intuitive, 
                gestion complète des commandes et outils professionnels pour optimiser 
                l'efficacité des livraisons.
              </ProjectSectionText>
            </ProjectTextRow>
            <ProjectSectionColumns centered>
              <div className={styles.mobileScreenshot}>
                <Image
                  raised
                  srcSet={`${deliveryHome} 200w, ${deliveryHome} 400w`}
                  width={200}
                  height={400}
                  placeholder={deliveryHome}
                  alt="Écran d'accueil de l'app Koursier Delivery avec tableau de bord livreur"
                  sizes={`(max-width: ${media.mobile}px) 150px, (max-width: ${media.tablet}px) 180px, 200px`}
                />
                <p className={styles.screenshotCaption}>Tableau de bord principal</p>
              </div>
              <div className={styles.mobileScreenshot}>
                <Image
                  raised
                  srcSet={`${deliveryWallet} 200w, ${deliveryWallet} 400w`}
                  width={200}
                  height={400}
                  placeholder={deliveryWallet}
                  alt="Interface de portefeuille et gestion des gains du livreur"
                  sizes={`(max-width: ${media.mobile}px) 150px, (max-width: ${media.tablet}px) 180px, 200px`}
                />
                <p className={styles.screenshotCaption}>Gestion des gains</p>
              </div>
              <div className={styles.mobileScreenshot}>
                <Image
                  raised
                  srcSet={`${deliveryHome2} 200w, ${deliveryHome2} 400w`}
                  width={200}
                  height={400}
                  placeholder={deliveryHome2}
                  alt="Tableau de bord de gestion des commandes en cours"
                  sizes={`(max-width: ${media.mobile}px) 150px, (max-width: ${media.tablet}px) 180px, 200px`}
                />
                <p className={styles.screenshotCaption}>Gestion des commandes</p>
              </div>
            </ProjectSectionColumns>
          </ProjectSectionContent>
        </ProjectSection>

        {/* Section défi */}
        <ProjectSection>
          <ProjectTextRow>
            <ProjectSectionHeading>Défis de la Livraison Moderne</ProjectSectionHeading>
            <ProjectSectionText>
              Les livreurs ont besoin d'outils efficaces pour gérer les commandes entrantes, 
              naviguer de manière optimale et communiquer avec les clients en toute transparence. 
              Les systèmes de livraison traditionnels manquent souvent de coordination en temps 
              réel et d'interfaces intuitives, entraînant des retards de livraison et une 
              mauvaise expérience client. Le défi était de créer une application centrée sur 
              le livreur qui rationalise l'ensemble du workflow de livraison.
            </ProjectSectionText>
          </ProjectTextRow>
        </ProjectSection>

        {/* Section gestion des commandes */}
        <ProjectSection light>
          <ProjectSectionContent>
            <ProjectTextRow>
              <ProjectSectionHeading>Gestion des Commandes en Temps Réel</ProjectSectionHeading>
              <ProjectSectionText>
                L'application présente un tableau de bord dynamique affichant les livraisons 
                entrantes avec des informations client détaillées, adresses de livraison et 
                instructions spéciales. Les livreurs peuvent accepter, gérer et suivre 
                plusieurs commandes simultanément tout en recevant des mises à jour en temps 
                réel depuis la plateforme principale Koursier.
              </ProjectSectionText>
            </ProjectTextRow>
            <ProjectSectionColumns centered>
              <div className={styles.mobileScreenshot}>
                <Image
                  raised
                  srcSet={`${deliveryScreen5} 200w, ${deliveryScreen5} 400w`}
                  width={200}
                  height={400}
                  placeholder={deliveryScreen5}
                  alt="Fonctionnalités avancées de suivi des commandes"
                  sizes={`(max-width: ${media.mobile}px) 150px, (max-width: ${media.tablet}px) 180px, 200px`}
                />
                <p className={styles.screenshotCaption}>Suivi avancé</p>
              </div>
              <div className={styles.mobileScreenshot}>
                <Image
                  raised
                  srcSet={`${deliveryScreen6} 200w, ${deliveryScreen6} 400w`}
                  width={200}
                  height={400}
                  placeholder={deliveryScreen6}
                  alt="Interface de finalisation de livraison"
                  sizes={`(max-width: ${media.mobile}px) 150px, (max-width: ${media.tablet}px) 180px, 200px`}
                />
                <p className={styles.screenshotCaption}>Finalisation livraison</p>
              </div>
            </ProjectSectionColumns>
          </ProjectSectionContent>
        </ProjectSection>

        {/* Section navigation intelligente */}
        <ProjectSection>
          <ProjectSectionContent>
            <ProjectSectionColumns>
              <ProjectSectionContent>
                <ProjectTextRow>
                  <ProjectSectionHeading>Système de Navigation Intelligent</ProjectSectionHeading>
                  <ProjectSectionText>
                    La navigation GPS intégrée fournit des directions étape par étape avec 
                    des algorithmes d'optimisation de route pour minimiser le temps de livraison. 
                    Le système tient compte des conditions de circulation, des priorités de 
                    livraison et de la localisation du livreur pour suggérer les itinéraires 
                    les plus efficaces pour plusieurs livraisons.
                  </ProjectSectionText>
                </ProjectTextRow>
              </ProjectSectionContent>
              <div className={styles.featureImage}>
                <Image
                  raised
                  srcSet={`${deliveryHome} 250w, ${deliveryHome} 500w`}
                  width={250}
                  height={500}
                  placeholder={deliveryHome}
                  alt="Interface de navigation GPS intégrée"
                  sizes={`(max-width: ${media.mobile}px) 200px, (max-width: ${media.tablet}px) 220px, 250px`}
                />
              </div>
            </ProjectSectionColumns>
          </ProjectSectionContent>
        </ProjectSection>

        {/* Section communication client */}
        <ProjectSection light>
          <ProjectSectionColumns>
            <ProjectSectionContent>
              <ProjectTextRow>
                <ProjectSectionHeading>
                  Communication Client Transparente
                </ProjectSectionHeading>
                <ProjectSectionText>
                  L'application permet une communication directe entre livreurs et clients 
                  grâce aux fonctionnalités intégrées de chat et d'appel. Les livreurs peuvent 
                  mettre à jour le statut de livraison, envoyer des notifications d'arrivée 
                  et gérer les instructions spéciales de livraison tout en maintenant des 
                  standards de service professionnels.
                </ProjectSectionText>
              </ProjectTextRow>
            </ProjectSectionContent>
            <div className={styles.sidebarImages}>
              <div className={styles.mobileScreenshot}>
                <Image
                  className={styles.sidebarImage}
                  srcSet={`${deliveryHome} 150w, ${deliveryHome} 300w`}
                  width={150}
                  height={300}
                  placeholder={deliveryHome}
                  alt="Interface de communication client intégrée"
                  sizes={`(max-width: ${media.mobile}px) 120px, (max-width: ${media.tablet}px) 140px, 150px`}
                />
                <p className={styles.screenshotCaption}>Communication client</p>
              </div>
              <div className={styles.mobileScreenshot}>
                <Image
                  className={styles.sidebarImage}
                  srcSet={`${deliveryWallet} 150w, ${deliveryWallet} 300w`}
                  width={150}
                  height={300}
                  placeholder={deliveryWallet}
                  alt="Gestion du statut de livraison en temps réel"
                  sizes={`(max-width: ${media.mobile}px) 120px, (max-width: ${media.tablet}px) 140px, 150px`}
                />
                <p className={styles.screenshotCaption}>Statut livraison</p>
              </div>
            </div>
          </ProjectSectionColumns>
        </ProjectSection>

        {/* Section analytiques de performance */}
        <ProjectSection>
          <ProjectSectionContent>
            <ProjectSectionColumns>
              <div className={styles.featureImage}>
                <Image
                  raised
                  srcSet={`${deliveryWallet} 250w, ${deliveryWallet} 500w`}
                  width={250}
                  height={500}
                  placeholder={deliveryWallet}
                  alt="Tableau de bord d'analytiques pour livreur"
                  sizes={`(max-width: ${media.mobile}px) 200px, (max-width: ${media.tablet}px) 220px, 250px`}
                />
              </div>
              <ProjectSectionContent>
                <ProjectTextRow>
                  <ProjectSectionHeading>Analytiques de Performance</ProjectSectionHeading>
                  <ProjectSectionText>
                    Les livreurs peuvent accéder à des analytiques complètes incluant les 
                    statistiques de livraison, le suivi des gains, les évaluations clients 
                    et les métriques de performance. Cette approche basée sur les données aide 
                    les livreurs à optimiser leur qualité de service et maximiser leurs gains 
                    grâce à la plateforme.
                  </ProjectSectionText>
                </ProjectTextRow>
              </ProjectSectionContent>
            </ProjectSectionColumns>
          </ProjectSectionContent>
        </ProjectSection>

        {/* Section résultats du projet */}
        <ProjectSection light>
          <ProjectSectionContent>
            <ProjectTextRow center centerMobile noMargin>
              <ProjectSectionHeading>Résultats et Impact</ProjectSectionHeading>
              <ProjectSectionText>
                Le Système de Gestion de Livraison Koursier rationalise avec succès le processus 
                de livraison grâce à une gestion intelligente des commandes, un suivi en temps 
                réel et une communication client transparente. L'application autonomise les 
                livreurs avec des outils professionnels tout en assurant une coordination 
                efficace avec la plateforme principale Koursier pour des opérations de 
                livraison optimales.
              </ProjectSectionText>
            </ProjectTextRow>
          </ProjectSectionContent>
        </ProjectSection>
      </ProjectContainer>
      <Footer />
    </Fragment>
  );
};
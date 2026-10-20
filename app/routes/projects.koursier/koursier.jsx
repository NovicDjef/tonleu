import backgroundSpr from '~/assets/spr-background.jpg';
import koursierScreen1 from '~/assets/koursier/275.png';
import koursierScreen2 from '~/assets/koursier/588.png';
import koursierScreen3 from '~/assets/koursier/593.png';
import koursierScreen4 from '~/assets/koursier/595.png';
import koursierScreen5 from '~/assets/koursier/597.png';
import koursierScreen6 from '~/assets/koursier/598.png';
import koursierScreen7 from '~/assets/koursier/599.png';
import koursierScreen8 from '~/assets/koursier/600.png';
import koursierScreen9 from '~/assets/koursier/601.png';
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
import styles from './koursier.module.css';

const title = 'Koursier - Plateforme Multi-Services de Livraison';
const description =
  'Plateforme mobile complète de livraison permettant le suivi en temps réel, la commande multi-catégories et une expérience utilisateur transparente pour les services de livraison de gaz, colis et nourriture.';
const roles = [
  'Développement React Native',
  'Système de Suivi Temps Réel',
  'Design UX/UI',
  'Intégration Paiements',
  'Services de Géolocalisation'
];

export const meta = () => {
  return baseMeta({ title, description, prefix: 'Projets' });
};

export const Koursier = () => {
  return (
    <Fragment>
      <ProjectContainer className={styles.koursier}>
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
            { label: 'App Store', url: 'https://apps.apple.com/ca/app/koursier/id6761641187?l=fr-CA' },
            { label: 'Google Play', url: 'https://play.google.com/store/apps/details?id=com.novic.koursier' },
          ]}
          roles={roles}
        />

        {/* Section Hero avec galerie immersive */}
        <ProjectSection padding="top">
          <ProjectSectionContent>
            <ProjectTextRow>
              <ProjectSectionHeading>Écosystème de Livraison Unifié</ProjectSectionHeading>
              <ProjectSectionText>
                Interface moderne et élégante conçue pour simplifier l'expérience de livraison 
                multi-services avec design minimaliste et performances optimales.
              </ProjectSectionText>
            </ProjectTextRow>
            <div className={styles.heroGallery}>
              <div className={styles.phoneShowcase}>
                <Image
                  raised
                  className={styles.primaryPhone}
                  srcSet={`${koursierScreen1} 200w, ${koursierScreen1} 400w`}
                  width={200}
                  height={400}
                  placeholder={koursierScreen1}
                  alt="Interface principale Koursier avec navigation élégante"
                  sizes={`(max-width: ${media.mobile}px) 150px, (max-width: ${media.tablet}px) 180px, 200px`}
                />
                <p className={styles.phoneLabel}>Interface principale</p>
              </div>
              <div className={styles.supportingPhones}>
                <div className={styles.phoneItem}>
                  <Image
                    raised
                    srcSet={`${koursierScreen2} 150w, ${koursierScreen2} 300w`}
                    width={150}
                    height={300}
                    placeholder={koursierScreen2}
                    alt="Sélection de services avec design épuré"
                    sizes={`(max-width: ${media.mobile}px) 120px, (max-width: ${media.tablet}px) 140px, 150px`}
                  />
                  <p className={styles.phoneLabel}>Sélection services</p>
                </div>
                <div className={styles.phoneItem}>
                  <Image
                    raised
                    srcSet={`${koursierScreen3} 150w, ${koursierScreen3} 300w`}
                    width={150}
                    height={300}
                    placeholder={koursierScreen3}
                    alt="Suivi de livraison en temps réel"
                    sizes={`(max-width: ${media.mobile}px) 120px, (max-width: ${media.tablet}px) 140px, 150px`}
                  />
                  <p className={styles.phoneLabel}>Suivi temps réel</p>
                </div>
                <div className={styles.phoneItem}>
                  <Image
                    raised
                    srcSet={`${koursierScreen4} 150w, ${koursierScreen4} 300w`}
                    width={150}
                    height={300}
                    placeholder={koursierScreen4}
                    alt="Processus de paiement sécurisé"
                    sizes={`(max-width: ${media.mobile}px) 120px, (max-width: ${media.tablet}px) 140px, 150px`}
                  />
                  <p className={styles.phoneLabel}>Paiement sécurisé</p>
                </div>
              </div>
            </div>
          </ProjectSectionContent>
        </ProjectSection>

        {/* Section défi avec design asymétrique */}
        <ProjectSection>
          <ProjectTextRow>
            <ProjectSectionHeading>Révolutionner l'Expérience de Livraison</ProjectSectionHeading>
            <ProjectSectionText>
              Les services de livraison traditionnels opèrent en silos isolés, forçant les 
              clients à utiliser plusieurs applications pour différents besoins. Les utilisateurs 
              souffraient d'interfaces incohérentes, de suivi peu fiable et d'options de service 
              limitées. Le défi était de créer une plateforme unifiée capable de gérer divers 
              types de livraison tout en maintenant la qualité de service et la cohérence 
              de l'expérience utilisateur.
            </ProjectSectionText>
          </ProjectTextRow>
        </ProjectSection>

        {/* Section écosystème avec layout créatif */}
        <ProjectSection light>
          <ProjectSectionContent>
            <ProjectTextRow>
              <ProjectSectionHeading>Écosystème de Services Unifié</ProjectSectionHeading>
              <ProjectSectionText>
                La plateforme intègre trois services de livraison essentiels : livraison de 
                bouteilles de gaz avec disponibilité d'urgence, expédition de colis avec 
                options express le jour même, et livraison de nourriture depuis des restaurants 
                partenaires. Chaque service maintient ses exigences spécifiques tout en 
                partageant des fonctionnalités communes comme le suivi en temps réel, 
                les paiements sécurisés et les systèmes de communication client.
              </ProjectSectionText>
            </ProjectTextRow>
            <div className={styles.serviceGrid}>
              <div className={styles.serviceCard}>
                <Image
                  raised
                  srcSet={`${koursierScreen5} 180w, ${koursierScreen5} 360w`}
                  width={180}
                  height={360}
                  placeholder={koursierScreen5}
                  alt="Service de livraison de gaz avec interface spécialisée"
                  sizes={`(max-width: ${media.mobile}px) 140px, (max-width: ${media.tablet}px) 160px, 180px`}
                />
                <div className={styles.serviceInfo}>
                  <h4>Livraison Gaz</h4>
                  <p>Service d'urgence 24/7</p>
                </div>
              </div>
              <div className={styles.serviceCard}>
                <Image
                  raised
                  srcSet={`${koursierScreen6} 180w, ${koursierScreen6} 360w`}
                  width={180}
                  height={360}
                  placeholder={koursierScreen6}
                  alt="Gestion de livraison de colis express"
                  sizes={`(max-width: ${media.mobile}px) 140px, (max-width: ${media.tablet}px) 160px, 180px`}
                />
                <div className={styles.serviceInfo}>
                  <h4>Expédition Colis</h4>
                  <p>Express le jour même</p>
                </div>
              </div>
              <div className={styles.serviceCard}>
                <Image
                  raised
                  srcSet={`${koursierScreen7} 180w, ${koursierScreen7} 360w`}
                  width={180}
                  height={360}
                  placeholder={koursierScreen7}
                  alt="Commande de nourriture avec restaurants partenaires"
                  sizes={`(max-width: ${media.mobile}px) 140px, (max-width: ${media.tablet}px) 160px, 180px`}
                />
                <div className={styles.serviceInfo}>
                  <h4>Food Delivery</h4>
                  <p>Restaurants partenaires</p>
                </div>
              </div>
            </div>
          </ProjectSectionContent>
        </ProjectSection>

        {/* Section tracking avec design immersif */}
        <ProjectSection>
          <ProjectSectionContent>
            <ProjectSectionColumns className={styles.trackingSection}>
              <div className={styles.trackingContent}>
                <ProjectTextRow>
                  <ProjectSectionHeading>Suivi Temps Réel & Fonctionnalités Avancées</ProjectSectionHeading>
                  <ProjectSectionText>
                    Développé avec la technologie WebSocket pour des mises à jour instantanées, 
                    le système de suivi fournit des coordonnées GPS en direct, des temps 
                    d'arrivée estimés et des notifications de statut de livraison. Les 
                    utilisateurs peuvent communiquer directement avec les livreurs grâce 
                    à un système de chat intégré tout en maintenant les protocoles de 
                    confidentialité et de sécurité.
                  </ProjectSectionText>
                </ProjectTextRow>
              </div>
              <div className={styles.trackingVisual}>
                <div className={styles.trackingPhones}>
                  <Image
                    raised
                    className={styles.trackingPhone}
                    srcSet={`${koursierScreen8} 190w, ${koursierScreen8} 380w`}
                    width={190}
                    height={380}
                    placeholder={koursierScreen8}
                    alt="Interface de suivi en temps réel avec carte interactive"
                    sizes={`(max-width: ${media.mobile}px) 150px, (max-width: ${media.tablet}px) 170px, 190px`}
                  />
                  <Image
                    raised
                    className={styles.chatPhone}
                    srcSet={`${koursierScreen9} 170w, ${koursierScreen9} 340w`}
                    width={170}
                    height={340}
                    placeholder={koursierScreen9}
                    alt="Système de communication avec livreur intégré"
                    sizes={`(max-width: ${media.mobile}px) 130px, (max-width: ${media.tablet}px) 150px, 170px`}
                  />
                </div>
              </div>
            </ProjectSectionColumns>
          </ProjectSectionContent>
        </ProjectSection>

        {/* Section architecture avec votre grid custom */}
        <ProjectSection light>
          <div className={styles.columns}>
            <ProjectSectionContent className={styles.imagesText}>
              <ProjectTextRow>
                <ProjectSectionHeading>
                  Architecture Réseau de Livraison Évolutive
                </ProjectSectionHeading>
                <ProjectSectionText>
                  La plateforme exploite une architecture microservices pour gérer différents 
                  types de livraison indépendamment tout en partageant les fonctionnalités 
                  principales. Les systèmes de vérification des livreurs, les algorithmes 
                  de routage automatisés et le traitement des paiements intégré garantissent 
                  une prestation de service fiable dans toutes les catégories.
                </ProjectSectionText>
              </ProjectTextRow>
            </ProjectSectionContent>
            <div className={styles.sidebarImages}>
              <Image
                className={styles.sidebarImage}
                srcSet={`${koursierScreen1} 120w, ${koursierScreen1} 240w`}
                width={120}
                height={240}
                placeholder={koursierScreen1}
                alt="Interface de vérification et gestion des livreurs"
                sizes={`(max-width: ${media.mobile}px) 100px, (max-width: ${media.tablet}px) 110px, 120px`}
              />
              <Image
                className={styles.sidebarImage}
                srcSet={`${koursierScreen2} 120w, ${koursierScreen2} 240w`}
                width={120}
                height={240}
                placeholder={koursierScreen2}
                alt="Traitement des paiements et fonctionnalités de sécurité"
                sizes={`(max-width: ${media.mobile}px) 100px, (max-width: ${media.tablet}px) 110px, 120px`}
              />
            </div>
          </div>
        </ProjectSection>

        {/* Section performance avec design moderne */}
        <ProjectSection>
          <ProjectSectionContent>
            <ProjectTextRow>
              <ProjectSectionHeading>Optimisation Performance & Innovation</ProjectSectionHeading>
              <ProjectSectionText>
                L'application a été développée avec la performance comme priorité, implémentant 
                une gestion d'état efficace avec Redux, un chargement paresseux pour des tailles 
                de bundle optimales et des capacités hors ligne pour les fonctionnalités 
                principales. Le résultat est une application réactive qui maintient ses 
                fonctionnalités même avec une connectivité réseau médiocre.
              </ProjectSectionText>
            </ProjectTextRow>
            <div className={styles.performanceShowcase}>
              <div className={styles.perfCard}>
                <Image
                  raised
                  srcSet={`${koursierScreen3} 170w, ${koursierScreen3} 340w`}
                  width={170}
                  height={340}
                  placeholder={koursierScreen3}
                  alt="Tableau de bord de métriques de performance"
                  sizes={`(max-width: ${media.mobile}px) 140px, (max-width: ${media.tablet}px) 155px, 170px`}
                />
                <div className={styles.perfInfo}>
                  <h4>Métriques Temps Réel</h4>
                  <p>Dashboard performance</p>
                </div>
              </div>
              <div className={styles.perfCard}>
                <Image
                  raised
                  srcSet={`${koursierScreen4} 170w, ${koursierScreen4} 340w`}
                  width={170}
                  height={340}
                  placeholder={koursierScreen4}
                  alt="Fonctionnalités d'optimisation de l'application"
                  sizes={`(max-width: ${media.mobile}px) 140px, (max-width: ${media.tablet}px) 155px, 170px`}
                />
                <div className={styles.perfInfo}>
                  <h4>Optimisation Bundle</h4>
                  <p>Lazy loading avancé</p>
                </div>
              </div>
            </div>
          </ProjectSectionContent>
        </ProjectSection>

        {/* Section résultats avec impact visuel */}
        <ProjectSection light>
          <ProjectSectionContent>
            <ProjectTextRow center centerMobile noMargin>
              <ProjectSectionHeading>Impact et Résultats Mesurables</ProjectSectionHeading>
              <ProjectSectionText>
                La plateforme de livraison multi-services a unifié avec succès trois 
                catégories de livraison distinctes en une expérience utilisateur unique 
                et cohérente. Avec le suivi en temps réel, les paiements sécurisés et 
                une prestation de service fiable, la plateforme démontre comment la 
                technologie peut rationaliser une logistique complexe tout en maintenant 
                la qualité de service et la satisfaction client.
              </ProjectSectionText>
            </ProjectTextRow>
          </ProjectSectionContent>
        </ProjectSection>
      </ProjectContainer>
      <Footer />
    </Fragment>
  );
};
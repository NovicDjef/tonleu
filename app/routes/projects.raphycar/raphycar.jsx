import backgroundSpr from '~/assets/spr-background.jpg';
import raphycarAppHome from '~/assets/raphy/app-home.png';
import raphycarCarListing from '~/assets/raphy/car-listing.png';
import raphycarCarDetails from '~/assets/raphy/car-details.png';
import raphycarChatSupport from '~/assets/raphy/chat-support.png';
import raphycarFilters from '~/assets/raphy/filters.png';
import raphycarHome2 from '~/assets/raphy/home2.png';
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
import styles from './raphycar.module.css';

const title = 'RaphyCar - Application Mobile de Location de Véhicules avec IA';
const description =
  'Application mobile complète de location de voitures conçue pour le marché camerounais, intégrant un filtrage intelligent, un chatbot IA pour le support client, et une gestion administrative complète de la flotte de véhicules.';
const roles = [
  'Développement React Native',
  'Intégration Chatbot IA',
  'Design UI/UX Mobile',
  'Système de Filtrage Avancé',
  'Localisation Marché Camerounais'
];

export const meta = () => {
  return baseMeta({ title, description, prefix: 'Projets' });
};

export const Raphycar = () => {
  return (
    <Fragment>
      <ProjectContainer className={styles.raphycar}>
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
          url="https://raphycar.com"
          roles={roles}
        />

        {/* Section d'aperçu des écrans principaux */}
        <ProjectSection padding="top">
          <ProjectSectionContent>
            <ProjectTextRow>
              <ProjectSectionHeading>Aperçu de l'Application Mobile</ProjectSectionHeading>
              <ProjectSectionText>
                Interface utilisateur moderne et intuitive optimisée pour les utilisateurs camerounais, 
                avec une navigation fluide et des fonctionnalités adaptées au marché local.
              </ProjectSectionText>
            </ProjectTextRow>
            <ProjectSectionColumns centered>
              <div className={styles.mobileScreenshot}>
                <Image
                  raised
                  srcSet={`${raphycarAppHome} 200w, ${raphycarAppHome} 400w`}
                  width={200}
                  height={400}
                  placeholder={raphycarAppHome}
                  alt="Écran d'accueil RaphyCar avec navigation principale"
                  sizes={`(max-width: ${media.mobile}px) 150px, (max-width: ${media.tablet}px) 180px, 200px`}
                />
                <p className={styles.screenshotCaption}>Écran d'accueil</p>
              </div>
              <div className={styles.mobileScreenshot}>
                <Image
                  raised
                  srcSet={`${raphycarCarListing} 200w, ${raphycarCarListing} 400w`}
                  width={200}
                  height={400}
                  placeholder={raphycarCarListing}
                  alt="Liste des véhicules disponibles avec options de filtrage"
                  sizes={`(max-width: ${media.mobile}px) 150px, (max-width: ${media.tablet}px) 180px, 200px`}
                />
                <p className={styles.screenshotCaption}>Liste des véhicules</p>
              </div>
              <div className={styles.mobileScreenshot}>
                <Image
                  raised
                  srcSet={`${raphycarCarDetails} 200w, ${raphycarCarDetails} 400w`}
                  width={200}
                  height={400}
                  placeholder={raphycarCarDetails}
                  alt="Page détaillée d'un véhicule avec informations complètes"
                  sizes={`(max-width: ${media.mobile}px) 150px, (max-width: ${media.tablet}px) 180px, 200px`}
                />
                <p className={styles.screenshotCaption}>Détails du véhicule</p>
              </div>
            </ProjectSectionColumns>
          </ProjectSectionContent>
        </ProjectSection>

        {/* Section défi */}
        <ProjectSection>
          <ProjectTextRow>
            <ProjectSectionHeading>Le Défi à Relever</ProjectSectionHeading>
            <ProjectSectionText>
              Le marché camerounais de la location de véhicules manquait d'une solution mobile moderne 
              et complète capable de répondre aux besoins locaux tout en offrant des fonctionnalités 
              de niveau international. Les services de location traditionnels souffraient de processus 
              de réservation inefficaces, d'une variété limitée de véhicules et d'une communication 
              client défaillante. Le défi était de créer une application mobile localisée combinant 
              technologie avancée et compréhension approfondie des dynamiques du marché local.
            </ProjectSectionText>
          </ProjectTextRow>
        </ProjectSection>

        {/* Section filtrage intelligent et support IA */}
        <ProjectSection light>
          <ProjectSectionContent>
            <ProjectTextRow>
              <ProjectSectionHeading>Filtrage Intelligent & Support IA</ProjectSectionHeading>
              <ProjectSectionText>
                L'application mobile intègre des capacités de filtrage sophistiquées permettant aux 
                utilisateurs de rechercher des véhicules par localisation, gamme de prix, type de 
                véhicule, transmission, efficacité énergétique et périodes de disponibilité. Le système 
                est optimisé pour la géographie camerounaise, supportant les grandes villes comme 
                Yaoundé, Douala et les centres régionaux avec ajustements de disponibilité et tarification 
                basés sur la localisation.
              </ProjectSectionText>
            </ProjectTextRow>
            <ProjectSectionColumns centered>
              <div className={styles.mobileScreenshot}>
                <Image
                  raised
                  srcSet={`${raphycarFilters} 200w, ${raphycarFilters} 400w`}
                  width={200}
                  height={400}
                  placeholder={raphycarFilters}
                  alt="Interface de filtrage avancé avec options multiples"
                  sizes={`(max-width: ${media.mobile}px) 150px, (max-width: ${media.tablet}px) 180px, 200px`}
                />
                <p className={styles.screenshotCaption}>Système de filtrage avancé</p>
              </div>
              <div className={styles.mobileScreenshot}>
                <Image
                  raised
                  srcSet={`${raphycarChatSupport} 200w, ${raphycarChatSupport} 400w`}
                  width={200}
                  height={400}
                  placeholder={raphycarChatSupport}
                  alt="Interface du chatbot IA pour support client 24/7"
                  sizes={`(max-width: ${media.mobile}px) 150px, (max-width: ${media.tablet}px) 180px, 200px`}
                />
                <p className={styles.screenshotCaption}>Support client avec IA</p>
              </div>
            </ProjectSectionColumns>
          </ProjectSectionContent>
        </ProjectSection>

        {/* Section support client IA */}
        <ProjectSection>
          <ProjectSectionContent>
            <ProjectSectionColumns>
              <ProjectSectionContent>
                <ProjectTextRow>
                  <ProjectSectionHeading>Support Client Alimenté par l'IA</ProjectSectionHeading>
                  <ProjectSectionText>
                    Un système de chatbot intelligent fournit un support client 24h/24 et 7j/7 en 
                    français et en anglais, gérant les demandes courantes concernant la disponibilité 
                    des véhicules, les procédures de location, la tarification et les réglementations 
                    locales. L'IA est entraînée sur les lois de conduite camerounaises, les exigences 
                    d'assurance et les préférences culturelles pour fournir une assistance 
                    contextuellement pertinente.
                  </ProjectSectionText>
                </ProjectTextRow>
              </ProjectSectionContent>
              <div className={styles.featureImage}>
                <Image
                  raised
                  srcSet={`${raphycarChatSupport} 250w, ${raphycarChatSupport} 500w`}
                  width={250}
                  height={500}
                  placeholder={raphycarChatSupport}
                  alt="Interface complète du chatbot IA avec conversation en français"
                  sizes={`(max-width: ${media.mobile}px) 200px, (max-width: ${media.tablet}px) 220px, 250px`}
                />
              </div>
            </ProjectSectionColumns>
          </ProjectSectionContent>
        </ProjectSection>

        {/* Section gestion administrative */}
        <ProjectSection light>
          <ProjectSectionColumns>
            <ProjectSectionContent>
              <ProjectTextRow>
                <ProjectSectionHeading>
                  Gestion Administrative Complète
                </ProjectSectionHeading>
                <ProjectSectionText>
                  Le tableau de bord administrateur offre des capacités complètes de gestion de flotte 
                  incluant l'enregistrement des véhicules, le suivi de maintenance, la gestion des 
                  réservations, les profils clients et le reporting financier. Les administrateurs 
                  peuvent gérer plusieurs emplacements, définir une tarification dynamique basée 
                  sur la demande et surveiller l'utilisation des véhicules à travers le marché camerounais.
                </ProjectSectionText>
              </ProjectTextRow>
            </ProjectSectionContent>
            <div className={styles.sidebarImages}>
              <div className={styles.mobileScreenshot}>
                <Image
                  className={styles.sidebarImage}
                  srcSet={`${raphycarCarListing} 150w, ${raphycarCarListing} 300w`}
                  width={150}
                  height={300}
                  placeholder={raphycarCarListing}
                  alt="Interface de gestion des véhicules avec informations détaillées"
                  sizes={`(max-width: ${media.mobile}px) 120px, (max-width: ${media.tablet}px) 140px, 150px`}
                />
                <p className={styles.screenshotCaption}>Gestion véhicules</p>
              </div>
              <div className={styles.mobileScreenshot}>
                <Image
                  className={styles.sidebarImage}
                  srcSet={`${raphycarCarDetails} 150w, ${raphycarCarDetails} 300w`}
                  width={150}
                  height={300}
                  placeholder={raphycarCarDetails}
                  alt="Interface de réservation avec informations détaillées du véhicule"
                  sizes={`(max-width: ${media.mobile}px) 120px, (max-width: ${media.tablet}px) 140px, 150px`}
                />
                <p className={styles.screenshotCaption}>Interface réservation</p>
              </div>
            </div>
          </ProjectSectionColumns>
        </ProjectSection>

        {/* Section expérience utilisateur localisée */}
        <ProjectSection>
          <ProjectSectionContent>
            <ProjectSectionColumns>
              <ProjectTextRow>
                <ProjectSectionHeading>Expérience Utilisateur Localisée</ProjectSectionHeading>
                <ProjectSectionText>
                  La plateforme est spécifiquement conçue pour le contexte camerounais, supportant 
                  la tarification en francs CFA, les méthodes de paiement locales et l'intégration 
                  avec les services de mobile money. L'interface s'adapte aux utilisateurs urbains 
                  et ruraux avec des connectivités internet variables, proposant des capacités 
                  d'application web progressive et des fonctionnalités hors ligne pour les 
                  fonctions essentielles.
                </ProjectSectionText>
              </ProjectTextRow>
              <div className={styles.featureImage}>
                <Image
                  raised
                  srcSet={`${raphycarHome2} 250w, ${raphycarHome2} 500w`}
                  width={250}
                  height={500}
                  placeholder={raphycarHome2}
                  alt="Interface localisée montrant tarification CFA et options mobile money"
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
              <ProjectSectionHeading>Résultats du Projet</ProjectSectionHeading>
              <ProjectSectionText>
                RaphyCar répond avec succès aux défis uniques du marché camerounais de location 
                de voitures grâce à une technologie intelligente et une compréhension approfondie 
                du contexte local. La plateforme combine filtrage avancé, support alimenté par l'IA 
                et gestion complète de flotte pour créer une expérience de location moderne qui 
                sert efficacement les clients et les opérateurs commerciaux dans le contexte 
                de l'Afrique Centrale.
              </ProjectSectionText>
            </ProjectTextRow>
          </ProjectSectionContent>
        </ProjectSection>
      </ProjectContainer>
      <Footer />
    </Fragment>
  );
};
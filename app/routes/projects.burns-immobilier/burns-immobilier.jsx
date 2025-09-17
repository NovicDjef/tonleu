import backgroundSpr from '~/assets/spr-background.jpg';
import burnsHomePage from '~/assets/burns/home-page.png';
import burnsApartments from '~/assets/burns/apartments.png';
import burnsApplication from '~/assets/burns/application.png';
import burnsContact from '~/assets/burns/contact.png';
import burnsServices from '~/assets/burns/services.png';
import burnsRequest from '~/assets/burns/request.png';
import burnsSupport from '~/assets/burns/support.png';
import burnsAbout from '~/assets/burns/about.png';
import burnsFooter from '~/assets/burns/footer.png';
import { Footer } from '~/components/footer';
import { Image } from '~/components/image';
import {
  ProjectBackground,
  ProjectContainer,
  ProjectHeader,
  ProjectImage,
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
import styles from './burns-immobilier.module.css';

const title = 'Burns Immobilier - Gestion Locative Côte-Nord Québec';
const description =
  'Plateforme complète de gestion immobilière pour la région de la Côte-Nord au Québec. Offrant des appartements variés (studios à 3 chambres) à prix compétitifs, avec système de demande en ligne et support technique 24/7 pour les résidents.';
const roles = [
  'React.js Frontend Development',
  'Node.js Backend Architecture',
  'EmailJS Integration',
  'Tailwind CSS Styling',
  'Customizable Theme System'
];

export const meta = () => {
  return baseMeta({ title, description, prefix: 'Projects' });
};

export const BurnsImmobilier = () => {
  return (
    <Fragment>
      <ProjectContainer className={styles.burnsImmobilier}>
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
          url="https://jb.novic.dev"
          roles={roles}
        />
        <ProjectSection padding="top">
          <ProjectSectionContent>
            <ProjectSectionColumns>
              <Image
                raised
                srcSet={`${burnsHomePage} 300w, ${burnsHomePage} 600w`}
                width={300}
                height={225}
                placeholder={burnsHomePage}
                alt="Page d'accueil du site Burns Immobilier"
                sizes={`(max-width: ${media.mobile}px) 90vw, 300px`}
              />
              <Image
                raised
                srcSet={`${burnsApartments} 300w, ${burnsApartments} 600w`}
                width={300}
                height={225}
                placeholder={burnsApartments}
                alt="Catalogue d'appartements disponibles"
                sizes={`(max-width: ${media.mobile}px) 90vw, 300px`}
              />
              <Image
                raised
                srcSet={`${burnsApplication} 300w, ${burnsApplication} 600w`}
                width={300}
                height={225}
                placeholder={burnsApplication}
                alt="Formulaire de demande de location"
                sizes={`(max-width: ${media.mobile}px) 90vw, 300px`}
              />
            </ProjectSectionColumns>
          </ProjectSectionContent>
        </ProjectSection>
        <ProjectSection>
          <ProjectTextRow>
            <ProjectSectionHeading>Le défi</ProjectSectionHeading>
            <ProjectSectionText>
              La région de la Côte-Nord au Québec manquait d'une plateforme moderne et 
              complète pour la gestion immobilière. Les propriétaires et locataires 
              faisaient face à des processus inefficaces pour la recherche de logements, 
              les demandes de location et la gestion des problèmes techniques. 
              L'objectif était de créer une solution numérique intégrée qui simplifie 
              l'ensemble du processus locatif tout en offrant un service client exceptionnel.
            </ProjectSectionText>
          </ProjectTextRow>
        </ProjectSection>
        <ProjectSection light>
          <ProjectSectionContent>
            <ProjectTextRow>
              <ProjectSectionHeading>Services intégrés</ProjectSectionHeading>
              <ProjectSectionText>
                La plateforme présente une gamme complète d'appartements allant des studios
                aux triplex, tous situés dans la région de la Côte-Nord. Chaque propriété
                est présentée avec des photos détaillées, des descriptions complètes et
                des prix compétitifs. Le système permet une recherche filtrée par type
                de logement, nombre de chambres, prix et localisation pour faciliter
                la sélection des futurs locataires.
              </ProjectSectionText>
            </ProjectTextRow>
            <ProjectSectionColumns>
              <Image
                raised
                srcSet={`${burnsContact} 300w, ${burnsContact} 600w`}
                width={300}
                height={225}
                placeholder={burnsContact}
                alt="Page de contact et support client"
                sizes={`(max-width: ${media.mobile}px) 90vw, 300px`}
              />
              <Image
                raised
                srcSet={`${burnsServices} 300w, ${burnsServices} 600w`}
                width={300}
                height={225}
                placeholder={burnsServices}
                alt="Services offerts aux locataires"
                sizes={`(max-width: ${media.mobile}px) 90vw, 300px`}
              />
              <Image
                raised
                srcSet={`${burnsSupport} 300w, ${burnsSupport} 600w`}
                width={300}
                height={225}
                placeholder={burnsSupport}
                alt="Support technique 24/7"
                sizes={`(max-width: ${media.mobile}px) 90vw, 300px`}
              />
            </ProjectSectionColumns>
          </ProjectSectionContent>
        </ProjectSection>
        <ProjectSection>
          <ProjectSectionContent>
            <ProjectImage
              raised
              srcSet={`${burnsRequest} 1280w, ${burnsRequest} 2560w`}
              width={1280}
              height={800}
              placeholder={burnsRequest}
              alt="Formulaire de demande de logement avec vérification de crédit"
              sizes="100vw"
            />
            <ProjectTextRow>
              <ProjectSectionHeading>Système de demande en ligne avec EmailJS</ProjectSectionHeading>
              <ProjectSectionText>
                Un formulaire de demande complet permet aux candidats locataires de 
                soumettre leur dossier directement en ligne. Le système collecte toutes 
                les informations nécessaires pour l'enquête de crédit et l'évaluation 
                du dossier, incluant les informations personnelles, professionnelles 
                et financières. Grâce à l'intégration d'<strong>EmailJS</strong>, 
                les demandes sont automatiquement envoyées par email aux gestionnaires, 
                garantissant un traitement rapide et une notification immédiate. 
                Cette approche numérique accélère significativement le processus 
                de sélection des locataires.
              </ProjectSectionText>
            </ProjectTextRow>
          </ProjectSectionContent>
        </ProjectSection>
        <ProjectSection>
          <ProjectSectionColumns>
            <ProjectSectionContent>
              <ProjectTextRow>
                <ProjectSectionHeading>
                  Support technique 24/7
                </ProjectSectionHeading>
                <ProjectSectionText>
                  Les résidents actuels bénéficient d'un système de support technique 
                  accessible 24 heures sur 24, 7 jours sur 7. Ils peuvent soumettre 
                  leurs problèmes techniques, demandes de réparation ou questions 
                  via un formulaire dédié. L'équipe de gestion suit en temps réel 
                  l'avancement des interventions, garantissant une résolution rapide 
                  et un service client de qualité supérieure.
                </ProjectSectionText>
              </ProjectTextRow>
            </ProjectSectionContent>
            <div className={styles.sidebarImages}>
              <Image
                className={styles.sidebarImage}
                srcSet={`${burnsSupport} 260w, ${burnsSupport} 520w`}
                width={260}
                height={416}
                placeholder={burnsSupport}
                alt="Interface de support technique pour les résidents"
                sizes={`(max-width: ${media.mobile}px) 50vw, 25vw`}
              />
              <Image
                className={styles.sidebarImage}
                srcSet={`${burnsServices} 260w, ${burnsServices} 520w`}
                width={260}
                height={416}
                placeholder={burnsServices}
                alt="Page des services offerts par Burns Immobilier"
                sizes={`(max-width: ${media.mobile}px) 50vw, 25vw`}
              />
            </div>
          </ProjectSectionColumns>
        </ProjectSection>
        <ProjectSection light>
          <ProjectSectionContent>
            <ProjectTextRow>
              <ProjectSectionHeading>Expérience utilisateur optimisée</ProjectSectionHeading>
              <ProjectSectionText>
                L'interface utilisateur a été conçue spécifiquement pour le marché 
                québécois, avec une navigation intuitive en français et une adaptation 
                aux habitudes locales. Le site propose une expérience mobile optimisée 
                pour permettre aux utilisateurs de parcourir les propriétés et soumettre 
                leurs demandes depuis n'importe quel appareil. L'accessibilité et la 
                simplicité d'utilisation sont prioritaires dans chaque interaction.
              </ProjectSectionText>
            </ProjectTextRow>
            <Image
              raised
              srcSet={`${burnsApplication} 800w, ${burnsApplication} 1920w`}
              width={800}
              height={500}
              placeholder={burnsApplication}
              alt="Interface de candidature optimisée pour mobile"
            />
          </ProjectSectionContent>
        </ProjectSection>
        <ProjectSection>
          <ProjectTextRow>
            <ProjectSectionHeading>Architecture technique moderne</ProjectSectionHeading>
            <ProjectSectionText>
              Le projet Burns Immobilier a été développé avec une stack technologique moderne 
              et performante. Le frontend utilise <strong>React.js</strong> pour une interface 
              utilisateur réactive et intuitive, stylée avec <strong>Tailwind CSS</strong> 
              pour un design cohérent et responsive. Le backend est construit avec 
              <strong>Node.js</strong>, offrant une API robuste pour la gestion des données 
              immobilières. L'intégration d'<strong>EmailJS</strong> permet l'envoi automatique 
              d'emails pour les demandes de logement et notifications de support. 
              Une fonctionnalité unique de <strong>gestion des couleurs automatisée et 
              personnalisable</strong> permet aux utilisateurs d'adapter l'interface 
              à leurs préférences visuelles.
            </ProjectSectionText>
          </ProjectTextRow>
        </ProjectSection>
        <ProjectSection light>
          <ProjectSectionContent>
            <Image
              raised
              srcSet={`${burnsAbout} 800w, ${burnsAbout} 1920w`}
              width={800}
              height={500}
              placeholder={burnsAbout}
              alt="Interface personnalisable avec système de thèmes couleurs"
            />
            <ProjectTextRow>
              <ProjectSectionHeading>Système de thèmes personnalisables</ProjectSectionHeading>
              <ProjectSectionText>
                L'une des innovations clés du projet est son système de gestion des couleurs 
                entièrement personnalisable. Les utilisateurs peuvent choisir parmi plusieurs 
                thèmes prédéfinis ou créer leur propre palette de couleurs. Cette fonctionnalité, 
                développée avec Tailwind CSS et React, améliore significativement l'expérience 
                utilisateur en permettant une adaptation visuelle selon les préférences 
                individuelles tout en maintenant l'accessibilité et la lisibilité.
              </ProjectSectionText>
            </ProjectTextRow>
          </ProjectSectionContent>
        </ProjectSection>
        <ProjectSection>
          <ProjectSectionContent>
            <ProjectTextRow center centerMobile noMargin>
              <ProjectSectionHeading>Résultats du projet</ProjectSectionHeading>
              <ProjectSectionText>
                Burns Immobilier répond efficacement aux besoins du marché immobilier 
                de la Côte-Nord grâce à une plateforme numérique complète et moderne. 
                Développée avec <strong>React.js</strong>, <strong>Node.js</strong>, 
                <strong>Tailwind CSS</strong> et <strong>EmailJS</strong>, la solution 
                intègre la présentation des propriétés, la gestion automatisée des demandes 
                par email, le support technique et un système de thèmes personnalisables 
                dans une expérience utilisateur cohérente. Cette stack technologique 
                moderne améliore significativement l'efficacité opérationnelle tout 
                en offrant un service client exceptionnel aux locataires et propriétaires 
                de la région.
              </ProjectSectionText>
            </ProjectTextRow>
          </ProjectSectionContent>
        </ProjectSection>
      </ProjectContainer>
      <Footer />
    </Fragment>
  );
};
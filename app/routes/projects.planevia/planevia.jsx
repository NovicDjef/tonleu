import backgroundSpr from '~/assets/spr-background.jpg';
import planeviaCalendarToday from '~/assets/planevia/calendar-day.png';
import planeviaCalendarWeekly from '~/assets/planevia/calendar-week.png';
import planeviaDashboard from '~/assets/planevia/screen-1.png';
import planeviaMenu from '~/assets/planevia/screen-2.png';
import planeviaCalendarWeek from '~/assets/planevia/screen-6.png';
import planeviaPayment from '~/assets/planevia/screen-7.png';
import planeviaClientFile from '~/assets/planevia/screen-9.png';
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
import styles from './planevia.module.css';

const appStoreUrl = 'https://apps.apple.com/ca/app/planevia/id6761085786?l=fr-CA';
const playStoreUrl = 'https://play.google.com/store/apps/details?id=ca.planevia.app';
const title = 'Planevia - Plateforme SaaS de Gestion pour Cliniques et Spas';
const description =
  'Solution SaaS web et mobile pour les entreprises de bien-être et de santé au Québec : réservation en ligne 24/7, dossiers clients, rappels automatiques, pointage des employés et comptabilité réunis dans un seul système.';
const roles = [
  'Architecture SaaS Multi-tenant',
  'Développement React Native',
  'Application Web',
  'Paiements & Taxes TPS/TVQ',
  'Design UX/UI',
];

export const meta = () => {
  return baseMeta({ title, description, prefix: 'Projets' });
};

export const Planevia = () => {
  return (
    <Fragment>
      <ProjectContainer className={styles.planevia}>
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
            { label: 'App Store', url: appStoreUrl },
            { label: 'Google Play', url: playStoreUrl },
            { label: 'Site web', url: 'https://planevia.ca' },
          ]}
          roles={roles}
        />

        {/* Section Hero avec galerie immersive */}
        <ProjectSection padding="top">
          <ProjectSectionContent>
            <ProjectTextRow>
              <ProjectSectionHeading>Moins de paperasse. Plus de clients.</ProjectSectionHeading>
              <ProjectSectionText>
                Une application mobile pensée pour les propriétaires et les praticiens :
                tableau de bord du jour, prochain soin, rendez-vous, équipe et finances
                accessibles en un coup d’œil, synchronisés en temps réel avec la
                plateforme web.
              </ProjectSectionText>
            </ProjectTextRow>
            <div className={styles.heroGallery}>
              <div className={styles.phoneShowcase}>
                <Image
                  raised
                  className={styles.primaryPhone}
                  srcSet={`${planeviaCalendarToday} 200w, ${planeviaCalendarToday} 400w`}
                  width={200}
                  height={433}
                  placeholder={planeviaCalendarToday}
                  alt="Calendrier journalier d'une praticienne dans Planevia"
                  sizes={`(max-width: ${media.mobile}px) 150px, (max-width: ${media.tablet}px) 180px, 200px`}
                />
                <p className={styles.phoneLabel}>Agenda du jour</p>
              </div>
              <div className={styles.supportingPhones}>
                <div className={styles.phoneItem}>
                  <Image
                    raised
                    srcSet={`${planeviaDashboard} 150w, ${planeviaDashboard} 300w`}
                    width={150}
                    height={325}
                    placeholder={planeviaDashboard}
                    alt="Tableau de bord Planevia avec rendez-vous du jour et accès rapide"
                    sizes={`(max-width: ${media.mobile}px) 120px, (max-width: ${media.tablet}px) 140px, 150px`}
                  />
                  <p className={styles.phoneLabel}>Tableau de bord</p>
                </div>
                <div className={styles.phoneItem}>
                  <Image
                    raised
                    srcSet={`${planeviaCalendarWeekly} 150w, ${planeviaCalendarWeekly} 300w`}
                    width={150}
                    height={325}
                    placeholder={planeviaCalendarWeekly}
                    alt="Vue hebdomadaire des rendez-vous"
                    sizes={`(max-width: ${media.mobile}px) 120px, (max-width: ${media.tablet}px) 140px, 150px`}
                  />
                  <p className={styles.phoneLabel}>Vue semaine</p>
                </div>
                <div className={styles.phoneItem}>
                  <Image
                    raised
                    srcSet={`${planeviaPayment} 150w, ${planeviaPayment} 300w`}
                    width={150}
                    height={325}
                    placeholder={planeviaPayment}
                    alt="Encaissement d'un soin avec calcul TPS et TVQ"
                    sizes={`(max-width: ${media.mobile}px) 120px, (max-width: ${media.tablet}px) 140px, 150px`}
                  />
                  <p className={styles.phoneLabel}>Encaissement</p>
                </div>
              </div>
            </div>
          </ProjectSectionContent>
        </ProjectSection>

        {/* Section défi */}
        <ProjectSection>
          <ProjectTextRow>
            <ProjectSectionHeading>Simplifier la Gestion des Entreprises de Bien-être</ProjectSectionHeading>
            <ProjectSectionText>
              Spas, cliniques esthétiques, massothérapeutes, physiothérapeutes et salons
              jonglaient entre plusieurs outils : un agenda, un logiciel de facturation,
              des fichiers papier pour les dossiers clients et des feuilles de temps
              manuelles. Le défi était de réunir tout cela dans une seule plateforme SaaS,
              disponible sur le web et sur mobile, adaptée à la réalité fiscale et
              linguistique du Québec.
            </ProjectSectionText>
          </ProjectTextRow>
        </ProjectSection>

        {/* Section fonctionnalités */}
        <ProjectSection light>
          <ProjectSectionContent>
            <ProjectTextRow>
              <ProjectSectionHeading>Une Plateforme Tout-en-un</ProjectSectionHeading>
              <ProjectSectionText>
                Réservation en ligne 24/7 avec widget intégrable et page publique, rappels
                automatiques par SMS et courriel, réceptionniste IA qui répond aux appels
                et confirme par texto, dossiers clients avec notes cliniques, gestion des
                employés avec pointage et commissions, et comptabilité avec facturation,
                taxes TPS/TVQ et export QuickBooks.
              </ProjectSectionText>
            </ProjectTextRow>
            <div className={styles.serviceGrid}>
              <div className={styles.serviceCard}>
                <Image
                  raised
                  srcSet={`${planeviaCalendarWeek} 180w, ${planeviaCalendarWeek} 360w`}
                  width={180}
                  height={390}
                  placeholder={planeviaCalendarWeek}
                  alt="Vue hebdomadaire des rendez-vous"
                  sizes={`(max-width: ${media.mobile}px) 140px, (max-width: ${media.tablet}px) 160px, 180px`}
                />
                <div className={styles.serviceInfo}>
                  <h4>Réservations</h4>
                  <p>Agenda en ligne 24/7</p>
                </div>
              </div>
              <div className={styles.serviceCard}>
                <Image
                  raised
                  srcSet={`${planeviaClientFile} 180w, ${planeviaClientFile} 360w`}
                  width={180}
                  height={390}
                  placeholder={planeviaClientFile}
                  alt="Dossier client avec carte corporelle annotable"
                  sizes={`(max-width: ${media.mobile}px) 140px, (max-width: ${media.tablet}px) 160px, 180px`}
                />
                <div className={styles.serviceInfo}>
                  <h4>Dossiers Clients</h4>
                  <p>Notes et carte corporelle</p>
                </div>
              </div>
              <div className={styles.serviceCard}>
                <Image
                  raised
                  srcSet={`${planeviaPayment} 180w, ${planeviaPayment} 360w`}
                  width={180}
                  height={390}
                  placeholder={planeviaPayment}
                  alt="Paiement avec TPS, TVQ et pourboire"
                  sizes={`(max-width: ${media.mobile}px) 140px, (max-width: ${media.tablet}px) 160px, 180px`}
                />
                <div className={styles.serviceInfo}>
                  <h4>Finances</h4>
                  <p>Factures, TPS/TVQ, pourboires</p>
                </div>
              </div>
            </div>
          </ProjectSectionContent>
        </ProjectSection>

        {/* Section dossiers clients */}
        <ProjectSection>
          <ProjectSectionContent>
            <ProjectSectionColumns className={styles.trackingSection}>
              <div className={styles.trackingContent}>
                <ProjectTextRow>
                  <ProjectSectionHeading>Calendrier Intelligent & Dossiers Cliniques</ProjectSectionHeading>
                  <ProjectSectionText>
                    Le calendrier affiche les rendez-vous par praticien, par jour ou par
                    semaine, avec les statuts (confirmé, arrivé, nouveau client) et les
                    plages indisponibles. Chaque client dispose d’un dossier complet avec
                    historique des visites, timeline par zone et carte corporelle sur
                    laquelle le praticien peut poser des épingles ou annoter au crayon.
                  </ProjectSectionText>
                </ProjectTextRow>
              </div>
              <div className={styles.trackingVisual}>
                <div className={styles.trackingPhones}>
                  <Image
                    raised
                    className={styles.trackingPhone}
                    srcSet={`${planeviaCalendarToday} 190w, ${planeviaCalendarToday} 380w`}
                    width={190}
                    height={411}
                    placeholder={planeviaCalendarToday}
                    alt="Calendrier journalier avec statuts des rendez-vous"
                    sizes={`(max-width: ${media.mobile}px) 150px, (max-width: ${media.tablet}px) 170px, 190px`}
                  />
                  <Image
                    raised
                    className={styles.chatPhone}
                    srcSet={`${planeviaCalendarWeekly} 170w, ${planeviaCalendarWeekly} 340w`}
                    width={170}
                    height={368}
                    placeholder={planeviaCalendarWeekly}
                    alt="Vue semaine du calendrier avec statuts des rendez-vous"
                    sizes={`(max-width: ${media.mobile}px) 130px, (max-width: ${media.tablet}px) 150px, 170px`}
                  />
                </div>
              </div>
            </ProjectSectionColumns>
          </ProjectSectionContent>
        </ProjectSection>

        {/* Section architecture */}
        <ProjectSection light>
          <div className={styles.columns}>
            <ProjectSectionContent className={styles.imagesText}>
              <ProjectTextRow>
                <ProjectSectionHeading>Architecture SaaS Web & Mobile</ProjectSectionHeading>
                <ProjectSectionText>
                  Planevia repose sur une architecture multi-tenant : chaque entreprise
                  dispose de son espace isolé, partagé entre l’application web
                  d’administration et l’application mobile iOS et Android. Les données
                  sont hébergées à Montréal et sauvegardées quotidiennement, avec des
                  rôles distincts pour les propriétaires, gestionnaires et praticiens.
                </ProjectSectionText>
              </ProjectTextRow>
            </ProjectSectionContent>
            <div className={styles.sidebarImages}>
              <Image
                className={styles.sidebarImage}
                srcSet={`${planeviaDashboard} 120w, ${planeviaDashboard} 240w`}
                width={120}
                height={260}
                placeholder={planeviaDashboard}
                alt="Tableau de bord du propriétaire"
                sizes={`(max-width: ${media.mobile}px) 100px, (max-width: ${media.tablet}px) 110px, 120px`}
              />
              <Image
                className={styles.sidebarImage}
                srcSet={`${planeviaMenu} 120w, ${planeviaMenu} 240w`}
                width={120}
                height={260}
                placeholder={planeviaMenu}
                alt="Menu avec rôles et modules"
                sizes={`(max-width: ${media.mobile}px) 100px, (max-width: ${media.tablet}px) 110px, 120px`}
              />
            </div>
          </div>
        </ProjectSection>

        {/* Section résultats */}
        <ProjectSection>
          <ProjectSectionContent>
            <ProjectTextRow center centerMobile noMargin>
              <ProjectSectionHeading>Disponible sur iOS, Android et le Web</ProjectSectionHeading>
              <ProjectSectionText>
                Planevia est en production et disponible sur l’App Store, Google Play et
                sur planevia.ca. La plateforme permet aux entreprises de bien-être de
                remplir leur agenda automatiquement, de réduire les absences grâce aux
                rappels et de gérer leur équipe et leur comptabilité depuis n’importe où.
              </ProjectSectionText>
            </ProjectTextRow>
            <div className={styles.storeBadges}>
              <a
                className={styles.storeBadge}
                href={appStoreUrl}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Télécharger Planevia sur l'App Store"
              >
                <svg className={styles.storeIcon} viewBox="0 0 24 24" aria-hidden="true">
                  <path
                    fill="currentColor"
                    d="M16.37 12.6c-.02-2.3 1.88-3.4 1.96-3.46-1.07-1.56-2.73-1.78-3.32-1.8-1.41-.14-2.76.83-3.47.83-.72 0-1.82-.81-2.99-.79-1.54.02-2.96.9-3.75 2.27-1.6 2.78-.41 6.89 1.15 9.14.76 1.1 1.67 2.34 2.86 2.3 1.15-.05 1.58-.74 2.97-.74 1.38 0 1.77.74 2.98.72 1.24-.02 2.02-1.12 2.77-2.23.87-1.28 1.23-2.52 1.25-2.58-.03-.01-2.39-.92-2.41-3.66zM14.1 5.86c.63-.77 1.06-1.83.94-2.89-.91.04-2.02.61-2.67 1.37-.58.67-1.1 1.76-.96 2.8 1.01.08 2.05-.52 2.69-1.28z"
                  />
                </svg>
                <span className={styles.storeText}>
                  <span className={styles.storeCaption}>Télécharger sur</span>
                  <span className={styles.storeName}>App Store</span>
                </span>
              </a>
              <a
                className={styles.storeBadge}
                href={playStoreUrl}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Disponible sur Google Play"
              >
                <svg className={styles.storeIcon} viewBox="0 0 24 24" aria-hidden="true">
                  <path fill="#34A853" d="M3.6 2.3c-.2.2-.3.6-.3 1v17.4c0 .4.1.8.3 1l9.6-9.7L3.6 2.3z" />
                  <path fill="#FBBC04" d="M16.4 15.2 13.2 12l3.2-3.2 3.8 2.2c1.1.6 1.1 1.6 0 2.2l-3.8 2z" />
                  <path fill="#EA4335" d="M16.4 15.2 13.2 12l-9.6 9.7c.4.4 1 .4 1.7 0l11.1-6.5z" />
                  <path fill="#4285F4" d="M16.4 8.8 5.3 2.3c-.7-.4-1.3-.4-1.7 0l9.6 9.7 3.2-3.2z" />
                </svg>
                <span className={styles.storeText}>
                  <span className={styles.storeCaption}>Disponible sur</span>
                  <span className={styles.storeName}>Google Play</span>
                </span>
              </a>
            </div>
          </ProjectSectionContent>
        </ProjectSection>
      </ProjectContainer>
      <Footer />
    </Fragment>
  );
};

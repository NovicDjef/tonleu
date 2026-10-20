import calendarDay from '~/assets/case-studies/planevia/calendar-day.webp';
import calendarWeek from '~/assets/case-studies/planevia/calendar-week.webp';
import clientFile from '~/assets/case-studies/planevia/client-file.webp';
import dashboard from '~/assets/case-studies/planevia/dashboard.webp';
import payment from '~/assets/case-studies/planevia/payment.webp';
import background from '~/assets/case-studies/planevia/background.webp';
import { CaseStudy } from '~/layouts/case-study';
import { baseMeta } from '~/utils/meta';

const title = 'Planevia';
const description =
  'Plateforme SaaS web et mobile pour les spas, cliniques et salons du Québec : réservation en ligne 24/7, dossiers clients, rappels automatiques, pointage des employés et comptabilité réunis dans un seul système.';

export const meta = () => {
  return baseMeta({ title: `${title} - Plateforme SaaS Web & Mobile`, description, prefix: 'Projets' });
};

export const Planevia = () => (
  <CaseStudy
    slug="planevia"
    background={background}
    title={title}
    description={description}
    links={{
      appStore: 'https://apps.apple.com/ca/app/planevia/id6761085786?l=fr-CA',
      googlePlay: 'https://play.google.com/store/apps/details?id=ca.planevia.app',
      website: 'https://planevia.ca',
    }}
    hero={[
      { src: dashboard, alt: 'Tableau de bord Planevia' },
      { src: calendarDay, alt: 'Agenda du jour d’une praticienne dans Planevia' },
      { src: calendarWeek, alt: 'Vue semaine du calendrier Planevia' },
    ]}
    challenge="Agenda papier ou logiciel séparé, facturation à part, dossiers clients dans des classeurs, feuilles de temps manuelles : les spas et cliniques perdaient des heures chaque semaine et des rendez-vous à cause des absences. Il fallait un seul outil, en français, adapté aux taxes TPS/TVQ du Québec."
    solution="Planevia réunit réservation en ligne, rappels SMS et courriel, dossiers cliniques, pointage, commissions et comptabilité. L’application d’administration web et l’application mobile partagent les mêmes données en temps réel, avec des rôles distincts pour propriétaires, gestionnaires et praticiens."
    features={[
      {
        title: 'Agenda intelligent',
        text: 'Vue par praticien, par jour ou par semaine, statuts des rendez-vous, pauses et plages indisponibles en un coup d’œil.',
        src: calendarDay,
        alt: 'Agenda journalier',
      },
      {
        title: 'Tableau de bord',
        text: 'Prochain soin, rendez-vous du jour, équipe et accès rapide aux modules clés dès l’ouverture de l’application.',
        src: dashboard,
        alt: 'Tableau de bord',
      },
      {
        title: 'Encaissement & taxes',
        text: 'Fin de soin, produits additionnels, rabais, pourboire et calcul automatique de la TPS et de la TVQ.',
        src: payment,
        alt: 'Écran d’encaissement',
      },
      {
        title: 'Dossiers cliniques',
        text: 'Historique des visites, timeline par zone et carte corporelle annotable à l’épingle ou au crayon.',
        src: clientFile,
        alt: 'Dossier client avec carte corporelle',
      },
    ]}
    roles={['React Native', 'React', 'Node.js', 'TypeScript', 'API REST']}
    outcome={{
      title: 'Résultat',
      text: 'Planevia est en production : l’application est publiée sur l’App Store et Google Play, et la plateforme web est accessible sur planevia.ca. Les entreprises gèrent leurs rendez-vous, leur équipe et leur facturation depuis un seul outil.',
    }}
  />
);

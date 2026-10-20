import calendar from '~/assets/case-studies/reminder/calendar.webp';
import duration from '~/assets/case-studies/reminder/duration.webp';
import newMed from '~/assets/case-studies/reminder/new-med.webp';
import progress from '~/assets/case-studies/reminder/progress.webp';
import background from '~/assets/case-studies/reminder/background.webp';
import { CaseStudy } from '~/layouts/case-study';
import { baseMeta } from '~/utils/meta';

const title = 'MedRemind';
const description =
  'Application mobile de gestion des médicaments : planification des prises, rappels intelligents, suivi des recharges et historique détaillé pour améliorer l’observance thérapeutique.';

export const meta = () => {
  return baseMeta({ title: `${title} - Gestion de Médicaments`, description, prefix: 'Projets' });
};

export const Reminder = () => (
  <CaseStudy
    slug="reminder"
    background={background}
    title={title}
    description={description}
    hero={[
      { src: calendar, alt: 'Calendrier des prises' },
      { src: progress, alt: 'Progression quotidienne' },
      { src: newMed, alt: 'Ajout d’un médicament' },
    ]}
    challenge="Les patients sous traitement multiple oublient des prises, se trompent d’horaire ou tombent à court de médicaments. Les solutions existantes étaient soit trop simples, soit trop complexes pour un usage quotidien."
    solution="MedRemind planifie chaque médicament (dosage, fréquence, durée), envoie des rappels au bon moment, affiche la progression du jour, suit le stock pour anticiper les recharges et garde un journal complet des prises."
    features={[
      {
        title: 'Progression du jour',
        text: 'Pourcentage des doses prises, actions rapides et programme de la journée en un écran.',
        src: progress,
        alt: 'Progression quotidienne',
      },
      {
        title: 'Calendrier',
        text: 'Vue mensuelle et liste des prises du jour, marquées en un geste.',
        src: calendar,
        alt: 'Calendrier',
      },
      {
        title: 'Ajout en quelques secondes',
        text: 'Nom, dosage et fréquence (une à quatre fois par jour ou selon les besoins).',
        src: newMed,
        alt: 'Nouveau médicament',
      },
      {
        title: 'Durée & rappels',
        text: 'Durée du traitement, date de début, rappels et suivi de recharge activables.',
        src: duration,
        alt: 'Durée et rappels',
      },
    ]}
    roles={['React Native', 'Notifications locales', 'Stockage local sécurisé', 'Code PIN']}
    outcome={{
      title: 'Résultat',
      text: 'Les prises, rappels et recharges sont centralisés dans une interface simple. L’accès à l’application et aux données de santé est protégé par un code PIN.',
    }}
  />
);

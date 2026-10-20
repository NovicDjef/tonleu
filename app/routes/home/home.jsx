import planeviaTexture1 from '~/assets/planevia/calendar-day.png';
import planeviaTexture2 from '~/assets/planevia/calendar-week.png';
import hotelTexture from '~/assets/case-studies/hotel/hero.webp';
import hotelTexture2 from '~/assets/case-studies/hotel/suites.webp';
import hotelAdminTexture from '~/assets/case-studies/hotel-admin/overview.webp';
import hotelAdminTexture2 from '~/assets/case-studies/hotel-admin/rooms-plan.webp';
import jtTradeTexture from '~/assets/case-studies/jt-trade/hero.webp';
import jtTradeTexture2 from '~/assets/case-studies/jt-trade/countries.webp';
import koursierTexture1 from '~/assets/koursier/588.png';
import koursierTexture2 from '~/assets/koursier/608.png';
import reminder1 from '~/assets/reminder1.png';
import reminder2 from '~/assets/reminder2.png';
import deliveryHome from '~/assets/Delivery/home.png';
import deliveryWallet from '~/assets/Delivery/wallet.png';
import raphycarTexture from '~/assets/raphy/home2.png';
import raphycarTexture2 from '~/assets/raphy/home.png';
import burnsTexture from '~/assets/burns/home-page.png';
import burnsTexture2 from '~/assets/burns/apartments.png';
import { Footer } from '~/components/footer';
import { baseMeta } from '~/utils/meta';
import { Intro } from './intro';
import { Profile } from './profile';
import { ProjectSummary } from './project-summary';
import { Websites } from './websites';
import { useEffect, useRef, useState } from 'react';
import config from '~/config.json';
import styles from './home.module.css';

// Prefetch draco decoader wasm
export const links = () => {
  return [
    {
      rel: 'prefetch',
      href: '/draco/draco_wasm_wrapper.js',
      as: 'script',
      type: 'text/javascript',
      importance: 'low',
    },
    {
      rel: 'prefetch',
      href: '/draco/draco_decoder.wasm',
      as: 'fetch',
      type: 'application/wasm',
      importance: 'low',
    },
  ];
};

export const meta = () => {
  return baseMeta({
    title: 'Développeur Logiciel Web & Mobile',
    description: `${config.description} Découvrez mes projets Next.js, Angular, React Native comme Koursier, RaphyCar, et mes solutions full-stack avec pipelines CI/CD.`,
    keywords: ['Next.js Québec', 'Angular Canada', 'React Native Québec', 'Développeur Web Québec', 'Applications iOS Android', 'JavaScript TypeScript', 'Node.js', 'Pipelines CI/CD', 'Full Stack Developer'],
    canonical: config.url,
  });
};

export const Home = () => {
  const [visibleSections, setVisibleSections] = useState([]);
  const [scrollIndicatorHidden, setScrollIndicatorHidden] = useState(false);
  const intro = useRef();
  const projectOne = useRef();
  const projectTwo = useRef();
  const projectThree = useRef();
  const projectFour = useRef();
  const projectFive = useRef();
  const projectSix = useRef();
  const projectSeven = useRef();
  const projectEight = useRef();
  const projectNine = useRef();
  const websites = useRef();
  const details = useRef();

  useEffect(() => {
    const sections = [intro, projectOne, projectTwo, projectThree, projectFour, projectFive, projectSix, projectSeven, projectEight, projectNine, websites, details];

    const sectionObserver = new IntersectionObserver(
      (entries, observer) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            const section = entry.target;
            observer.unobserve(section);
            if (visibleSections.includes(section)) return;
            setVisibleSections(prevSections => [...prevSections, section]);
          }
        });
      },
      { rootMargin: '0px 0px -10% 0px', threshold: 0.1 }
    );

    const indicatorObserver = new IntersectionObserver(
      ([entry]) => {
        setScrollIndicatorHidden(!entry.isIntersecting);
      },
      { rootMargin: '-100% 0px 0px 0px' }
    );

    sections.forEach(section => {
      sectionObserver.observe(section.current);
    });

    indicatorObserver.observe(intro.current);

    return () => {
      sectionObserver.disconnect();
      indicatorObserver.disconnect();
    };
  }, [visibleSections]);

  return (
    <div className={styles.home}>
      <Intro
        id="intro"
        sectionRef={intro}
        scrollIndicatorHidden={scrollIndicatorHidden}
      />
      <ProjectSummary
        id="project-1"
        alternate
        sectionRef={projectOne}
        visible={visibleSections.includes(projectOne.current)}
        index={1}
        title="Planevia"
        description="Plateforme SaaS web et mobile pour les spas, cliniques et salons du Québec : réservation en ligne, dossiers clients, rappels automatiques, pointage et comptabilité TPS/TVQ."
        buttonText="Voir le projet"
        buttonLink="/projects/planevia"
        model={{
          type: 'phone',
          alt: 'Agenda journalier et vue semaine de l’application Planevia',
          textures: [
            {
              srcSet: `${planeviaTexture1} 375w, ${planeviaTexture1} 750w`,
              placeholder: planeviaTexture1,
            },
            {
              srcSet: `${planeviaTexture2} 375w, ${planeviaTexture2} 750w`,
              placeholder: planeviaTexture2,
            },
          ],
        }}
      />
      <ProjectSummary
        id="project-2"
        sectionRef={projectTwo}
        visible={visibleSections.includes(projectTwo.current)}
        index={2}
        title="Hôtel Sept-Îles"
        description="Site web et moteur de réservation directe d’un hôtel de la Côte-Nord : disponibilités en temps réel, paiement en ligne, spa et restaurant."
        buttonText="Voir le projet"
        buttonLink="/projects/hotel-sept-iles"
        model={{
          type: 'laptop',
          alt: 'Page d’accueil du site de l’Hôtel Sept-Îles',
          textures: [
            {
              srcSet: `${hotelTexture} 800w, ${hotelTexture} 1920w`,
              placeholder: hotelTexture,
            },
            {
              srcSet: `${hotelTexture2} 800w, ${hotelTexture2} 1920w`,
              placeholder: hotelTexture2,
            },
          ],
        }}
      />
      <ProjectSummary
        id="project-3"
        alternate
        sectionRef={projectThree}
        visible={visibleSections.includes(projectThree.current)}
        index={3}
        title="Hôtel Sept-Îles — Gestion"
        description="Console de gestion interne de l’hôtel : réservations, plan des 155 chambres, clients, alertes, comptabilité TPS/TVQ et paiements."
        buttonText="Voir le projet"
        buttonLink="/projects/hotel-sept-iles-admin"
        model={{
          type: 'laptop',
          alt: 'Console de gestion de l’Hôtel Sept-Îles',
          textures: [
            {
              srcSet: `${hotelAdminTexture} 800w, ${hotelAdminTexture} 1920w`,
              placeholder: hotelAdminTexture,
            },
            {
              srcSet: `${hotelAdminTexture2} 800w, ${hotelAdminTexture2} 1920w`,
              placeholder: hotelAdminTexture2,
            },
          ],
        }}
      />
      <ProjectSummary
        id="project-4"
        sectionRef={projectFour}
        visible={visibleSections.includes(projectFour.current)}
        index={4}
        title="JT Trade and Services"
        description="Site web d’une entreprise de transport de colis entre l’Afrique, le Canada et l’Europe, avec demande de devis, simulateur de tarifs et formations en langues."
        buttonText="Voir le projet"
        buttonLink="/projects/jt-trade-services"
        model={{
          type: 'laptop',
          alt: 'Page d’accueil du site JT Trade and Services',
          textures: [
            {
              srcSet: `${jtTradeTexture} 800w, ${jtTradeTexture} 1920w`,
              placeholder: jtTradeTexture,
            },
            {
              srcSet: `${jtTradeTexture2} 800w, ${jtTradeTexture2} 1920w`,
              placeholder: jtTradeTexture2,
            },
          ],
        }}
      />
      <ProjectSummary
        id="project-5"
        alternate
        sectionRef={projectFive}
        visible={visibleSections.includes(projectFive.current)}
        index={5}
        title="Koursier"
        description="Application mobile de livraison au Cameroun : repas, colis et bouteilles de gaz, avec suivi en temps réel et paiement par mobile money."
        buttonText="Voir le projet"
        buttonLink="/projects/koursier"
        model={{
          type: 'phone',
          alt: 'Écrans de l’application Koursier',
          textures: [
            {
              srcSet: `${koursierTexture1} 375w, ${koursierTexture1} 750w`,
              placeholder: koursierTexture1,
            },
            {
              srcSet: `${koursierTexture2} 375w, ${koursierTexture2} 750w`,
              placeholder: koursierTexture2,
            },
          ],
        }}
      />
      <ProjectSummary
        id="project-6"
        sectionRef={projectSix}
        visible={visibleSections.includes(projectSix.current)}
        index={6}
        title="Koursier Livreur"
        description="Application des livreurs Koursier : réception des commandes en temps réel, navigation vers le client, suivi des livraisons et portefeuille de gains."
        buttonText="Voir le projet"
        buttonLink="/projects/koursier-delivery"
        model={{
          type: 'phone',
          alt: 'Tableau de bord et portefeuille de l’application Koursier Livreur',
          textures: [
            {
              srcSet: `${deliveryHome} 375w, ${deliveryWallet} 750w`,
              placeholder: deliveryHome,
            },
            {
              srcSet: `${deliveryWallet} 375w, ${deliveryHome} 750w`,
              placeholder: deliveryWallet,
            },
          ],
        }}
      />
      <ProjectSummary
        id="project-7"
        alternate
        sectionRef={projectSeven}
        visible={visibleSections.includes(projectSeven.current)}
        index={7}
        title="RaphyCar"
        description="Application mobile de location de véhicules au Cameroun : recherche filtrée, réservation, messagerie avec les propriétaires et gestion de flotte pour les agences."
        buttonText="Voir le projet"
        buttonLink="/projects/raphycar"
        model={{
          type: 'phone',
          alt: 'Écrans de l’application RaphyCar',
          textures: [
            {
              srcSet: `${raphycarTexture} 375w, ${raphycarTexture} 750w`,
              placeholder: raphycarTexture,
            },
            {
              srcSet: `${raphycarTexture2} 375w, ${raphycarTexture2} 750w`,
              placeholder: raphycarTexture2,
            },
          ],
        }}
      />
      <ProjectSummary
        id="project-8"
        sectionRef={projectEight}
        visible={visibleSections.includes(projectEight.current)}
        index={8}
        title="MedRemind"
        description="Application mobile de gestion des médicaments : planification des prises, rappels, suivi des recharges et historique pour mieux suivre son traitement."
        buttonText="Voir le projet"
        buttonLink="/projects/reminder"
        model={{
          type: 'phone',
          alt: 'Écrans de l’application MedRemind',
          textures: [
            {
              srcSet: `${reminder2} 375w, ${reminder2} 750w`,
              placeholder: reminder2,
            },
            {
              srcSet: `${reminder1} 375w, ${reminder1} 750w`,
              placeholder: reminder1,
            },
          ],
        }}
      />
      <ProjectSummary
        id="project-9"
        alternate
        sectionRef={projectNine}
        visible={visibleSections.includes(projectNine.current)}
        index={9}
        title="Burns Immobilier"
        description="Site web d’un gestionnaire immobilier de Sept-Îles : types de logements, albums photo par appartement et demande de visite en ligne."
        buttonText="Voir le projet"
        buttonLink="/projects/burns-immobilier"
        model={{
          type: 'laptop',
          alt: 'Page d’accueil du site Burns Immobilier',
          textures: [
            {
              srcSet: `${burnsTexture} 800w, ${burnsTexture} 1920w`,
              placeholder: burnsTexture,
            },
            {
              srcSet: `${burnsTexture2} 800w, ${burnsTexture2} 1920w`,
              placeholder: burnsTexture2,
            },
          ],
        }}
      />
      <Websites
        id="websites"
        sectionRef={websites}
        visible={visibleSections.includes(websites.current)}
      />
      <Profile
        sectionRef={details}
        visible={visibleSections.includes(details.current)}
        id="details"
      />
      <Footer />
    </div>
  );
};

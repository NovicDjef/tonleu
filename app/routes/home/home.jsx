import planeviaWeb from '~/assets/case-studies/planevia/web-hero.webp';
import koursierWeb from '~/assets/case-studies/koursier/web-hero.webp';
import koursierDriversWeb from '~/assets/case-studies/koursier-delivery/web-drivers.webp';
import raphycarWeb from '~/assets/case-studies/raphycar/web-hero.webp';
import planeviaTexture1 from '~/assets/planevia/calendar-day.png';
import hotelTexture from '~/assets/case-studies/hotel/hero.webp';
import hotelTexture2 from '~/assets/case-studies/hotel/suites.webp';
import hotelAdminTexture from '~/assets/case-studies/hotel-admin/overview.webp';
import hotelAdminTexture2 from '~/assets/case-studies/hotel-admin/rooms-plan.webp';
import j3Texture from '~/assets/case-studies/j3-immobilier/hero.webp';
import j3Texture2 from '~/assets/case-studies/j3-immobilier/collection.webp';
import jtTradeTexture from '~/assets/case-studies/jt-trade/hero.webp';
import jtTradeTexture2 from '~/assets/case-studies/jt-trade/countries.webp';
import koursierTexture1 from '~/assets/koursier/588.png';
import reminder1 from '~/assets/reminder1.png';
import reminder2 from '~/assets/reminder2.png';
import deliveryHome from '~/assets/Delivery/home.png';
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
  const projectTen = useRef();
  const websites = useRef();
  const details = useRef();

  useEffect(() => {
    const sections = [intro, projectOne, projectTwo, projectThree, projectFour, projectFive, projectSix, projectSeven, projectEight, projectNine, projectTen, websites, details];

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
          type: 'showcase',
          alt: 'Site web et application mobile Planevia',
          domain: 'planevia.ca',
          textures: [
            {
              srcSet: `${planeviaWeb} 1280w, ${planeviaWeb} 1920w`,
              placeholder: planeviaWeb,
            },
            {
              srcSet: `${planeviaTexture1} 375w, ${planeviaTexture1} 750w`,
              placeholder: planeviaTexture1,
            },
          ],
        }}
      />
      <ProjectSummary
        id="project-2"
        sectionRef={projectTwo}
        visible={visibleSections.includes(projectTwo.current)}
        index={2}
        title="Koursier"
        description="Plateforme de livraison au Cameroun : application mobile, site de commande en ligne, espace restaurant et back-office, pour les repas, les colis et le gaz, avec paiement par mobile money."
        buttonText="Voir le projet"
        buttonLink="/projects/koursier"
        model={{
          type: 'showcase',
          alt: 'Site web et application mobile Koursier',
          domain: 'koursier.cm',
          textures: [
            {
              srcSet: `${koursierWeb} 1280w, ${koursierWeb} 1920w`,
              placeholder: koursierWeb,
            },
            {
              srcSet: `${koursierTexture1} 375w, ${koursierTexture1} 750w`,
              placeholder: koursierTexture1,
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
        title="Koursier Livreur"
        description="Application des livreurs Koursier : réception des commandes en temps réel, navigation vers le client, suivi des livraisons et portefeuille de gains."
        buttonText="Voir le projet"
        buttonLink="/projects/koursier-delivery"
        model={{
          type: 'showcase',
          alt: 'Page livreurs du site et application Koursier Livreur',
          domain: 'koursier.cm',
          textures: [
            {
              srcSet: `${koursierDriversWeb} 1280w, ${koursierDriversWeb} 1920w`,
              placeholder: koursierDriversWeb,
            },
            {
              srcSet: `${deliveryHome} 375w, ${deliveryHome} 750w`,
              placeholder: deliveryHome,
            },
          ],
        }}
      />
      <ProjectSummary
        id="project-4"
        sectionRef={projectFour}
        visible={visibleSections.includes(projectFour.current)}
        index={4}
        title="RaphyCar"
        description="Location de véhicules au Cameroun : une application mobile pour réserver et payer, et un espace pro web où les agences gèrent leur flotte, leurs réservations et leurs revenus."
        buttonText="Voir le projet"
        buttonLink="/projects/raphycar"
        model={{
          type: 'showcase',
          alt: 'Site web et application mobile RaphyCar',
          domain: 'raphycar.com',
          textures: [
            {
              srcSet: `${raphycarWeb} 1280w, ${raphycarWeb} 1920w`,
              placeholder: raphycarWeb,
            },
            {
              srcSet: `${raphycarTexture2} 375w, ${raphycarTexture2} 750w`,
              placeholder: raphycarTexture2,
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
        id="project-6"
        sectionRef={projectSix}
        visible={visibleSections.includes(projectSix.current)}
        index={6}
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
        id="project-7"
        alternate
        sectionRef={projectSeven}
        visible={visibleSections.includes(projectSeven.current)}
        index={7}
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
        id="project-8"
        sectionRef={projectEight}
        visible={visibleSections.includes(projectEight.current)}
        index={8}
        title="J3 Immobilier"
        description="Site et plateforme de gestion locative d’un gestionnaire immobilier de Gatineau : collection de logements, réservation de visites, espace locataire et back-office de maintenance."
        buttonText="Voir le projet"
        buttonLink="/projects/j3-immobilier"
        model={{
          type: 'laptop',
          alt: 'Page d’accueil du site J3 Immobilier',
          textures: [
            {
              srcSet: `${j3Texture} 800w, ${j3Texture} 1920w`,
              placeholder: j3Texture,
            },
            {
              srcSet: `${j3Texture2} 800w, ${j3Texture2} 1920w`,
              placeholder: j3Texture2,
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
        id="project-10"
        sectionRef={projectTen}
        visible={visibleSections.includes(projectTen.current)}
        index={10}
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

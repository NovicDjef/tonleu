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
import dashboardTexture from '~/assets/dashb/homeresto.jpg';
import dashboardUI from '~/assets/dashb/ui-design-dialin-contracts-manager.png';
import sliceTextureLarge from '~/assets/slice-app-large.jpg';
import sliceTexturePlaceholder from '~/assets/slice-app-placeholder.jpg';
import sliceTexture from '~/assets/slice-app.jpg';
import sprTextureLarge from '~/assets/spr-lesson-builder-dark-large.jpg';
import sprTexturePlaceholder from '~/assets/spr-lesson-builder-dark-placeholder.jpg';
import sprTexture from '~/assets/spr-lesson-builder-dark.jpg';
import { Footer } from '~/components/footer';
import { baseMeta } from '~/utils/meta';
import { Intro } from './intro';
import { Profile } from './profile';
import { ProjectSummary } from './project-summary';
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
    title: 'Developer + Mobile & web',
    description: `Design portfolio of ${config.name} — a product designer working on web & mobile apps with a focus on motion, experience design, and accessibility.`,
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
  // const projectEight = useRef();
  const details = useRef();

  useEffect(() => {
    const sections = [intro, projectOne, projectTwo, projectThree, projectFour, projectFive, projectSix, projectSeven, details];

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
        title="Multi-Service Delivery Platform"
        description="A comprehensive mobile delivery platform enabling real-time tracking, multi-category ordering, and seamless user experience for gas, packages, and food delivery services."
        buttonText="View project"
        buttonLink="/projects/koursier"
        model={{
          type: 'phone',
          alt: 'Koursier app interface',
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
        id="project-2"
        sectionRef={projectTwo}
        visible={visibleSections.includes(projectTwo.current)}
        index={2}
        title="Comprehensive Admin Dashboard System"
        description="A powerful administrative dashboard designed for managing delivery operations, driver coordination, revenue tracking, and comprehensive business analytics for multi-service delivery platforms."
        buttonText="View project"
        buttonLink="/projects/admin-dashboard"
        model={{
          type: 'laptop',
          alt: 'Admin dashboard showing comprehensive management interface',
          textures: [
            {
              srcSet: `${dashboardTexture} 800w, ${dashboardUI} 1920w`,
              placeholder: dashboardTexture,
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
        title="Koursier Delivery Management System"
        description="Professional delivery driver application for managing orders, real-time tracking, and seamless coordination with the main Koursier platform to ensure efficient delivery operations."
        buttonText="View project"
        buttonLink="/projects/koursier-delivery"
        model={{
          type: 'phone',
          alt: 'Koursier Delivery app order management interface',
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
        id="project-4"
        sectionRef={projectFour}
        visible={visibleSections.includes(projectFour.current)}
        index={4}
        title="RaphyCar - AI-Powered Vehicle Rental Platform"
        description="A comprehensive car rental mobile application designed for the Cameroonian market, featuring intelligent filtering, AI-powered chatbot customer support, and complete administrative management for vehicle fleet operations."
        buttonText="View project"
        buttonLink="/projects/raphycar"
        model={{
          type: 'phone',
          alt: 'RaphyCar mobile app showing vehicle rental interface with AI chatbot',
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
        id="project-5"
        alternate
        sectionRef={projectFive}
        visible={visibleSections.includes(projectFive.current)}
        index={5}
        title="Smart Medication Management System"
        description="A comprehensive mobile application designed to help users manage their medication schedules with intelligent reminders, tracking capabilities, and detailed intake history for improved healthcare compliance."
        buttonText="View project"
        buttonLink="/projects/reminder"
        model={{
          type: 'phone',
          alt: 'Reminder app medication management interface',
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
        title="Design the future through programming"
        description="Designing a platform to help educators build better online courseware"
        buttonText="View project"
        buttonLink="/projects/smart-sparrow"
        model={{
          type: 'laptop',
          alt: 'Smart Sparrow lesson builder',
          textures: [
            {
              srcSet: `${sprTexture} 1280w, ${sprTextureLarge} 2560w`,
              placeholder: sprTexturePlaceholder,
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
        title="Burns Immobilier - Gestion Locative Côte-Nord"
        description="Plateforme complète de gestion immobilière pour la région de la Côte-Nord au Québec. Offrant des appartements variés à prix compétitifs, avec système de demande en ligne et support technique 24/7."
        buttonText="View project"
        buttonLink="/projects/burns-immobilier"
        model={{
          type: 'laptop',
          alt: 'Site web Burns Immobilier présentant la gestion locative au Québec',
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
      {/* <ProjectSummary
        id="project-8"
        sectionRef={projectEight}
        visible={visibleSections.includes(projectEight.current)}
        index={8}
        title="Biomedical image collaboration"
        description="Increasing the amount of collaboration in Slice, an app for biomedical imaging"
        buttonText="View project"
        buttonLink="/projects/slice"
        model={{
          type: 'laptop',
          alt: 'Annotating a biomedical image in the Slice app',
          textures: [
            {
              srcSet: `${sliceTexture} 800w, ${sliceTextureLarge} 1920w`,
              placeholder: sliceTexturePlaceholder,
            },
          ],
        }}
      /> */}
      <Profile
        sectionRef={details}
        visible={visibleSections.includes(details.current)}
        id="details"
      />
      <Footer />
    </div>
  );
};

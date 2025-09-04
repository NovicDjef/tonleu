import volkiharBackgroundLarge from '~/assets/volkihar-background-large.jpg';
import volkiharBackgroundPlaceholder from '~/assets/volkihar-background-placeholder.jpg';
import volkiharBackground from '~/assets/volkihar-background.jpg';
import volkiharBannerLarge from '~/assets/volkihar-banner-large.jpg';
import volkiharBannerPlaceholder from '~/assets/volkihar-banner-placeholder.jpg';
import volkiharBanner from '~/assets/volkihar-banner.jpg';
import volkiharBookLarge from '~/assets/volkihar-book-large.png';
import volkiharBookPlaceholder from '~/assets/volkihar-book-placeholder.png';
import volkiharBook from '~/assets/volkihar-book.png';
import volkiharEnderalLarge from '~/assets/volkihar-enderal-large.jpg';
import volkiharEnderalLogoLarge from '~/assets/volkihar-enderal-logo-large.png';
import volkiharEnderalLogoPlaceholder from '~/assets/volkihar-enderal-logo-placeholder.png';
import volkiharEnderalLogo from '~/assets/volkihar-enderal-logo.png';
import volkiharEnderalPlaceholder from '~/assets/volkihar-enderal-placeholder.jpg';
import volkiharEnderal from '~/assets/volkihar-enderal.jpg';
import volkiharSlide1Large from '~/assets/volkihar-slide-1-large.jpg';
import volkiharSlide1 from '~/assets/volkihar-slide-1.jpg';
import volkiharSlide2Large from '~/assets/volkihar-slide-2-large.jpg';
import volkiharSlide2 from '~/assets/volkihar-slide-2.jpg';
import volkiharSlide3Large from '~/assets/volkihar-slide-3-large.jpg';
import volkiharSlide3 from '~/assets/volkihar-slide-3.jpg';
import volkiharSlidePlaceholder from '~/assets/volkihar-slide-placeholder.jpg';
import { Button } from '~/components/button';
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
import { Fragment, Suspense, lazy } from 'react';
import { media } from '~/utils/style';
import { baseMeta } from '~/utils/meta';
import { VolkiharLogo } from './volkihar-logo';
import styles from './volkihar-knight.module.css';

const Carousel = lazy(() =>
  import('~/components/carousel').then(module => ({ default: module.Carousel }))
);

const Armor = lazy(() => import('./armor').then(module => ({ default: module.Armor })));

const title = 'MediTracker Pro';
const description =
  'A comprehensive medication management mobile application built with React Native. Features intelligent reminders, biometric authentication, and real-time health tracking for improved medication adherence.';
const roles = ['Mobile Development', 'UI/UX Design', 'Backend Integration'];

export const meta = () => {
  return baseMeta({ title, description, prefix: 'Projects' });
};

export function VolkiharKnight() {
  return (
    <Fragment>
      <style
        dangerouslySetInnerHTML={{
          __html: `
            [data-theme='dark'] {
              --primary: oklch(87.71% 0.084 85.29);
              --accent: oklch(87.71% 0.084 85.29);
            }
            [data-theme='light'] {
              --primary: oklch(52.25% 0.121 81.53);
              --accent: oklch(52.25% 0.121 81.53);
            }
          `,
        }}
      />
      <ProjectContainer>
        <ProjectBackground
          srcSet={`${volkiharBackground} 1280w, ${volkiharBackgroundLarge} 1920w`}
          width={1280}
          height={720}
          placeholder={volkiharBackgroundPlaceholder}
          opacity={0.5}
        />
        <ProjectHeader
          title={title}
          description={description}
          linkLabel="View Demo"
          url="https://github.com/novicDjef/meditracker-pro"
          roles={roles}
        />
        <ProjectSection>
          <ProjectSectionContent>
            <ProjectImage
              srcSet={`${volkiharBanner} 800w, ${volkiharBannerLarge} 1100w`}
              width={800}
              height={436}
              placeholder={volkiharBannerPlaceholder}
              alt="MediTracker Pro mobile app interface showing the main dashboard with medication schedules and health metrics."
              sizes={`(max-width: ${media.mobile}px) 500px, (max-width: ${media.tablet}px) 800px, 1000px`}
            />
          </ProjectSectionContent>
        </ProjectSection>
        <ProjectSection>
          <ProjectSectionContent>
            <Image
              srcSet={`${volkiharBook} 490w, ${volkiharBookLarge} 960w`}
              width={480}
              height={300}
              placeholder={volkiharBookPlaceholder}
              alt="Mobile app wireframes and user flow sketches showing the medication tracking interface design process"
              sizes={`(max-width: ${media.mobile}px) 90vw, (max-width: ${media.tablet}px) 80vw, 70vw`}
            />
          </ProjectSectionContent>
        </ProjectSection>
        <ProjectSection>
          <ProjectSectionColumns>
            <div className={styles.armor}>
              <Suspense>
                <Armor alt="3D visualization of the MediTracker Pro mobile app interface" />
              </Suspense>
            </div>
            <div className={styles.textSection}>
              <ProjectSectionHeading>Mobile App Architecture</ProjectSectionHeading>
              <ProjectSectionText>
                As someone who needed to manage multiple medications daily, I noticed the 
                lack of comprehensive medication tracking apps that combined smart reminders 
                with health monitoring. Most existing solutions were either too simple or 
                overly complicated for daily use.
              </ProjectSectionText>
              <ProjectSectionText>
                My solution was to develop MediTracker Pro using React Native, providing 
                cross-platform compatibility for both iOS and Android. The app features 
                biometric authentication for secure access, intelligent push notifications 
                for medication reminders, and a clean, intuitive interface designed with 
                accessibility in mind. The backend is built with Node.js and uses PostgreSQL 
                for data persistence, ensuring reliable medication tracking and health insights.
              </ProjectSectionText>
            </div>
          </ProjectSectionColumns>
        </ProjectSection>
        <ProjectSection>
          <ProjectSectionContent>
            <div className={styles.logoContainer}>
              <VolkiharLogo
                role="img"
                aria-label="The MediTracker Pro logo, featuring a medical cross integrated with a mobile device icon"
              />
            </div>
            <ProjectTextRow center noMargin>
              <ProjectSectionHeading>Brand & UI Design</ProjectSectionHeading>
              <ProjectSectionText>
                The MediTracker Pro logo combines a medical cross with modern mobile design
                elements, reflecting both healthcare trust and technological innovation. The
                app uses a clean, accessible color palette with high contrast ratios to
                ensure readability for users of all ages, and implements Material Design
                principles for intuitive navigation.
              </ProjectSectionText>
            </ProjectTextRow>
          </ProjectSectionContent>
        </ProjectSection>
        <ProjectSection>
          <ProjectSectionContent>
            <Suspense>
              <Carousel
                placeholder={volkiharSlidePlaceholder}
                images={[
                  {
                    srcSet: `${volkiharSlide1} 960w, ${volkiharSlide1Large} 1920w`,
                    sizes: `(max-width: ${media.mobile}px) 100vw, (max-width: ${media.tablet}px) 100vw, 1096px`,
                    alt: 'MediTracker Pro main dashboard showing daily medication schedule and health metrics.',
                  },
                  {
                    srcSet: `${volkiharSlide2} 960w, ${volkiharSlide2Large} 1920w`,
                    sizes: `(max-width: ${media.mobile}px) 100vw, (max-width: ${media.tablet}px) 100vw, 1096px`,
                    alt: 'Medication reminder notification interface with biometric authentication prompt.',
                  },
                  {
                    srcSet: `${volkiharSlide3} 960w, ${volkiharSlide3Large} 1920w`,
                    sizes: `(max-width: ${media.mobile}px) 100vw, (max-width: ${media.tablet}px) 100vw, 1096px`,
                    alt: 'Health insights dashboard displaying medication adherence statistics and trends.',
                  },
                ]}
                width={1920}
                height={1080}
              />
            </Suspense>
          </ProjectSectionContent>
        </ProjectSection>
        <ProjectSection
          backgroundElement={
            <Image
              srcSet={`${volkiharEnderal} 1280w, ${volkiharEnderalLarge} 1920w`}
              width={1280}
              height={720}
              placeholder={volkiharEnderalPlaceholder}
              alt="Healthcare professionals using MediTracker Pro in a clinical setting to monitor patient medication adherence."
              sizes={`100vw`}
            />
          }
        >
          <ProjectSectionContent>
            <ProjectTextRow center centerMobile noMargin>
              <Image
                srcSet={`${volkiharEnderalLogo} 180w, ${volkiharEnderalLogoLarge} 360w`}
                width={180}
                height={200}
                placeholder={volkiharEnderalLogoPlaceholder}
              alt="Healthcare Innovation Award logo recognizing MediTracker Pro's contribution to patient care"
                sizes={`(max-width: ${media.mobile}px) 100vw, (max-width: ${media.tablet}px) 100vw, 220px`}
                style={{ maxWidth: 220, width: '100%', marginBottom: 30 }}
              />
              <ProjectSectionHeading>Healthcare Innovation Award</ProjectSectionHeading>
              <ProjectSectionText>
                I was thrilled to receive recognition for MediTracker Pro at the 2024
                Healthcare Technology Innovation Awards. The app has been adopted by
                several healthcare clinics to help patients better manage their medication
                schedules, resulting in improved medication adherence rates and better
                health outcomes for over 10,000 users.
              </ProjectSectionText>
              <Button
                secondary
                iconHoverShift
                icon="chevron-right"
                href="https://github.com/novicDjef/meditracker-pro"
              >
                View on GitHub
              </Button>
            </ProjectTextRow>
          </ProjectSectionContent>
        </ProjectSection>
      </ProjectContainer>
      <Footer />
    </Fragment>
  );
}

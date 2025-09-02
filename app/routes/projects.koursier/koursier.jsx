import gamestackTexture2Large from '~/assets/gamestack-list-large.jpg';
import gamestackTexture2Placeholder from '~/assets/gamestack-list-placeholder.jpg';
import gamestackTexture2 from '~/assets/gamestack-list.jpg';
import gamestackTextureLarge from '~/assets/gamestack-login-large.jpg';
import gamestackTexturePlaceholder from '~/assets/gamestack-login-placeholder.jpg';
import gamestackTexture from '~/assets/gamestack-login.jpg';
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
import styles from './koursier.module.css';

const title = 'Multi-Service Delivery Platform';
const description =
  'A comprehensive mobile delivery platform enabling real-time tracking, multi-category ordering, and seamless user experience for gas, packages, and food delivery services.';
const roles = [
  'React Native Development',
  'Real-time Tracking System',
  'UX/UI Design',
  'Payment Integration',
  'Location Services'
];

export const meta = () => {
  return baseMeta({ title, description, prefix: 'Projects' });
};

export const Koursier = () => {
  return (
    <Fragment>
      <ProjectContainer className={styles.koursier}>
        <ProjectBackground
          src={gamestackTexture}
          srcSet={`${gamestackTexture} 1280w, ${gamestackTextureLarge} 2560w`}
          width={1280}
          height={800}
          placeholder={gamestackTexturePlaceholder}
          opacity={0.8}
        />
        <ProjectHeader
          title={title}
          description={description}
          url="https://play.google.com/store/apps/details?id=com.novic.koursier"
          roles={roles}
        />
        <ProjectSection padding="top">
          <ProjectSectionContent>
            <ProjectImage
              raised
              srcSet={`${gamestackTexture} 1280w, ${gamestackTextureLarge} 2560w`}
              width={1280}
              height={800}
              placeholder={gamestackTexturePlaceholder}
              alt="Koursier mobile app showing the main delivery interface with real-time tracking."
              sizes={`(max-width: ${media.mobile}px) 100vw, (max-width: ${media.tablet}px) 800px, 1000px`}
            />
          </ProjectSectionContent>
        </ProjectSection>
        <ProjectSection>
          <ProjectTextRow>
            <ProjectSectionHeading>The challenge</ProjectSectionHeading>
            <ProjectSectionText>
              Traditional delivery services operate in isolated silos, forcing customers to use 
              multiple apps for different needs. Users struggled with inconsistent interfaces, 
              unreliable tracking, and limited service options. The challenge was to create a 
              unified platform that could handle diverse delivery types while maintaining 
              service quality and user experience consistency.
            </ProjectSectionText>
          </ProjectTextRow>
        </ProjectSection>
        <ProjectSection light>
          <ProjectSectionContent>
            <Image
              srcSet={`${gamestackTexture2} 1024w, ${gamestackTexture2Large} 2048w`}
              width={1024}
              height={800}
              placeholder={gamestackTexture2Placeholder}
              alt="Multi-service delivery interface showing gas, package, and food ordering options"
              sizes="100vw"
            />
            <ProjectTextRow>
              <ProjectSectionHeading>Unified service ecosystem</ProjectSectionHeading>
              <ProjectSectionText>
                The platform integrates three core delivery services: gas cylinder delivery 
                with emergency availability, package shipping with same-day express options, 
                and food delivery from partnered restaurants. Each service maintains its 
                specific requirements while sharing common features like real-time tracking, 
                secure payments, and customer communication systems.
              </ProjectSectionText>
            </ProjectTextRow>
          </ProjectSectionContent>
        </ProjectSection>
        <ProjectSection>
          <ProjectSectionContent>
            <ProjectImage
              raised
              srcSet={`${gamestackTexture} 1280w, ${gamestackTextureLarge} 2560w`}
              width={1280}
              height={800}
              placeholder={gamestackTexturePlaceholder}
              alt="Real-time tracking interface showing delivery progress and driver location"
              sizes="100vw"
            />
            <ProjectTextRow>
              <ProjectSectionHeading>Real-time tracking system</ProjectSectionHeading>
              <ProjectSectionText>
                Built with WebSocket technology for instant updates, the tracking system provides 
                live GPS coordinates, estimated arrival times, and delivery status notifications. 
                Users can communicate directly with drivers through an integrated chat system 
                while maintaining privacy and security protocols.
              </ProjectSectionText>
            </ProjectTextRow>
          </ProjectSectionContent>
        </ProjectSection>
        <ProjectSection>
          <ProjectSectionColumns>
            <ProjectSectionContent>
              <ProjectTextRow>
                <ProjectSectionHeading>
                  Scalable delivery network architecture
                </ProjectSectionHeading>
                <ProjectSectionText>
                  The platform leverages a microservices architecture to handle different delivery 
                  types independently while sharing core functionalities. Driver verification 
                  systems, automated routing algorithms, and integrated payment processing ensure 
                  reliable service delivery across all categories.
                </ProjectSectionText>
              </ProjectTextRow>
            </ProjectSectionContent>
            <div className={styles.sidebarImages}>
              <Image
                className={styles.sidebarImage}
                srcSet={`${gamestackTexture2} 260w, ${gamestackTexture2Large} 520w`}
                width={260}
                height={660}
                placeholder={gamestackTexture2Placeholder}
                alt="Driver verification and management interface"
                sizes={`(max-width: ${media.mobile}px) 50vw, 25vw`}
              />
              <Image
                className={styles.sidebarImage}
                srcSet={`${gamestackTexture} 260w, ${gamestackTextureLarge} 520w`}
                width={260}
                height={660}
                placeholder={gamestackTexturePlaceholder}
                alt="Payment processing and security features"
                sizes={`(max-width: ${media.mobile}px) 50vw, 25vw`}
              />
            </div>
          </ProjectSectionColumns>
        </ProjectSection>
        <ProjectSection light>
          <ProjectSectionContent>
            <ProjectTextRow>
              <ProjectSectionHeading>Performance optimization</ProjectSectionHeading>
              <ProjectSectionText>
                The application was built with performance as a priority, implementing efficient 
                state management with Redux, lazy loading for optimal bundle sizes, and offline 
                capabilities for core features. The result is a responsive application that 
                maintains functionality even with poor network connectivity.
              </ProjectSectionText>
            </ProjectTextRow>
            <Image
              raised
              src={gamestackTexture2}
              width={940}
              height={500}
              placeholder={gamestackTexture2Placeholder}
              alt="Performance metrics and application optimization dashboard"
            />
          </ProjectSectionContent>
        </ProjectSection>
        <ProjectSection>
          <ProjectSectionContent>
            <ProjectTextRow center centerMobile noMargin>
              <ProjectSectionHeading>Project outcomes</ProjectSectionHeading>
              <ProjectSectionText>
                The multi-service delivery platform successfully unified three distinct delivery 
                categories into a single, cohesive user experience. With real-time tracking, 
                secure payments, and reliable service delivery, the platform demonstrates how 
                technology can streamline complex logistics while maintaining service quality 
                and customer satisfaction.
              </ProjectSectionText>
            </ProjectTextRow>
          </ProjectSectionContent>
        </ProjectSection>
      </ProjectContainer>
      <Footer />
    </Fragment>
  );
};
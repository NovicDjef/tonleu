import raphycarHome from '~/assets/raphy/home.png';
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
import styles from './raphycar.module.css';

const title = 'RaphyCar - AI-Powered Vehicle Rental Mobile App';
const description =
  'A comprehensive car rental mobile application designed for the Cameroonian market, featuring intelligent filtering, AI-powered chatbot customer support, and complete administrative management for vehicle fleet operations.';
const roles = [
  'React Native Development',
  'AI Chatbot Integration',
  'Mobile UI/UX Design',
  'Advanced Filtering System',
  'Cameroonian Market Localization'
];

export const meta = () => {
  return baseMeta({ title, description, prefix: 'Projects' });
};

export const Raphycar = () => {
  return (
    <Fragment>
      <ProjectContainer className={styles.raphycar}>
        <ProjectBackground
          src={raphycarHome}
          srcSet={`${raphycarHome} 1280w, ${raphycarHome} 2560w`}
          width={1280}
          height={800}
          placeholder={raphycarHome}
          opacity={0.8}
        />
        <ProjectHeader
          title={title}
          description={description}
          url="https://raphycar.com"
          roles={roles}
        />
        <ProjectSection padding="top">
          <ProjectSectionContent>
            <ProjectImage
              raised
              srcSet={`${raphycarHome} 375w, ${raphycarHome} 750w`}
              width={375}
              height={812}
              placeholder={raphycarHome}
              alt="RaphyCar mobile app showing the main vehicle rental interface."
              sizes={`(max-width: ${media.mobile}px) 100vw, (max-width: ${media.tablet}px) 800px, 1000px`}
            />
          </ProjectSectionContent>
        </ProjectSection>
        <ProjectSection>
          <ProjectTextRow>
            <ProjectSectionHeading>The challenge</ProjectSectionHeading>
            <ProjectSectionText>
              The Cameroonian car rental market lacked a modern, comprehensive mobile solution that could 
              address local needs while providing international-standard features. Traditional rental 
              services struggled with inefficient booking processes, limited vehicle variety, and 
              poor customer communication. The challenge was to create a localized mobile application 
              that combines advanced technology with deep understanding of the local market dynamics.
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
              alt="Advanced vehicle filtering system with location and specification options"
              sizes="100vw"
            />
            <ProjectTextRow>
              <ProjectSectionHeading>Intelligent filtering system</ProjectSectionHeading>
              <ProjectSectionText>
                The mobile application features sophisticated filtering capabilities allowing users to search 
                vehicles by location, price range, vehicle type, transmission, fuel efficiency, and 
                availability periods. The system is optimized for Cameroonian geography, supporting 
                major cities like Yaoundé, Douala, and regional centers with location-based availability 
                and pricing adjustments.
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
              alt="AI-powered chatbot interface providing customer support"
              sizes="100vw"
            />
            <ProjectTextRow>
              <ProjectSectionHeading>AI-powered customer support</ProjectSectionHeading>
              <ProjectSectionText>
                An intelligent chatbot system provides 24/7 customer support in French and English, 
                handling common inquiries about vehicle availability, rental procedures, pricing, 
                and local regulations. The AI is trained on Cameroonian driving laws, insurance 
                requirements, and cultural preferences to provide contextually relevant assistance.
              </ProjectSectionText>
            </ProjectTextRow>
          </ProjectSectionContent>
        </ProjectSection>
        <ProjectSection>
          <ProjectSectionColumns>
            <ProjectSectionContent>
              <ProjectTextRow>
                <ProjectSectionHeading>
                  Comprehensive administrative management
                </ProjectSectionHeading>
                <ProjectSectionText>
                  The admin dashboard provides complete fleet management capabilities including vehicle 
                  registration, maintenance tracking, booking management, customer profiles, and 
                  financial reporting. Administrators can manage multiple locations, set dynamic pricing 
                  based on demand, and monitor vehicle utilization across the Cameroonian market.
                </ProjectSectionText>
              </ProjectTextRow>
            </ProjectSectionContent>
            <div className={styles.sidebarImages}>
              <Image
                className={styles.sidebarImage}
                srcSet={`${gamestackTexture2} 260w, ${gamestackTexture2Large} 520w`}
                width={260}
                height={416}
                placeholder={gamestackTexture2Placeholder}
                alt="Admin dashboard for vehicle fleet management"
                sizes={`(max-width: ${media.mobile}px) 50vw, 25vw`}
              />
              <Image
                className={styles.sidebarImage}
                srcSet={`${gamestackTexture} 260w, ${gamestackTextureLarge} 520w`}
                width={260}
                height={416}
                placeholder={gamestackTexturePlaceholder}
                alt="Customer management and booking system"
                sizes={`(max-width: ${media.mobile}px) 50vw, 25vw`}
              />
            </div>
          </ProjectSectionColumns>
        </ProjectSection>
        <ProjectSection light>
          <ProjectSectionContent>
            <ProjectTextRow>
              <ProjectSectionHeading>Localized user experience</ProjectSectionHeading>
              <ProjectSectionText>
                The platform is specifically designed for the Cameroonian context, supporting CFA franc 
                pricing, local payment methods, and integration with mobile money services. The interface 
                accommodates both urban and rural users with varying internet connectivity, featuring 
                progressive web app capabilities and offline functionality for essential features.
              </ProjectSectionText>
            </ProjectTextRow>
            <Image
              raised
              srcSet={`${raphycarHome} 800w, ${raphycarHome} 1920w`}
              width={800}
              height={500}
              placeholder={raphycarHome}
              alt="Localized interface showing CFA pricing and mobile payment options"
            />
          </ProjectSectionContent>
        </ProjectSection>
        <ProjectSection>
          <ProjectSectionContent>
            <ProjectTextRow center centerMobile noMargin>
              <ProjectSectionHeading>Project outcomes</ProjectSectionHeading>
              <ProjectSectionText>
                RaphyCar successfully addresses the unique challenges of the Cameroonian car rental 
                market through intelligent technology and deep local understanding. The platform combines 
                advanced filtering, AI-powered support, and comprehensive fleet management to create 
                a modern rental experience that serves both customers and business operators effectively 
                in the Central African context.
              </ProjectSectionText>
            </ProjectTextRow>
          </ProjectSectionContent>
        </ProjectSection>
      </ProjectContainer>
      <Footer />
    </Fragment>
  );
};
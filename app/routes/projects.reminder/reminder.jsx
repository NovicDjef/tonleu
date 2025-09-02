import reminder1 from '~/assets/reminder1.png';
import reminder2 from '~/assets/reminder2.png';
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
import styles from './reminder.module.css';

const title = 'Smart Medication Management System';
const description =
  'A comprehensive mobile application designed to help users manage their medication schedules with intelligent reminders, tracking capabilities, and detailed intake history for improved healthcare compliance.';
const roles = [
  'React Native Development',
  'Push Notification System',
  'UX/UI Design',
  'Health Data Management',
  'Cross-platform Development'
];

export const meta = () => {
  return baseMeta({ title, description, prefix: 'Projects' });
};

export const Reminder = () => {
  return (
    <Fragment>
      <ProjectContainer className={styles.reminder}>
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
          url="https://play.google.com/store/apps/details?id=com.novic.reminder"
          roles={roles}
        />
        <ProjectSection padding="top">
          <ProjectSectionContent>
            <ProjectImage
              raised
              srcSet={`${reminder1} 375w, ${reminder2} 750w`}
              width={375}
              height={600}
              placeholder={gamestackTexturePlaceholder}
              alt="Reminder mobile app showing medication scheduling interface."
              sizes={`(max-width: ${media.mobile}px) 100vw, (max-width: ${media.tablet}px) 800px, 1000px`}
            />
          </ProjectSectionContent>
        </ProjectSection>
        <ProjectSection>
          <ProjectTextRow>
            <ProjectSectionHeading>The challenge</ProjectSectionHeading>
            <ProjectSectionText>
              Medication non-adherence is a critical healthcare issue affecting millions globally, 
              leading to treatment failures and increased healthcare costs. Patients struggle with 
              complex medication schedules, forget doses, and lack proper tracking systems. The 
              challenge was to create an intuitive solution that would improve medication compliance 
              through smart reminders and comprehensive tracking.
            </ProjectSectionText>
          </ProjectTextRow>
        </ProjectSection>
        <ProjectSection light>
          <ProjectSectionContent>
            <Image
              srcSet={`${reminder2} 375w, ${reminder1} 750w`}
              width={375}
              height={600}
              placeholder={gamestackTexture2Placeholder}
              alt="Medication tracking and history interface showing intake patterns"
              sizes="100vw"
            />
            <ProjectTextRow>
              <ProjectSectionHeading>Intelligent scheduling system</ProjectSectionHeading>
              <ProjectSectionText>
                The application features a sophisticated scheduling engine that allows users to set 
                up complex medication routines with custom frequencies, dosages, and duration periods. 
                The system accommodates various medication types from daily vitamins to complex 
                prescription regimens, ensuring flexibility for diverse healthcare needs.
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
              alt="Push notification system and reminder interface"
              sizes="100vw"
            />
            <ProjectTextRow>
              <ProjectSectionHeading>Smart notification engine</ProjectSectionHeading>
              <ProjectSectionText>
                Built with native push notification capabilities, the system delivers timely 
                medication reminders across Android platforms. The notification system includes 
                smart scheduling to avoid disrupting sleep patterns, customizable alert tones, 
                and persistent reminders until medication intake is confirmed.
              </ProjectSectionText>
            </ProjectTextRow>
          </ProjectSectionContent>
        </ProjectSection>
        <ProjectSection>
          <ProjectSectionColumns>
            <ProjectSectionContent>
              <ProjectTextRow>
                <ProjectSectionHeading>
                  Comprehensive tracking and analytics
                </ProjectSectionHeading>
                <ProjectSectionText>
                  The application maintains detailed intake history with visual analytics to help 
                  users and healthcare providers understand medication adherence patterns. Users 
                  can track missed doses, identify patterns, and generate reports for medical 
                  consultations, promoting better health outcomes through data-driven insights.
                </ProjectSectionText>
              </ProjectTextRow>
            </ProjectSectionContent>
            <div className={styles.sidebarImages}>
              <Image
                className={styles.sidebarImage}
                srcSet={`${reminder1} 260w, ${reminder2} 520w`}
                width={260}
                height={416}
                placeholder={gamestackTexture2Placeholder}
                alt="Medication history and tracking interface"
                sizes={`(max-width: ${media.mobile}px) 50vw, 25vw`}
              />
              <Image
                className={styles.sidebarImage}
                srcSet={`${reminder2} 260w, ${reminder1} 520w`}
                width={260}
                height={416}
                placeholder={gamestackTexturePlaceholder}
                alt="Analytics and reporting dashboard"
                sizes={`(max-width: ${media.mobile}px) 50vw, 25vw`}
              />
            </div>
          </ProjectSectionColumns>
        </ProjectSection>
        <ProjectSection light>
          <ProjectSectionContent>
            <ProjectTextRow>
              <ProjectSectionHeading>User experience optimization</ProjectSectionHeading>
              <ProjectSectionText>
                The interface was designed with accessibility in mind, featuring large touch targets, 
                clear typography, and intuitive navigation suitable for users of all ages. The 
                application supports multiple languages and includes visual cues to help users 
                quickly identify different medications and confirm intake actions.
              </ProjectSectionText>
            </ProjectTextRow>
            <Image
              raised
              srcSet={`${gamestackTexture2} 800w, ${gamestackTexture2Large} 1920w`}
              width={800}
              height={500}
              placeholder={gamestackTexture2Placeholder}
              alt="User interface showing accessibility features and intuitive design"
            />
          </ProjectSectionContent>
        </ProjectSection>
        <ProjectSection>
          <ProjectSectionContent>
            <ProjectTextRow center centerMobile noMargin>
              <ProjectSectionHeading>Project outcomes</ProjectSectionHeading>
              <ProjectSectionText>
                The Smart Medication Management System successfully addresses medication adherence 
                challenges through intelligent scheduling, reliable notifications, and comprehensive 
                tracking. Available on Google Play Store, the application demonstrates how thoughtful 
                mobile design can significantly impact healthcare outcomes and improve patient quality 
                of life through consistent medication compliance.
              </ProjectSectionText>
            </ProjectTextRow>
          </ProjectSectionContent>
        </ProjectSection>
      </ProjectContainer>
      <Footer />
    </Fragment>
  );
};
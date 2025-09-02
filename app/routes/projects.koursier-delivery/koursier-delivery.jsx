import deliveryLogo from '~/assets/Delivery/Koursier Delivery.png';
import deliveryHome from '~/assets/Delivery/home.png';
import deliveryWallet from '~/assets/Delivery/wallet.png';
import deliveryHome2 from '~/assets/Delivery/home2.png';
import deliveryScreen5 from '~/assets/Delivery/Simulator Screenshot - iPhone 15 - 2025-08-05 at 01.31.50.png';
import deliveryScreen6 from '~/assets/Delivery/Simulator Screenshot - iPhone 15 - 2025-08-05 at 01.33.17.png';
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
import styles from './koursier-delivery.module.css';

const title = 'Koursier Delivery Management System';
const description =
  'A comprehensive delivery driver application for managing orders, real-time tracking, and seamless coordination with the main Koursier platform to ensure efficient delivery operations.';
const roles = [
  'React Native Development',
  'Real-time Order Management',
  'GPS Tracking Integration',
  'Driver Interface Design',
  'Cross-platform Development'
];

export const meta = () => {
  return baseMeta({ title, description, prefix: 'Projects' });
};

export const KoursierDelivery = () => {
  return (
    <Fragment>
      <ProjectContainer className={styles.koursierDelivery}>
        <ProjectBackground
          src={deliveryLogo}
          srcSet={`${deliveryLogo} 1280w, ${deliveryLogo} 2560w`}
          width={1280}
          height={800}
          placeholder={deliveryLogo}
          opacity={0.8}
        />
        <ProjectHeader
          title={title}
          description={description}
          url="https://play.google.com/store/apps/details?id=com.Lkoursier.app"
          roles={roles}
        />
        <ProjectSection padding="top">
          <ProjectSectionContent>
            <ProjectImage
              raised
              srcSet={`${deliveryHome} 375w, ${deliveryWallet} 750w`}
              width={375}
              height={812}
              placeholder={deliveryHome}
              alt="Koursier Delivery app showing order management interface."
              sizes={`(max-width: ${media.mobile}px) 100vw, (max-width: ${media.tablet}px) 800px, 1000px`}
            />
          </ProjectSectionContent>
        </ProjectSection>
        <ProjectSection>
          <ProjectTextRow>
            <ProjectSectionHeading>The challenge</ProjectSectionHeading>
            <ProjectSectionText>
              Delivery drivers need efficient tools to manage incoming orders, navigate optimally, 
              and communicate with customers seamlessly. Traditional delivery systems often lack 
              real-time coordination and intuitive interfaces, leading to delayed deliveries and 
              poor customer experience. The challenge was to create a driver-focused application 
              that streamlines the entire delivery workflow.
            </ProjectSectionText>
          </ProjectTextRow>
        </ProjectSection>
        <ProjectSection light>
          <ProjectSectionContent>
            <Image
              srcSet={`${deliveryWallet} 375w, ${deliveryHome2} 750w`}
              width={375}
              height={812}
              placeholder={deliveryWallet}
              alt="Real-time order tracking and navigation interface"
              sizes="100vw"
            />
            <ProjectTextRow>
              <ProjectSectionHeading>Real-time order management</ProjectSectionHeading>
              <ProjectSectionText>
                The application features a dynamic order dashboard that displays incoming deliveries 
                with detailed customer information, delivery addresses, and special instructions. 
                Drivers can accept, manage, and track multiple orders simultaneously while receiving 
                real-time updates from the main Koursier platform.
              </ProjectSectionText>
            </ProjectTextRow>
          </ProjectSectionContent>
        </ProjectSection>
        <ProjectSection>
          <ProjectSectionContent>
            <ProjectImage
              raised
              srcSet={`${deliveryHome} 1280w, ${deliveryWallet} 2560w`}
              width={1280}
              height={800}
              placeholder={deliveryHome}
              alt="GPS navigation and route optimization features"
              sizes="100vw"
            />
            <ProjectTextRow>
              <ProjectSectionHeading>Smart navigation system</ProjectSectionHeading>
              <ProjectSectionText>
                Integrated GPS navigation provides turn-by-turn directions with route optimization 
                algorithms to minimize delivery time. The system accounts for traffic conditions, 
                delivery priorities, and driver location to suggest the most efficient routes 
                for multiple deliveries.
              </ProjectSectionText>
            </ProjectTextRow>
          </ProjectSectionContent>
        </ProjectSection>
        <ProjectSection>
          <ProjectSectionColumns>
            <ProjectSectionContent>
              <ProjectTextRow>
                <ProjectSectionHeading>
                  Seamless customer communication
                </ProjectSectionHeading>
                <ProjectSectionText>
                  The application enables direct communication between drivers and customers through 
                  integrated chat and calling features. Drivers can update delivery status, send 
                  arrival notifications, and handle special delivery instructions while maintaining 
                  professional service standards.
                </ProjectSectionText>
              </ProjectTextRow>
            </ProjectSectionContent>
            <div className={styles.sidebarImages}>
              <Image
                className={styles.sidebarImage}
                srcSet={`${deliveryHome} 260w, ${deliveryWallet} 520w`}
                width={260}
                height={563}
                placeholder={deliveryHome}
                alt="Customer communication interface"
                sizes={`(max-width: ${media.mobile}px) 50vw, 25vw`}
              />
              <Image
                className={styles.sidebarImage}
                srcSet={`${deliveryWallet} 260w, ${deliveryHome2} 520w`}
                width={260}
                height={563}
                placeholder={deliveryWallet}
                alt="Delivery status management"
                sizes={`(max-width: ${media.mobile}px) 50vw, 25vw`}
              />
            </div>
          </ProjectSectionColumns>
        </ProjectSection>
        <ProjectSection light>
          <ProjectSectionContent>
            <ProjectTextRow>
              <ProjectSectionHeading>Performance analytics</ProjectSectionHeading>
              <ProjectSectionText>
                Drivers can access comprehensive analytics including delivery statistics, earnings 
                tracking, customer ratings, and performance metrics. This data-driven approach 
                helps drivers optimize their service quality and maximize their earnings through 
                the platform.
              </ProjectSectionText>
            </ProjectTextRow>
            <Image
              raised
              srcSet={`${deliveryWallet} 800w, ${deliveryHome} 1920w`}
              width={800}
              height={500}
              placeholder={deliveryWallet}
              alt="Driver analytics and performance dashboard"
            />
          </ProjectSectionContent>
        </ProjectSection>
        <ProjectSection>
          <ProjectSectionContent>
            <ProjectTextRow center centerMobile noMargin>
              <ProjectSectionHeading>Project outcomes</ProjectSectionHeading>
              <ProjectSectionText>
                The Koursier Delivery Management System successfully streamlines the delivery 
                process through intelligent order management, real-time tracking, and seamless 
                customer communication. The application empowers drivers with professional tools 
                while ensuring efficient coordination with the main Koursier platform for 
                optimal delivery operations.
              </ProjectSectionText>
            </ProjectTextRow>
          </ProjectSectionContent>
        </ProjectSection>
      </ProjectContainer>
      <Footer />
    </Fragment>
  );
};
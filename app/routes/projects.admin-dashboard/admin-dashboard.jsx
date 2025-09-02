import dashboardHome from '~/assets/dashb/homeresto.jpg';
import dashboardUI from '~/assets/dashb/ui-design-dialin-contracts-manager.png';
import dashboardWebp from '~/assets/dashb/homeres.webp';
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
import styles from './admin-dashboard.module.css';

const title = 'Comprehensive Admin Dashboard System';
const description =
  'A powerful administrative dashboard designed for managing delivery operations, driver coordination, revenue tracking, and comprehensive business analytics for multi-service delivery platforms.';
const roles = [
  'Full-Stack Dashboard Development',
  'Data Analytics & Visualization',
  'Revenue Management System',
  'Driver & Order Management',
  'Real-time Monitoring Tools'
];

export const meta = () => {
  return baseMeta({ title, description, prefix: 'Projects' });
};

export const AdminDashboard = () => {
  return (
    <Fragment>
      <ProjectContainer className={styles.adminDashboard}>
        <ProjectBackground
          src={dashboardHome}
          srcSet={`${dashboardHome} 1280w, ${dashboardHome} 2560w`}
          width={1280}
          height={800}
          placeholder={dashboardHome}
          opacity={0.8}
        />
        <ProjectHeader
          title={title}
          description={description}
          url="https://admin.koursier.com"
          roles={roles}
        />
        <ProjectSection padding="top">
          <ProjectSectionContent>
            <ProjectImage
              raised
              srcSet={`${dashboardHome} 1280w, ${dashboardHome} 2560w`}
              width={1280}
              height={800}
              placeholder={dashboardHome}
              alt="Admin dashboard showing comprehensive management interface."
              sizes={`(max-width: ${media.mobile}px) 100vw, (max-width: ${media.tablet}px) 800px, 1000px`}
            />
          </ProjectSectionContent>
        </ProjectSection>
        <ProjectSection>
          <ProjectTextRow>
            <ProjectSectionHeading>The challenge</ProjectSectionHeading>
            <ProjectSectionText>
              Managing multi-service delivery operations requires comprehensive oversight of drivers, 
              orders, customers, and financial data across multiple platforms. Traditional admin tools 
              lack real-time visibility, integrated analytics, and streamlined management workflows. 
              The challenge was to create a centralized dashboard that provides complete operational 
              control while maintaining intuitive usability for administrators.
            </ProjectSectionText>
          </ProjectTextRow>
        </ProjectSection>
        <ProjectSection light>
          <ProjectSectionContent>
            <Image
              srcSet={`${dashboardUI} 1024w, ${dashboardUI} 2048w`}
              width={1024}
              height={800}
              placeholder={dashboardUI}
              alt="Order management interface showing real-time delivery tracking"
              sizes="100vw"
            />
            <ProjectTextRow>
              <ProjectSectionHeading>Real-time order management</ProjectSectionHeading>
              <ProjectSectionText>
                The dashboard provides comprehensive order oversight with real-time tracking of all 
                deliveries across gas, package, and food services. Administrators can monitor order 
                status, assign drivers, handle customer inquiries, and manage delivery routes from 
                a unified interface with live updates and automated notifications.
              </ProjectSectionText>
            </ProjectTextRow>
          </ProjectSectionContent>
        </ProjectSection>
        <ProjectSection>
          <ProjectSectionContent>
            <ProjectImage
              raised
              srcSet={`${dashboardWebp} 1280w, ${dashboardHome} 2560w`}
              width={1280}
              height={800}
              placeholder={dashboardWebp}
              alt="Driver management system with performance analytics"
              sizes="100vw"
            />
            <ProjectTextRow>
              <ProjectSectionHeading>Driver coordination system</ProjectSectionHeading>
              <ProjectSectionText>
                Advanced driver management features include real-time location tracking, performance 
                analytics, shift scheduling, and earnings management. The system handles driver 
                verification, rating systems, and automated dispatch algorithms to optimize delivery 
                efficiency and maintain service quality standards.
              </ProjectSectionText>
            </ProjectTextRow>
          </ProjectSectionContent>
        </ProjectSection>
        <ProjectSection>
          <ProjectSectionColumns>
            <ProjectSectionContent>
              <ProjectTextRow>
                <ProjectSectionHeading>
                  Revenue analytics and financial management
                </ProjectSectionHeading>
                <ProjectSectionText>
                  Comprehensive financial dashboard featuring revenue tracking, commission management, 
                  payment processing oversight, and detailed financial reporting. The system provides 
                  insights into delivery trends, peak hours, driver earnings, and platform profitability 
                  with customizable reports and export capabilities.
                </ProjectSectionText>
              </ProjectTextRow>
            </ProjectSectionContent>
            <div className={styles.sidebarImages}>
              <Image
                className={styles.sidebarImage}
                srcSet={`${dashboardHome} 260w, ${dashboardUI} 520w`}
                width={260}
                height={416}
                placeholder={dashboardHome}
                alt="Revenue analytics dashboard"
                sizes={`(max-width: ${media.mobile}px) 50vw, 25vw`}
              />
              <Image
                className={styles.sidebarImage}
                srcSet={`${dashboardUI} 260w, ${dashboardWebp} 520w`}
                width={260}
                height={416}
                placeholder={dashboardUI}
                alt="Financial management interface"
                sizes={`(max-width: ${media.mobile}px) 50vw, 25vw`}
              />
            </div>
          </ProjectSectionColumns>
        </ProjectSection>
        <ProjectSection light>
          <ProjectSectionContent>
            <ProjectTextRow>
              <ProjectSectionHeading>Advanced monitoring and control</ProjectSectionHeading>
              <ProjectSectionText>
                The platform includes sophisticated monitoring tools for system health, user activity, 
                and operational metrics. Features include automated alerts for critical issues, 
                customer support integration, promotional campaign management, and comprehensive 
                audit trails for regulatory compliance and business intelligence.
              </ProjectSectionText>
            </ProjectTextRow>
            <Image
              raised
              srcSet={`${dashboardUI} 800w, ${dashboardHome} 1920w`}
              width={800}
              height={500}
              placeholder={dashboardUI}
              alt="Advanced monitoring and control center interface"
            />
          </ProjectSectionContent>
        </ProjectSection>
        <ProjectSection>
          <ProjectSectionContent>
            <ProjectTextRow center centerMobile noMargin>
              <ProjectSectionHeading>Project outcomes</ProjectSectionHeading>
              <ProjectSectionText>
                The Comprehensive Admin Dashboard System successfully centralizes all operational 
                aspects of multi-service delivery platforms. With real-time monitoring, advanced 
                analytics, and streamlined management workflows, the dashboard empowers administrators 
                to efficiently oversee complex delivery operations while maintaining service quality 
                and business profitability.
              </ProjectSectionText>
            </ProjectTextRow>
          </ProjectSectionContent>
        </ProjectSection>
      </ProjectContainer>
      <Footer />
    </Fragment>
  );
};
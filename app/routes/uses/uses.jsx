import usesBackgroundPlaceholder from '~/assets/uses-background-placeholder.jpg';
import usesBackground from '~/assets/uses-background.mp4';
import { Footer } from '~/components/footer';
import { Link } from '~/components/link';
import { List, ListItem } from '~/components/list';
import { Table, TableBody, TableCell, TableHeadCell, TableRow } from '~/components/table';
import {
  ProjectBackground,
  ProjectContainer,
  ProjectHeader,
  ProjectSection,
  ProjectSectionContent,
  ProjectSectionHeading,
  ProjectSectionText,
  ProjectTextRow,
} from '~/layouts/project';
import { baseMeta } from '~/utils/meta';
import styles from './uses.module.css';

export const meta = () => {
  return baseMeta({
    title: 'Uses',
    description: 'A list of hardware and software I use to do my thing',
  });
};

export const Uses = () => {
  return (
    <>
      <ProjectContainer className={styles.uses}>
        <ProjectBackground
          src={usesBackground}
          placeholder={usesBackgroundPlaceholder}
          opacity={0.7}
        />
        <ProjectHeader
          title="Uses"
          description="A comprehensive list of tools, apps, hardware, and technologies I use daily for fullstack mobile and web development. From React Native to Node.js and everything in between."
        />
        <ProjectSection padding="none" className={styles.section}>
          <ProjectSectionContent>
            <ProjectTextRow width="m">
              <ProjectSectionHeading>Design & UI/UX</ProjectSectionHeading>
              <ProjectSectionText as="div">
                <List>
                  <ListItem>
                    <Link href="https://www.figma.com">Figma</Link> is my go-to tool for
                    designing mobile app interfaces and web layouts. Perfect for creating
                    responsive designs and prototypes that work across all devices.
                  </ListItem>
                  <ListItem>
                    <Link href="https://www.adobe.com/products/photoshop.html">Adobe Photoshop</Link> for
                    image editing and creating custom graphics for mobile apps and web projects.
                    Essential for app store assets and marketing materials.
                  </ListItem>
                  <ListItem>
                    For wireframing and user flow design, I use{' '}
                    <Link href="https://whimsical.com/">Whimsical</Link> to map out app
                    navigation and user journeys before development starts.
                  </ListItem>
                </List>
              </ProjectSectionText>
            </ProjectTextRow>
          </ProjectSectionContent>
        </ProjectSection>
        <ProjectSection padding="none" className={styles.section}>
          <ProjectSectionContent>
            <ProjectTextRow width="m">
              <ProjectSectionHeading>Mobile Development</ProjectSectionHeading>
              <ProjectSectionText as="div">
                <List>
                  <ListItem>
                    <Link href="https://reactnative.dev/">React Native</Link> is my primary
                    framework for cross-platform mobile development. It allows me to build
                    iOS and Android apps with a single codebase while maintaining native performance.
                  </ListItem>
                  <ListItem>
                    <Link href="https://expo.dev/">Expo</Link> for rapid prototyping and
                    development workflow. The managed workflow makes deployment and updates
                    incredibly smooth.
                  </ListItem>
                  <ListItem>
                    For state management in mobile apps, I use{' '}
                    <Link href="https://redux-toolkit.js.org/">Redux Toolkit</Link> for
                    complex apps and React Context for simpler state needs.
                  </ListItem>
                  <ListItem>
                    <Link href="https://docs.expo.dev/push-notifications/overview/">Push Notifications</Link> implementation
                    using Expo's notification service and Firebase Cloud Messaging for
                    real-time user engagement.
                  </ListItem>
                </List>
              </ProjectSectionText>
            </ProjectTextRow>
          </ProjectSectionContent>
        </ProjectSection>
        <ProjectSection padding="none" className={styles.section}>
          <ProjectSectionContent>
            <ProjectTextRow width="m">
              <ProjectSectionHeading>Web Development</ProjectSectionHeading>
              <ProjectSectionText as="div">
                <List>
                  <ListItem>
                    <Link href="https://reactjs.org/">React</Link> and{' '}
                    <Link href="https://nextjs.org/">Next.js</Link> for building modern
                    web applications. Next.js provides excellent performance optimizations
                    and deployment capabilities.
                  </ListItem>
                  <ListItem>
                    <Link href="https://www.typescriptlang.org/">TypeScript</Link> for
                    type-safe development across all my projects. It catches errors early
                    and improves code maintainability.
                  </ListItem>
                  <ListItem>
                    <Link href="https://tailwindcss.com/">Tailwind CSS</Link> for rapid
                    UI development and consistent design systems across web applications.
                  </ListItem>
                  <ListItem>
                    For animations and interactions, I use{' '}
                    <Link href="https://www.framer.com/motion/">Framer Motion</Link> to
                    create smooth, engaging user experiences.
                  </ListItem>
                </List>
              </ProjectSectionText>
            </ProjectTextRow>
          </ProjectSectionContent>
        </ProjectSection>
        <ProjectSection padding="none" className={styles.section}>
          <ProjectSectionContent>
            <ProjectTextRow width="m">
              <ProjectSectionHeading>Backend & Tools</ProjectSectionHeading>
              <ProjectSectionText as="div">
                <List>
                  <ListItem>
                    <Link href="https://nodejs.org/">Node.js</Link> with{' '}
                    <Link href="https://expressjs.com/">Express.js</Link> for building
                    RESTful APIs and backend services. My go-to stack for server-side development.
                  </ListItem>
                  <ListItem>
                    <Link href="https://www.prisma.io/">Prisma</Link> as my ORM of choice
                    for database management. Works seamlessly with PostgreSQL and provides
                    excellent TypeScript integration.
                  </ListItem>
                  <ListItem>
                    <Link href="https://vscode.com/">VSCode</Link> as my primary code editor,
                    with extensions for React Native, TypeScript, and Prisma. The integrated
                    terminal and debugging tools are excellent.
                  </ListItem>
                  <ListItem>
                    <Link href="https://github.com/features/actions">GitHub Actions</Link> for
                    CI/CD pipelines, automated testing, and deployment to app stores and
                    web hosting platforms.
                  </ListItem>
                  <ListItem>
                    <Link href="https://www.docker.com/">Docker</Link> for containerization
                    and consistent development environments across different projects.
                  </ListItem>
                </List>
              </ProjectSectionText>
            </ProjectTextRow>
          </ProjectSectionContent>
        </ProjectSection>
        <ProjectSection padding="none" className={styles.section}>
          <ProjectSectionContent>
            <ProjectTextRow stretch width="m">
              <ProjectSectionHeading>Hardware</ProjectSectionHeading>
              <Table>
                <TableBody>
                  <TableRow>
                    <TableHeadCell>Primary Machine</TableHeadCell>
                    <TableCell>MacBook Pro M1 13.3″ (2020) - 8GB RAM</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableHeadCell>Operating System</TableHeadCell>
                    <TableCell>macOS</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableHeadCell>Terminal</TableHeadCell>
                    <TableCell>iTerm2 with Oh My Zsh</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableHeadCell>Browser</TableHeadCell>
                    <TableCell>Chrome for development, Safari for daily use</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableHeadCell>Mobile Testing</TableHeadCell>
                    <TableCell>iPhone & Android physical devices + simulators</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableHeadCell>Headphones</TableHeadCell>
                    <TableCell>AirPods Pro for calls, Sony WH-1000XM4 for focus</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableHeadCell>External Storage</TableHeadCell>
                    <TableCell>SanDisk 1TB SSD for project backups</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableHeadCell>Cloud Services</TableHeadCell>
                    <TableCell>GitHub, Vercel, AWS for deployment</TableCell>
                  </TableRow>
                </TableBody>
              </Table>
            </ProjectTextRow>
          </ProjectSectionContent>
        </ProjectSection>
      </ProjectContainer>
      <Footer />
    </>
  );
};

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
    title: 'Outils',
    description: 'La liste du matériel et des logiciels que j’utilise au quotidien',
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
          title="Outils"
          description="Les outils, applications, le matériel et les technologies que j’utilise au quotidien pour le développement mobile et web full stack, de React Native à Node.js."
        />
        <ProjectSection padding="none" className={styles.section}>
          <ProjectSectionContent>
            <ProjectTextRow width="m">
              <ProjectSectionHeading>Design et UI/UX</ProjectSectionHeading>
              <ProjectSectionText as="div">
                <List>
                  <ListItem>
                    <Link href="https://www.figma.com">Figma</Link> est mon outil principal
                    pour concevoir les interfaces d’applications mobiles et les mises en page web.
                    Il est idéal pour créer des maquettes et des prototypes adaptés à tous les écrans.
                  </ListItem>
                  <ListItem>
                    <Link href="https://www.adobe.com/products/photoshop.html">Adobe Photoshop</Link> pour
                    la retouche d’images et la création de visuels pour les applications mobiles
                    et les projets web, notamment les visuels pour les magasins d’applications.
                  </ListItem>
                  <ListItem>
                    Pour les wireframes et les parcours utilisateurs, j’utilise{' '}
                    <Link href="https://whimsical.com/">Whimsical</Link> afin de planifier
                    la navigation de l’application avant le début du développement.
                  </ListItem>
                </List>
              </ProjectSectionText>
            </ProjectTextRow>
          </ProjectSectionContent>
        </ProjectSection>
        <ProjectSection padding="none" className={styles.section}>
          <ProjectSectionContent>
            <ProjectTextRow width="m">
              <ProjectSectionHeading>Développement mobile</ProjectSectionHeading>
              <ProjectSectionText as="div">
                <List>
                  <ListItem>
                    <Link href="https://reactnative.dev/">React Native</Link> est mon framework
                    principal pour le développement mobile multiplateforme. Il me permet de
                    créer des applications iOS et Android avec une seule base de code, tout en
                    conservant des performances natives.
                  </ListItem>
                  <ListItem>
                    <Link href="https://expo.dev/">Expo</Link> pour le prototypage rapide et
                    le flux de développement. Le workflow géré simplifie beaucoup le
                    déploiement et les mises à jour.
                  </ListItem>
                  <ListItem>
                    Pour la gestion d’état dans les applications mobiles, j’utilise{' '}
                    <Link href="https://redux-toolkit.js.org/">Redux Toolkit</Link> pour les
                    applications complexes et React Context pour les besoins plus simples.
                  </ListItem>
                  <ListItem>
                    <Link href="https://docs.expo.dev/push-notifications/overview/">Notifications push</Link> avec
                    le service de notifications d’Expo et Firebase Cloud Messaging pour
                    communiquer avec les utilisateurs en temps réel.
                  </ListItem>
                </List>
              </ProjectSectionText>
            </ProjectTextRow>
          </ProjectSectionContent>
        </ProjectSection>
        <ProjectSection padding="none" className={styles.section}>
          <ProjectSectionContent>
            <ProjectTextRow width="m">
              <ProjectSectionHeading>Développement web</ProjectSectionHeading>
              <ProjectSectionText as="div">
                <List>
                  <ListItem>
                    <Link href="https://reactjs.org/">React</Link> et{' '}
                    <Link href="https://nextjs.org/">Next.js</Link> pour développer des
                    applications web modernes. Next.js offre de bonnes optimisations de
                    performance et facilite le déploiement.
                  </ListItem>
                  <ListItem>
                    <Link href="https://www.typescriptlang.org/">TypeScript</Link> pour
                    un typage fiable dans tous mes projets. Il permet de détecter les erreurs
                    tôt et facilite la maintenance du code.
                  </ListItem>
                  <ListItem>
                    <Link href="https://tailwindcss.com/">Tailwind CSS</Link> pour développer
                    rapidement les interfaces et garder un design cohérent d’une application à l’autre.
                  </ListItem>
                  <ListItem>
                    Pour les animations et les interactions, j’utilise{' '}
                    <Link href="https://www.framer.com/motion/">Framer Motion</Link> afin
                    d’offrir des expériences fluides.
                  </ListItem>
                </List>
              </ProjectSectionText>
            </ProjectTextRow>
          </ProjectSectionContent>
        </ProjectSection>
        <ProjectSection padding="none" className={styles.section}>
          <ProjectSectionContent>
            <ProjectTextRow width="m">
              <ProjectSectionHeading>Back-end et outils</ProjectSectionHeading>
              <ProjectSectionText as="div">
                <List>
                  <ListItem>
                    <Link href="https://nodejs.org/">Node.js</Link> avec{' '}
                    <Link href="https://expressjs.com/">Express.js</Link> pour développer
                    des API REST et des services back-end. C’est ma pile habituelle côté serveur.
                  </ListItem>
                  <ListItem>
                    <Link href="https://www.prisma.io/">Prisma</Link> comme ORM pour la
                    gestion des bases de données. Il s’intègre bien avec PostgreSQL et offre
                    une très bonne intégration TypeScript.
                  </ListItem>
                  <ListItem>
                    <Link href="https://code.visualstudio.com/">VSCode</Link> comme éditeur principal,
                    avec des extensions pour React Native, TypeScript et Prisma. Le terminal
                    intégré et les outils de débogage sont très pratiques.
                  </ListItem>
                  <ListItem>
                    <Link href="https://github.com/features/actions">GitHub Actions</Link> pour
                    les pipelines CI/CD, les tests automatisés et le déploiement vers les
                    magasins d’applications et les hébergeurs web.
                  </ListItem>
                  <ListItem>
                    <Link href="https://www.docker.com/">Docker</Link> pour la conteneurisation
                    et des environnements de développement identiques d’un projet à l’autre.
                  </ListItem>
                </List>
              </ProjectSectionText>
            </ProjectTextRow>
          </ProjectSectionContent>
        </ProjectSection>
        <ProjectSection padding="none" className={styles.section}>
          <ProjectSectionContent>
            <ProjectTextRow stretch width="m">
              <ProjectSectionHeading>Matériel</ProjectSectionHeading>
              <Table>
                <TableBody>
                  <TableRow>
                    <TableHeadCell>Machine principale</TableHeadCell>
                    <TableCell>MacBook Pro M1 13.3″ (2020) - 8 Go de RAM</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableHeadCell>Système d’exploitation</TableHeadCell>
                    <TableCell>macOS</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableHeadCell>Terminal</TableHeadCell>
                    <TableCell>iTerm2 avec Oh My Zsh</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableHeadCell>Navigateur</TableHeadCell>
                    <TableCell>Chrome pour le développement, Safari au quotidien</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableHeadCell>Tests mobiles</TableHeadCell>
                    <TableCell>Appareils iPhone et Android physiques, et simulateurs</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableHeadCell>Écouteurs</TableHeadCell>
                    <TableCell>AirPods Pro pour les appels, Sony WH-1000XM4 pour la concentration</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableHeadCell>Stockage externe</TableHeadCell>
                    <TableCell>SSD SanDisk 1 To pour les sauvegardes de projets</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableHeadCell>Services cloud</TableHeadCell>
                    <TableCell>GitHub, Vercel et AWS pour le déploiement</TableCell>
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

import { Footer } from '~/components/footer';
import { Image } from '~/components/image';
import { useTheme } from '~/components/theme-provider';
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
import { Fragment, useEffect } from 'react';
import { classes, media } from '~/utils/style';
import styles from './case-study.module.css';

const phoneSize = { width: 640, height: 1386 };
const browserSize = { width: 1631, height: 893 };

const Screen = ({ device, src, alt, className, sizes }) => {
  const size = device === 'browser' ? browserSize : phoneSize;

  return (
    <Image
      raised
      className={classes(device === 'phone' && styles.phone, className)}
      srcSet={`${src} ${size.width}w`}
      width={size.width}
      height={size.height}
      placeholder={src}
      alt={alt}
      sizes={sizes}
    />
  );
};

export const CaseStudy = ({
  slug,
  device = 'phone',
  title,
  description,
  background,
  links = {},
  roles = [],
  hero = [],
  challenge,
  solution,
  features = [],
  outcome,
}) => {
  const { theme } = useTheme();
  const isDark = theme === 'dark';
  const isPhone = device === 'phone';

  const headerLinks = [
    links.website && { label: 'Visiter le site', url: links.website },
    links.appStore && { label: 'App Store', url: links.appStore },
    links.googlePlay && { label: 'Google Play', url: links.googlePlay },
  ].filter(Boolean);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [slug]);

  return (
    <Fragment>
      <ProjectContainer>
        <ProjectBackground
          opacity={isDark ? 0.5 : 0.8}
          src={background}
          srcSet={`${background} 1280w`}
          width={1280}
          height={800}
          placeholder={background}
        />
        <ProjectHeader
          title={title}
          description={description}
          links={headerLinks}
          roles={roles}
        />

        <ProjectSection padding="top">
          <ProjectSectionContent>
            {isPhone ? (
              <div className={styles.phones}>
                {hero.map(screen => (
                  <Screen
                    key={screen.src}
                    device="phone"
                    sizes={`(max-width: ${media.mobile}px) 30vw, 280px`}
                    {...screen}
                  />
                ))}
              </div>
            ) : (
              <ProjectImage
                raised
                srcSet={`${hero[0].src} ${browserSize.width}w`}
                width={browserSize.width}
                height={browserSize.height}
                placeholder={hero[0].src}
                alt={hero[0].alt}
                sizes={`(max-width: ${media.mobile}px) 100vw, (max-width: ${media.tablet}px) 800px, 1000px`}
              />
            )}
          </ProjectSectionContent>
        </ProjectSection>

        {challenge && (
          <ProjectSection>
            <ProjectTextRow>
              <ProjectSectionHeading>Le défi</ProjectSectionHeading>
              <ProjectSectionText>{challenge}</ProjectSectionText>
            </ProjectTextRow>
          </ProjectSection>
        )}

        {solution && (
          <ProjectSection light={isDark}>
            <ProjectTextRow>
              <ProjectSectionHeading>La solution</ProjectSectionHeading>
              <ProjectSectionText>{solution}</ProjectSectionText>
            </ProjectTextRow>
          </ProjectSection>
        )}

        {features.map((feature, index) => (
          <ProjectSection key={feature.title} light={index % 2 === 1 && isDark}>
            <ProjectSectionColumns
              className={classes(
                styles.feature,
                isPhone && styles.featurePhone,
                index % 2 === 1 && styles.reverse
              )}
            >
              <ProjectTextRow>
                <ProjectSectionHeading>{feature.title}</ProjectSectionHeading>
                <ProjectSectionText>{feature.text}</ProjectSectionText>
              </ProjectTextRow>
              <Screen
                device={device}
                src={feature.src}
                alt={feature.alt}
                className={styles.featureImage}
                sizes={
                  isPhone
                    ? '300px'
                    : `(max-width: ${media.tablet}px) 100vw, 50vw`
                }
              />
            </ProjectSectionColumns>
          </ProjectSection>
        ))}

        {outcome && (
          <ProjectSection light={features.length % 2 === 1 && isDark}>
            <ProjectSectionContent>
              <ProjectTextRow center centerMobile noMargin>
                <ProjectSectionHeading>{outcome.title}</ProjectSectionHeading>
                <ProjectSectionText>{outcome.text}</ProjectSectionText>
              </ProjectTextRow>
            </ProjectSectionContent>
          </ProjectSection>
        )}
      </ProjectContainer>
      <Footer />
    </Fragment>
  );
};

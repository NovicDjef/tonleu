import { frontmatter as koursierDispatch } from '~/routes/articles.koursier-dispatch.mdx';
import { frontmatter as planeviaApi } from '~/routes/articles.planevia-api.mdx';
import { frontmatter as reactPatterns } from '~/routes/articles.advanced-react-patterns.mdx';
import { frontmatter as nodeArchitecture } from '~/routes/articles.fullstack-nodejs-architecture.mdx';
import { Button } from '~/components/button';
import { DecoderText } from '~/components/decoder-text';
import { Divider } from '~/components/divider';
import { Footer } from '~/components/footer';
import { Heading } from '~/components/heading';
import { Section } from '~/components/section';
import { Text } from '~/components/text';
import { Link as RouterLink } from 'react-router-dom';
import { cssProps } from '~/utils/style';
import styles from './articles.module.css';

const posts = [
  { slug: 'planevia-api', frontmatter: planeviaApi },
  { slug: 'koursier-dispatch', frontmatter: koursierDispatch },
  { slug: 'fullstack-nodejs-architecture', frontmatter: nodeArchitecture },
  { slug: 'advanced-react-patterns', frontmatter: reactPatterns },
];

function ArticlesPost({ slug, frontmatter, index }) {
  const { title, abstract, category, readingTime } = frontmatter;

  return (
    <article className={styles.post} style={cssProps({ delay: index * 100 + 200 })}>
      <RouterLink to={`/articles/${slug}`} className={styles.postLink}>
        <div className={styles.postDetails}>
          <div aria-hidden className={styles.postDate}>
            <Divider notchWidth="64px" notchHeight="8px" />
            {category}
          </div>
          <Heading as="h2" level={4}>
            {title}
          </Heading>
          <Text size="s" as="p">
            {abstract}
          </Text>
          <div className={styles.postFooter}>
            <Button secondary iconHoverShift icon="chevron-right" as="div">
              Lire l’article
            </Button>
            <Text className={styles.timecode} size="s">
              {`${readingTime} min de lecture`}
            </Text>
          </div>
        </div>
      </RouterLink>
    </article>
  );
}

export function Articles() {
  return (
    <article className={styles.articles}>
      <Section className={styles.content}>
        <div className={styles.grid} data-single>
          <div className={styles.list}>
            <header className={styles.header}>
              <Heading className={styles.heading} level={5} as="h1">
                <DecoderText text="Articles" />
              </Heading>
              <Barcode className={styles.barcode} />
            </header>
            {posts.map(({ slug, frontmatter }, index) => (
              <ArticlesPost key={slug} slug={slug} index={index} frontmatter={frontmatter} />
            ))}
          </div>
        </div>
      </Section>
      <Footer />
    </article>
  );
}

function Barcode({ className }) {
  return (
    <svg
      className={className}
      width="153"
      height="20"
      fill="currentColor"
      viewBox="0 0 153 20"
    >
      <path
        fillOpacity=".6"
        d="M153 0v20h-2V0h2Zm-4 0v20h-4V0h4Zm-6 0v20h-2V0h2Zm-4 4v3h-2V4h2Zm-5 0V0h3v4h-3Zm-2 0h2v6h-2V4Zm0 0h-2V0h2v4Zm-4-4v4h-4v5h-2v4h-5V9h3V6h-5V0h13Zm-11 13v3h-2v-3h2Zm-4-13v6h-2v4h2v4h-2v2h2v4h-4V0h4Zm-6 4V0h-2v4h2Zm-1 6V7h-4V4h-2V0h-2v4h-2V0H86v4h-2v3h-2v2h-2v4h6v3h-2v4h6v-4h-2v-3h-2V9h-2V7h4V4h3v9h2v7h7v-4h-5v-3h-2V9h2V7h3v3h2v4h6v-4ZM74 7v3h-2v2h2v8h-4V0h8v5h-3V4h-3v3h2Zm28 13h4v-4h-4v4Zm28-6v-4h-2v6h2v4h2v-6h-2Zm9 2v-6h-2v6h-2v4h4v-4Zm-12 4v-4h-4v4h4ZM0 20h2V0H0v20Zm4 0h4V0H4v20Zm6 0h2V0h-2v20Zm5 0h7V0h-7v20Zm12 0h-3V0h3v20Zm5 0h3v-4h5v-6h-5V6h7V3h3V0h-7v3h-3V0h-3v20ZM52 3v3h-3v3h-4V6h1V3h6Zm23 13h6v4h-6v-4Zm-29-6v3h3v-3h3v3h-2v6h-3v-3h-2v-3h-2v-3h3Zm8 6v3h-2v-3h2Zm3 0v3h2v-3h2v-3h-2v3h-2Zm0 0v-6h-3v6h3Zm4-7V6h2V0h-2v6h-2v3h2Zm5-3v3h-2V6h2Zm2 0h-2V3h2v3Zm-9-3V0h-2v3h2Z"
      />
    </svg>
  );
}

import config from '~/config.json';

const { name, fullName, url, twitter, keywords, location } = config;
const defaultOgImage = `${url}/social-image.png`;

export function baseMeta({
  title,
  description,
  ogImage = defaultOgImage,
  keywords: pageKeywords = [],
  canonical = null,
}) {
  const titleText = title ? `${title} | ${fullName}` : fullName;
  const keywordsList = [...keywords, ...pageKeywords].join(', ');
  const canonicalUrl = canonical || url;

  return [
    { title: titleText },
    { name: 'description', content: description },
    { name: 'keywords', content: keywordsList },
    { name: 'author', content: fullName },
    { name: 'robots', content: 'index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1' },
    { name: 'googlebot', content: 'index, follow, max-video-preview:-1, max-image-preview:large, max-snippet:-1' },
    { name: 'language', content: 'fr-CA' },
    { name: 'geo.region', content: 'QC' },
    { name: 'geo.country', content: 'Canada' },
    { name: 'geo.placename', content: location },
    { name: 'theme-color', content: '#0f0f0f' },
    { name: 'msapplication-TileColor', content: '#0f0f0f' },

    // Schema.org structured data
    { name: 'application-name', content: fullName },
    { name: 'classification', content: 'Business' },
    { name: 'category', content: 'Technology' },
    { name: 'coverage', content: 'Worldwide' },
    { name: 'distribution', content: 'Global' },
    { name: 'rating', content: 'General' },

    // Canonical URL
    { tagName: 'link', rel: 'canonical', href: canonicalUrl },

    // OpenGraph enhanced
    { property: 'og:image', content: ogImage },
    { property: 'og:image:alt', content: `${fullName} - Portfolio Développeur Mobile React Native` },
    { property: 'og:image:width', content: '1200' },
    { property: 'og:image:height', content: '630' },
    { property: 'og:title', content: titleText },
    { property: 'og:site_name', content: fullName },
    { property: 'og:type', content: 'website' },
    { property: 'og:url', content: canonicalUrl },
    { property: 'og:description', content: description },
    { property: 'og:locale', content: 'fr_CA' },
    { property: 'og:locale:alternate', content: 'en_CA' },

    // Twitter Card enhanced
    { property: 'twitter:card', content: 'summary_large_image' },
    { property: 'twitter:description', content: description },
    { property: 'twitter:title', content: titleText },
    { property: 'twitter:site', content: twitter },
    { property: 'twitter:creator', content: twitter },
    { property: 'twitter:image', content: ogImage },
    { property: 'twitter:image:alt', content: `${fullName} - Développeur Mobile React Native` },

    // Additional SEO
    { name: 'apple-mobile-web-app-capable', content: 'yes' },
    { name: 'apple-mobile-web-app-status-bar-style', content: 'black-translucent' },
    { name: 'apple-mobile-web-app-title', content: name },
    { name: 'format-detection', content: 'telephone=no' },
  ];
}

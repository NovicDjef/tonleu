import config from '~/config.json';

export const navLinks = [
  {
    label: 'Projets',
    pathname: '/#project-1',
  },
  {
    label: 'À propos',
    pathname: '/about',
  },
  {
    label: 'Articles',
    pathname: '/articles',
  },
  {
    label: 'Contact',
    pathname: '/contact',
  },
];

export const socialLinks = [
  {
    label: 'Twitter',
    url: `https://x.com/${config.twitter.replace(/^@/, '')}`,
    icon: 'twitter',
  },
  {
    label: 'LinkedIn',
    url: `https://linkedin.com/in/n-d-melataguia-tonleu`,
    icon: 'linkedin',
  },
  {
    label: 'Github',
    url: `https://github.com/${config.github}`,
    icon: 'github',
  },
];

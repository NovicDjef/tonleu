import config from '~/config.json';

export const navLinks = [
  {
    label: 'Projects',
    pathname: '/#project-1',
  },
  {
    label: 'Details',
    pathname: '/#details',
  },
  {
    label: 'Articles',
    pathname: '/articles',
  },
  {
    label: 'Contact',
    pathname: '/contact',
  },
  {
    label: 'About',
    pathname: '/about',
  },
  {
    label: 'CV',
    pathname: '/cv',
  },
];

export const socialLinks = [
  {
    label: 'Twitter',
    url: `https://twitter.com/${config.twitter}`,
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

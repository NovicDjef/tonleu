import {
  Links,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
} from 'react-router-dom';
import { ThemeProvider, themeStyles } from '~/components/theme-provider';
import GothamBook from '~/assets/fonts/gotham-book.woff2';
import GothamMedium from '~/assets/fonts/gotham-medium.woff2';
import { useEffect } from 'react';
import { Error } from '~/layouts/error';
import { VisuallyHidden } from '~/components/visually-hidden';
import { Navbar } from '~/layouts/navbar';
import { Progress } from '~/components/progress';
import config from '~/config.json';
import styles from './root.module.css';
import './reset.module.css';
import './global.module.css';

export const links = () => [
  {
    rel: 'preload',
    href: GothamMedium,
    as: 'font',
    type: 'font/woff2',
    crossOrigin: '',
  },
  {
    rel: 'preload',
    href: GothamBook,
    as: 'font',
    type: 'font/woff2',
    crossOrigin: '',
  },
  { rel: 'manifest', href: '/manifest.json' },
  { rel: 'icon', href: '/favicon.ico' },
  { rel: 'icon', href: '/favicon.svg', type: 'image/svg+xml' },
  { rel: 'shortcut_icon', href: '/shortcut.png', type: 'image/png', sizes: '64x64' },
  { rel: 'apple-touch-icon', href: '/icon-256.png', sizes: '256x256' },
  { rel: 'author', href: '/tonleu.txt', type: 'text/plain' },
  { rel: 'preconnect', href: 'https://fonts.googleapis.com' },
  { rel: 'dns-prefetch', href: 'https://www.google-analytics.com' },
  { rel: 'prefetch', href: '/social-image.png', as: 'image' },
];


export default function App() {
  // Static data for now since loader was removed
  const canonicalUrl = config.url;
  let theme = 'dark';

  // Try to get theme from localStorage
  if (typeof window !== 'undefined') {
    theme = localStorage.getItem('theme') || 'dark';
  }

  function toggleTheme(newTheme) {
    const nextTheme = newTheme ? newTheme : theme === 'dark' ? 'light' : 'dark';
    if (typeof window !== 'undefined') {
      localStorage.setItem('theme', nextTheme);
      // Force re-render by manually updating the theme
      window.location.reload();
    }
  }

  useEffect(() => {
    console.info(
      `${config.ascii}\n`,
      `Taking a peek huh? Check out the source code: ${config.repo}\n\n`
    );
  }, []);

  return (
    <html lang="fr">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta name="format-detection" content="telephone=no" />
        <meta name="mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent" />
        {/* Theme color doesn't support oklch so I'm hard coding these hexes for now */}
        <meta name="theme-color" content={theme === 'dark' ? '#111' : '#F2F2F2'} />
        <meta
          name="color-scheme"
          content={theme === 'light' ? 'light dark' : 'dark light'}
        />
        <style dangerouslySetInnerHTML={{ __html: themeStyles }} />
        <Meta />
        <Links />
        <link rel="canonical" href={canonicalUrl} />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Person",
              "name": "Novic Tonleu",
              "jobTitle": "Développeur Mobile React Native",
              "description": "Développeur mobile React Native expert basé au Cameroun. Spécialisé dans la création d'applications mobiles iOS et Android performantes.",
              "url": "https://novic.dev",
              "sameAs": [
                "https://github.com/NovicDjef",
                "https://twitter.com/NovicDjef",
                "https://www.linkedin.com/in/novic-tonleu"
              ],
              "address": {
                "@type": "PostalAddress",
                "addressCountry": "CA",
                "addressRegion": "QC",
                "addressLocality": "Québec"
              },
              "alumniOf": {
                "@type": "Organization",
                "name": "École Supérieure Polytechnique"
              },
              "knowsAbout": [
                "React Native",
                "React.js",
                "Next.js",
                "Angular",
                "JavaScript",
                "TypeScript",
                "Node.js",
                "Web Development",
                "Mobile App Development",
                "iOS Development",
                "Android Development",
                "API Development",
                "UI/UX Design",
                "CI/CD Pipelines"
              ],
              "hasOccupation": {
                "@type": "Occupation",
                "name": "Full Stack Developer",
                "occupationLocation": {
                  "@type": "Country",
                  "name": "Canada"
                },
                "skills": [
                  "React Native",
                  "Next.js",
                  "Angular",
                  "React.js",
                  "Node.js",
                  "iOS Development",
                  "Android Development",
                  "JavaScript",
                  "TypeScript",
                  "CI/CD Pipelines",
                  "API Integration"
                ]
              },
              "worksFor": {
                "@type": "Organization",
                "name": "Freelance",
                "description": "Développeur logiciel web et mobile indépendant spécialisé en Next.js, React Native et Angular"
              }
            })
          }}
        />
      </head>
      <body data-theme={theme}>
        <ThemeProvider theme={theme} toggleTheme={toggleTheme}>
          <Progress />
          <VisuallyHidden showOnFocus as="a" className={styles.skip} href="#main-content">
            Skip to main content
          </VisuallyHidden>
          <Navbar />
          <main
            id="main-content"
            className={styles.container}
            tabIndex={-1}
            data-loading={false}
          >
            <Outlet />
          </main>
        </ThemeProvider>
        <ScrollRestoration />
        <Scripts />
      </body>
    </html>
  );
}

export function ErrorBoundary() {
  const error = { status: 500, statusText: 'Internal Server Error' };

  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content="#111" />
        <meta name="color-scheme" content="dark light" />
        <style dangerouslySetInnerHTML={{ __html: themeStyles }} />
        <Meta />
        <Links />
      </head>
      <body data-theme="dark">
        <Error error={error} />
        <ScrollRestoration />
        <Scripts />
      </body>
    </html>
  );
}

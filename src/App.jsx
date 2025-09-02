import { Routes, Route, useLocation } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { ThemeProvider, themeStyles } from '../app/components/theme-provider';
import { VisuallyHidden } from '../app/components/visually-hidden';
import { Navbar } from '../app/layouts/navbar';
import { Progress } from '../app/components/progress';
import { Error } from '../app/layouts/error';
import { Home } from '../app/routes/home/home';
import { Contact } from '../app/routes/contact/contact';
import { Uses } from '../app/routes/uses/uses';
import { Articles } from '../app/routes/articles_._index/articles';
import { Slice } from '../app/routes/projects.slice/slice';
import { SmartSparrow } from '../app/routes/projects.smart-sparrow/smart-sparrow';
import { VolkiharKnight } from '../app/routes/projects.volkihar-knight/volkihar-knight';
import { Koursier } from '../app/routes/projects.koursier/koursier';
import { Reminder } from '../app/routes/projects.reminder/reminder';
import { KoursierDelivery } from '../app/routes/projects.koursier-delivery/koursier-delivery';
import { Raphycar } from '../app/routes/projects.raphycar/raphycar';
import { AdminDashboard } from '../app/routes/projects.admin-dashboard/admin-dashboard';
import config from '../app/config.json';
import styles from '../app/root.module.css';
import '../app/reset.module.css';
import '../app/global.module.css';

function App() {
  const [theme, setTheme] = useState(() => {
    if (typeof window !== 'undefined') {
      return localStorage.getItem('theme') || 'dark';
    }
    return 'dark';
  });
  
  const location = useLocation();
  const [isLoading, setIsLoading] = useState(false);

  function toggleTheme(newTheme) {
    const themeToSet = newTheme || (theme === 'dark' ? 'light' : 'dark');
    setTheme(themeToSet);
    if (typeof window !== 'undefined') {
      localStorage.setItem('theme', themeToSet);
    }
  }

  useEffect(() => {
    console.info(
      `${config.ascii}\n`,
      `Taking a peek huh? Check out the source code: ${config.repo}\n\n`
    );
  }, []);

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
    document.head.querySelector('meta[name="theme-color"]')?.setAttribute(
      'content', 
      theme === 'dark' ? '#111' : '#F2F2F2'
    );
    document.head.querySelector('meta[name="color-scheme"]')?.setAttribute(
      'content',
      theme === 'light' ? 'light dark' : 'dark light'
    );
  }, [theme]);

  return (
    <>
      <style dangerouslySetInnerHTML={{ __html: themeStyles }} />
      <div data-theme={theme}>
        <ThemeProvider theme={theme} toggleTheme={toggleTheme}>
          <Progress />
          <VisuallyHidden showOnFocus as="a" className={styles.skip} href="#main-content">
            Skip to main content
          </VisuallyHidden>
          <Navbar />
          {/* Global Particle System */}
          <div className={styles.globalParticles}>
            <div className={styles.globalParticle}></div>
            <div className={styles.globalParticle}></div>
            <div className={styles.globalParticle}></div>
            <div className={styles.globalParticle}></div>
            <div className={styles.globalParticle}></div>
            <div className={styles.globalParticle}></div>
          </div>

          {/* Global Earth Animation */}
          <div className={styles.globalEarth}>
            <div className={styles.earthCore}>
              <div className={styles.earthGrid}></div>
              <div className={styles.earthData}></div>
            </div>
          </div>

          <main
            id="main-content"
            className={styles.container}
            tabIndex={-1}
            data-loading={isLoading}
          >
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/uses" element={<Uses />} />
              <Route path="/articles" element={<Articles />} />
              <Route path="/projects/slice" element={<Slice />} />
              <Route path="/projects/smart-sparrow" element={<SmartSparrow />} />
              <Route path="/projects/volkihar-knight" element={<VolkiharKnight />} />
              <Route path="/projects/koursier" element={<Koursier />} />
              <Route path="/projects/reminder" element={<Reminder />} />
              <Route path="/projects/koursier-delivery" element={<KoursierDelivery />} />
              <Route path="/projects/raphycar" element={<Raphycar />} />
              <Route path="/projects/admin-dashboard" element={<AdminDashboard />} />
              <Route path="*" element={<Error error={{ status: 404, statusText: 'Not Found' }} />} />
            </Routes>
          </main>
        </ThemeProvider>
      </div>
    </>
  );
}

export default App;
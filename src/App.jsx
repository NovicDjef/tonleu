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
import { ModernStylingInReact } from '../app/routes/articles.modern-styling-in-react/modern-styling-in-react';
import { HelloWorld } from '../app/routes/articles.hello-world/hello-world';
import { AdvancedReactPatterns } from '../app/routes/articles.advanced-react-patterns/advanced-react-patterns';
import { FullstackNodejsArchitecture } from '../app/routes/articles.fullstack-nodejs-architecture/fullstack-nodejs-architecture';
import { CV } from '../app/routes/cv/cv';
import { About } from '../app/routes/about/about';
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

          {/* Global Skills Floating System */}
          <div className="floating-skills">
            <div className="skill-particle">React.js</div>
            <div className="skill-particle">TypeScript</div>
            <div className="skill-particle">Node.js</div>
            <div className="skill-particle">Next.js</div>
            <div className="skill-particle">React Native</div>
            <div className="skill-particle">JavaScript ES6+</div>
            <div className="skill-particle">MongoDB</div>
            <div className="skill-particle">Express.js</div>
            <div className="skill-particle">Angular</div>
            <div className="skill-particle">Full Stack Dev</div>
          </div>

          {/* Code Matrix Background */}
          <div className="code-matrix">
            <div className="matrix-column">const fullStack = true;</div>
            <div className="matrix-column">function dev() {'{'} return 'JS/TS'; {'}'}</div>
            <div className="matrix-column">npm install react</div>
            <div className="matrix-column">async/await</div>
            <div className="matrix-column">{'<Component />'}</div>
            <div className="matrix-column">API RESTful</div>
            <div className="matrix-column">useState Hook</div>
            <div className="matrix-column">MongoDB.find()</div>
            <div className="matrix-column">git commit -m</div>
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
              <Route path="/articles/modern-styling-in-react" element={<ModernStylingInReact />} />
              <Route path="/articles/hello-world" element={<HelloWorld />} />
              <Route path="/articles/advanced-react-patterns" element={<AdvancedReactPatterns />} />
              <Route path="/articles/fullstack-nodejs-architecture" element={<FullstackNodejsArchitecture />} />
              <Route path="/cv" element={<CV />} />
              <Route path="/about" element={<About />} />
              <Route path="*" element={<Error error={{ status: 404, statusText: 'Not Found' }} />} />
            </Routes>
          </main>
        </ThemeProvider>
      </div>
    </>
  );
}

export default App;
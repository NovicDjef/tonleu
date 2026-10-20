import { DecoderText } from '~/components/decoder-text';
import { Heading } from '~/components/heading';
import { Section } from '~/components/section';
import { useTheme } from '~/components/theme-provider';
import { tokens } from '~/components/theme-provider/theme';
import { Transition } from '~/components/transition';
import { VisuallyHidden } from '~/components/visually-hidden';
import { Link as RouterLink } from 'react-router-dom';
import { useInterval, usePrevious, useScrollToHash } from '~/hooks';
import { Suspense, lazy, useEffect, useState } from 'react';
import { cssProps } from '~/utils/style';
import config from '~/config.json';
import { useHydrated } from '~/hooks/useHydrated';
import styles from './intro.module.css';

const DisplacementSphere = lazy(() =>
  import('./displacement-sphere').then(module => ({ default: module.DisplacementSphere }))
);

export function Intro({ id, sectionRef, scrollIndicatorHidden, ...rest }) {
  const { theme } = useTheme();
  const { disciplines } = config;
  const [disciplineIndex, setDisciplineIndex] = useState(0);
  const prevTheme = usePrevious(theme);
  const introLabel = [disciplines.slice(0, -1).join(', '), disciplines.slice(-1)[0]].join(
    ', and '
  );
  const currentDiscipline = disciplines.find((item, index) => index === disciplineIndex);
  const titleId = `${id}-title`;
  const scrollToHash = useScrollToHash();
  const isHydrated = useHydrated();

  useInterval(
    () => {
      const index = (disciplineIndex + 1) % disciplines.length;
      setDisciplineIndex(index);
    },
    5000,
    theme
  );

  useEffect(() => {
    if (prevTheme && prevTheme !== theme) {
      setDisciplineIndex(0);
    }
  }, [theme, prevTheme]);

  const handleScrollClick = event => {
    event.preventDefault();
    scrollToHash(event.currentTarget.href);
  };

  return (
    <Section
      className={styles.intro}
      as="section"
      ref={sectionRef}
      id={id}
      aria-labelledby={titleId}
      tabIndex={-1}
      {...rest}
    >
      <Transition in key={theme} timeout={3000}>
        {({ visible, status }) => (
          <>
            {isHydrated && (
              <Suspense>
                <DisplacementSphere />
              </Suspense>
            )}
            <div className={styles.quantumField} data-visible={visible}>
              <div className={styles.quantumParticle} style={cssProps({ delay: '0s' })}></div>
              <div className={styles.quantumParticle} style={cssProps({ delay: '2s' })}></div>
              <div className={styles.quantumParticle} style={cssProps({ delay: '4s' })}></div>
              <div className={styles.quantumParticle} style={cssProps({ delay: '1s' })}></div>
              <div className={styles.quantumParticle} style={cssProps({ delay: '3s' })}></div>
            </div>
            <div className={styles.dataMatrix} data-visible={visible}>
              <div className={styles.dataStream} style={cssProps({ delay: '0s' })}>
                {Array.from({ length: 5 }, (_, i) => (
                  <span key={i} className={styles.dataChar}>
                    {Math.random() > 0.5 ? '1' : '0'}
                  </span>
                ))}
              </div>
              <div className={styles.dataStream} style={cssProps({ delay: '1.5s' })}>
                {Array.from({ length: 12 }, (_, i) => (
                  <span key={i} className={styles.dataChar}>
                    {Math.random() > 0.5 ? '1' : '0'}
                  </span>
                ))}
              </div>
              <div className={styles.dataStream} style={cssProps({ delay: '3s' })}>
                {Array.from({ length: 18 }, (_, i) => (
                  <span key={i} className={styles.dataChar}>
                    {Math.random() > 0.5 ? '1' : '0'}
                  </span>
                ))}
              </div>
            </div>
            <div className={styles.hologramGrid} data-visible={visible}>
              <div className={styles.gridLine} style={cssProps({ direction: 'horizontal', position: '20%' })}></div>
              <div className={styles.gridLine} style={cssProps({ direction: 'horizontal', position: '40%' })}></div>
              <div className={styles.gridLine} style={cssProps({ direction: 'horizontal', position: '60%' })}></div>
              <div className={styles.gridLine} style={cssProps({ direction: 'horizontal', position: '80%' })}></div>
              <div className={styles.gridLine} style={cssProps({ direction: 'vertical', position: '25%' })}></div>
              <div className={styles.gridLine} style={cssProps({ direction: 'vertical', position: '50%' })}></div>
              <div className={styles.gridLine} style={cssProps({ direction: 'vertical', position: '75%' })}></div>
            </div>
            <header className={styles.text}>
              <div className={styles.aiIndicator} data-visible={visible}>
                <span className={styles.aiGlow}>AI</span>
                <div className={styles.aiPulse}></div>
                <div className={styles.scanLine}></div>
              </div>
              <div className={styles.nameContainer} data-visible={visible}>
                <div className={styles.glitchOverlay}>
                  <span className={styles.glitchLayer1}>{config.name}</span>
                  <span className={styles.glitchLayer2}>{config.name}</span>
                  <span className={styles.glitchLayer3}>{config.name}</span>
                </div>
                <h1 className={styles.name} data-visible={visible} id={titleId}>
                  <DecoderText text={config.name} delay={500} />
                </h1>
                <div className={styles.holographicBorder}></div>
              </div>
              <Heading level={0} as="h2" className={styles.title}>
                <VisuallyHidden className={styles.label}>
                  {`${config.introRole} ${introLabel}`}
                </VisuallyHidden>
                <span aria-hidden className={styles.row}>
                  <span
                    className={styles.word}
                    data-status={status}
                    data-main-role={true}
                    style={cssProps({ delay: tokens.base.durationXS })}
                  >
                    {config.introRole}
                  </span>
                  
                  <span className={styles.line} data-status={status} />
                </span>
                


                <div className={styles.row}>
                  {disciplines.map(item => (
                    <Transition
                      unmount
                      in={item === currentDiscipline}
                      timeout={{ enter: 3000, exit: 2000 }}
                      key={item}
                    >
                      {({ status, nodeRef }) => (
                        <span
                          aria-hidden
                          ref={nodeRef}
                          className={styles.word}
                          data-plus={true}
                          data-status={status}
                          data-discipline={true}
                          style={cssProps({ delay: tokens.base.durationL })}
                        >
                          {item}
                        </span>
                      )}
                    </Transition>
                  ))}
                </div>
              </Heading>
              <div className={styles.tagline} data-visible={visible}>
                <div className={styles.voiceVisualizerContainer}>
                  <div className={styles.voiceVisualizer}>
                    {Array.from({ length: 20 }, (_, i) => (
                      <div 
                        key={i} 
                        className={styles.voiceBar}
                        style={cssProps({ delay: `${i * 0.1}s` })}
                      ></div>
                    ))}
                  </div>
                </div>
                <span className={styles.taglineText}>
                  <span className={styles.typewriterText} data-text="Des applications web et mobiles pensées pour les besoins réels">
                    Des applications web et mobiles pensées pour les besoins réels
                  </span>
                </span>
                <div className={styles.quantumEntanglement}>
                  <div className={styles.neuralNetwork}>
                    <div className={styles.neuralNode}></div>
                    <div className={styles.neuralNode}></div>
                    <div className={styles.neuralNode}></div>
                    <div className={styles.neuralConnection}></div>
                    <div className={styles.neuralConnection}></div>
                  </div>
                  <div className={styles.dnaHelix}>
                    <div className={styles.dnaStrand}></div>
                    <div className={styles.dnaStrand}></div>
                  </div>
                </div>
              </div>
            </header>
            <RouterLink
              to="/#project-1"
              className={styles.scrollIndicator}
              data-status={status}
              data-hidden={scrollIndicatorHidden}
              onClick={handleScrollClick}
            >
              <VisuallyHidden>Défiler vers les projets</VisuallyHidden>
            </RouterLink>
            <RouterLink
              to="/#project-1"
              className={styles.mobileScrollIndicator}
              data-status={status}
              data-hidden={scrollIndicatorHidden}
              onClick={handleScrollClick}
            >
              <VisuallyHidden>Défiler vers les projets</VisuallyHidden>
              <svg
                aria-hidden
                stroke="currentColor"
                width="43"
                height="15"
                viewBox="0 0 43 15"
              >
                <path d="M1 1l20.5 12L42 1" strokeWidth="2" fill="none" />
              </svg>
            </RouterLink>
          </>
        )}
      </Transition>
    </Section>
  );
}

import { useLocation } from 'react-router-dom';
import { useRef, useEffect, useState } from 'react';
import styles from './progress.module.css';

export function Progress() {
  const [animationComplete, setAnimationComplete] = useState(false);
  const [visible, setVisible] = useState(false);
  const location = useLocation();
  const progressRef = useRef();
  const timeout = useRef(0);
  const [isNavigating, setIsNavigating] = useState(false);

  useEffect(() => {
    setIsNavigating(true);
    const timer = setTimeout(() => {
      setIsNavigating(false);
    }, 100);
    
    return () => clearTimeout(timer);
  }, [location]);

  useEffect(() => {
    clearTimeout(timeout.current);

    if (isNavigating) {
      timeout.current = setTimeout(() => {
        setVisible(true);
      }, 100);
    } else if (animationComplete) {
      timeout.current = setTimeout(() => {
        setVisible(false);
      }, 300);
    }
  }, [isNavigating, animationComplete]);

  useEffect(() => {
    if (!progressRef.current) return;

    const controller = new AbortController();

    if (isNavigating) {
      return setAnimationComplete(false);
    }

    Promise.all(
      progressRef.current
        .getAnimations({ subtree: true })
        .map(animation => animation.finished)
    ).then(() => {
      if (controller.signal.aborted) return;
      setAnimationComplete(true);
    });

    return () => {
      controller.abort();
    };
  }, [isNavigating]);

  return (
    <div
      className={styles.progress}
      data-status={isNavigating ? 'loading' : 'idle'}
      data-visible={visible}
      data-complete={animationComplete}
      ref={progressRef}
    />
  );
}
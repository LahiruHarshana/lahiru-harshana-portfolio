'use client';

import { useEffect, useRef, createContext, useContext, ReactNode } from 'react';
import Lenis from 'lenis';
import { useMotionValue, useSpring, MotionValue } from 'framer-motion';

interface SmoothScrollContextValue {
  scrollY: MotionValue<number>;
  scrollYProgress: MotionValue<number>;
  scrollX: MotionValue<number>;
  scrollXProgress: MotionValue<number>;
}

const SmoothScrollContext = createContext<SmoothScrollContextValue | null>(null);

export const useSmoothScroll = () => {
  const context = useContext(SmoothScrollContext);
  if (!context) {
    throw new Error('useSmoothScroll must be used within SmoothScrollProvider');
  }
  return context;
};

interface SmoothScrollProviderProps {
  children: ReactNode;
}

export default function SmoothScrollProvider({ children }: SmoothScrollProviderProps) {
  const lenisRef = useRef<Lenis | null>(null);

  const scrollY = useMotionValue(0);
  const scrollYProgress = useMotionValue(0);
  const scrollX = useMotionValue(0);
  const scrollXProgress = useMotionValue(0);

  useEffect(() => {
    const isMobile = typeof window !== 'undefined' && window.innerWidth < 768;

    if (isMobile) {
      const handleScroll = () => {
        const scrollHeight = document.documentElement.scrollHeight - window.innerHeight;
        scrollY.set(window.scrollY);
        scrollYProgress.set(window.scrollY / scrollHeight);
        scrollX.set(window.scrollX);
        scrollXProgress.set(window.scrollX / (document.documentElement.scrollWidth - window.innerWidth));
      };
      window.addEventListener('scroll', handleScroll, { passive: true });
      return () => window.removeEventListener('scroll', handleScroll);
    }

    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      orientation: 'vertical',
      gestureOrientation: 'vertical',
      smoothWheel: true,
      touchMultiplier: 2,
    });

    lenisRef.current = lenis;

    lenis.on('scroll', ({ scroll, limit, velocity, direction, progress }: any) => {
      scrollY.set(scroll);
      scrollYProgress.set(progress);
    });

    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    return () => {
      lenis.destroy();
    };
  }, [scrollY, scrollYProgress, scrollX, scrollXProgress]);

  return (
    <SmoothScrollContext.Provider value={{ scrollY, scrollYProgress, scrollX, scrollXProgress }}>
      {children}
    </SmoothScrollContext.Provider>
  );
}

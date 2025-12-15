import { useState, useEffect, useRef } from 'react';

export function useScrollToTop() {
  const [showScrollTop, setShowScrollTop] = useState(false);
  const lastScrollY = useRef(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      const isMobile = window.innerWidth <= 768;

      // Show if scrolled > 300px AND (not mobile OR scrolling up)
      setShowScrollTop(
        currentScrollY > 300 && (!isMobile || currentScrollY < lastScrollY.current)
      );

      lastScrollY.current = currentScrollY;
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0 });
  };

  return { showScrollTop, scrollToTop };
}

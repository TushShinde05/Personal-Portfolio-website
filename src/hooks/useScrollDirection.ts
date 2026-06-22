import { useState, useEffect } from 'react';

export const useScrollDirection = () => {
  const [scrollDirection, setScrollDirection] = useState<'up' | 'down' | null>(null);

  useEffect(() => {
    let lastScrollY = window.pageYOffset;

    const updateScrollDirection = () => {
      const scrollY = window.pageYOffset;
      
      // Minimum delta to trigger scroll direction change
      if (Math.abs(scrollY - lastScrollY) < 10) {
        return;
      }
      
      const direction = scrollY > lastScrollY ? 'down' : 'up';
      setScrollDirection(direction);
      lastScrollY = scrollY > 0 ? scrollY : 0;
    };

    window.addEventListener('scroll', updateScrollDirection);
    return () => window.removeEventListener('scroll', updateScrollDirection);
  }, []);

  return scrollDirection;
};

export default useScrollDirection;

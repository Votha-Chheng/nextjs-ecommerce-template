import { useState, useEffect } from 'react';

function getScrollY() {
  const { scrollY } = window;

  return scrollY;
}

export default function useScrollPosition() {
  const [scrollY, setScrollY] = useState<number>(0);

  useEffect(() => {
    function handleScrollY() {
      setScrollY(getScrollY());
    }

    window.addEventListener('scroll', handleScrollY);
    return () => window.removeEventListener('scroll', handleScrollY);
  }, []);

  return scrollY;
}
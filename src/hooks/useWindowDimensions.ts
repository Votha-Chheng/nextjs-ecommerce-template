'use client'

import { useState, useEffect } from 'react';

function getWindowDimensions() {
  let dimensions = {
    widthDimension: 0,
    heightDimension: 0
  };

  if (typeof window !== 'undefined') {
    const width = window.innerWidth
    const height = window.innerHeight

    dimensions = {
      widthDimension: width,
      heightDimension: height
    }

    
  }
  return dimensions
}

export default function useWindowDimensions() {
  const [windowDimensions, setWindowDimensions] = useState<{widthDimension: number, heightDimension: number}>(getWindowDimensions());

  useEffect(() => {
    function handleResize() {
      setWindowDimensions(getWindowDimensions());
    }

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return windowDimensions;
}
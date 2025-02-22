'use client';
import React, { useEffect } from 'react';
import Lenis from '@studio-freight/lenis';

type Props = {
  children: React.ReactNode;
};

const SmoothScrolling: React.FC<Props> = ({ children }) => {
  useEffect(() => {
    const lenis = new Lenis();

    // Use requestAnimationFrame to continuously update the scroll
    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }
    requestAnimationFrame(raf);
  }, []);

  return <div>{children}</div>;
};

export default SmoothScrolling;

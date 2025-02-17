import { useEffect } from 'react';
import Lenis from '@studio-freight/lenis';

const useSmoothScroll = () => {
  useEffect(() => {
    const lenis = new Lenis({
      lerp: 0.1, // Lerp (linear interpolation) factor for the smoothness
      smoothWheel: true, // Enable smooth scroll with the mouse wheel
      smoothTouch: false, // Disable smooth scroll for touch events
    });

    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    return () => {
      lenis.destroy(); // Clean up Lenis when the component unmounts
    };
  }, []);
};

export default useSmoothScroll;

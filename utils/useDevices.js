import { useEffect, useState } from 'react';
import { MOBILE_BREAKPOINT, TABLET_BREAKPOINT } from 'utils/constants';

const useDevices = () => {
  const [width, setWidth] = useState(0);
  useEffect(() => {
    const updateWidth = () => {
      setWidth(window.innerWidth);
    };
    window.addEventListener('resize', updateWidth);
    updateWidth();
    return () => window.removeEventListener('resize', updateWidth);
  }, []);

  return {
    isMobile: width <= MOBILE_BREAKPOINT,
    isTablet: width <= TABLET_BREAKPOINT,
    isDesktop: width > TABLET_BREAKPOINT,
  };
};

export default useDevices;

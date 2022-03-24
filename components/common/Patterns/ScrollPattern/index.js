import { useEffect, useState } from 'react';
import useScrollTracker from 'utils/useScrollTracker';

const ScrollPattern = () => {
  const [scrollTop, setScrollTop] = useState(0);

  const rightScrollValue = scrollTop * 0.5;
  const leftScrollValue = scrollTop * 0.5 * -1;

  useEffect(() => {
    const onScroll = e => {
      setScrollTop(e.target.documentElement.scrollTop);
    };
    window.addEventListener('scroll', onScroll);

    const rightScrollPatterns = document.getElementsByClassName(
      'right-scroll-pattern'
    );
    const leftScrollPatterns = document.getElementsByClassName(
      'left-scroll-pattern'
    );
    Array.from(rightScrollPatterns).forEach(pattern => {
      pattern.style.transform = `rotate(${rightScrollValue}deg)`;
    });
    Array.from(leftScrollPatterns).forEach(pattern => {
      pattern.style.transform = `rotate(${leftScrollValue}deg)`;
    });

    return () => window.removeEventListener('scroll', onScroll);
  }, [scrollTop]);
  return <div />;
};

export default ScrollPattern;

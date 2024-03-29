import { useState, useLayoutEffect } from 'react';

const useScrollTracker = (trackScrollDepths, callback) => {
  const [state, setState] = useState({
    scrollDepths: trackScrollDepths,
    scrollY: null,
  });

  const { scrollDepths, scrollY } = state;

  useLayoutEffect(() => {
    const endScrollTracker = () =>
      window.removeEventListener('scroll', handleScroll);

    const handleScroll = () => {
      const h = document.documentElement;
      const b = document.body;

      const scrollTop = h.scrollTop || b.scrollTop;
      const scrollHeight = h.scrollHeight || b.scrollHeight;
      const clientHeight = h.clientHeight;

      const scrollPercent = (scrollTop / (scrollHeight - clientHeight)) * 100;

      if (scrollDepths) {
        const nextMinDepth = Math.min(...scrollDepths, scrollHeight);

        if (scrollPercent >= nextMinDepth) {
          const updatedScrollDepths = scrollDepths.filter(
            depth => depth !== nextMinDepth
          );

          if (updatedScrollDepths.length === 0) {
            endScrollTracker();
          }

          if (callback) {
            callback({
              scrollY: nextMinDepth,
              scrollPercent,
              remainingDepths: updatedScrollDepths,
            });
          }
          setState({
            scrollY: nextMinDepth,
            scrollDepths: updatedScrollDepths,
          });
        }
      } else {
        setState({ ...state, scrollY: scrollPercent });
      }
    };

    window.addEventListener('scroll', handleScroll);

    return endScrollTracker;
  }, [scrollDepths, scrollY, state]);

  return { scrollY };
};

export default useScrollTracker;

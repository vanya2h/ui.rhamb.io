import { useState, useEffect } from 'react';

const getActualBreakpoint = (ranges) => {
  const viewportWidth = window.innerWidth;

  let result;

  Object.keys(ranges).forEach((breakpoint) => {
    if (result) return;

    if (
      ranges[breakpoint][0] < viewportWidth &&
      viewportWidth < ranges[breakpoint][1]
    ) {
      result = breakpoint;
    }
  });

  return result;
};

export const useActualBreakpoint = (theme) => {
  const [actualBreakpoint, setActualBreakpoint] = useState(
    getActualBreakpoint(theme.breakpoints.gridRanges),
  );

  const handleResize = () => {
    setActualBreakpoint(getActualBreakpoint(theme.breakpoints.gridRanges));
  };

  useEffect(() => {
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return actualBreakpoint;
};

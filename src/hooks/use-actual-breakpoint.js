import { useState, useEffect } from 'react';

const getBreakpoint = (ranges, options) => {
  const viewportWidth = window.innerWidth;

  let result;

  Object.keys(ranges).forEach((breakpoint) => {
    if (!result && options[breakpoint]) {
      result = breakpoint;
    } else if (options[breakpoint] && viewportWidth > ranges[breakpoint][0]) {
      result = breakpoint;
    }
  });

  return result;
};

export const useActualBreakpoint = (theme, options) => {
  const [breakpoint, setBreakpoint] = useState(
    getBreakpoint(theme.breakpoints.gridRanges, options),
  );

  const handleResize = () => {
    setBreakpoint(getBreakpoint(theme.breakpoints.gridRanges, options));
  };

  useEffect(() => {
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return breakpoint;
};

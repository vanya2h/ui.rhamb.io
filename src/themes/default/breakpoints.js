const gridRanges = {
  handy: [0, 574],
  mobile: [575, 767],
  tablet: [768, 991],
  desktop: [992, 1199],
  tv: [1200, 10 ** 5],
};

const generateQuery = (point) => `(min-width: ${point[0]}px)`;

const generateBreakpoints = (ranges) => {
  const breakpoints = {};

  Object.keys(ranges).forEach((point) => {
    if (ranges[point]) {
      breakpoints[point] = generateQuery(ranges[point]);
    }
  });

  return breakpoints;
};

export const breakpoints = {
  gridRanges,
  gridColumnCount: 12,
  ...generateBreakpoints(gridRanges),
};

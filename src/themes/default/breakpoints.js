const gridRanges = {
  handy: [0, 480],
  mobile: [481, 768],
  tablet: [769, 992],
  desktop: [993, 1200],
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

const isSmallestRange = (ranges, target) =>
  Object.values(ranges).every((range) => range[0] > target[0]);

const generateResponsiveStyles = (ranges) => {
  const result = {};

  Object.keys(ranges).forEach((range) => {
    if (isSmallestRange(ranges, ranges[range])) {
      result[
        `@media only screen and (min-width: ${
          ranges[range][0]
        }px) and (max-width: ${ranges[range][1]}px)`
      ] = {
        container: {
          width: '100%',
          maxWidth: '100%',
        },
      };
    } else {
      const optimalWidth = ranges[range][0] - 50;

      result[
        `@media only screen and (min-width: ${
          ranges[range][0]
        }px) and (max-width: ${ranges[range][1]}px)`
      ] = {
        container: {
          width: optimalWidth,
          maxWidth: optimalWidth,
        },
      };
    }
  });

  return result;
};

export const styles = (theme) => ({
  container: {
    display: 'block',
    maxWidth: '100%',
    margin: '0 auto',
    paddingLeft: '1rem',
    paddingRight: '1rem',
  },
  container_fluid: {
    width: '100% !important',
    maxWidth: '100% !important',
  },
  container_text: {
    maxWidth: '610px !important',
  },
  ...generateResponsiveStyles(theme.breakpoints.gridRanges),
});

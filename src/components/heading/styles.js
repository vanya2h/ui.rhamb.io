const levelsCount = 6;

const generateLevel = (theme, ratio) => {
  const realRatio = levelsCount - ratio;

  return {
    fontSize: `${0.2 * realRatio + 0.85}rem`,
    '&$mega': {
      fontSize: `${0.2 * realRatio + 1}rem`,
    },
    [`@media screen and ${theme.breakpoints.tablet}`]: {
      fontSize: `${0.225 * realRatio + 0.95}rem`,
      '&$mega': {
        fontSize: `${0.225 * realRatio + 1.1}rem`,
      },
    },
    [`@media screen and ${theme.breakpoints.desktop}`]: {
      fontSize: `${0.25 * realRatio + 1.1}rem`,
      '&$mega': {
        fontSize: `${0.25 * realRatio + 1.2}rem`,
      },
    },
  };
};

export const styles = (theme) => {
  const result = {
    mega: {
      fontWeight: '300',
    },
  };

  for (let i = 1; i <= levelsCount; i += 1) {
    result[`h${i}`] = generateLevel(theme, i);
  }

  return result;
};

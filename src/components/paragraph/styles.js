export const styles = (theme) => ({
  paragraph: {
    fontSize: '0.9rem',
    [`@media screen and ${theme.breakpoints.tablet}`]: {
      fontSize: '1rem',
    },
    [`@media screen and ${theme.breakpoints.desktop}`]: {
      fontSize: '1.02rem',
    },
    [`@media screen and ${theme.breakpoints.tv}`]: {
      fontSize: '1.1rem',
    },
  },
  primary: {
    fontSize: '1.09rem',
    [`@media screen and ${theme.breakpoints.tablet}`]: {
      fontSize: '1.14rem',
    },
    [`@media screen and ${theme.breakpoints.desktop}`]: {
      fontSize: '1.2rem',
    },
    [`@media screen and ${theme.breakpoints.tv}`]: {
      fontSize: '1.23rem',
    },
  },
  light: {
    opacity: '0.7',
  },
});

export const styles = (theme) => ({
  text: {
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
  light: {
    opacity: '0.7',
  },
});

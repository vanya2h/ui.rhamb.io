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
  [`@media only screen and ${theme.breakpoints.mobile}`]: {
    container: {
      width: '100%',
      maxWidth: '100%',
    },
  },
  [`@media only screen and ${theme.breakpoints.tablet}`]: {
    container: {
      width: '723px',
    },
  },
  [`@media only screen and ${theme.breakpoints.desktop}`]: {
    container: {
      width: '933px',
    },
  },
  [`@media only screen and ${theme.breakpoints.tv}`]: {
    container: {
      width: '1127px',
    },
  },
});

export const styles = (theme) => ({
  container: {
    display: 'block',
    maxWidth: '100%',
  },
  container_fluid: {
    width: '100% !important',
    maxWidth: '100% !important',
  },
  container_text: {
    maxWidth: '610px',
  },
  [`@media only screen and ${theme.breakpoints.mobile}`]: {
    container: {
      width: '100%',
      maxWidth: '100%',
      paddingLeft: '1rem',
      paddingRight: '1rem',
    },
  },
  [`@media only screen and ${theme.breakpoints.tablet}`]: {
    container: {
      width: '723px',
      marginLeft: 'auto',
      marginRight: 'auto',
    },
  },
  [`@media only screen and ${theme.breakpoints.desktop}`]: {
    container: {
      width: '933px',
      marginLeft: 'auto',
      marginRight: 'auto',
    },
  },
  [`@media only screen and ${theme.breakpoints.tv}`]: {
    container: {
      width: '1127px',
      marginLeft: 'auto',
      marginRight: 'auto',
    },
  },
});

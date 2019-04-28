export const styles = {
  list: {
    listStyleType: 'none',
    padding: 0,
    margin: 0,
    display: 'flex',
    flexFlow: 'row wrap',
    '& > * + *': {
      marginLeft: '1rem',
    },
  },
};

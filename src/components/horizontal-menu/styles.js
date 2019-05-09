export const styles = (theme) => ({
  list: {
    extend: [theme.utils.flexbox.row, theme.utils.flexbox.wrap],
    listStyleType: 'none',
    padding: 0,
    margin: 0,
    '& > * + *': {
      marginLeft: '1rem',
    },
  },
});

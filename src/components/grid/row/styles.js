export const styles = (theme) => ({
  row: {
    extend: [theme.utils.flexbox.row, theme.utils.flexbox.wrap],
    flex: '0 1 auto',
    margin: '1rem -0.5rem',
  },
  row_reverse: {
    extend: [theme.utils.flexbox.row_r],
  },
});

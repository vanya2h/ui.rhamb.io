import chroma from 'chroma-js';

export const styles = (theme) => ({
  input: {
    background: 'transparent',
    height: theme.sizes.elementHeight,
    border: `1px solid ${chroma(theme.colors.contrast).brighten(3)}`,
    borderRadius: '27px',
    padding: '0 1rem',
    fontSize: '.9rem',
    outline: 'none',
    transition: '.2s all ease-in-out',
    '&:focus': {
      borderColor: theme.colors.contrast,
      '&::placeholder': {
        color: chroma(theme.colors.contrast).brighten(2),
      },
    },
  },
  fluid: {
    width: '100%',
  },
  invalid: {
    borderColor: chroma(theme.colors.danger).darken(1),
    color: chroma(theme.colors.danger).darken(1),
    '&:focus': {
      color: theme.colors.contrast,
    },
  },
});

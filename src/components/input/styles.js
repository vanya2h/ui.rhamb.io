import chroma from 'chroma-js';

export const styles = (theme) => ({
  input: {
    background: 'transparent',
    height: theme.sizes.elementHeight,
    border: `1px solid rgba(${chroma(theme.colors.contrast)
      .brighten(3)
      .rgba()})`,
    borderRadius: '27px',
    padding: '0 1rem',
    fontSize: '.9rem',
    outline: 'none',
    transition: '.2s all ease-in-out',
    '&:focus': {
      borderColor: theme.colors.contrast,
      '&::placeholder': {
        color: `rgba(${chroma(theme.colors.contrast)
          .brighten(2)
          .rgba()})`,
      },
    },
  },
  input_invalid: {
    borderColor: `rgba(${chroma(theme.colors.danger)
      .darken(1)
      .rgba()})`,
    color: `rgba(${chroma(theme.colors.danger)
      .darken(1)
      .rgba()})`,
    '&:focus': {
      color: theme.colors.contrast,
    },
  },
  input_fluid: {
    width: '100%',
  },
});

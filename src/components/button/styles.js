import chroma from 'chroma-js';

export const styles = (theme) => ({
  button: {
    extend: [theme.utils.flexbox.row, theme.utils.flexbox.ai_c],
    height: theme.sizes.elementHeight,
    padding: '0 1.5rem',
    background: theme.colors.contrast_maximum,
    color: theme.colors.basic,
    borderRadius: '26px',
    border: `1px solid ${theme.colors.contrast_maximum}`,
    transition: '.2s all ease-in-out',
    outline: 'none',
    cursor: 'pointer',
    fontSize: '0.85rem',
    '&:hover': {
      background: `rgba(${chroma(theme.colors.contrast_maximum)
        .brighten(0.5)
        .rgba()})`,
      borderColor: `rgba(${chroma(theme.colors.contrast_maximum)
        .brighten(0.5)
        .rgba()})`,
      '& $arrow': {
        marginLeft: '10px',
      },
    },
    '&:active': {
      background: theme.colors.contrast_maximum,
      color: theme.colors.basic,
    },
  },
  arrow: {
    transition: '.2s all ease-in-out',
    marginLeft: '0.5rem',
  },
  icon: {
    marginRight: '0.5rem',
    verticalAlign: 'middle',
    height: '15px',
  },
  accent: {
    '&$button': {
      background: theme.colors.accent,
      borderColor: theme.colors.accent,
      color: theme.colors.basic,
      '&:hover': {
        background: `rgba(${chroma(theme.colors.accent)
          .darken(0.5)
          .rgba()})`,
        borderColor: `rgba(${chroma(theme.colors.accent)
          .darken(0.5)
          .rgba()})`,
      },
    },
    '&$button$ghost': {
      color: theme.colors.accent,
      borderColor: theme.colors.accent,
      background: 'transparent',
    },
  },
  ghost: {
    '&$button': {
      background: 'transparent',
      color: theme.colors.contrast,
      '&:hover': {
        color: theme.colors.basic,
        background: theme.colors.contrast_maximum,
        borderColor: theme.colors.contrast_maximum,
      },
    },
  },
});

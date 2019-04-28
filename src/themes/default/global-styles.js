import chroma from 'chroma-js';

export const globalStyles = (theme) => ({
  '@global': {
    '*': {
      boxSizing: 'border-box',
    },
    'body, html': {
      fontFamily: theme.typography.fontFamily,
      fontSmoothing: theme.typography.fontSmoothing,
      textSizeAdjust: theme.typography.textSizeAdjust,
      fontSize: theme.typography.fontSize,
      quotes: theme.typography.quotes,
      lineHeight: theme.typography.lineHeight,
      color: theme.colors.contrast_maximum,
    },
    '::placeholder': {
      color: chroma(theme.colors.contrast)
        .alpha(0.4)
        .hex(),
    },
    'h1, h2, h3, h4, h5, h6, p': {
      margin: 0,
    },
    a: {
      textDecoration: 'none',
      display: 'inline-block',
      transition: '.15s all ease-in',
      outline: 'none',
      color: chroma(theme.colors.contrast)
        .alpha(0.8)
        .hex(),
    },
    'a:hover': {
      color: theme.colors.contrast,
      boxShadow: `0 1px rgba(${chroma(theme.colors.contrast)
        .alpha(0.5)
        .rgba()})`,
    },
    'a:focus': {
      color: theme.colors.contrast,
      boxShadow: `0 1px ${theme.colors.contrast}`,
    },
  },
});

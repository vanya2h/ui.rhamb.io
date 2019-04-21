import chroma from 'chroma-js';

export const globalStyles = {
  'body, html': (props) => ({
    fontFamily: props.theme.typography.fontFamily,
    fontSmoothing: props.theme.typography.fontSmoothing,
    textSizeAdjust: props.theme.typography.textSizeAdjust,
    fontSize: props.theme.typography.fontSize,
    quotes: props.theme.typography.quotes,
    lineHeight: props.theme.typography.lineHeight,
    color: props.theme.colors.contrast,
  }),
  '::placeholder': (props) => ({
    color: chroma(props.theme.colors.contrast).alpha(0.4),
  }),
  'h1, h2, h3, h4, h5, h6, p': {
    margin: 0,
  },
  a: (props) => ({
    textDecoration: 'none',
    display: 'inline-block',
    transition: '.15s all ease-in',
    outline: 'none',
    color: chroma(props.theme.colors.contrast).alpha(0.8),
  }),
  'a:hover': (props) => ({
    color: props.theme.colors.contrast,
    boxShadow: `0 1px ${chroma(props.theme.colors.contrast).alpha(0.5)}`,
  }),
  'a:focus': (props) => ({
    color: props.theme.colors.contrast,
    boxShadow: `0 1px ${props.theme.colors.contrast}`,
  }),
};

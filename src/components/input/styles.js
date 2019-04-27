import chroma from 'chroma-js';

export const styles = {
  input: {
    background: 'transparent',
    height: (props) => props.theme.sizes.elementHeight,
    border: (props) =>
      `1px solid ${chroma(props.theme.colors.contrast).brighten(3)}`,
    borderRadius: '27px',
    padding: '0 1rem',
    fontSize: '.9rem',
    outline: 'none',
    transition: '.2s all ease-in-out',
    '&:focus': {
      borderColor: (props) => props.theme.colors.contrast,
      '&::placeholder': {
        color: (props) => chroma(props.theme.colors.contrast).brighten(2),
      },
    },
  },
  fluid: {
    width: '100%',
  },
  invalid: {
    borderColor: (props) => chroma(props.theme.colors.danger).darken(1),
    color: (props) => chroma(props.theme.colors.danger).darken(1),
    '&:focus': {
      color: (props) => props.theme.colors.contrast,
    },
  },
};

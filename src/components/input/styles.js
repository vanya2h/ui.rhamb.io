import chroma from 'chroma-js';

export const styles = {
  input: {
    background: 'transparent',
    border: (props) =>
      `1px solid ${chroma(props.theme.colors.contrast).brighten(3)}`,
    borderRadius: '27px',
    padding: '.57rem 1rem',
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
};

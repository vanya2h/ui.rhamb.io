import chroma from 'chroma-js';

export const styles = {
  button: {
    padding: '.57rem 1.1rem',
    display: 'flex',
    alignItems: 'center',
    background: (props) => props.theme.colors.contrast_maximum,
    color: (props) => props.theme.colors.basic,
    borderRadius: '26px',
    border: (props) => `1px solid ${props.theme.colors.contrast_maximum}`,
    transition: '.2s all ease-in-out',
    outline: 'none',
    cursor: 'pointer',
    fontSize: '0.85rem',
    '&:hover': {
      background: (props) =>
        chroma(props.theme.colors.contrast_maximum).brighten(0.5),
      borderColor: (props) =>
        chroma(props.theme.colors.contrast_maximum).brighten(0.5),
      '& $arrow': {
        marginLeft: '10px',
      },
    },
    '&:active': {
      background: (props) => props.theme.colors.contrast_maximum,
      color: (props) => props.theme.colors.basic,
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
      background: (props) => props.theme.colors.accent,
      borderColor: (props) => props.theme.colors.accent,
      color: (props) => props.theme.colors.basic,
      '&:hover': {
        background: (props) => chroma(props.theme.colors.accent).darken(0.5),
        borderColor: (props) => chroma(props.theme.colors.accent).darken(0.5),
      },
    },
    '&$button$ghost': {
      color: (props) => props.theme.colors.accent,
      borderColor: (props) => props.theme.colors.accent,
      background: 'transparent',
    },
  },
  ghost: {
    '&$button': {
      background: 'transparent',
      color: (props) => props.theme.colors.contrast,
      '&:hover': {
        color: (props) => props.theme.colors.basic,
      },
    },
  },
};

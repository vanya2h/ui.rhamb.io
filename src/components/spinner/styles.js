export const styles = (theme) => ({
  root: {
    margin: 'auto',
    position: 'relative',
    transform: 'rotateZ(45deg)',
  },
  cube: {
    float: 'left',
    width: '50%',
    height: '50%',
    position: 'relative',
    transform: 'scale(1.1)',
  },
  inner: {
    content: '',
    position: 'absolute',
    top: '0',
    left: '0',
    width: '100%',
    height: '100%',
    backgroundColor: theme.colors.contrast_maximum,
    animation: 'anim 2.4s infinite linear both',
    transformOrigin: '100% 100%"',
  },
  cube_02: {
    transform: 'scale(1.1) rotateZ(90deg)',
    '& $inner': {
      animationDelay: '0.3s',
    },
  },
  cube_03: {
    transform: 'scale(1.1) rotateZ(180deg)',
    '& $inner': {
      animationDelay: '0.6s',
    },
  },
  cube_04: {
    transform: 'scale(1.1) rotateZ(270deg)',
    '& $inner': {
      animationDelay: '0.9s',
    },
  },
  '@keyframes anim': {
    '0%, 10%': {
      transform: 'perspective(140px) rotateX(-180deg)',
      opacity: '0',
    },
    '25%, 75%': {
      transform: 'perspective(140px) rotateX(0deg)',
      opacity: '1',
    },
    '90%, 100%': {
      transform: 'perspective(140px) rotateY(180deg)',
      opacity: '0',
    },
  },
});

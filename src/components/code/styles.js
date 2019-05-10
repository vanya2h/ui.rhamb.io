import chroma from 'chroma-js';

export const styles = (theme) => ({
  code: {
    display: 'inline',
    background: `rgba(${chroma(theme.colors.accent)
      .alpha(0.1)
      .rgba()})`,
    borderRadius: '4px',
    padding: '4px 5px',
    fontFamily: 'monospace',
  },
});

import chroma from 'chroma-js';

export const styles = {
  code: {
    display: 'inline',
    background: (props) => chroma(props.theme.colors.accent).alpha(0.1),
    borderRadius: '4px',
    padding: '4px 5px',
    fontFamily: 'monospace',
  },
};

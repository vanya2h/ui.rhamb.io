import withStyles, { withTheme } from 'react-jss';
import { ProgressiveRenderRaw } from './raw';
import { styles } from './styles';

export const ProgressiveRender = withStyles(styles)(
  withTheme(ProgressiveRenderRaw),
);

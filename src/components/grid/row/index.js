import withStyles, { withTheme } from 'react-jss';
import { styles } from './styles';
import { RowRaw } from './raw';

export const Row = withStyles(styles)(withTheme(RowRaw));

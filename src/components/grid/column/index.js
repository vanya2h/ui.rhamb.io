import withStyles, { withTheme } from 'react-jss';
import { styles } from './styles';
import { ColumnRaw } from './raw';

export const Column = withStyles(styles)(withTheme(ColumnRaw));

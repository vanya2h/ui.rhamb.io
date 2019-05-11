import withStyles from 'react-jss';
import { styles } from './styles';
import { GridRaw } from './raw';
import { Row } from './row';
import { Column } from './column';

export const Grid = withStyles(styles)(GridRaw);

Grid.Row = Row;
Grid.Column = Column;

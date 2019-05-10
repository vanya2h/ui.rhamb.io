import withStyles from 'react-jss';
import { VerticalMenuRaw } from './raw';
import { VerticalMenuItem } from './item';
import { styles } from './styles';

export const VerticalMenu = withStyles(styles)(VerticalMenuRaw);

VerticalMenu.Item = VerticalMenuItem;

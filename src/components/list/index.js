import withStyles from 'react-jss';
import { ListRaw } from './raw';
import { ListItem } from './item';
import { styles } from './styles';

export const List = withStyles(styles)(ListRaw);

List.Item = ListItem;

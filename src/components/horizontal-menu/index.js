import withStyles from 'react-jss';
import { styles } from './styles';
import { HorizontalMenuRaw } from './raw';
import { HorizontalMenuItem } from './item';

export const HorizontalMenu = withStyles(styles)(HorizontalMenuRaw);

HorizontalMenu.Item = HorizontalMenuItem;

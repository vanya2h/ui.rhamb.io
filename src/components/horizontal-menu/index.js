import React from 'react';
import { compose, dissoc } from 'ramda';
import PropTypes from 'prop-types';
import { List } from '~/components/list';
import classnames from 'classnames';
import { withTheme } from '~/providers/theme-provider';
import withStyles from 'react-jss';
import { styles } from './styles';

const HorizontalMenuItemRaw = ({ children, className, classes, ...rest }) => (
  <List.Item
    className={classnames(className, classes.horizontalMenuItem)}
    {...dissoc('theme', rest)}
  >
    {children}
  </List.Item>
);

HorizontalMenuItemRaw.propTypes = {
  children: PropTypes.any.isRequired,
  className: PropTypes.string,
  classes: PropTypes.object,
};

const enhanceHorizontalMenuItem = compose(
  withTheme,
  withStyles(styles),
);

const HorizontalMenuItem = enhanceHorizontalMenuItem(HorizontalMenuItemRaw);

const HorizontalMenuRaw = ({ children, className, classes, ...rest }) => (
  <List
    className={classnames(className, classes.horizontalMenu)}
    {...dissoc('theme', rest)}
  >
    {children}
  </List>
);

HorizontalMenuRaw.propTypes = {
  children: PropTypes.any,
  as: PropTypes.string,
  className: PropTypes.string,
  classes: PropTypes.object,
  theme: PropTypes.any,
};

const enhance = compose(
  withTheme,
  withStyles(styles),
);

export const HorizontalMenu = enhance(HorizontalMenuRaw);

HorizontalMenu.Item = HorizontalMenuItem;

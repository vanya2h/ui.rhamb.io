import React from 'react';
import { compose, dissoc } from 'ramda';
import PropTypes from 'prop-types';
import { List } from '~/components/list';
import classnames from 'classnames';
import { withTheme } from '~/providers/theme-provider';
import withStyles from 'react-jss';
import { styles } from './styles';

const VerticalMenuItemRaw = ({ children, className, classes, ...rest }) => (
  <List.Item
    className={classnames(className, classes.verticalMenuItem)}
    {...dissoc('theme', rest)}
  >
    {children}
  </List.Item>
);

VerticalMenuItemRaw.propTypes = {
  children: PropTypes.any.isRequired,
  className: PropTypes.string,
  classes: PropTypes.object,
};

const enhanceVerticalMenuItem = compose(
  withTheme,
  withStyles(styles),
);

const VerticalMenuItem = enhanceVerticalMenuItem(VerticalMenuItemRaw);

const VerticalMenuRaw = ({ children, className, classes, ...rest }) => (
  <List
    className={classnames(className, classes.verticalMenu)}
    {...dissoc('theme', rest)}
  >
    {children}
  </List>
);

VerticalMenuRaw.propTypes = {
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

export const VerticalMenu = enhance(VerticalMenuRaw);

VerticalMenu.Item = VerticalMenuItem;

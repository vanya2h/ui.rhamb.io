import React from 'react';
import { dissoc } from 'ramda';
import PropTypes from 'prop-types';
import { List } from '../list';
import classnames from 'classnames';
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

const VerticalMenuItem = withStyles(styles)(VerticalMenuItemRaw);

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

export const VerticalMenu = withStyles(styles)(VerticalMenuRaw);

VerticalMenu.Item = VerticalMenuItem;

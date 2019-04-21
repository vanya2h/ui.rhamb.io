import React from 'react';
import { compose, dissoc } from 'ramda';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import { withTheme } from '~/providers/theme-provider';
import withStyles from 'react-jss';
import { styles } from './styles';

const ListItemRaw = ({ children, className, classes, ...rest }) => {
  return (
    <li
      className={classnames(className, classes.listItem)}
      {...dissoc('theme', rest)}
    >
      {children}
    </li>
  );
};

ListItemRaw.propTypes = {
  children: PropTypes.any.isRequired,
  classes: PropTypes.object,
  className: PropTypes.string,
};

const listItemEnhancer = compose(
  withTheme,
  withStyles(styles),
);

const ListItem = listItemEnhancer(ListItemRaw);

export const ListRaw = ({
  numbered,
  children,
  className,
  classes,
  ...rest
}) => {
  const element = numbered ? 'ol' : 'ul';

  return React.createElement(
    element,
    {
      className: classnames(className, classes.list),
      ...dissoc('theme', rest),
    },
    children,
  );
};

ListRaw.propTypes = {
  children: PropTypes.any,
  as: PropTypes.string,
  className: PropTypes.string,
  classes: PropTypes.object,
  theme: PropTypes.any,
  numbered: PropTypes.bool,
};

const listEnhancer = compose(
  withTheme,
  withStyles(styles),
);

export const List = listEnhancer(ListRaw);

List.Item = ListItem;

import React from 'react';
import PropTypes from 'prop-types';
import { dissoc } from 'ramda';
import classnames from 'classnames';
import { List } from '../../list';

export const VerticalMenuItemRaw = ({
  children,
  className,
  classes,
  ...rest
}) => (
  <List.Item
    className={classnames(className, classes.root)}
    {...dissoc('theme', rest)}
  >
    {children}
  </List.Item>
);

VerticalMenuItemRaw.propTypes = {
  children: PropTypes.any.isRequired,
  classes: PropTypes.object.isRequired,
  className: PropTypes.string,
};

VerticalMenuItemRaw.defaultProps = {
  className: null,
};

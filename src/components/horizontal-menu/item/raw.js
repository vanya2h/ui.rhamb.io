import React from 'react';
import classnames from 'classnames';
import { dissoc } from 'ramda';
import PropTypes from 'prop-types';
import { List } from '../../list';

export const HorizontalMenuItemRaw = ({
  children,
  className,
  classes,
  ...rest
}) => (
  <List.Item
    className={classnames(className, classes.item)}
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

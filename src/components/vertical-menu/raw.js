import React from 'react';
import { dissoc } from 'ramda';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import { List } from '../list';

export const VerticalMenuRaw = ({ children, className, classes, ...rest }) => (
  <List
    className={classnames(className, classes.list)}
    {...dissoc('theme', rest)}
  >
    {children}
  </List>
);

VerticalMenuRaw.propTypes = {
  children: PropTypes.any.isRequired,
  classes: PropTypes.object.isRequired,
  className: PropTypes.string,
};

VerticalMenuRaw.defaultProps = {
  className: null,
};

import React from 'react';
import { dissoc } from 'ramda';
import PropTypes from 'prop-types';
import classnames from 'classnames';

export const ListItemRaw = ({ children, className, classes, ...rest }) => {
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

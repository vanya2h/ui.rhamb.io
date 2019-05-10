import React from 'react';
import { dissoc } from 'ramda';
import PropTypes from 'prop-types';
import classnames from 'classnames';

export const CodeRaw = ({ children, className, classes, ...rest }) => {
  return (
    <code
      className={classnames(className, classes.code)}
      {...dissoc('theme', rest)}
    >
      {children}
    </code>
  );
};

CodeRaw.propTypes = {
  children: PropTypes.any.isRequired,
  className: PropTypes.string,
  classes: PropTypes.object.isRequired,
};

CodeRaw.defaultProps = {
  className: null,
};

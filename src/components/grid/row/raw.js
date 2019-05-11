import React from 'react';
import classnames from 'classnames';
import PropTypes from 'prop-types';

export const RowRaw = ({ className, reverse, classes, children, ...rest }) => (
  <div className={classnames(classes.row, className)} {...rest}>
    {children}
  </div>
);

RowRaw.propTypes = {
  classes: PropTypes.object.isRequired,
  children: PropTypes.any.isRequired,
  className: PropTypes.string,
  reverse: PropTypes.bool,
};

RowRaw.defaultProps = {
  reverse: false,
  className: null,
};

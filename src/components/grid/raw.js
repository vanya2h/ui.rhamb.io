import React from 'react';
import classnames from 'classnames';
import PropTypes from 'prop-types';

export const GridRaw = ({ classes, children, className, ...rest }) => {
  return (
    <div className={classnames(classes.grid, className)} {...rest}>
      {children}
    </div>
  );
};

GridRaw.propTypes = {
  classes: PropTypes.object.isRequired,
  children: PropTypes.any.isRequired,
  className: PropTypes.string,
};

GridRaw.defaultProps = {
  className: null,
};

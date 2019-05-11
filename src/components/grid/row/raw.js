import React from 'react';
import classnames from 'classnames';
import PropTypes from 'prop-types';
import { useActualBreakpoint } from '../../../hooks/use-actual-breakpoint';

export const RowRaw = ({
  options,
  className,
  classes,
  theme,
  children,
  style,
  ...rest
}) => {
  const point = useActualBreakpoint(theme, options);

  const flexDirection = point && options[point].reverse && 'row-reverse';

  return (
    <div
      className={classnames(classes.row, className)}
      style={{
        flexDirection,
        ...style,
      }}
      {...rest}
    >
      {children}
    </div>
  );
};
RowRaw.propTypes = {
  classes: PropTypes.object.isRequired,
  children: PropTypes.any.isRequired,
  theme: PropTypes.object.isRequired,
  options: PropTypes.object,
  style: PropTypes.object,
  className: PropTypes.string,
};

RowRaw.defaultProps = {
  className: null,
  options: {},
  style: {},
};

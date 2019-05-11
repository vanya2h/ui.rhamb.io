import React from 'react';
import classnames from 'classnames';
import PropTypes from 'prop-types';
import { useActualBreakpoint } from '../../../hooks/use-actual-breakpoint';

export const ColumnRaw = ({
  className,
  reverse,
  classes,
  children,
  options,
  theme,
  ...rest
}) => {
  const point = useActualBreakpoint(theme, options);
  const { gridColumnCount } = theme.breakpoints;

  const width = (options[point].width || 12) / gridColumnCount;
  const marginLeft = (options[point].offset || 0) / gridColumnCount;
  const order = options[point].order || 'unset';

  return (
    <div
      style={{
        width: `${width * 100}%`,
        marginLeft: `${marginLeft * 100}%`,
        order,
      }}
      className={classnames(classes.column, className)}
      {...rest}
    >
      {children}
    </div>
  );
};

ColumnRaw.propTypes = {
  classes: PropTypes.object.isRequired,
  children: PropTypes.any.isRequired,
  options: PropTypes.object.isRequired,
  theme: PropTypes.object.isRequired,
  className: PropTypes.string,
  reverse: PropTypes.bool,
};

ColumnRaw.defaultProps = {
  reverse: false,
  className: null,
};

import React from 'react';
import { dissoc } from 'ramda';
import PropTypes from 'prop-types';
import classnames from 'classnames';

export const HeadingRaw = ({
  children,
  as,
  className,
  classes,
  mega,
  size,
  ...rest
}) => {
  return React.createElement(
    as,
    {
      className: classnames(className, classes.heading, classes[size], {
        [classes.mega]: mega,
      }),
      ...dissoc('theme', rest),
    },
    children,
  );
};

HeadingRaw.propTypes = {
  children: PropTypes.any.isRequired,
  classes: PropTypes.object.isRequired,
  as: PropTypes.string,
  size: PropTypes.oneOf(['h1', 'h2', 'h3', 'h4', 'h5', 'h6']),
  className: PropTypes.string,
  mega: PropTypes.bool,
};

HeadingRaw.defaultProps = {
  as: 'h1',
  size: 'h1',
  mega: false,
  className: null,
};

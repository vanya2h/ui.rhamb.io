import React from 'react';
import { dissoc } from 'ramda';
import PropTypes from 'prop-types';
import classnames from 'classnames';

export const ContainerRaw = ({
  children,
  as,
  className,
  classes,
  text,
  fluid,
  ...rest
}) => {
  const element = as || 'h1';

  return React.createElement(
    element,
    {
      className: classnames(
        className,
        classes.container,
        {
          [classes.container_fluid]: fluid,
        },
        {
          [classes.container_text]: text,
        },
      ),
      ...dissoc('theme', rest),
    },
    children,
  );
};

ContainerRaw.propTypes = {
  children: PropTypes.any,
  as: PropTypes.string,
  text: PropTypes.bool,
  size: PropTypes.oneOf(['h1', 'h2', 'h3', 'h4', 'h5', 'h6']),
  className: PropTypes.string,
  classes: PropTypes.object,
  fluid: PropTypes.bool,
};
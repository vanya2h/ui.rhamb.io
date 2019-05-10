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
  return React.createElement(
    as,
    {
      className: classnames(className, classes.container, {
        [classes.container_fluid]: fluid,
        [classes.container_text]: text,
      }),
      ...dissoc('theme', rest),
    },
    children,
  );
};

ContainerRaw.propTypes = {
  children: PropTypes.any.isRequired,
  as: PropTypes.string,
  text: PropTypes.bool,
  className: PropTypes.string,
  classes: PropTypes.object.isRequired,
  fluid: PropTypes.bool,
};

ContainerRaw.defaultProps = {
  as: 'div',
  text: false,
  className: null,
  fluid: false,
};

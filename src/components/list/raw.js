import React from 'react';
import { dissoc } from 'ramda';
import PropTypes from 'prop-types';
import classnames from 'classnames';

export const ListRaw = ({
  numbered,
  children,
  className,
  classes,
  ...rest
}) => {
  const element = numbered ? 'ol' : 'ul';

  return React.createElement(
    element,
    {
      className: classnames(className, classes.root),
      ...dissoc('theme', rest),
    },
    children,
  );
};

ListRaw.propTypes = {
  children: PropTypes.any.isRequired,
  classes: PropTypes.object.isRequired,
  className: PropTypes.string,
  numbered: PropTypes.bool,
};

ListRaw.defaultProps = {
  numbered: false,
  className: null,
};

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
      className: classnames(className, classes.list),
      ...dissoc('theme', rest),
    },
    children,
  );
};

ListRaw.propTypes = {
  children: PropTypes.any,
  as: PropTypes.string,
  className: PropTypes.string,
  classes: PropTypes.object,
  theme: PropTypes.any,
  numbered: PropTypes.bool,
};

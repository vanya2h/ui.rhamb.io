import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import { dissoc } from 'ramda';

export const InputRaw = ({ className, classes, fluid, invalid, ...rest }) => (
  <input
    className={classnames(
      className,
      classes.input,
      {
        [classes.input_fluid]: fluid,
      },
      { [classes.input_invalid]: invalid },
    )}
    {...dissoc('theme', rest)}
  />
);

InputRaw.propTypes = {
  classes: PropTypes.object.isRequired,
  className: PropTypes.string,
  fluid: PropTypes.bool,
  invalid: PropTypes.bool,
};

InputRaw.defaultProps = {
  className: null,
  fluid: false,
  invalid: false,
};

import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import { dissoc } from 'ramda';

const FieldRaw = ({ className, classes, fluid, invalid, ...rest }) => (
  <input
    className={classnames(
      className,
      classes.input,
      {
        [classes.fluid]: fluid,
      },
      { [classes.invalid]: invalid },
    )}
    {...dissoc('theme', rest)}
  />
);

FieldRaw.propTypes = {
  className: PropTypes.string,
  fluid: PropTypes.bool,
  invalid: PropTypes.bool,
  classes: PropTypes.object,
};

export const Field = FieldRaw;

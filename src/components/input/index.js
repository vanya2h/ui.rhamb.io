import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import { dissoc } from 'ramda';
import withStyles from 'react-jss';
import { styles } from './styles';

const InputRaw = ({ className, classes, fluid, invalid, ...rest }) => (
  <div className={styles.root}>
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
  </div>
);

InputRaw.propTypes = {
  className: PropTypes.string,
  fluid: PropTypes.bool,
  invalid: PropTypes.bool,
  classes: PropTypes.object,
};

export const Input = withStyles(styles)(InputRaw);

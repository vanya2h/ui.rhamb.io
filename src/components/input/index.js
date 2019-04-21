import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import { dissoc, compose } from 'ramda';
import { withTheme } from '~/providers/theme-provider';
import withStyles from 'react-jss';
import { styles } from './styles';

const InputRaw = ({ className, classes, fluid, ...rest }) => (
  <div className={styles.root}>
    <input
      className={classnames(className, classes.input, {
        [classes.fluid]: fluid,
      })}
      {...dissoc('theme', rest)}
    />
  </div>
);

InputRaw.propTypes = {
  className: PropTypes.string,
  fluid: PropTypes.bool,
  classes: PropTypes.object,
};

const enhance = compose(
  withTheme,
  withStyles(styles),
);

export const Input = enhance(InputRaw);

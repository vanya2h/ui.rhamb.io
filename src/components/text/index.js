import React from 'react';
import { dissoc } from 'ramda';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import withStyles from 'react-jss';
import { styles } from './styles';

export const TextRaw = ({
  children,
  as,
  className,
  classes,
  light,
  ...rest
}) => {
  return React.createElement(
    as,
    {
      className: classnames(className, classes.text, {
        [classes.light]: light,
      }),
      ...dissoc('theme', rest),
    },
    children,
  );
};

TextRaw.propTypes = {
  children: PropTypes.any.isRequired,
  classes: PropTypes.object.isRequired,
  as: PropTypes.string,
  light: PropTypes.bool,
  className: PropTypes.string,
};

TextRaw.defaultProps = {
  as: 'span',
  light: false,
  className: null,
};

export const Text = withStyles(styles)(TextRaw);

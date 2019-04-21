import React from 'react';
import { compose, dissoc } from 'ramda';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import { withTheme } from '~/providers/theme-provider';
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
  const element = as || 'span';

  return React.createElement(
    element,
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
  children: PropTypes.any,
  as: PropTypes.string,
  light: PropTypes.bool,
  className: PropTypes.string,
  classes: PropTypes.object,
  theme: PropTypes.any,
};

const enhance = compose(
  withTheme,
  withStyles(styles),
);

export const Text = enhance(TextRaw);

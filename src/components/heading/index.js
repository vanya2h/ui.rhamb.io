import React from 'react';
import { compose, dissoc } from 'ramda';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import { withTheme } from '~/providers/theme-provider';
import withStyles from 'react-jss';
import { styles } from './styles';

export const HeadingRaw = ({
  children,
  as,
  className,
  classes,
  mega,
  size,
  ...rest
}) => {
  const element = as || 'h1';

  return React.createElement(
    element,
    {
      className: classnames(className, classes.heading, classes[size], {
        [classes.mega]: mega,
      }),
      ...dissoc('theme', rest),
    },
    children,
  );
};

HeadingRaw.propTypes = {
  children: PropTypes.any,
  as: PropTypes.string,
  size: PropTypes.oneOf(['h1', 'h2', 'h3', 'h4', 'h5', 'h6']),
  className: PropTypes.string,
  classes: PropTypes.object,
  theme: PropTypes.any,
  mega: PropTypes.bool,
};

const enhance = compose(
  withTheme,
  withStyles(styles),
);

export const Heading = enhance(HeadingRaw);

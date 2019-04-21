import React from 'react';
import { compose, dissoc } from 'ramda';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import { withTheme } from '~/providers/theme-provider';
import withStyles from 'react-jss';
import { styles } from './styles';

export const ParagraphRaw = ({
  children,
  as,
  className,
  classes,
  primary,
  light,
  ...rest
}) => {
  const element = as || 'p';

  return React.createElement(
    element,
    {
      className: classnames(
        className,
        classes.paragraph,
        {
          [classes.primary]: primary,
        },
        { [classes.light]: light },
      ),
      ...dissoc('theme', rest),
    },
    children,
  );
};

ParagraphRaw.propTypes = {
  children: PropTypes.any,
  as: PropTypes.string,
  primary: PropTypes.bool,
  light: PropTypes.bool,
  className: PropTypes.string,
  classes: PropTypes.object,
  theme: PropTypes.any,
};

const enhance = compose(
  withTheme,
  withStyles(styles),
);

export const Paragraph = enhance(ParagraphRaw);

import React from 'react';
import { dissoc } from 'ramda';
import PropTypes from 'prop-types';
import classnames from 'classnames';
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

export const Paragraph = withStyles(styles)(ParagraphRaw);

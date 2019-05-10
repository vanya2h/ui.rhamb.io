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
  return React.createElement(
    as,
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
  children: PropTypes.any.isRequired,
  classes: PropTypes.object.isRequired,
  as: PropTypes.string,
  primary: PropTypes.bool,
  light: PropTypes.bool,
  className: PropTypes.string,
};

ParagraphRaw.defaultProps = {
  as: 'p',
  primary: false,
  light: false,
  className: null,
};

export const Paragraph = withStyles(styles)(ParagraphRaw);

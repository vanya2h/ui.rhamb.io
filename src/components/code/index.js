import React from 'react';
import { compose, dissoc } from 'ramda';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import { withTheme } from '~/providers/theme-provider';
import withStyles from 'react-jss';
import { styles } from './styles';

export const CodeRaw = ({ children, className, classes, ...rest }) => {
  return (
    <code
      className={classnames(className, classes.code)}
      {...dissoc('theme', rest)}
    >
      {children}
    </code>
  );
};

CodeRaw.propTypes = {
  children: PropTypes.any,
  as: PropTypes.string,
  className: PropTypes.string,
  classes: PropTypes.object,
  theme: PropTypes.any,
};

const enhance = compose(
  withTheme,
  withStyles(styles),
);

export const Code = enhance(CodeRaw);

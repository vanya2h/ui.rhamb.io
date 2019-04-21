import React from 'react';
import { compose, dissoc } from 'ramda';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import { withTheme } from '~/providers/theme-provider';
import withStyles from 'react-jss';
import { styles } from './styles';

export const LinkRaw = ({ children, className, classes, ...rest }) => {
  return (
    <a
      className={classnames(classes.link, className)}
      {...dissoc('theme', rest)}
    >
      {children}
    </a>
  );
};

LinkRaw.propTypes = {
  children: PropTypes.any,
  className: PropTypes.string,
  classes: PropTypes.object,
  theme: PropTypes.any,
};

const enhance = compose(
  withTheme,
  withStyles(styles),
);

export const Link = enhance(LinkRaw);

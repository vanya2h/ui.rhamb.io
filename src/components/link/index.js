import React from 'react';
import { dissoc } from 'ramda';
import PropTypes from 'prop-types';
import classnames from 'classnames';
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
  children: PropTypes.any.isRequired,
  classes: PropTypes.object.isRequired,
  className: PropTypes.string,
};

LinkRaw.defaultProps = {
  className: null,
};

export const Link = withStyles(styles)(LinkRaw);

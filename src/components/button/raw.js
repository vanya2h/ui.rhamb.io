import React from 'react';
import classnames from 'classnames';
import { dissoc } from 'ramda';
import PropTypes from 'prop-types';

export const ButtonRaw = ({
  children,
  classes,
  className,
  icon,
  arrowed,
  accent,
  ghost,
  ...rest
}) => {
  return (
    <button
      className={classnames(
        classes.button,
        className,
        {
          [classes.accent]: accent,
        },
        { [classes.ghost]: ghost },
      )}
      {...dissoc('theme', rest)}
    >
      {icon && <span className={classes.icon}>{icon}</span>}
      <span className={classes.label}>{children}</span>
      {arrowed && <span className={classes.arrow}>&#8594;</span>}
    </button>
  );
};

ButtonRaw.propTypes = {
  children: PropTypes.any.isRequired,
  classes: PropTypes.object,
  accent: PropTypes.bool,
  icon: PropTypes.any,
  arrowed: PropTypes.bool,
  ghost: PropTypes.bool,
  className: PropTypes.string,
};

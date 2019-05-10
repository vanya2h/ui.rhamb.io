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
  type,
  ...rest
}) => {
  return (
    // eslint-disable-next-line react/button-has-type
    <button
      type={type}
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
  type: PropTypes.oneOf(['button', 'submit', 'reset']),
  classes: PropTypes.object.isRequired,
  accent: PropTypes.bool,
  icon: PropTypes.any,
  arrowed: PropTypes.bool,
  ghost: PropTypes.bool,
  className: PropTypes.string,
};

ButtonRaw.defaultProps = {
  type: 'button',
  accent: false,
  icon: null,
  arrowed: false,
  ghost: false,
  className: null,
};

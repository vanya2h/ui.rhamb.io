import React from 'react';
import classnames from 'classnames';
import { compose, dissoc } from 'ramda';
import withStyles from 'react-jss';
import { withTheme } from '~/providers/theme-provider';
import PropTypes from 'prop-types';
import { styles } from './styles';

export class ButtonRaw extends React.PureComponent {
  render() {
    const {
      children,
      classes,
      className,
      icon,
      arrowed,
      accent,
      ghost,
      ...rest
    } = this.props;

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
  }
}

ButtonRaw.propTypes = {
  children: PropTypes.any.isRequired,
  classes: PropTypes.object,
  accent: PropTypes.bool,
  icon: PropTypes.any,
  arrowed: PropTypes.bool,
  ghost: PropTypes.bool,
  className: PropTypes.string,
};

const enhance = compose(
  withTheme,
  withStyles(styles),
);

export const Button = enhance(ButtonRaw);

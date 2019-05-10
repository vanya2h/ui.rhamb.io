import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

export const SpinnerRaw = (props) => {
  const { classes, size, className, ...rest } = props;

  return (
    <div
      className={classnames(classes.root, className)}
      style={{
        width: size,
        height: size,
      }}
      {...rest}
    >
      <div className={classnames(classes.cube)}>
        <div className={classes.inner} />
      </div>
      <div className={classnames(classes.cube, classes.cube_02)}>
        <div className={classes.inner} />
      </div>
      <div className={classnames(classes.cube, classes.cube_03)}>
        <div className={classes.inner} />
      </div>
      <div className={classnames(classes.cube, classes.cube_04)}>
        <div className={classes.inner} />
      </div>
    </div>
  );
};

SpinnerRaw.propTypes = {
  classes: PropTypes.object.isRequired,
  className: PropTypes.string,
  size: PropTypes.string,
};

SpinnerRaw.defaultProps = {
  className: null,
  size: '40px',
};

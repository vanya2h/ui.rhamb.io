import React from 'react';
import { dissoc } from 'ramda';
import PropTypes from 'prop-types';
import { List } from '~/components/list';
import classnames from 'classnames';

export const HorizontalMenuRaw = ({
  children,
  className,
  classes,
  ...rest
}) => (
  <List
    className={classnames(className, classes.list)}
    {...dissoc('theme', rest)}
  >
    {children}
  </List>
);

HorizontalMenuRaw.propTypes = {
  children: PropTypes.any,
  as: PropTypes.string,
  className: PropTypes.string,
  classes: PropTypes.object,
  theme: PropTypes.any,
};

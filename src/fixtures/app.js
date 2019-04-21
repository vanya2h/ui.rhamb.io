import React from 'react';
import PropTypes from 'prop-types';
import withStyles from 'react-jss';
import { compose } from 'ramda';
import { globalStyles } from '~/themes/default/global-styles';
import { withTheme } from '~/providers/theme-provider';

const AppRaw = (props) => <div id="app">{props.children}</div>;

AppRaw.propTypes = {
  children: PropTypes.any,
};

const enhance = compose(
  withTheme,
  withStyles({
    '@global': globalStyles,
  }),
);

export const App = enhance(AppRaw);

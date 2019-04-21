import React from 'react';
import PropTypes from 'prop-types';

export const themeContext = React.createContext({
  changeTheme: null,
});

export class ThemeProvider extends React.PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      theme: props.defaultTheme,
    };
  }

  componentDidMount() {
    const { onMount } = this.props;

    if (typeof onMount === 'function') {
      onMount();
    }
  }

  changeTheme = (nextThemeKey) => {
    this.setState({
      theme: nextThemeKey,
    });
  };

  render() {
    const currentTheme = this.props.themes[this.state.theme];

    if (!currentTheme) {
      return null;
    }

    return (
      <themeContext.Provider
        value={{
          ...currentTheme,
          changeTheme: this.changeTheme,
        }}
      >
        {this.props.children}
      </themeContext.Provider>
    );
  }
}

ThemeProvider.propTypes = {
  themes: PropTypes.object.isRequired,
  defaultTheme: PropTypes.string.isRequired,
  onMount: PropTypes.func,
  children: PropTypes.any.isRequired,
};

export const withTheme = (Component) => (props) => (
  <themeContext.Consumer>
    {(theme) => <Component theme={theme} {...props} />}
  </themeContext.Consumer>
);

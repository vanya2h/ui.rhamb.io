import React, { useState, useEffect } from 'react';
import withStyles, { ThemeProvider as JSSThemeProvider } from 'react-jss';
import PropTypes from 'prop-types';

export const themeContext = React.createContext({
  changeTheme: null,
});

export const ThemeProvider = ({ themes, defaultTheme, children, ...rest }) => {
  const [themeKey, changeThemeKey] = useState(defaultTheme);
  const [currentTheme, setCurrentTheme] = useState(themes[themeKey]);

  useEffect(() => {
    setCurrentTheme(themes[themeKey]);
  }, [themeKey]);

  return (
    <JSSThemeProvider theme={currentTheme}>
      <themeContext.Provider
        value={{
          themes,
          changeThemeKey,
        }}
      >
        {React.createElement(
          withStyles(currentTheme.globalStyles)(() =>
            React.cloneElement(children, rest),
          ),
        )}
      </themeContext.Provider>
    </JSSThemeProvider>
  );
};

ThemeProvider.propTypes = {
  themes: PropTypes.object.isRequired,
  defaultTheme: PropTypes.string.isRequired,
  children: PropTypes.any.isRequired,
};

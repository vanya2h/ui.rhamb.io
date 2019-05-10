module.exports = {
  extends: ['airbnb', 'prettier', 'prettier/react'],
  plugins: ['babel'],
  parser: 'babel-eslint',
  env: {
    browser: true,
    es6: true,
    node: true,
    jest: true,
  },
  settings: {
    'import/resolver': 'webpack',
    react: {
      version: '16.8.3',
    },
  },
  parserOptions: {
    ecmaVersion: 6,
    ecmaFeatures: {
      jsx: true,
      experimentalObjectRestSpread: true,
      rest: true,
      classes: true,
    },
    sourceType: 'module',
  },
  globals: {
    browser: true,
  },
  rules: {
    'import/prefer-default-export': 0,
    'import/no-default-export': 'error',
    'react/jsx-filename-extension': [1, { extensions: ['.js', '.woff'] }],
    'react/forbid-prop-types': 0,
  },
};

const path = require('path');

module.exports = async ({ config }) => ({
  ...config,
  resolve: {
    ...config.resolve,
    alias: {
      ...config.resolve.alias,
      '~': path.resolve(__dirname, '../src'),
    },
  },
});

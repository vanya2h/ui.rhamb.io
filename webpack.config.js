const UglifyJsPlugin = require('uglifyjs-webpack-plugin');
const webpack = require('webpack');
const { BundleAnalyzerPlugin } = require('webpack-bundle-analyzer');
const path = require('path');

const common = {
  sourceDir: path.resolve(__dirname, './src'),
  buildDir: path.resolve(__dirname, './build'),
  isAnalyzeEnabled: Boolean(process.env.ANALYZE_ENABLED),
  areSourceMapsDisabled: process.env.SOURCEMAPS === 'disabled',
};

module.exports = {
  entry: {
    main: [`${common.sourceDir}/index.js`],
  },
  output: {
    path: common.buildDir,
    publicPath: '',
    filename: '[name].js',
    chunkFilename: '[name].js',
  },
  resolve: {
    extensions: ['.js', '.jsx'],
    alias: {
      '~': common.sourceDir,
    },
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        use: 'babel-loader',
        exclude: [/(node_modules)/],
      },
      {
        test: /\.png$/,
        loader: 'url-loader',
        options: {
          limit: 10000,
          mimetype: 'image/png',
        },
      },
      {
        test: /\.gif$/,
        loader: 'url-loader',
        options: {
          limit: 10000,
          mimetype: 'image/gif',
        },
      },
      {
        test: /\.svg$/,
        loader: 'url-loader',
        options: {
          limit: 10000,
          mimetype: 'image/svg+xml',
        },
      },
      {
        test: /\.jpg$/,
        loader: 'url-loader',
        options: {
          limit: 10000,
          mimetype: 'image/jpg',
        },
      },
      {
        test: /\.woff$/,
        loader: 'url-loader',
        options: {
          limit: 10000,
          mimetype: 'font/woff',
        },
      },
      {
        test: /\.woff2$/,
        loader: 'url-loader',
        options: {
          limit: 10000,
          mimetype: 'font/woff2',
        },
      },
      {
        test: /\.mp4$/,
        use: 'file-loader',
      },
    ],
  },
  plugins: [
    new webpack.EnvironmentPlugin(['NODE_ENV']),
    new UglifyJsPlugin({
      sourceMap: !common.areSourceMapsDisabled,
      uglifyOptions: {
        output: {
          comments: false,
        },
      },
    }),
  ].concat(common.isAnalyzeEnabled ? new BundleAnalyzerPlugin() : []),
  stats: {
    children: false,
    modules: false,
  },
  mode: 'production',
  devtool: common.areSourceMapsDisabled ? 'none' : 'source-map',
};

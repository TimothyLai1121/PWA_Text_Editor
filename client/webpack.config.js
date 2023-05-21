const HtmlWebpackPlugin = require('html-webpack-plugin');
const WebpackPwaManifest = require('webpack-pwa-manifest');
const path = require('path');
const { GenerateSW } = require('workbox-webpack-plugin');

module.exports = () => {
  return {
    mode: 'development', // Set the mode to development
    entry: {
      main: './src/js/index.js', // Entry point for the main application
      install: './src/js/install.js', // Entry point for install functionality
      database: './src/js/database.js', // Entry point for database functionality
      editor: './src/js/editor.js', // Entry point for editor functionality
      header: './src/js/header.js', // Entry point for header functionality
    },
    output: {
      filename: '[name].bundle.js',
      path: path.resolve(__dirname, 'dist'), // Output directory for bundled files
    },
    plugins: [
      new HtmlWebpackPlugin({
        template: './index.html', // HTML template file
        title: 'Jate', // Title of the generated HTML page
      }),
      new GenerateSW({
        swDest: 'sw.js', // Name of the generated service worker file
        clientsClaim: true, // Take control of all client instances as soon as the service worker is active
        skipWaiting: true, // Force newly registered service workers to activate immediately, bypassing the waiting phase
        exclude: [/\.map$/, /asset-manifest\.json$/], // Regular expressions to exclude specific files from caching
        maximumFileSizeToCacheInBytes: 5 * 1024 * 1024, // Maximum size of files to be cached
      }),
      new WebpackPwaManifest({
        fingerprints: false,
        inject: true,
        name: 'Just Another Text Editor',
        short_name: 'JATE',
        description: 'Just another text editor',
        background_color: '#225ca3',
        theme_color: '#225ca3',
        start_url: '/',
        publicPath: '/',
        icons: [
          {
            src: path.resolve('src/images/logo.png'), // Path to the app icon
            sizes: [96, 128, 192, 256, 384, 512], // Icon sizes for different devices
            destination: path.join('assets', 'icons'), // Output directory for icons
          },
        ],
      }),
    ],
    module: {
      rules: [
        {
          test: /\.css$/i,
          use: ['style-loader', 'css-loader'], // CSS loaders for processing CSS files
        },
        {
          test: /\.m?js$/,
          exclude: /node_modules/,
          use: {
            loader: 'babel-loader',
            options: {
              presets: ['@babel/preset-env'], // Babel presets for transpiling JavaScript
              plugins: ['@babel/plugin-proposal-object-rest-spread', '@babel/transform-runtime'], // Babel plugins
            },
          },
        },
      ],
    },
  };
};

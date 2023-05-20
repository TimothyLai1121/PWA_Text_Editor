const HtmlWebpackPlugin = require('html-webpack-plugin'); // generates an HTML file from a template
const WebpackPwaManifest = require('webpack-pwa-manifest'); // generates a manifest.json file
const path = require('path'); // provides utilities for working with file and directory paths
const { InjectManifest } = require('workbox-webpack-plugin'); // generates a service worker file using a webpack build

// TODO: Add and configure workbox plugins for a service worker and manifest file.
// TODO: Add CSS loaders and babel to webpack.

module.exports = () => {
  return {
    mode: 'development', //
    entry: {
      main: './src/js/index.js', // entry point for the application
      install: './src/js/install.js', 
      database: './src/js/database.js',
      editor: './src/js/editor.js',
      header: './src/js/header.js',

    },
    output: {
      filename: '[name].bundle.js',
      path: path.resolve(__dirname, 'dist'), // output directory
    },
    plugins: [
      new HtmlWebpackPlugin({
        template: './index.html',
        title: 'Jate', // title of the generated HTML page
      }),
      new InjectManifest({
        swSrc: './src-sw.js', // service worker entry point
        swDest: 'src-sw.js', // name of the generated service worker file
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
            src: path.resolve('src/images/logo.png'),
            sizes: [96, 128, 192, 256, 384, 512],
            destination: path.join('assets', 'icons'),
          },
        ],
      }),

    ],

    module: {
      rules: [
        {
          test: /\.css$/i,
          use: ['style-loader', 'css-loader'],
        },
        {
          test: /\.m?js$/,
          exclude: /node_modules/,
          use: {
            loader: 'babel-loader',
            options: {
              presets: ['@babel/preset-env'],
              plugins: ['@babel/plugin-proposal-object-rest-spread', '@babel/transform-runtime'],
            },
          },
        },
      ],
    },
  };
};
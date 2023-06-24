/*
 * Copyright (c) 2020 apollon GmbH+Co. KG All Rights Reserved.
 */
import * as webpack from 'webpack';

const CircularDependencyPlugin = require('circular-dependency-plugin');
/**
 * ATTENTION! This config is used only for development build.
 * omn-webpack.config.ts uses for production build.
 *
 * Custom WebPack configuration for build
 *      projects.omn-angular.architect.build.options.customWebpackConfig
 * Use to override/merge or add new options
 * Note: Please check {@link https://github.com/just-jeb/angular-builders/tree/master/packages/custom-webpack#custom-webpack-config-object}
 * Also please, check configs and plugins which are added by Angular CLI
 *      packages/angular_devkit/build_angular/src/angular-cli-files/models/webpack-configs/common.ts:63
 */
export default {
  resolve: {
    fallback: { querystring: require.resolve('querystring-es3') }
  },
  plugins: [
    /* Update circular plugin configuration from Angular CLI to detect circular imports as errors during build*/
    new CircularDependencyPlugin({
      exclude: /([\\\/]node_modules[\\\/])|(ngfactory\.js$)/,
      failOnError: true
    })
  ],
  module: {
    // this rule can be enabled by 'sourceMap' option, but the same warning will appear in console
    // so this config provide customized rule (based on Angular) for source map loader
    // TODO: will be removed when https://github.com/angular/angular-cli/issues/11305 is completed
    rules: [
      {
        test: /\.js/,
        // ngfactory.js and ngstyle.js are excluded by default by Angular webpack config
        // rxjs-compat, @swimlane/**, angular7-csv libraries have problems with source map so warning messages appear in console
        exclude: /(ngfactory|ngstyle|rxjs-compat[\/\\].+|@swimlane[\/\\].+|angular7-csv[\/\\].+).js$/,
        enforce: 'pre',
        use: [{
          loader: 'source-map-loader'
        }]
      },
      {
        test: /\.js/,
        include: /node_modules[\/\\]pdfjs-dist/,
        loader: 'babel-loader',
        options: {
          presets: ['@babel/preset-env'],
          plugins: ['@babel/plugin-proposal-optional-chaining'],
        }
      }]
  }
} as webpack.Configuration;

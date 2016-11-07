'use strict';

const webpack = require('webpack');

module.exports = function (config) {
  config.set({
    frameworks: [
      'jasmine'
    ],

    files: [
      './src/tests.entry.ts'
    ],

    plugins: [
      require('karma-jasmine'),
      require('karma-phantomjs-launcher'),
      require('karma-webpack'),
      require('karma-sourcemap-loader'),
      require('karma-coverage'),
      require('karma-spec-reporter')
    ],

    preprocessors: {
      './src/tests.entry.ts': [
        'webpack',
        'sourcemap'
      ]
    },

    coverageReporter: {
      reporters: [
        { type: 'json' },
        { type: 'html' },
        { type: 'text-summary' }
      ],
      dir: './coverage/'
    },

    webpack: {
      entry: './src/tests.entry.ts',
      plugins: [
        new webpack.NoErrorsPlugin()
      ],
      devtool: 'inline-source-map',
      resolve: {
        extensions: ['', '.webpack.js', '.web.js', '.ts', '.js']
      },
      module: {
        loaders: [
          { test: /\.ts$/, loaders: ['babel', 'ts'], exclude: /node_modules/},
          { test: /\.html$/, loader: 'raw' }
        ],
        postLoaders: [
          {
            test: /\.ts$/,
            loader: 'istanbul-instrumenter',
            exclude: /(node_modules\/|\.spec\.ts$|tests\.entry\.ts$)/
          }
        ]
      },
      stats: { colors: true, reasons: true },
      debug: true
    },
    webpackMiddleware: {
      // webpack-dev-middleware configuration
      // i. e.
      noInfo: true
    },
    webpackServer: {
      noInfo: true // prevent console spamming when running in Karma!
    },

    reporters: ['spec', 'coverage'],
    specReporter: {
      maxLogLines: 5,         // limit number of lines logged per test
      suppressErrorSummary: true,  // do not print error summary
      suppressPassed: true,  // do not print information about passed tests
      suppressSkipped: true,  // do not print information about skipped tests
      showSpecTiming: false // print the time elapsed for each spec
    },
    port: 9999,
    colors: true,
    logLevel: config.LOG_DISABLE,
    autoWatch: true,
    browsers: ['PhantomJS'],
    captureTimeout: 12000,
    browserNoActivityTimeout: 60000,
    singleRun: true,
    retryLimit: 5, // try to allow bitbucket pipelines to run the tests on the first try
    failOnEmptyTestSuite: true,
    browserDisconnectTolerance: 1,
    browserDisconnectTimeout: 2000,
    hostname: '0.0.0.0',
    restartOnFileChange: true //When autoWatch=true and restartOnFileChange=true, this will "complete" the current run immediately then schedule a new one as before
  });
};

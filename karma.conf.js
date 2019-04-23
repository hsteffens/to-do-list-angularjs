const path = require('path');
const yargs = require(`yargs`).argv;

const webpackFn = require('./webpack.config.js');

delete webpackFn.entry;
delete webpackFn.output;

module.exports = (config) => {
  const testConfiguration = {
    autoWatch: false,

    browserDisconnectTolerance: 5,

    browserNoActivityTimeout: 60000,

    browserDisconnectTimeout: 30000,

    captureTimeout: 60000,

    browsers: ['ChromeHeadless'],

    client: {
      captureConsole: false,
      colors: true
    },

    files: [
      { pattern: './app/index.module.js', watched: true },
      { pattern: 'node_modules/angular-mocks/angular-mocks.js', watched: false },
      { pattern: 'app/features/todo-list/todo-list.controller.spec.js', watched: true }
    ],

    preprocessors: {
      './app/index.module.js': ['webpack'],
      'app/features/todo-list/todo-list.controller.spec.js': ['webpack']
    },


   
    frameworks: ['jasmine'],

    logLevel: config.LOG_ERROR,

    reporters: ['mocha'],

    singleRun: true,

    customLaunchers: {
      verboseChromeHeadless: {
        base: `ChromeHeadless`,
        flags: [`--enable-logging`, `--v=1000`]
      }
    },

    webpack: webpackFn,

    // plugin: karma-coverage
    coverageReporter: {
      dir: path.join(__dirname, '../test-reports/coverage'),
      reporters: [
        { type: 'json', subdir: 'json' },
        { type: 'html', subdir: 'html' }
      ]
    },

    // plugin: karma-junit-reporter
    junitReporter: {
      outputFile: path.join(__dirname, '../test-reports/unit-tests.xml'),
      classNameFormatter: (browser, result) => result.suite
    },
    
  };

  if (yargs.coverage) {
    testConfiguration.reporters.push('coverage');
  }

  if (yargs.verbose) {
    testConfiguration.browsers = [`verboseChromeHeadless`];
    testConfiguration.client.captureConsole = true;
    testConfiguration.logLevel = 'debug';
  }

  console.log('reporters', testConfiguration.reporters); //eslint-disable-line

  config.set(testConfiguration);
};

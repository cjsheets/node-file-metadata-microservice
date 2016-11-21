'use strict';

// Set default node environment to development
var env = process.env.NODE_ENV = process.env.NODE_ENV || 'development';


if (env === 'development' || env === 'test') {
  process.env.DEBUG = 'app:*,api:*,config:*,webpack:*,component:*';

    // Register the Babel require hook
  require('babel-register');
} else {
  process.env.DEBUG = 'app:*,api:*,config:*,webpack:*';
  require('babel-register');
}

// Export the application
exports = module.exports = require('./app');

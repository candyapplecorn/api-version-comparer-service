'use strict';

const express             = require('express');
const logger              = require('./middleware/logger');
const routes              = require('./routes/routes');
const bodyParser          = require('body-parser');

// App
function createServer() {
  const app = express();

  app.use(bodyParser.urlencoded({ extended: true }));

  if (!process.env.TESTING) {
    app.use(logger);
  }
  
  app.use(routes());

  return app;
}

module.exports = createServer;

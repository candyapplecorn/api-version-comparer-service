'use strict';

const express             = require('express');
const logger              = require('./middleware/logger');
const routes              = require('./routes/routes');
const { PORT, HOST }      = require('./constants/config');
const bodyParser          = require('body-parser');

// App
const app = express();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(logger);
app.use(routes);

app.listen(PORT, HOST);

console.log(`Running on http://${HOST}:${PORT}`);

/* eslint-disable import/no-extraneous-dependencies */

require('express-async-errors');

const express = require('express');
const expressPino = require('express-pino-logger');

const logic = require('../index');
const logger = require('./logger');

const {
  port, serializers,
  errHandler, notFoundHandler,
} = require('./misc');

const app = express();

app.use(express.json());
app.use(expressPino({ logger, serializers }));

logic.bind({
  logger,
  config: { foo: 'bar' },
});

app.use('/logic-abc', logic.router);

app.use('*', notFoundHandler);
app.use(errHandler);

app.listen(port);
logger.info(`Listening at ${port}`);

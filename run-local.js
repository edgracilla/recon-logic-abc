/* eslint-disable no-console */
/* eslint-disable no-unused-vars */
/* eslint-disable import/no-extraneous-dependencies */

require('express-async-errors');

const express = require('express');
const logic = require('./index');

const app = express();
app.use(express.json());
app.use('/logic-abc', logic.router);

logic.bind({
  logger: console.log,
  config: { foo: 'bar' },
});

app.use('*', (req, res) => {
  res.status(404).json({
    statusCode: 404,
    message: 'Not Found!',
  });
});

app.use((err, req, res, next) => {
  const { statusCode, message } = err;

  const resp = {
    statusCode: statusCode || 500,
    message: statusCode ? message : 'Internal Server Error!',
  };

  console.error(err);

  res
    .status(resp.statusCode)
    .send(resp);
});

app.listen(3000);

// console.log(logic.bind);
console.log('Listening at 3000');

/* eslint-disable no-unused-vars */

const logger = require('./logger');

module.exports = {
  port: 3000,
  serializers: {
    req: (req) => ({
      method: req.method,
      url: req.url,
      remoteAddress: req.remoteAddress,
      remotePort: req.remotePort,
    }),
    res: (res) => ({
      statusCode: res.statusCode,
    }),
    err: (err) => ({
      type: err.type,
      message: err.message,
    }),
  },
  notFoundHandler: (req, res) => {
    res.status(404).json({
      statusCode: 404,
      message: 'Not Found!',
    });
  },
  errHandler: (err, req, res, next) => {
    const { statusCode, message } = err;

    const resp = {
      statusCode: statusCode || 500,
      message: statusCode ? message : 'Internal Server Error!',
    };

    if (!statusCode) logger.error(err);
    res.status(resp.statusCode).send(resp);
  },
};

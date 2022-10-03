const express = require('express');
const validate = require('../sys/validate');

const vld = require('./validation');
const ctl = require('./controller');

const router = express.Router();

// controller must have nothing to do with `req` and `res`
// we must massage request/response data at router level and supply only the needed data
// to controller. With this, we can easily write tests in controller with pure function params
// and not as a router function with `req, res, next` which is too tedious and messy in tests

router.post('/foo', validate(vld.readVld), async (req, res) => {
  const { body, params } = req;
  const ret = await ctl.doSomething(body, params);

  res.send(ret);
});

router.get('/bar', validate(vld.readVld), async (req, res) => {
  const { query } = req;
  const ret = await ctl.doSomething(query);

  res.send(ret);
});

module.exports = router;

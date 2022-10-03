const express = require('express');
const core = require('../core');

const vld = require('./validation');
const ctl = require('./controller');

const router = express.Router();

// controller must have nothing to do with `req` and `res`
// we must massage request data at router level and supply only the needed data
// to controller. With this, we can easily write tests in controller as a pure function params
// and not as a router function with `req, res, next` which is too tedious and messy in tests

router.use('/foo', core.validate(vld.readVld), async (req, res) => {
  const { body, params } = req;
  const ret = await ctl.doSomething(body, params);

  res.send(ret);
});

router.use('/bar', core.validate(vld.readVld), async (req, res) => {
  const { body } = req;
  const ret = await ctl.doSomething(body);

  res.send(ret);
});

module.exports = router;

const router = require('./src/routes');
const binder = require('./sys/binder');

module.exports = {
  router,
  // model, // TODO: attach model
  bind: binder.bind,
};

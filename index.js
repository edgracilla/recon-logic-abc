const router = require('./src/routes');
const binder = require('./sys/binder');

module.exports = {
  router,
  bind: binder.bind,
};

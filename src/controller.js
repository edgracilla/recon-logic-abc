// business logic goes here!

const util = require('./utils');
const svc = require('./service');

const { logger, config } = require('../sys/binder');

// const { logger, config } = options;

async function doSomething() {
  const result = svc.getSomething();
  const capitalizedResult = util.capitalizeFirstLetter(result);

  logger.info(config);

  return {
    message: `Something done in ${capitalizedResult} service!`,
  };
}

module.exports = {
  doSomething,
};

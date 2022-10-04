// business logic goes here!

const util = require('./utils');
const svc = require('./service');

const ApiError = require('../sys/api-error');
const { parent } = require('../sys/binder');

async function postSomething() {
  return {
    message: 'Post done!',
  };
}

async function getSomething(query) {
  const result = svc.getSomething();
  const capitalizedResult = util.capitalizeFirstLetter(result);

  if (parent.logger && parent.logger.info) {
    parent.logger.info(parent.config);
  } else {
    // eslint-disable-next-line no-console
    console.log(parent);
  }

  // all errors will be handled by errHandler in recon-engine

  if (query.normalErr) throw new Error('Unknown Err!');
  if (query.apiErr) throw new ApiError(400, 'Some validation error!');

  return {
    message: `Something done in ${capitalizedResult} service!`,
  };
}

module.exports = {
  postSomething,
  getSomething,
};

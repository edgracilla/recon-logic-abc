/* eslint-disable no-console */

// business logic goes here!

const util = require('./utils');
const svc = require('./service');

const ApiError = require('../sys/api-error');
const { parent } = require('../sys/binder');
const { name, version } = require('../package.json');

async function postSomething() {
  return {
    message: 'Posted!',
  };
}

async function errHandling(query) {
  if (parent.logger && parent.logger.info) {
    parent.logger.info(parent.config);
  } else {
    console.log(parent);
  }

  // all errors will be handled by errHandler in recon-engine
  if (query.normalErr) throw new Error('Unknown Err!');
  if (query.apiErr) throw new ApiError(400, 'Some validation error!');

  return {
    message: 'No errors found!',
  };
}

async function rootDemo() {
  const result = svc.getSomething();
  const capitalizedResult = util.capitalizeFirstLetter(result);

  return {
    name,
    version,
    message: `Called '${capitalizedResult}' service!`,
  };
}

module.exports = {
  postSomething,
  errHandling,
  rootDemo,
};

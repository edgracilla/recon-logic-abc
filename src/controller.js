// business logic goes here!

const util = require('./utils');
const svc = require('./service');

const { parent } = require('../sys/binder');

async function postSomething() {
  return {
    message: 'Post done!',
  };
}

async function getSomething(query) {
  const result = svc.getSomething();
  const capitalizedResult = util.capitalizeFirstLetter(result);

  if (parent.logger) {
    parent.logger.info(parent.config);
  } else {
    console.log(parent);
  }

  if (query.foo) {
    throw new Error('This will be handled by parent repo!');
  }

  return {
    message: `Something done in ${capitalizedResult} service!`,
  };
}

module.exports = {
  postSomething,
  getSomething,
};

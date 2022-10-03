// business logic goes here!

const svc = require('./service');
const util = require('./utils');

const { options } = require('../sys/binder');

async function doSomething() {
  const result = svc.getSomething();
  const capitalizedResult = util.capitalizeFirstLetter(result);

  console.log('--a', options);
  // console.log('--b', options.option2);

  return {
    message: `Something done in ${capitalizedResult} service!`,
  };
}

module.exports = {
  doSomething,
};

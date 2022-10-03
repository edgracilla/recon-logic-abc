// business logic goes here!

const svc = require('./service');

async function doSomething() {
  const result = svc.getSomething();

  return {
    message: `Something done in ${result}!`,
  };
}

module.exports = {
  doSomething,
};

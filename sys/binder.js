const options = {};

const bind = (parent) => {
  options.config = parent.config;
  options.logger = parent.logger;
  options.sequelize = parent.sequelize;
};

module.exports = {
  options,
  bind,
};

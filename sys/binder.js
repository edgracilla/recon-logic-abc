const parent = {};

const bind = (opts) => {
  parent.config = opts.config;
  parent.logger = opts.logger;
  parent.sequelize = opts.sequelize;
};

module.exports = {
  parent,
  bind,
};

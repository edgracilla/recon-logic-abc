// const options = {};

// const bind = (parent) => {
//   options.config = parent.config;
//   options.logger = parent.logger;
//   options.sequelize = parent.sequelize;
// };

class Binder {
  bind(parent) {
    this.config = parent.config;
    this.logger = parent.logger;
    this.sequelize = parent.sequelize;
  }
}

module.exports = new Binder();

// module.exports = {
//   options,
//   bind,
// };

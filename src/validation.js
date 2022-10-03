const Joi = require('joi');

module.exports = {
  readVld: {
    query: Joi.object().keys({
      foo: Joi.string().required(),
      bar: Joi.string().required(),
    }),
  },
};

const Joi = require('joi');

module.exports = {
  readVld: {
    params: Joi.object().keys({
      foo: Joi.string().required(),
      bar: Joi.string().required(),
    }),
  },
};

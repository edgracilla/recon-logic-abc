const Joi = require('joi');

module.exports = {
  get: {
    query: Joi.object().keys({
      foo: Joi.string().optional(),
      bar: Joi.string().optional(),
    }),
  },
  post: {
    body: Joi.object().keys({
      foo: Joi.string().required(),
      bar: Joi.string().required(),
    }),
  },
};

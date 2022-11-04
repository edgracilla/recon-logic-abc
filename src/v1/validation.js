const Joi = require('joi');

module.exports = {
  errHandling: {
    query: Joi.object().keys({
      apiErr: Joi.string().optional(),
      normalErr: Joi.string().optional(),
    }),
  },
  post: {
    body: Joi.object().keys({
      foo: Joi.string().optional(),
      bar: Joi.string().optional(),
    }),
  },
};

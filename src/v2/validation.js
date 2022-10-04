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
      foo: Joi.string().required(),
      bar: Joi.string().required(),
    }),
  },
};

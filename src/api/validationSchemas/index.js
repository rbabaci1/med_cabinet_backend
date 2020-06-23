const Joi = require("@hapi/joi");

const userSchema = Joi.object({
  firstName: Joi.string().min(3).required(),
  lastName: Joi.string().min(3).required(),
  email: Joi.string().email().required(),
  password: Joi.string().min(6).required(),
});

const dispensarySchema = Joi.object({
  name: Joi.string().min(3).required(),
  address: Joi.string().min(3).required(),
  city: Joi.string().min(3).required(),
  state: Joi.string().min(2).required(),
  postal_code: Joi.string().min(3).required(),
  phone_number: Joi.string().min(10).required(),
  email: Joi.string().email().required(),
  logo_url: Joi.string().min(10).required(),
  has_delivery: Joi.boolean().required(),
});

module.exports = { userSchema, dispensarySchema };

const Joi = require("@hapi/joi");

const signupSchema = Joi.object({
  firstName: Joi.string().min(3).required(),
  lastName: Joi.string().min(3).required(),
  email: Joi.string().email().required(),
  password: Joi.string().min(6).required(),
});

const loginSchema = Joi.object({
  email: Joi.string().email().required(),
  password: Joi.string().min(6).required(),
});

const day = Joi.object().keys({
  day_of_week: Joi.number().required(),
  open_time: Joi.string().required(),
  close_time: Joi.string().required(),
});
const dispensarySchema = Joi.object({
  name: Joi.string().min(3).required(),
  address: Joi.string().min(3).required(),
  city: Joi.string().min(3).required(),
  state: Joi.string().min(2).required(),
  postal_code: Joi.string().min(3).required(),
  phone_number: Joi.string()
    .pattern(new RegExp("^[(]\\d{3}[)] \\d{3}-\\d{4}$"))
    .required(),
  email: Joi.string().email().required(),
  logo_url: Joi.string().min(10).required(),
  has_delivery: Joi.boolean().required(),
  // todo validate
  dispensary_hours: Joi.array().length(7).items(day).required(),
});

module.exports = { signupSchema, loginSchema, dispensarySchema };

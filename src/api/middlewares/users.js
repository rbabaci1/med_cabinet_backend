const Joi = require("@hapi/joi");

const schema = Joi.object({
  firstName: Joi.string().min(3).required(),
  lastName: Joi.string().min(3).required(),
  email: Joi.string().email(),
  username: Joi.string().alphanum().min(3).required(),
  password: Joi.string().required(),
  created_at: Joi.string()
    .pattern(new RegExp("^\\d{4}-\\d{2}-\\d{2} \\d{2}:\\d{2}:\\d{2}$"))
    .required(),
});

const validateUser = body => {
  return schema.validate(body);
};

module.exports = validateUser;

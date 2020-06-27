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
const userUpdateSchema = Joi.object({
  firstName: Joi.string().min(3).required(),
  lastName: Joi.string().min(3).required(),
  email: Joi.string().email().required(),
});

// dispensary body validation
const timeRegex = Joi.string().pattern(
  new RegExp("^((\\d{2}:\\d{2} (AM|PM))|(closed))$")
);
const dayFormat = Joi.object().keys({
  day_of_week: Joi.number().min(0).max(6).required(),
  open_time: timeRegex.required(),
  close_time: timeRegex.required(),
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
  dispensary_hours: Joi.array().length(7).items(dayFormat),
});

const reviewSchema = Joi.object({
  user_id: Joi.number().min(1).required(),
  product_id: Joi.number().min(1).required(),
  rate: Joi.number().min(1).max(5).required(),
  description: Joi.string().min(10).required(),
});
const updateReviewSchema = Joi.object({
  rate: Joi.number().min(1).max(5).required(),
  description: Joi.string().min(10).required(),
});
const deleteReviewSchema = Joi.object({
  user_id: Joi.number().min(1).required(),
  product_id: Joi.number().min(1).required(),
});

const productSchema = Joi.object({
  strain_name: Joi.string().required(),
  strain_category: Joi.string().required(),
  strain_type: Joi.string().required(),
  flavors: Joi.array().items(Joi.string()).required(),
  effects: Joi.array().items(Joi.string()).required(),
  avg_thc: Joi.number().required(),
  avg_cbd: Joi.number().required(),
  price: Joi.number().required(),
  price_unit: Joi.string().required(),
  description: Joi.string().min(10).required(),
  img_url: Joi.string().required(),
  is_available: Joi.boolean().required(),
  dispensary_id: Joi.number().min(1).required(),
});
const productRecommendationSchema = Joi.object({
  UserID: Joi.number().required(),
  Strain: Joi.string().required(),
  Type: Joi.string().required(),
  Effects: Joi.string().required(),
  Flavor: Joi.string().required(),
  Description: Joi.string().required(),
});

const cartSchema = Joi.object({
  user_id: Joi.number().min(1).required(),
  product_id: Joi.number().min(1).required(),
});

module.exports = {
  signupSchema,
  loginSchema,
  userUpdateSchema,
  dispensarySchema,
  reviewSchema,
  updateReviewSchema,
  deleteReviewSchema,
  productSchema,
  productRecommendationSchema,
  cartSchema,
};

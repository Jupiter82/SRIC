const Joi = require("joi");

const serviceCreateSchema = Joi.object({
  title: Joi.string().min(3).max(100).required(),
  icon: Joi.string().min(3).max(100).required(),
  description: Joi.string().min(3).max(500).required(),
});

module.exports = { serviceCreateSchema };

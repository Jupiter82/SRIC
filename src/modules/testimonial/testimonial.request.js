const Joi = require("joi") 

const testimonialCreateSchema = Joi.object({
    title: Joi.string().min(3).max(100).required(),
    description: Joi.string().min(3).max(500).required(),
    name: Joi.string().min(3).max(100).required(),
    position: Joi.string().min(3).max(100).required(),
    rating: Joi.number().min(1).max(5).required(),
    status:Joi.string().regex(/^(active|inactive)$/).default('inactive')
})

module.exports = {testimonialCreateSchema}
const Joi = require("joi") 

const logoCreateSchema = Joi.object({
    title: Joi.string().min(3).max(100).required(),
})

module.exports = {logoCreateSchema}
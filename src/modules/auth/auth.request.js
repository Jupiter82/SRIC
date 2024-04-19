const Joi = require("joi")
//params is aways in object
const registerSchema = Joi.object({
    name: Joi.string().min(2).max(30).required(),
    email: Joi.string().email().required(),
    address: Joi.string().empty(),
    phone: Joi.string().pattern(/^(\+\d{1,3}\s?)?1?\-?\.?\s?\(?\d{3}\)?[\s.-]?\d{3}[\s.-]?\d{4}$/),
    role: Joi.string().pattern(/^(superadmin|admin)$/)
})

const activatioToken = Joi.object({
    token: Joi.string().length(100).required()
})

module.exports = {
    registerSchema,
    activatioToken
}
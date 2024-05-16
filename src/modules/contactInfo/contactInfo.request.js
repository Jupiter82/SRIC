const Joi = require('joi')

const contractInfoSchema = Joi.object({
    addressTitle: Joi.string().min(3).max(100).required(),
    reference: Joi.string().min(3).max(100).required(),
    address: Joi.string().min(3).max(100).required(),
    workingTitle: Joi.string().min(3).max(100).required(),
    hour: Joi.string().min(3).max(100).required(),
    hourOff: Joi.string().min(3).max(100).required(),
    contactTitle: Joi.string().min(3).max(100).required(),
    phone: Joi.string().min(3).max(100).required(),
    email: Joi.string().Joi.email().min(3).max(100).required(),
})

module.exports = {contractInfoSchema}
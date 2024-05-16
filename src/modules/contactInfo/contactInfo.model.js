const mongoose = require('mongoose')

const ContactInfoSchema = new mongoose.Schema({
    addressTitle:{
        type: String,
        min: 3,
        required:true
    },
    reference:{
        type: String,
        min: 3,
        required:true
    },
    address:{
        type: String,
        min: 3,
        required:true
    },
    workingTitle:{
        type: String,
        min: 3,
        required:true
    },
    hour:{
        type: String,
        min: 3,
        required:true
    },
    hourOff:{
        type: String,
        min: 3,
        required:true
    },
    contactTitle:{
        type: String,
        min: 3,
        required:true
    },
    phone:{
        type: String,
        min: 3,
        required:true
    },
    email:{
        type: String,
        min: 3,
        required:true
    },
    createdBy:{
        type: mongoose.Types.ObjectId,
        ref: "User",
        default: null
    },
    updatedBy:{
        type: mongoose.Types.ObjectId,
        ref: "User",
        default: null
    }
},{
    autoCreate:true,
    autoIndex: true,
    timestamps:true
})

const ContactInfoModel = mongoose.model("ContactInfo", ContactInfoSchema)

module.exports = ContactInfoModel;
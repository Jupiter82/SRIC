const mongoose = require('mongoose')

const LogoSchema = new mongoose.Schema({
    title:{
        type: String,
        min: 3,
        required:true
    },
    image:{
        type: String,
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

const LogoModel = mongoose.model("Logo", LogoSchema)

module.exports = LogoModel;
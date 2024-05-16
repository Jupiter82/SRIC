const mongoose = require('mongoose')

const TestimonialSchema = new mongoose.Schema({
    title:{
        type: String,
        min: 3,
        required:true
    },
    description:{
        type: String,
        min:3,
        required:true
    },
    status:{
        type:String,
        enum:['active','inactive'],
        default: "inactive"
    },
    image:{
        type: String,
        required:true
    },
    name:{
        type:String,
        min:3,
        required:true
    },
    position:{
        type:String,
        min:3,
        required:true
    },
    rating:{
        type:Number,
        min:1,
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

const TestimonialModel = mongoose.model("Testimonial", TestimonialSchema)

module.exports = TestimonialModel;
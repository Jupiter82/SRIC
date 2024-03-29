const express = require('express');
const app = express()
const authRouter = require('../modules/auth/auth.router')

app.use("/auth", authRouter)

//route
// /api/v1/about-us
app.get('/about-us',(req,res,next) => {
    let data = {
        id: "123",
        title: "About us Page",
        detail: "This is about us content",
        image: "",
        author: "Jupiter Bade"
    }
    res.json({
        result:data,
        message: "About us fetched",
        meta: null
    })
})

//login check
app.use((req,res,next) =>{
    //TODO Login check
    let success = true //false
    let user ={
        id: 123,
        name: "Jupiter Bade",
        role: 'admin'
    }
    req.authUser = user;
    if(success){
        next()
    } else {
        res.json({
            result: "Login required!",
            message: "Please Login first",
            meta:null
        })
    }
})





app.use('/',(req,res,next) => {
    //logic
    console.log(req.url);
    // res.end("First express Output")
    res.json({
        result: "Hello World",
        message:"Notification",
        meta: null
    })
})


module.exports = app;
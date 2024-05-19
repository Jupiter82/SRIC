const express = require('express');
const app = express()
const cors = require("cors");
require("./db.config")
const router = require('../routes/router')
// const path = require('path');

app.use(cors())
//body parsers
app.use(express.json())
app.use(express.urlencoded({
    extended:false
}))
// app.use('/uploads', express.static(path.join(__dirname, '..', '..', 'public', 'uploads')));


//route
app.use('/api/v1/', router)

app.use((req, res, next) => {
    next({code:404,message:"Route Not Found"})
})

/** Error handler */
app.use((error,req, res, next)=>{
    console.log("Garbage",error)
    const code = error.code ?? 500;
    const message = error.message ?? "Server Error";
    const result = error.result ?? null;
    // TODO : Cleanu formating of error
    // 200 ===> success
    res.status(code).json({
        result: result,
        message: message,
        meta:null
    })
})

module.exports = app;
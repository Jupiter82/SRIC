const express = require('express');
const app = express();
const authRouter = require('../modules/auth/auth.router')
const bannerRouter = require('../modules/banner/banner.router')
const logoRouter = require('../modules/logo/logo.router')

app.use("/auth", authRouter)
app.use("/banner", bannerRouter)
app.use("/logo", logoRouter)
module.exports = app;
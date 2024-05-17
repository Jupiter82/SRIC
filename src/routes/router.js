const express = require('express');
const app = express();
const authRouter = require('../modules/auth/auth.router')
const bannerRouter = require('../modules/banner/banner.router')
const logoRouter = require('../modules/logo/logo.router')
const aboutRouter = require('../modules/about/about.router')
const testimonialRouter = require('../modules/testimonial/testimonial.router')
const contactInfoRouter = require('../modules/contactInfo/contactInfo.router')
const serviceRouter = require('../modules/service/service.router')




app.use("/auth", authRouter)
app.use("/banner", bannerRouter)
app.use("/logo", logoRouter)
app.use("/about", aboutRouter)
app.use("/testimonial", testimonialRouter)
app.use("/contactInfo", contactInfoRouter)
app.use("/service", serviceRouter)


module.exports = app;
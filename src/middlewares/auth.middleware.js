
const authCheck = (req,res,next) =>{
    //TODO: Login or not check
    console.log("I am on auth Middleware")
    next()
}

module.exports = authCheck
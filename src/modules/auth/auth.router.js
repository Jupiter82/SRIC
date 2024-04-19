const router = require('express').Router()
const authCtrl = require("./auth.controller")

const {validator,paramValidator} = require('../../middlewares/validator.middleware')
const {registerSchema,activatioToken} = require("./auth.request")
const uploader = require('../../middlewares/uploader.middleware')

/*Register User*/
router.post('/register',uploader.array("image"),validator(registerSchema), authCtrl.register) // function defination
router.get('/verify/:token',paramValidator(activatioToken),authCtrl.verifyActivationToken)
router.post("/activation/:token",paramValidator(activatioToken),validator(),authCtrl.activateUser)

/**Login Process */
router.post('/login',authCtrl.loginUser)
//login profile fetch
router.get("/me",authCtrl.getLoggedInUse)
router.get("/logout",authCtrl.logOutUser )

/**Forget password */
router.post('/forget-password',authCtrl.sendEmailForForgetPassword )
router.get('verify-password-token/:token',paramValidator(activatioToken),authCtrl.verifyForgetPasswordToken )
router.post('set-password/:token',paramValidator(activatioToken), authCtrl.updatePassword)

module.exports = router;
// const Joi = require("joi");
const { randomString } = require("../../config/helpers.config");
// const nodemailer = require("nodemailer");
const EmailService = require("../common/mail/email.service");

class AuthController {
  //TODO: functions
  register = async (req, res, next) => {
    try {
      const payload = req.body;

      // images
      // none, single, array
      // if (req.file) {
      //     payload.image = req.file.filename

      // }

      if (req.files) {
        const images = req.files.map((img) => img.filename);
        payload.image = images;
      }
      // Data mapping
      payload.activationToken = randomString(100);
      payload.status = "notactivated";
      // DB store: mangodb
      // TODO: DB Operation
      let dbStatus = true;
      if (dbStatus) {
        //
        // ......... gmail =>

        let link = "http://localhost:5173/activate/" + payload.activationToken;
        let message = `Dear ${payload.name},<br/>
                                <p>Your account has been successfully registered. Please click the link below: or copy paste
                                the url in the browser to activate your account</p>
                                <a href="${link}">
                                    ${link}
                                </a> 
                                <br/>
                                Regard, <br/>
                                System Admin <br/>
                                <small>
                                <em>Please do not reply to this email.</em>
                                </small>`;
        await new EmailService().sendEmail(
          payload.email,
          "Activate Your account",
          message
        );
      }

      res.json({
        result: payload,
        message: "Register Data",
        meta: null,
      });
    } catch (exception) {
      console.log(exception);
      next({
        code: 422,
        message: exception.message,
        result: null,
      });
    }
    //TODO : User Register
    // Validation // payload
    // DB store
    // Activation process
    // response
  };

  verifyActivationToken = (req, res, next) => {
    //TODO: Verify Token
    res.json({
      result: req.params,
      message: "Params",
      meta: null,
    });
  };

  activateUser = (req, res, next) => {
    try {
      // TODO: Activation of the user
      // Action
      let user = {
        name: "Jupiter Bade",
        email: "jupiterbade@gmail.com",
        status: "active",
        password: "....."
      };
      const success = true;
      //Email Your account has been successfully activated
      if (success) {
        res.json({
          result: req.body,
          message: "Account Activated successfully",
          meta: null,
        });
      } else {
        throw { code: 422, message: "Cannot activated at this moment" };
      }
    } catch (exception) {
      next(exception);
    }
  };

  loginUser = (req, res, next) => {
    // TODO : Login Process
    res.json({
      result: "Hello there",
    });
  };

  getLoggedInUse = (req, res, next) => {
    console.log("I am me");
    //TODO: get logged in user
    res.json({
      result: null,
      message: "I am on me route",
      meta: null,
    });
  };

  logOutUser = (req, res, next) => {
    //TODO: Logout logged in user
  };

  sendEmailForForgetPassword = (req, res, next) => {
    //TODO:
  };

  verifyForgetPasswordToken = (req, res, next) => {
    //TODO: Set password for forget
  };

  updatePassword = (req, res, next) => {
    //TODO: Set password for forget
  };
}

//object = // class
const authCtrl = new AuthController()
module.exports = authCtrl;
const nodemailer = require("nodemailer")
class EmailService { 
    transporter;
    constructor(){
        this.transporter = nodemailer.createTransport({
            host:"sandbox.smtp.mailtrap.io",
            port: 587,
            // secure:true,
            auth:{
                user:"d8cf5b63f1dd87",
                pass:"5adceffd9ffb1f",
            }
        })
    }
   
    sendEmail = async (to, sub, message) => {
            // //Email send
        try{
            await this.transporter.sendMail({
                to: to,
                from: "no-reply@ecommerce.com",
                subject: sub,
                html: message,
                // text: "",
                // cc: "",
                // bcc: "",
                // attachments: "",
            })
            } catch(exception){
                console.log("SendEmail:", exception)
                throw exception
            }
        }
}

module.exports = EmailService;

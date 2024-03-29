
Requirement
Features
users
-admin

    Banner 
    = CRUD

src

/config - all the configurations
/routes
/module
    /auth
    /banner
    /


    /utilities
    /services




// Auth
    -> Register             // post => /register
    -> Activation           // get => /activate/:token
    -> Password Set         // post => /set-password/:token
    -> Login                // post => /login 
    -> Forget Password      // post => /forget-password
    -> Reset Password       // post => /reset-password
    -> Logout               // get => /logout
    -> Role based Access control

    //User 
    => User Create (register)
    => User List (read all users)
    => User List Based on filter
    => User detail based on ID
    => User update based on ID
    => User delete based on ID

    //banner 
    => banner Create (register)
    => banner List (read all users)
    => banner List Based on filter
    => banner detail based on ID
    => banner update based on ID
    => banner delete based on ID


Route ===> Middleware 
        ---- response return
        res.json()


Route ===> MIddleware-----> Middleware ---------> Middleware =========> Controller


4x 
400 => Bad Request
401 => Unathorized
403 => Access Denied
404 => Not found
422 => Unprocessable Entity



application                                         smtp(25,465,587,2525)                gmail.com
Node app                                            SMTP Server                          IMAP/POP3

mailtrap
sendgrid
mailchimp
gmail


Node Application ===> Laptop ===> Router Block ===> ISP Server ===>NepalTelecome Server ===> Internet ===> Gmail
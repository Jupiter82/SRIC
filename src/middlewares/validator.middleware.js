const validator = (schema) =>{
    return async (req,res,next) => {
        try {
            let payload = req.body;
            //
                if (req.file || req.files) {
                    
                }
            //
            await schema.validateAsync(payload)
            next();
        } catch (exception) {
            next({
                code: 422,
                message: exception.message,
                result: null
            })
        }
    }
}

module.exports = validator
// validator()
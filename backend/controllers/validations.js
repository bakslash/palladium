const returns = require('./returns');

exports.registerValidations = async (req, res, next) => {
    try {
        if(!req.body.first_name) {
            const message = "Please provide first name"
            await returns.validationErrors(req, res, message);
            return false
        }
        if(!req.body.last_name) {
            const message = "Please provide last name!"
            await returns.validationErrors(req, res, message);
            return false
        }
       
       
        }catch(err) {
        console.log(err)
        await returns.serverError(req, res, err);
    }
 }

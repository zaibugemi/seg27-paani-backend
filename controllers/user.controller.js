const User = require('../models/user.model'); // model of the user. A class with attributes a user has e.g email, password
                                             // methods of this class interact with the database directly. You will write your queries there.

exports.create_new_user = async (request, response) => {
    
    user = request.body

    if(!user.email_address || !user.password) {
        return response.status(400).json({
            message: 'Missing email_address or password field',
            error: true
        })
    }

    await User.getByEmail(user.email_address)
    .then(async (result) => {
        if(result.length) return response.status(400).json({message: 'An account with that email address already exists', error: true})
        else {
            result = await User.create(user)
            .then(() => {
                return response.status(200).json({
                    message: 'Record inserted',
                    error: false
                })
            }).catch((error) => {return response.status(400).json({message: error, error: true})});
        }
    }).catch((error) => {return response.status(400).json({message: error, error: true})});
    
} 
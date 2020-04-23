const User = require('../models/emptyModel'); // CHANGE THIS TO WHERE YOUR MODEL IS DEFINED.

exports.your_function = async (request, response) => {

    return response.status(200).json({
        message: 'OK'
    })

} 

// ADD MORE FUNCTIONS HERE

// exports.your_other_function = ...
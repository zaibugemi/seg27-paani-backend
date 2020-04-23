const User = require('../models/userModel'); // model of the user. A class with attributes a user has e.g email, password
                                             // methods of this class interact with the database directly. You will write your queries there.

exports.create_new_user = async (request, response) => {
    
    user = new User(request.body) // create a User object with the parameters the request body has.
                                  // here request.body will be smth like {email: 'email@email.com', password: 'password}
                                  // if not, respond k somethings wrong

    // VALIDATE USER OBJECT HERE BEFORE INTERACTING WITH THE DATABASE. Check if email is valid, user with email already exists etc.

    // < CHECK IF USER ALREADY EXISTS HERE >

    //////////////////////////////////////////////////////////////////
    
    result = await user.createUser().catch((error) => { // calls the User object ka createUser method, which inserts the record into the database.
                                                            // returns a promise, so catch errors in case something goes awry during insertion.
        return response.json('An error occured.') // send a response back to the client (aka the app)
    });
    return response.status(200).json({ // response in case no error occured and 
        message: 'OK'
    })
} 
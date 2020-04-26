const express = require('express');
const userController = require('../controllers/user.controller'); // handles transaction with the database, and returns a response accordingly.
                                                                 // any checks e.g email taken are also handled by this

const router = express.Router(); // create an instance of a router, which will store all our routes defined below

router.get('/', (req, res, next) => { // define how to handle requests to www.[whatever].com/user
    userController.get_all_users(req, res);
});

router.post('/', (req, res, next) => {
    userController.create_new_user(req, res); // POSTing an email address and password to www.[whatever].com/user tells the controller
                                              // to create a new user in the database with said credentials. See implementation in
                                              // controllers/userController.js
})

module.exports = router // export the router, so these routes can be made available in other scripts that import them using require().
const express = require('express');
const userController = require('../controllers/emptyController'); // CHANGE THIS TO WHERE YOUR CONTROLLER IS DEFINED

const router = express.Router(); // create an instance of a router, which will store all our routes defined below

// DEFINE ROUTES HERE

// e.g router.get('/orders')...

module.exports = router // export the router, so these routes can be made available in other scripts that import them using require().
const express = require('express');
const bodyparser = require('body-parser'); // used to extract parameters (e.g email and password in case of login) from http post requests

const app = express();
app.use(bodyparser.json()) // tell express that all http requests should pass through bodyparser first
app.use(bodyparser.urlencoded({ extended: true })) //

// setting up routes
const userRoutes = require('./routes/userRoute'); // routes related to users are defined in routes/userRoute.js.
//// IMPORT YOUR OWN ROUTES HERE !!

app.use('/users', userRoutes); // tell express to forward requests at www.[whatever].com/users or any subdirectory of /users to userRoutes.js
//// ADD YOUR ROUTES HERE !! e.g app.use('/orders', orderRoute). Don't forget to define orderRoute in routes/orderRoute.js!

port = 7777
app.listen(port)
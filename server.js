const express = require('express');
const morgan = require('morgan'); // logging
const bodyparser = require('body-parser'); // used to extract parameters (e.g email and password in case of login) from http post requests

const app = express();
app.use(morgan('combined'))
app.use(bodyparser.json()) // tell express that all http requests should pass through bodyparser first
app.use(bodyparser.urlencoded({ extended: true })) //

// setting up routes
const userRoutes = require('./routes/user.routes'); // routes related to users are defined in routes/user.routes.js.
const orderRoutes = require('./routes/order.routes');
//// IMPORT YOUR OWN ROUTES HERE !!

app.use('/users', userRoutes); // tell express to forward requests at www.[whatever].com/users or any subdirectory of /users to userRoutes.js
app.use('/orders', orderRoutes);

port = process.env.PORT || 7777
app.listen(port, () => {
    console.log("Server up. Listening on port", port);
})

// provides a connection to an mysql database

const mysql = require('mysql');
const credentials = require('./credentials');

connection = mysql.createConnection(credentials);
    
connection.connect((error) => {
    if (error) {
        console.log(error)
    } 
    else {
        console.log('Connected to the MySQL database.')
    }
})

module.exports = connection


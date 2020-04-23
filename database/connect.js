// provides a connection to an mysql database

const mysql = require('mysql');

connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'paani'
    });
    
connection.connect((error) => {
    if (error) {
        console.log(error)
    } 
    else {
        console.log('Connected to the MySQL database.')
    }
})

module.exports = connection


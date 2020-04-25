// provides a connection to an mysql database

const mysql = require('mysql');
const credentials = require('./credentials');

pool = mysql.createPool(credentials);

module.exports = pool


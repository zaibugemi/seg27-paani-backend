const query = require('../database/query'); // simplifies database queries

class User { // define a User object. Has the same attributes as a user in the database ki user table.

    constructor(user) { // the parameter user is a JSON object, usse extract email and password to construct the User object
        this.user = user
        this.email = user.email
        this.password = user.password
    }
    
    async createUser () { // simply executes a query to add user to database. 
        return await query(`INSERT INTO users set ?`, [this.user]).catch((error) => {console.log(error)});
    }

    // more user methods will go here, e.g userExists(), deleteUser() etc

}

module.exports = User
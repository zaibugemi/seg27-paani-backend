conn = require('./connect.js');

module.exports = async (sql, params) => {
    return new Promise((resolve, reject) => {
        conn.query(sql, params, (error, result) => {
            if(error) reject(error);
            else resolve(result);
        })

    })
}
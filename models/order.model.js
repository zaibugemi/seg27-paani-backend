const query = require('../database/db.query'); // simplifies database queries

model = {
    
    create: async (order) => { // executes a query to add user to database.
        console.log(order);
        return await query(`INSERT INTO paani.order (customer_id, package_id, order_status) VALUES (?, ?, ?)`, [order.customer_id, order.package_id, order.order_status]);
    },

    getAll: async () => {
        return await query(`SELECT * FROM paani.order`);
    },
}

module.exports = model
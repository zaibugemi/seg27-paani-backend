const express = require('express');
const customerController = require('../controllers/customer.controller')

const router = express.Router();

router.get('/', (req, res, next) => {
    res.status(200).json({
        message: 'Customer',
        error: 'null'
    });
});

router.post('/', (req, res, next) => {
    customerController.create_new_customer(req, res);
})

module.exports = router
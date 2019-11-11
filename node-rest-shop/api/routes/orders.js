const express = require('express');

// subpackage w/ capibilities to handle different routes w/ diff endpoints
const router = express.Router();

// Handles GET requests
router.get('/', (req,res,next) => {
    res.status(201).json({
        message: 'Orders were fetched'
    });
});

// Handle POST requests
router.post('/', (req,res,next) => {
    const order = {
        productId: req.body.productId,
        quantity: req.body.quantity
    }
    res.status(201).json({
        message: 'Order was created',
        order: order
    });
});

// Handle GET requests for OrderId
// :orderId dynamic path parameter
router.get('/:orderId', (req,res,next) => {
    res.status(200).json({
        message: 'Orders were fetched',
        orderId: req.params.orderId
    });
});

router.delete('/:orderId', (req,res,next) => {
    res.status(200).json({
        message: 'Order deleted',
        orderId: req.params.orderId
    });
});


module.exports = router;

const express = require('express');

// subpackage w/ capibilities to handle different routes w/ diff endpoints
const router = express.Router();
const mongoose = require('mongoose');

const Product = require('../models/products.js');

// Handles GET requests
router.get('/', (req,res,next) => {
    res.status(200).json({
        message: 'Handling GET requests to /products'
    });
});

router.post('/', (req,res,next) => {
  // Constructor 
    const product = Product({
        _id: new mongoose.Types.ObjectId(),
        name: req.body.name,
        price: req.body.price
    });

    // Stores into database
    product.save().then(result => {
        console.log(result);
    })
    .catch(err => console.log(err));

    res.status(201).json({
        message: 'Handling POST requests to /products',
        createdProduct: product
    });
});

router.get('/:productId', (req,res,next) => {
    const id = req.params.productId;

    if (id === 'special') {
        res.status(200).json({
            message: 'You discovered the special ID',
            id: id
        });
    }
    else {
        res.status(200).json({
            message: 'You passed an ID'
        });
    }
});

router.patch('/:productId', (req,res,next) => {
   res.status(200).json({
       message: 'Updated product!'
   });
});

router.delete('/:productId', (req,res,next) => {
    res.status(200).json({
        message: 'Deleted product!'
    });
 });

module.exports = router;

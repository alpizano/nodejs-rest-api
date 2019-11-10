const express = require('express');
const app = express();
const morgan = require('morgan');

/*
app.use((req, res, next) => {
    res.status(200).json({
        message: 'It works!'
    });
}); 
*/

// Routes that handle request
const productRoutes = require('./api/routes/products.js');
const orderRoutes = require('./api/routes/orders.js');

// use morgan for logging
app.use(morgan('dev'));

app.use('/products', productRoutes);
app.use('/orders', orderRoutes);

// To handle errors
app.use((req,res,next) => {
    const error = new Error('Not found');
    error.status = 404;
    next(error);
});

app.use((error, req, res, next) => {
    res.status(error.status || 500);
    res.json({
        error: {
            message: error.message
        }
    });
});

module.exports = app;
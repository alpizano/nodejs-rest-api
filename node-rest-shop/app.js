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

module.exports = app;
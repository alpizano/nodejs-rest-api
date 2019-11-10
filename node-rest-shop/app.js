const express = require('express');
const app = express();

/*
app.use((req, res, next) => {
    res.status(200).json({
        message: 'It works!'
    });
}); 
*/

const productRoutes = require('./api/routes/products.js')

app.use('/products', productRoutes);

module.exports = app;
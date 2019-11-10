const express = require('express');
const app = express();

/*app.use((req, res, next) => {
    res.status(200).json({
        message: 'It works!'
    });
}); 
*/

// incoming request has to go through use

app.use('/products', productRoutes);

module.exports = app;
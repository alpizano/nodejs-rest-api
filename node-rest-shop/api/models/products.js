const mongoose = require('mongoose');

const productSchema = mongoose.Schema({
    _id: mongoose.Types.ObjectId,
    name: String,
    price: Number
});

// First parameter is name of model to be used internally
// Second parameter is the schema to be used
module.exports = mongoose.model('Product', productSchema);
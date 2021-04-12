//This is the model Generation for the Product
const mongoose = require('mongoose');
const productSchema = mongoose.Schema({
    _id : mongoose.Schema.Types.ObjectId,
    name : String,
    price : Number
})

module.exports = mongoose.model('Product', productSchema);
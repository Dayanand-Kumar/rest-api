const mongoose = require('mongoose');
const Product = require('./../models/product');

exports.new_post = (req, res, next) =>{
    const product = new Product({
        _id : new mongoose.Types.ObjectId(),
        name : req.body.name,
        price : req.body.price
    });
    product
    .save()
    .then(result =>{
        console.log(result);
        res.status(200).json({
            message : 'Post is working for product entry',
            createdProduct : product
        })
    })
    .catch(err => {
        res.status(500).json({
           error : err
        });
    });
 }
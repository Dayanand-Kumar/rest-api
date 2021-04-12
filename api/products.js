const express = require('express');
const mongoose = require('mongoose');
const Product = require('./../models/product');
const router = express.Router();

router.post('/', (req, res, next) =>{
    const product = new Product({
        _id : new mongoose.Types.ObjectId(),
        name : req.body.name,
        price : req.body.price
    });
    product
    .save()
    .then(result =>{
        res.status(200).json({
            message : 'Post is working for product entry',
            product : product
        })
    })
    .catch(err => {
        res.status(500).json({
           error : err
        });
    });
 })

 module.exports = router;
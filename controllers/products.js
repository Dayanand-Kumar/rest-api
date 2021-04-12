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

 exports.get_all_products = (req, res, next) =>{
    Product
    .find()
    .exec()
    .then(result =>{
        res.status(200).json({
            count : result.length,
            product : result.map(data =>{
                return {
                    _id : data._id,
                    name : data.name,
                    price : data.price,
                    request : {
                        type : 'GET',
                        productDetails : '/products/'+data.id
                    }
                }
            })
        })
    })
    .catch(err =>{
        res.status(500).json({
            error : err
        })
    })
}

exports.get_particular_product = (req, res, next) =>{
    Product.findById(req.params.productId)
    .exec()
    .then(result =>{
        res.status(201).json({
            _id : result._id,
            name : result.name,
            price:result.price
        })
    })
    .catch(err =>{
        res.status(500).json({
            error : err
        })
    });
}
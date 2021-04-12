const express = require('express');
const mongoose = require('mongoose');
const Product = require('./../models/product');
const router = express.Router();
const postController = require('./../controllers/products');
const product = require('./../models/product');

router.post('/', postController.new_post);
router.get('/', postController.get_all_products)
router.get('/:productId', postController.get_particular_product)

 module.exports = router;
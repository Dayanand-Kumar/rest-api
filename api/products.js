const express = require('express');
const mongoose = require('mongoose');
const Product = require('./../models/product');
const router = express.Router();
const postController = require('./../controllers/products');

router.post('/', postController.new_post);

 module.exports = router;
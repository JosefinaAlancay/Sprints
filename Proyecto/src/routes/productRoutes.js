const express = require('express');
const router = express.Router(); 
const productController = require('../controllers/productController');

router.get('/', productController.index);
router.get('/detalle', productController.productDetail);
router.get('/carrito', productController.productCart);
router.get('/crear', productController.createProduct);

module.exports= router; 
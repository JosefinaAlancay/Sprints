const express = require('express');
const router = express.Router(); 
const productController = require('../controllers/productController');

//listar productos/
//router.get('/',productController.listproducts);

//CrearProductos
router.get('/create',productController.createProduct);
//router.post('/create',productController.createProduct);

//Mostrar por productos por id
//router.get('/detail/:id',productController.productDetail);

//Editar y Borrar producto
//router.put('/detail/:id',productController.editProduct);
//router.delete('/detail/:id',productController.deleteProduct);

module.exports= router; 
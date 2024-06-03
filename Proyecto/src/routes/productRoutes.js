const express = require("express");
const router = express.Router();
const { uploadProducts } = require('../middlewares/multerConfig');


const {
  listProducts,
  createProductForm,
  createProduct,
  getProductById,
  editProductForm

} = require("../controllers/productController");

//Listar Productos
router.get("/", listProducts);

//CrearProductos
router.get('/create',createProductForm);
router.post('/create',uploadProducts.single('product_image'), createProduct);

//Mostrar por productos por id
router.get('/detail/:id',getProductById);

//Editar y Borrar producto
router.get('/edit/:id',editProductForm);
//router.delete('/detail/:id',productController.deleteProduct);

module.exports= router; 
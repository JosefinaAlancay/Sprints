const { Product, Specification } = require("../database/models");
const { ProductCategory } = require("../database/models");

const productController = {
    listProducts: async (req, res) => {
        try {
            const products = await Product.findAll();

            const title = "Lista de Productos";
            res.render('listProducts', { products, title });
        } catch (error) {
            console.error('Error fetching products:', error);
            res.status(500).send('Internal Server Error');
        }
    },
    getProductById: async (req, res) => {
        try {
            const productId = req.params.id;
            const product = await Product.findByPk(productId);

            const title = "Detalles del Producto";
            if (product) {
                res.render('productDetail', { product, title });
            } else {
                res.status(404).send('Producto no encontrado');
            }
        } catch (error) {
            console.error('Error fetching product details:', error);
            res.status(500).send('Internal Server Error');
        }
    },
    createProductForm: async (req, res) => {
        try {
            const categories = await ProductCategory.findAll();

            res.render('createProduct', { categories });
        } catch (error) {
            console.error('Error mostrando el formulario de creación:', error);
            res.status(500).send('Internal Server Error');
        }
    },
    createProduct: async (req, res) => {
        try {

            const { name, price, discount, categoryId, color, brand, material, string, description } = req.body;
            const image = req.file.filename;


            const newProduct = await Product.create({
                name,
                price,
                discount,
                image,
                description,
                productCategoryId: categoryId
            });

            const title = "Detalles del Producto";
            await Specification.create({
                brand,
                material,
                stringNumber: string,
                color,
                productId: newProduct.id
            });
            res.redirect('/products');
        } catch (error) {
            console.error('Error creando el producto:', error);
            res.status(500).send('Internal Server Error');
        }
    },
    editProductForm: async (req, res) => {
        try {
            const productId = req.params.id;

            const product = await Product.findByPk(productId);

            res.render('editProduct', { product, title });
        } catch (error) {
            console.error('Error mostrando el formulario de edición:', error);
            res.status(500).send('Internal Server Error');
        }
    }


};

module.exports = productController;

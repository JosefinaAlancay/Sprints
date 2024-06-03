const productController = {
    createProduct:(req,res)=>{
        res.render('createProduct', { cssFile: 'createProduct.css', title: 'Create Product'})
    }
};

module.exports = productController;

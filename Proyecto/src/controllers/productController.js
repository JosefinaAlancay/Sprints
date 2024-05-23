const productController={
    
    index:(req,res)=>{
        res.render('index' , { cssFile: 'index.css', title: 'Home' });
    },
    productDetail:(req,res)=>{
        res.render('productDetail', { cssFile: 'productDetail.css', title: 'Product Detail'});
    },
    productCart:(req,res)=>{
        res.render('productCart', { cssFile: 'productCart.css', title: 'Product Cart' });
    },
    createProduct:(req,res)=>{
        res.render('createProduct', { cssFile: 'createProduct.css', title: 'Create Product'})
    }
};

module.exports = productController;

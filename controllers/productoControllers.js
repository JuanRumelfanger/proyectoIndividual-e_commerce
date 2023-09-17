const productsController = {
    home: (req, res)=>{
        res.render('home');
    },
    products: (req, res)=>{
        res.render('products');
    }
}

module.exports=productsController;
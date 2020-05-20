const ProductController = require('../controllers/product.controller');

module.exports = function(app){
    app.get('/api/product/:id', ProductController.oneProduct);
    app.get('/api/products', ProductController.allProducts);
    app.post('/api/product/create', ProductController.createProduct);
    app.put('/api/product/update/:id', ProductController.updateProduct);
    app.delete('/api/product/delete/:id', ProductController.deleteProduct);
}

const ProductController = require('../controllers/product.controller');

module.exports = function(app){
    app.get('/api/products/:id', ProductController.oneProduct);
    app.get('/api/products', ProductController.allProducts);
    app.post('/api/products/create', ProductController.createProduct);
}

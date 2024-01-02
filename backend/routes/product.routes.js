// Import the express module
const express = require('express');
// Call the router method from express to create the router 
const router = express.Router();
// Import the product controller 
const productController = require('../controller/product.controller');

// Create the route to handle Add products request on post
router.post('/api/add/products', productController.addProduct);

// Export the router
module.exports = router;
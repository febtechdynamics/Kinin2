// Import the express module
const express = require("express");
// Call the router method to from express to create the router
const router = express.Router();
// Import the product_order controller
const productOrderController = require("../controller/product_order.controller");
// Create the route to handle add the roduct order request POST
router.post('/api/add/product/order/',productOrderController.addProductOrder);

// Export the router
module.exports=router;
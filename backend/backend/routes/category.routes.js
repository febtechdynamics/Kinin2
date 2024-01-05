// Import the express module 
const express = require('express');

// Call the router method from express to create the router 
const router = express.Router();

// Import the category controller
const categoryController = require('../controller/category.controller');

// Create a route to handle the add category request on post  
router.post('/api/category', categoryController.AddCategory);

// Export the router
module.exports = router;
// Import the express module 
const express = require('express');
// Call the router method from express to create the router 
const router = express.Router();

// Import the install router 
const installRouter = require("./install.routes")

// Import the category router
const categoryRouter = require("./category.routes");

// Import the user router
const userRouter = require("./user.routes");

// Import the product router
const productRouter = require("./product.routes");

// Import the pharmacy router
const pharmacyRouter = require("./pharmacy.routes");
// Add the install router to the main router
router.use(installRouter);
// Add Category router to the main router
router.use(categoryRouter);
// Add user router to the main router
router.use(userRouter);
// Add product router to the main router
router.use(productRouter);

// Add pharmacy router to the main router
router.use(pharmacyRouter);
// Export the router
module.exports = router; 
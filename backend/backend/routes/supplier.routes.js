// Import the express module
const express = require('express');
// Call the router method from express to create the router 
const router = express.Router();

// Import the supplier controller 
const supplierController = require("../controller/supplier.controller");

// Create a route to handle the add supplier request by using POST method
router.post('/api/supplier', supplierController.addSupplier);

// Create the route to handle update the supplier request on PUT
router.put("/api/update/supplier/", supplierController.updateSupplier);
// Create a route to handle delete supplier request on DELETE
router.delete("/api/delete/supplier/:user_id", supplierController.deleteSupplier);
// Export the module
module.exports = router;

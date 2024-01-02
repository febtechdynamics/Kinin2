// Import the express module
const express = require('express');
// Call the router method from express to create the router
const router = express.Router();

// Import the Pharmacy controller
const pharmacyController = require("../controller/pharmacy.controller");

// Create the route to handle Add pharmacy request on POST
router.post('/api/pharmacy', pharmacyController.addPharmacy);
// Create the route to handle Update pharmacy request on PUT
router.put("/api/pharmacy", pharmacyController.updatePharmacy);

// Create the route to handle delete pharmacy request on DELETE
router.delete('/api/pharmacy/:user_id', pharmacyController.removePharmacist);
// Export the router
module.exports = router;


// Import the express module
const express = require('express');
// Call the router method from express to create the router 
const router = express.Router();

// Import the user controller
const usersController = require('../controller/users.controller');

// Create a route to handle the add user request on post
router.post("/api/user", usersController.AddUser); 
// Create a route to handle the update user request on PUT
router.put('/api/user/', usersController.updateUser);
// Create a route to handle the delet user request on DELETE
router.delete('/api/user/:user_id', usersController.deleteUser);

// Export the router
module.exports = router;
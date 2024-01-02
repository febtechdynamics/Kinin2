// Import the user service
const userService = require("../services/user.services");
// Create the AddUser  controller
async function AddUser(req, res, next){
// Check if user email already exists in the database 
const userExists =await userService.checkIfUserExists(req.body.user_email);

// If user exists, send a response to the client
if (userExists) {
    res.status(400).json({
        error: "Already this email has been registered!"
    });
}
else {
    try {
        const userData = req.body;
        // Create the user
        const user= await userService.AddUser(userData);
        if(!user){
            res.status(400).json({
                error: "Failed to add user!"
            });
        } else {
            // Send the created user data as a response to the client
            res.status(200).json({
                status:"The user was added successfully!"
            });
        }

    } catch (error) {
        console.log(error);
        res.status(400).json({
            error: "Something went wrong while adding the user!"
        });
    }
}
}
// Create the pharmacy updater function
async function updateUser(req, res, next){
  // check if pharmacy infromation is updated from database
  const userUpdated= await userService.checkIfUserUpdated(req.body.user_id);
  if(userUpdated){
    res.status(400).json({
      error: "Already user infromation is updated!"
    });
  }
  else{
    try {
      const  user_id = req.body;
      // Create the user update infromation
      const user = await userService.updateUser(user_id);
      if (!user) {
        res.status(400).json({
          error: "Failed to update the user data!"
        });
      }else{
        res.status(200).json({
          status: "The user infromation is updated successfully!"
        });
      }
    } catch (error) {
      console.log(error);
      res.status(400).json({
        error: "Something went wrong while updating the user data@!"
      });
    }

  }
}


// Create a function to delete the user from database by using user_id
async function deleteUser(req, res){
    try {
        const userId = req.params.user_id;
    
        // Delete the pharmacist information
        const deletedUser = await userService.deleteUser(userId);
    
        if (!deletedUser) {
          return res.status(400).json({
            error: "Failed to delete the user information!"
          });
        } else {
          return res.status(200).json({
            status: "The user information is deleted successfully!"
          });
        }
      } catch (error) {
        console.error(error);
        return res.status(500).json({
          error: "An error occurred while deleting the data"
        });
      }
}

// Export the module
module.exports = {
    AddUser,
    updateUser,
    deleteUser
} 
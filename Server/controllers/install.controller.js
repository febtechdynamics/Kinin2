// Import the install service to handle communication with the database
const installService = require("../services/install.services");

// Create a function to handle the install request
async function Install(req, res, next) {
  // Call the install service to create the database tables
  const installTables = await installService.Install();
  // Check if the install was successful or not and send the appropriate response to the client
  if (installTables.status === 200) {
    // If successful, send a response to the client
    res.status(200).json({
      message: installTables,
    });
  } else {
    // If there was an error, send an error response to the client
    res.status(400).json({
      message: installTables,
    });
  }
}

// Export the install module
module.exports = {
  Install,
};

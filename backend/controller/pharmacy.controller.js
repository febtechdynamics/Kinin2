// Import the product service
const pharmacyService = require("../services/pharmacy.services");

// Create the pharmacy controller
async function addPharmacy(req, res, next){
    // check if pharmacy_information is registered  in the database
    const pharmacyExists = await pharmacyService.checkIfPharmacyExists(req.body.pharmacist_license);
    // if pharmacy information exists from database, please respond to pharmacist
    if (pharmacyExists) {
        res.status(400).json({
            error: "Already pharmacy information is added!"
        });
    }else{
        try {
        const pharmacyData = req.body;
        // Create the pharmacy information
        let pharmacy = await pharmacyService.addPharmacy(pharmacyData);
        if(!pharmacy){
            res.status(400).json({
                error: "Failed to add the pharmacy information!"
            });
        }else{
            res.status(200).json({
                status: "The pharmacy information is added successfully!"
            });
        }
        } catch (error) {
            console.log(error);
            res.status(400).json({
                error: "Something went wrong!"
            });
        }
    }
    
}


     // Create the pharmacy updater function
   async  function updatePharmacy(req,res,next){
    // check if pharmacy_information is updated in the database
    const pharmacyUpdated = await pharmacyService.checkIfPharmacyUpdated(req.body.pharmacist_license);
    if (pharmacyUpdated) {
        res.status(400).json({
            message: "Already the pharmacy information is updated!"
        });
    }else {
        try {
            const pharmacyData = req.body;
            // Create the pharmacy update information
            let pharmacy = await pharmacyService.updatePharmacy(pharmacyData);
            if (!pharmacy) {
                 res.status(400).json({
                    error: "Failed to update the pharmacy information!"
                 });
            } else{
                res.status(200).json({
                    status: "The pharmacy information is updated successfully!"
                });
            }
            
        } catch (error) {
            console.log(error);
            res.status(400).json({
                error: "Something went wrong while updating the pharmacist data"
            });
        }
    }

   }

// Create a function to delete inserted pharmacy informations
async function removePharmacist(req, res) {
    try {
    const  userid  = req.params.user_id;
  
      // Delete the pharmacist information
      const deletedPharmacy = await pharmacyService.removePharmacist(userid);
  
      if (!deletedPharmacy) {
        return res.status(400).json({
          error: "Failed to delete the pharmacist information!"
        });
      } else {
        return res.status(200).json({
          status: "The pharmacist information is deleted successfully!"
        });
      }
    } catch (error) {
      console.error(error);
      return res.status(500).json({
        error: "An error occurred while deleting the data!"
      });
    }
  }

// export the module to service 
module.exports = {
    addPharmacy,
    updatePharmacy,
    removePharmacist
}
// import the supplier service
const supplierService = require("../services/supplier.services");

// Create the add supplier controller function
async function addSupplier(req, res, next){
    // check if supplier exists from database by using email

    const supplierExists = await supplierService.checkIfSupplierExists(req.body.supplier_license);
    // if supplier exists from database, send response to the user
    if(supplierExists){
        res.status(400).json({
            message: "Already this user  exists!"
        });
    }else{
        try {
            const supplierData = req.body;
            // Create the user
            const supplier= await supplierService.addSupplier(supplierData);
            if(!supplier){
                res.status(400).json({
                    error: "Failed to add supplier!"
                });
            }
            else{
                // Send the created supplier data as a response to the user
                res.status(200).json({
                    status: "The supplier was added successfully!"
                });
            }

        } catch (error) {
            console.log(error);
            res.status(400).json({
                error: "Something went wrong while adding supplier!"
            });
        }
    }
}

// Create the supplier updater function
async function updateSupplier(req, res, next){
    // Check if supplier_information is updated from database
    const supplierUpdated = await supplierService.checkIfSupplierUpdated(req.body.supplier_license);
    if(supplierUpdated){
        res.status(400).json({
            message: "Already the supplier information is updated!"
        });
    }else{
        try {
            const supplierData = req.body;
            // Update the supplier
            let supplier = await supplierService.updateSupplier(supplierData);
            if (!supplier) {
                res.status(400).json({
                    error: "Failed to update the supplier information"
                });
            }else{
                res.status(200).json({
                    status: "The supplier information is updated successfully!"
                });
            }
        } catch (error) {
            console.log(error);
            res.status(400).json({
                error: "Invalid request! Please check your inputs."
            });
        }
    }
}
// Create a function to delete the supplier from the system
async function deleteSupplier(req, res){
    try {
        const userID = req.params.user_id;
        // Delete the supplier information from the system
        const deleteSupplier = await supplierService.deleteSupplier(userID);
        if(!deleteSupplier){
            res.status(400).json({
                error: "Failed to delete the supplier from the system!"
            });
        }else{
            res.status(200).json({
                status: "Successfully deleted the supplier from the system!"
            });
        }
    } catch (error) {
        console.log(error);
        res.status(500).json({
            error: "An error occured while deleting the supplier data from the system!"
        });
    }
}

// Export module
module.exports = {
    addSupplier,
    updateSupplier,
    deleteSupplier
}
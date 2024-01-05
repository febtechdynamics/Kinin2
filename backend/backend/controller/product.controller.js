// Import the product service
const productServices = require("../services/product.services");

// Create the add product controller
async function addProduct(req, res, next){
    // check if product already exists in the database
    const productExists = await productServices.checkIfProductsExists(req.body.product_brand_name);
     // if product exists send the response to user
     if(productExists){
        res.status(400).json({
            error: "The product exits from the database"
        });
     }else{
        try {
            const productData = req.body;
            // Create the product
            let product = await productServices.addProduct(productData);

            if(!product){
                res.status(400).json({
                    error: "Failed to create new product"
                });
            }
            else{
                res.status(200).json({
                    status: "The product has been added successfully"
                });
            }
            
        } catch (error) {
            console.log(error);
            res.status(400).json({
                error: "An error occurred while creating a new product"
            })
        }
     }
}

// Create the product updater function
async function updateProduct(req, res, next){
    // Check the pharmacy information is updated from database
    const updatedProduct = await productServices.checkIfProductUpdate(req.body.product_brand_name);
    if(updatedProduct){
        res.status(400).json({
            message: "Already the product information updated!"
        });
    }
    else {
        try {
            const productData = req.body;
         const product = await productServices.updateProduct(productData);
         if(!product){
            res.status(400).json({
                error: "The product doesn't exist from the system!"
            });
         }else{
            res.status(200).json({
                status: "The product is updated successfully!"
            });
         }
        } catch (error) {
            console.log(error);
            res.status(500).json({
                error: "Something went wrong while updating the product from the system!"
            });
        }
    }
}
// Create a function to delete the product from the system
async function deleteProduct(req, res){
    try {
        const productID = req.params.product_id;
        // Delete the product from the system
        const deletedProduct = await productServices.deleteProduct(productID);
        if(!deletedProduct){
            res.status(400).json({
                message:"There is no existed product from the system"
            });
        }else{
            res.status(200).json({
                status: "The product is deleted from the system successfully!"
            });
        }
    } catch (error) {
        console.log(error);
        res.status(500).json({
            error:"An error occured while deleting the product from the system!"
        });
    }
}

// Export the modules
module.exports = {
    addProduct,
    updateProduct,
    deleteProduct
}
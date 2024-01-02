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

// Export the modules
module.exports = {
    addProduct
}
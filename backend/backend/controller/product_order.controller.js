// Import the product order services
const productOrderServices = require("../services/product_order.services");

// Create the function product order table controller 
async function addProductOrder(req, res, next){
    // check if the order table existance from the system
    const productOrderExists = await productOrderServices.checkIfProductOrderExists(req.body.order_id);
    // if order product table exists, the send the response to user
    if (productOrderExists) {
        res.status(400).json({
            message:  "The ordered product exists from the system!"
        });
    } else {
        try {
            const productOrderData = req.body;
            // call the service function 
            const productOrder = await productOrderServices.addProductOrder(productOrderData);
            if(!productOrder){
                res.status(400).json({
                    error: "Faield to create the product order!"
                });
            }
            else{
                res.status(200).json({
                    status: "The product order has been added to the system!"
                })
            }
        } catch (error) {
            console.log(error);
            res.status(500).json({
                error: "An error occurred while creating the product order!"
            })
        }
    }
}


// Export the module
module.exports = {
    addProductOrder
}
// Import the category service
const categoryService = require("../services/category.services"); 

// Create add category controller
async function AddCategory(req, res, next){
      // Check if category name exist or not in the database
      const categoryExists = await categoryService.checkIfCategoryExists(req.body.category_name);

        // If category exists, send a response to the client

        if(categoryExists){
            res.status(400).json({
                error: "Already the product Category name is registered!"
            });
        }else{
            try {
                const categoryData = req.body;
                // Now create the category
                const category = await categoryService.AddCategory(categoryData) ;

                // check either the category is present or not
                if(!category){
                    res.status(400).json({
                        Error : "Something went wrong while creating the new Category!"
                    });
                    } else {
                        res.status(200).json({
                            Message : "New Product Category has been created successfully!"
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

// Export the module 
module.exports = {
    AddCategory
    };

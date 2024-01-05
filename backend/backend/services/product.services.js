// Import the query function from the db.config.js file
const conn = require("../dbConfig/db.config");

// A function to check if product exists in the database
async function checkIfProductsExists(product){
    const query = "SELECT * FROM product WHERE product_brand_name = ?";
    const rows = await conn.query(query, [product]);
    console.log(rows);
    if(rows.length > 0){
        return true;
    }
    return false;
} 

// A function to create the add product functions 
async function addProduct(products){

    let createdProducts = {};
    try {
        // Insert the product data into the product table
        const query = "INSERT INTO product( pharmacy_id, category_id, product_generic_name, product_brand_name) VALUES (?, ?, ?, ?)";
        const rows = await conn.query(query, [products.pharmacy_id, products.category_id, products.product_generic_name, products.product_brand_name]);

        if(rows.affectedRows !== 1){
          return false;
        }

           // Get the product_id from insert
           const product_id = rows.insertId;
           // Insert the remaining data in to the product_info table
           const query2 = "INSERT INTO product_information(product_id, product_price, product_description, manufactured_by, country_of_origin, expired_date) VALUES (?, ?, ?, ?, ?, ?)";
           const rows2 = await conn.query(query2, [product_id, products.product_price, products.product_description, products.manufactured_by, products.country_of_origin, products.expired_date]);

           createdProducts = {
            product_id: product_id
           }
    } catch (error) {
        console.log(error);
    }
    return createdProducts;
}

// A function to get the product by using Product_Brand_Name
async function getProductsByProduct_Brand_Name(product_brand_name){
    const query = "SELECT * FROM product INNER JOIN product_information ON products.product_id = product_information.product_id WHERE products.product_brand_name = ?";
    const rows = await conn.query(query, [product_brand_name]);
    return rows;
}

// A function to check the Product from the product table to Update
async function checkIfProductUpdate(product){
    const query = "SELECT * FROM product WHERE product_id = ?";
    const rows = await conn.query(query, [product]);
    console.log(rows);
    if(rows.length > 0){
        return true;
    }
    return false;
}


// Create a function product table updater
async function updateProduct(products){
    let updatedProduct = {};
    try {
        const query_product ="UPDATE product SET pharmacy_id=?, category_id=?, product_generic_name=?,product_brand_name=? WHERE product_id=?";
        const rows = await conn.query(query_product, [
            
            products.pharmacy_id,
            products.category_id,
            products.product_generic_name,
            products.product_brand_name,
            products.product_id
          ]);
        const query_product_info = "UPDATE product_information SET product_price=?, product_description= ?, manufactured_by=?, country_of_origin=?, expired_date=? WHERE product_id = ?";
        await conn.query(query_product_info, [
            products.product_price,
            products.product_description,
            products.manufactured_by,
            products.country_of_origin,
            products.expired_date,
            products.product_id 
         ]);

         if(rows.changedRows !== 1){
            return false;
         }
        // Get the product_id from inserted
        const product_id = products.product_id;

        // Construct the product_id object to return
        updatedProduct = {
            product_id: product_id
        }


    } catch (error) {
        console.log(error);
    }
    return updatedProduct;
}



// Create a function to delete the products from the system(database)
async function deleteProduct(product_id){
    let deletedProducts = {};
    try {

        //  Delete the product_information table first
        const query_pro_info = "DELETE FROM product_information WHERE product_id = ?";
        await conn.query(query_pro_info, [product_id]);

        // Delete product table by using product table

        const query = "DELETE FROM product WHERE product_id =?";
       const rows = await conn.query(query,[product_id]);
        if(rows.affectedRows !== 1){
         return false;
        }
        // Construct the product objet to return deletedProduct
        deletedProducts = {
            product_id: product_id
        };
        
        
    } catch (error) {
        console.log(error);
    }
    return deletedProducts;
}

// Export the modules 
module.exports ={
    checkIfProductsExists,
    addProduct,
    getProductsByProduct_Brand_Name,
    checkIfProductUpdate,
    updateProduct,
    deleteProduct
}
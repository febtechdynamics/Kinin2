// Import the query function from the db.config.js file
const conn = require("../dbConfig/db.config");

// Create a function which checks the existence of category
async function checkIfCategoryExists(cat){
    const query = "SELECT * FROM category WHERE category_name = ?";
    const rows = await conn.query(query, [cat]);
    console.log(rows);
    if(rows.length > 0){
        return true;
    }
    return false;
}

// A function to create the new category
async function AddCategory(category){
    // Get the category by category_name from insert
    const query = "INSERT INTO category(category_name) VALUES (?)";
    const rows = await conn.query(query, [category.category_name]);
    return rows;

}

// Export modules 
module.exports = {
    checkIfCategoryExists, 
    AddCategory 
    };




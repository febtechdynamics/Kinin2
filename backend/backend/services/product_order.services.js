// Import the query function from dbconfig/db.config.js
const conn = require("../dbConfig/db.config");

// A function to check if the product order exists from the system
async function checkIfProductOrderExists(product_order){
    const query = "SELECT * FROM product_order_table WHERE order_id=?";
    const rows = await conn.query(query, [product_order]);
    console.log(rows);
    if(rows.length > 0){
        return true;
    }
    return false;
}



// Import the query function from the db.config.js file
const conn = require("../dbConfig/db.config");

// A function to check if the user exist in the database
async function checkIfSupplierExists(supplier_license){
    const query = "SELECT * FROM supplier WHERE supplier_license=?";
    const rows = await conn.query(query, [supplier_license]);
    console.log(rows);
    if(rows.length > 0){
        return true;
    }
    return false;
}

// A function to create supplier
async function addSupplier(supplier){
    let createdSupplier = {};
    try {
        // Insert the supplier information into the supplier table

        const query = "INSERT INTO supplier(user_id, supplier_license, supplier_company_name, supplier_district, supplier_sub_city) VALUES (?, ?, ?, ?, ?)";

        const rows = await conn.query(query, [supplier.user_id, supplier.supplier_license, supplier.supplier_company_name, supplier.supplier_district, supplier.supplier_sub_city]);
        console.log(rows);
        if(rows.affectedRows !==1){
            return false;
        }

    //   Get the supplier_id from inserted
    const supplier_id = rows.insertId;

    // Construct the supplier object to return
    createdSupplier = {
        supplier_id: supplier_id
    }

    } catch (error) {
        console.log(error);
    }
    return createdSupplier;
}

// A function to get the supplier by using supplier license
async function getSupplierBySupplierLicense(supplier_license){
    const query = "SELECT * FROM supplier WHERE supplier.supplier_license=?";
    const rows = await conn.query(query, [supplier_license]);
    return rows;
}

// A function to check wether the supplier information
async function checkIfSupplierUpdated(supplier){
    const query = "SELECT * FROM supplier WHERE supplier_license=?";
    const rows = await conn.query(query, [supplier]);
    console.log(rows);
    if(rows.length > 0){
        return true;
    }
    return false;
}

// Create a function which updates the supplier
async function updateSupplier(supply){
    let updatedSupplier = {};
    try {
        // update the supplier query data
        const query = "UPDATE supplier SET user_id=?, supplier_license=?, supplier_company_name=?, supplier_district=?, supplier_sub_city=? WHERE supplier_id=?";
        const rows = await conn.query(query, [
            supply.user_id,
            supply.supplier_license,
            supply.supplier_company_name,
            supply.supplier_district,
            supply.supplier_sub_city,
            supply.supplier_id
        ]);
        if(rows.changedRows !== 1){
            return false;
        }

        // Get the supplier from inserted
        const supplier_id = supply.supplier_id;

        // Construct the supplier object to return
        updatedSupplier = {
            supplier_id: supplier_id
        }

    } catch (error) {
        console.log(error);
    }
    return updatedSupplier;
}

// Create the supplier system deleter function
async function deleteSupplier(user_id){
   try {
     // Delete the products associated with the supplier from the product table based on the pharmacy_id:
     const query_product = "DELETE FROM product WHERE pharmacy_id IN (SELECT pharmacy_id FROM pharmacy_ WHERE user_id IN (SELECT user_id FROM supplier WHERE supplier_id = ?))";
     await conn.query(query_product, [user_id]);
     // Delete the records from the product_information table associated with the products deleted in step 1:
     const query1 = "DELETE FROM product_information WHERE product_id NOT IN (SELECT product_id FROM product)";
     await conn.query(query1, [user_id]);
 
     // Delete the supplier from the supplier table based on the user_id:
     const query_supplier = "DELETE FROM supplier WHERE supplier_id = ?";
     await conn.query(query_supplier, [user_id]);
 
     // Delete the supplier's associated records from the user_info table based on the user_id:
     const query_user_info = "DELETE FROM user_info WHERE user_id IN (SELECT user_id FROM supplier WHERE supplier_id = ?)";
     await conn.query(query_user_info, [user_id]);
 
     // Delete the supplier's role from the user_role table based on the user_id and the role name 'Supplier':
     const query_supplier_role = "DELETE FROM user_role WHERE user_id IN (SELECT user_id FROM supplier WHERE supplier_id = ?) AND role_id = (SELECT role_id FROM roles WHERE role_name = 'Supplier')";
     await conn.query(query_supplier_role, [user_id]);
 
     // Delete the supplier's credentials from the user_password table based on the user_id: 
     const query_suppliers_credentials = "DELETE FROM user_password WHERE user_id IN (SELECT user_id FROM supplier WHERE supplier_id = ?)";
     await conn.query(query_suppliers_credentials, [user_id]);
 
     // Delete the supplier's records from the user table based on the user_id
     const query_user = "DELETE FROM user WHERE user_id IN (SELECT user_id FROM supplier WHERE supplier_id = ?)";
     await conn.query(query_user, [user_id]);
 
     // Delete the supplier's orders from the product_order_table table based on the supplier_id:
     const query_product_order = "DELETE FROM product_order_table WHERE supplier_id = ?";
     await conn.query(query_product_order, [user_id]);
    
  return true;
   } catch (error) {
    console.log(error);
   }

}

// export the module 
module.exports={
    checkIfSupplierExists,
    addSupplier,
    getSupplierBySupplierLicense,
    checkIfSupplierUpdated,
    updateSupplier,
    deleteSupplier
};
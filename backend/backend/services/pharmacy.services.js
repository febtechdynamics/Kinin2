// Import the query function from the db.config.js file
const conn = require("../dbConfig/db.config");

// A function to check if pharmacy exists in the database 

async function checkIfPharmacyExists(pharmacy){
    const query = "SELECT * FROM pharmacy_ WHERE pharmacist_license = ?";
    const rows = await conn.query(query, [pharmacy]);
    console.log(rows);

    if(rows.length > 0){
        return true;
    }
    return false;
}

// Create a function to add pharmacy 
async function addPharmacy(pharmacist){
    let createdPharmacy = {};
    try {

        // Insert the pharmacy data queries
        const query = "INSERT INTO pharmacy_(user_id, pharmacist_license, pharmacy_name, pharmacy_Address_Sub_city, Pharmacy_Address_District, Hours_Of_Operation) VALUES (?, ?, ?, ?, ?, ?)";
        const rows = await conn.query(query, [
            pharmacist.user_id, 
            pharmacist.pharmacist_license, 
            pharmacist.pharmacy_name, 
            pharmacist.pharmacy_Address_Sub_city, 
            pharmacist.Pharmacy_Address_District, 
            pharmacist.Hours_Of_Operation
        ]);
        
        if(rows.affectedRows !== 1){
            return false;
        }

        // Get the pharmacy_id from inserted
        const pharmacy_id = rows.insertId;

        // Construct to the pharmacy object to return
        createdPharmacy = {
            pharmacy_id: pharmacy_id
        }

        
    } catch (error) {
        console.log(error);
        
    }
    return createdPharmacy;
}


// Create a function to get the registered pharmacy by using pharmacist_license

async function getPharmacyByUsingPharmacitLicense(pharmacist_license){
    const query = "SELECT * FROM pharmacy_ WHERE pharmacist.pharmacist_license = ?";
    const rows = await conn.query(query, [
        pharmacist_license
    ]);
    return rows;
}


// A function to check wether the pharmacy information is updated or not
async function checkIfPharmacyUpdated(pharmacy){
    const query = "SELECT * FROM pharmacy_ WHERE pharmacist_license = ?";
    const rows = await conn.query(query, [pharmacy]);
    console.log(rows);

    if(rows.length > 0){
        return true;
    }
    return false;
}

// Create a function which updates the inserted data from database

async function updatePharmacy(pharmacist) {
    let updatedPharmacy = {};
    try {
        // Update the pharmacy data which is inserted from database
        const query = "UPDATE pharmacy_ SET user_id=?, pharmacist_license=?, pharmacy_name=?, pharmacy_Address_Sub_city=?, Pharmacy_Address_District=?, Hours_Of_Operation=? WHERE pharmacy_id=?";
        const rows = await conn.query(query, [
            pharmacist.user_id,
            pharmacist.pharmacist_license,
            pharmacist.pharmacy_name,
            pharmacist.pharmacy_Address_Sub_city,
            pharmacist.Pharmacy_Address_District,
            pharmacist.Hours_Of_Operation,
            pharmacist.pharmacy_id
        ]);

        if (rows.changedRows !== 1) {
            return false;
        }

        // Get the pharmacy_id from inserted
        const pharmacy_id = pharmacist.pharmacy_id;

        // Construct the pharmacy object to return
        updatedPharmacy = {
            pharmacy_id: pharmacy_id
        }
        
    } catch (error) {
        console.log(error);
    }
    return updatedPharmacy;
}




async function removePharmacist(user_id) {
    try {
      // Delete the pharmacy records associated with the user
      const query1 = "DELETE FROM pharmacy_ WHERE user_id = ?";
      await conn.query(query1, [user_id]);
  
      // Delete the user_info record
      const query2 = "DELETE FROM user_info WHERE user_id = ?";
      await conn.query(query2, [user_id]);
  
      // Delete the user_password record
      const query3 = "DELETE FROM user_password WHERE user_id = ?";
      await conn.query(query3, [user_id]);
  
      // Delete the user_role record
      const query4 = "DELETE FROM user_role WHERE user_id = ?";
      await conn.query(query4, [user_id]);
  
      // Delete the user record
      const query5 = "DELETE FROM user WHERE user_id = ?";
      await conn.query(query5, [user_id]);
  
      return true;
    } catch (error) {
      console.error(error);
      throw error;
    }
  }

// Export the function to controller

module.exports = {
    checkIfPharmacyExists,
    addPharmacy,
    getPharmacyByUsingPharmacitLicense,
    checkIfPharmacyUpdated,
    updatePharmacy,
    removePharmacist
}
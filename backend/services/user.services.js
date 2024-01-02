// Import the query function from the db.config.js file 
const conn = require("../dbConfig/db.config");

// Import the bcrypt module 
const bcrypt = require('bcrypt');

// A function to check if user exists in the database 
async function checkIfUserExists(email){
    const query = "SELECT * FROM user WHERE user_email = ?";
    const rows = await conn.query(query, [email]);
   console.log(rows);

   if(rows.length > 0){
    return true;
   }
   return false;
}

// A function to create user 
async function AddUser(user){
    let createdUser = {};
    try {
        // Generate a salt and hash the password
        const salt = await bcrypt.genSalt(10);
          // Hash the password 
          const hashedPassword = await bcrypt.hash(user.user_password, salt);

          // Insert the email in to the user table 
          const query = "INSERT INTO user(user_email, active_user, created_date) VALUES (?, ?, ?)";
          const rows = await conn.query(query, [
            user.user_email, 
            user.active_user,
             user.created_date]);
             
          console.log(rows);
          if(rows.affectedRows !==1 ){
            return false;
          }  
        //   Get user id from inserted
        const user_id = rows.insertId;
         // Insert the remaining data in to user_info, user_pass, user_role
         const query2 = "INSERT INTO user_info(user_id, user_first_name, user_last_name, user_phone_number_1, user_phone_number_2, registered_by, updated_date, updated_by) VALUES (?, ?, ?, ?, ?, ?, ?, ?)"
         const rows2 = await conn.query(query2, [
          user_id,
            user.user_first_name, 
            user.user_last_name, 
            user.user_phone_number_1,
            user.user_phone_number_2,
            user.registered_by, 
            user.updated_date,
            user.updated_by 
            ]);
         const query3 = "INSERT INTO user_password(user_id, user_password_hashed) VALUES (?, ?)";
         const rows3 = await conn.query(query3, [
           user_id,
           hashedPassword
          ]);
         const query4 = "INSERT INTO user_role( user_id, role_id) VALUES (?, ?)";
         const rows4 = await conn.query(query4, [
          user_id, 
          user.role_id
        ]);

         // construct to the user object to return 
         createdUser = {
            user_id: user_id
         }

    } catch (error) {
        console.log(error);
    }
    // Return the user object
    return createdUser;
}

// A function to get user by email

async function getUserByEmail(user_email){
    const query = "SELECT * FROM user INNER JOIN user_info ON user.user_id = user_info.user_id INNER JOIN user_password ON user.user_id = user_password.user_id INNER JOIN user_role ON user.user_id = user_role.user_id WHERE user.user_email =?";
    const rows = await conn.query(query, [
      user_email
    ]);
    return rows;
}


// A function to check wether the farmacy infromation is updated or not
async function checkIfUserUpdated(user_id) {
  const query = "SELECT * FROM user WHERE user_id = ?";
  const [rows] = await conn.query(query, [user_id]);
  if (rows.length > 0) {
    return true;
  }
  return false;
}

// Create a function which updates the inserted data from database
async function updateUser(users) {
 let updatedUser = {};
  
  try {
    // Update the user table
    const user_query = "UPDATE user SET user_email=?,active_user=?,created_date=? WHERE user_id=?";
    const user_rows = await conn.query(user_query, [users.user_email, users.active_user, users.created_date,users.user_id]);



    // Update the user information table
    const user_info_query = "UPDATE user_info SET user_first_name=?,user_last_name=?,user_phone_number_1=?,user_phone_number_2 = ?, registered_by = ?, updated_date = ?,updated_by = ? WHERE user_id = ?";
    await conn.query(user_info_query, [
      users.user_first_name,
      users.user_last_name,
      users.user_phone_number_1,
      users.user_phone_number_2,
      users.registered_by,
      users.updated_date,
      users.updated_by,
      users.user_id
    ]);

    // Update the user password table
      // Hash the new password if provided
      if (users.user_password) {
        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(users.user_password, salt);
        // Update the user password table with the new hashed password
        const user_password_query = "UPDATE user_password SET user_password_hashed=? WHERE user_id=?";
        await conn.query(user_password_query, [
          hashedPassword,
          users.user_id
        ]);
      }


      //====remark here=== Update the user password table for learning purpose
// const user_password_query = "UPDATE user_password SET user_password=? WHERE user_id=?";
// await conn.query(user_password_query, [
//   users.user_password,
//   users.user_id
// ]);

    // Update the user role table
    const user_role_query = "UPDATE user_role SET role_id = ? WHERE user_id = ?";
    await conn.query(user_role_query, [
      users.role_id, 
      users.user_id
    ]);

    if (user_rows.changedRows !== 1) {
      return false;
    }

    // Get the user_id from inserted
    const user_id = users.user_id;

    // Construct the user object to return
    updatedUser = {
      user_id: user_id
    };
  } catch (error) {
    console.log(error);
  }
  return updatedUser;
}




// Create a function to delete user from database
async function deleteUser(user_id){
    let deletedUser = {};
    try {
      // Delete the pharmacy data based on the pharmacy_id
      const query = "DELETE FROM user WHERE user_id=?";
      const rows = await conn.query(query, [user_id]);
     
  if (rows.affectedRows !== 1) {
        return false;
      }
  
      // Construct the pharmacy object to return
      deletedUser = {
        user_id: user_id
      };
    
    } catch (error) {
      console.error(error);
    }
    return deletedUser;
}

// Export the modules
module.exports = {
    checkIfUserExists,
    AddUser,
    getUserByEmail,
    checkIfUserUpdated,
    updateUser,
    deleteUser
}

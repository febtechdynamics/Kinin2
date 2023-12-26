//import mysql2 module promise wrapper

const mysql = require("mysql2/promise");

//  preparing connection parameters we use to connect to the database
const dbconfig = {
  connectionLimit: 10,
  password: process.env.DB_PASS,
  user: process.env.DB_USER,
  //   host: process.env.DB_HOST,
  database: process.env.DB_NAME,
};

//create the connection pool
const pool = mysql.createPool(dbconfig);

//    Prepare a function that will execute the sql queries asynchronously
async function query(sql, params) {
  const [rows, fields] = await pool.execute(sql, params);
  return rows;
}

//export the query function for use in the application

module.exports = { query };

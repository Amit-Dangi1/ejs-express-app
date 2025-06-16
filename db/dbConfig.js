import mysql from  "mysql2";

const pool = mysql.createPool({
    user:"root",
    password:"root",
    database:"express_project",
    host:"localhost",
})

export default pool;
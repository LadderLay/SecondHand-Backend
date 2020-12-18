const mysql = require('mysql');
const connection = mysql.createConnection({
  host     : 'localhost',
  user     : 'root',
  password : '123456',
  database : 'login_test'
});
 
connection.connect();
 
// connection.query('SELECT * FROM users AS solution', function (error, results, fields) {
//   if (error) throw error;
//   console.log("results", results);
// });
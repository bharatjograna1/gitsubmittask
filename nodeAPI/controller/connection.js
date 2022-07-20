/**
 * Author : Bharat Jograna
 * Created : 20 July 2022
 * File Comment : server connection file to connect database...
*/
'user strict';

var mysql = require('mysql');

//local mysql db connection
var connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '',
  database: 'solwininfo'
});

connection.connect(function (err) {
  if (err) throw err;
});

module.exports = connection;
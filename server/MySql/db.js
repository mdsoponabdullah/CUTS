

var mysql = require('mysql');

const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    port: '3306',  /* port on which phpmyadmin run */
    password: '',
    database: 'cuts',
   // socketPath: '/Applications/MAMP/tmp/mysql/mysql.sock' //for mac and linux
});

connection.connect(function(err) {
    if (err) {
      return console.error('error: ' + err.message);
    }

  else{
    console.log('Connected to the MySQL server successfull.');

  /* insetData(connection);
    showData(connection);
   updatedata(connection);
   deleteData(connection);*/


  }


  });

  module.exports =connection;
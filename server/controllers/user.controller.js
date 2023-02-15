const connection = require("../MySql/db");

const getUser = (req, res) => {
  const tableName = req.query.tableName;

  // console.log(tableName);

  let SQLquery;
  if (tableName === "staff") {
    SQLquery = `SELECT * FROM ${tableName}`;
  } else {
    SQLquery = `SELECT * FROM ${tableName} natural join department`;
  }

  connection.query(SQLquery, (err, results) => {
    if (err) throw err;
    if (results.length > 0) {
      res.send({
        success: true,
        user: results,
      });
    } else {
      res.send({
        success: false,
      });
    }
  });
};

const userLoginCheck = (req, res) => {
  const { userId, password, tableName } = req.body;
  let SQLquery;
  if (tableName === "staff") {
    SQLquery = `SELECT * FROM ${tableName} WHERE ${tableName}_id = '${userId}' AND password = '${password}'`;
  } else {
    //SQLquery = `SELECT * FROM ${tableName} natural join department WHERE ${tableName}_id = '${userId}' AND password = '${password}'`;
    SQLquery =`SELECT * FROM student natural JOIN department WHERE Student_id="19701055" and password ="1234"`;
  }

  connection.query(SQLquery, (err, results) => {
    if (err) throw err;
    if (results.length > 0) {
      res.send({
        success: true,
        user: results,
      });
    } else {
      res.send({
        success: false,
        message: "Incorrect username or password.",
      });
    }
  });
};

module.exports = { getUser,userLoginCheck };

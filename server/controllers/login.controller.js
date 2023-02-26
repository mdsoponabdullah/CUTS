const connection = require("../MySql/db");

const createLogin = (req, res) => {
  const { userId, password, tableName } = req.body;
  let SQLquery;
  if (tableName === "staff") {
    SQLquery = `SELECT * FROM ${tableName} WHERE ${tableName}_id = '${userId}' AND password = '${password}'`;
  } else {
    SQLquery = `SELECT * FROM ${tableName} natural join department  WHERE ${tableName}_id = '${userId}' AND password = '${password}'`;
  }
  connection.query(SQLquery, (err, results) => {
    if (err) throw err;
    if (results.length > 0) {
      res.send({
        success: true,
        user: results[0],
      });
    } else {
      res.send({
        success: false,
        message: "Incorrect username or password."
      });
    }
  });

};

module.exports = { createLogin };

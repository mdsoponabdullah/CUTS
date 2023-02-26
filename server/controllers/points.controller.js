const connection = require("../MySql/db");

const getPoints = (req, res) => {
  const tableName = req.query.tableName;
  let SQLquery;
  if (tableName === "teacher") {
    SQLquery = `SELECT * FROM point WHERE point_name NOT LIKE '%Station%'`;
  } else if (tableName === "staff") {
    SQLquery = `SELECT * FROM point WHERE point_name NOT LIKE '%Station%'`;
  } else if (tableName === "student") {
    SQLquery = `SELECT * FROM point WHERE point_name LIKE '%Station%'`;
  } else if (tableName === "nothing") {
    SQLquery = `SELECT * FROM point`;
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

module.exports = { getPoints };

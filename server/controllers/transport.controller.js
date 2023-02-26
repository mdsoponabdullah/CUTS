const connection = require("../MySql/db");

const getTransPorts = (req, res) => {
  let SQLquery = `SELECT * FROM transport WHERE 1`;

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

module.exports = { getTransPorts };

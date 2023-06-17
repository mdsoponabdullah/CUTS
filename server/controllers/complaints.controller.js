const connection = require("../MySql/db");

const getComplaints = (req, res) => {
  res.send("successfull");
};

const createComplaint = (req, res) => {
  const { complaint, id, tableName } = req.body;

  const SQLquery = `INSERT INTO ${tableName}_complaint(complaint, ${tableName}_id) VALUES (?,?)`;
  const arr = [complaint, id];
  connection.query(SQLquery, arr, (err, result) => {
    if (err) throw err;
    res.send("successfully inserted "+result);
  });

};

module.exports = { getComplaints, createComplaint };


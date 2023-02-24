const connection = require("../MySql/db");

const getStudentCommunity = (req, res) => {
  const tableName = req.query.tableName;
  let SQLquery;

  if (tableName === "student") {
    SQLquery = `SELECT * FROM student_community natural join student order by message_id ASC `;
  } else if (tableName === "teacher") {
    SQLquery = `SELECT * FROM teacher_community natural join teacher order by message_id ASC `;
  } else if (tableName === "staff") {
    SQLquery = `SELECT * FROM staff_community natural join staff order by message_id ASC `;
  }
  connection.query(SQLquery, (error, results) => {
    if (error) throw error;
    res.json(results);
  });
};

const createMessage = (req, res) => {
  const { message, id,tableName } = req.body;
  const SQLquery =
    `INSERT INTO  ${tableName}_community(message, ${tableName}_id) VALUES (?,?)`;
  const arr = [message, id];
  connection.query(SQLquery, arr, (error, results) => {
    if (error) throw error;
    res.status(201).send("Message sent");
  });
  
};

module.exports = { getStudentCommunity, createMessage };

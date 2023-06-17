const connection = require("../MySql/db");

const getStudentCommunity = (req, res) => {
  const tableName = req.query.tableName;
  let SQLquery;

  if (tableName === "student") {
    SQLquery = `SELECT Student_name, message_id,message,DATE_FORMAT(time, '%H:%i:%s %Y-%m-%d ') time,student_id FROM student_community natural join student order by message_id ASC `;
  } else if (tableName === "teacher") {
    SQLquery = `SELECT  teacher_name, message_id,message,DATE_FORMAT(time, '%H:%i:%s %Y-%m-%d ') time,teacher_id  FROM teacher_community natural join teacher order by message_id ASC `;
  } else if (tableName === "staff") {
    SQLquery = `SELECT staff_name, message_id,message,DATE_FORMAT(time, '%H:%i:%s %Y-%m-%d ') time,staff_id FROM staff_community natural join staff order by message_id ASC `;
  }
  connection.query(SQLquery, (error, results) => {
    if (error) throw error;
    res.json(results);
  });
};

const createMessage = (req, res) => {
  const { message, id, tableName } = req.body;
  const SQLquery = `INSERT INTO  ${tableName}_community(message, ${tableName}_id) VALUES (?,?)`;
  const arr = [message, id];
  connection.query(SQLquery, arr, (error, results) => {
    if (error) throw error;
    res.status(201).send("Message sent");
  });
};

module.exports = { getStudentCommunity, createMessage };

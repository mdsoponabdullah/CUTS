const connection = require("../MySql/db");

const getStudentCommunity = (req, res) => {
  const SQLquery = `SELECT * FROM student_community natural join student order by message_id ASC `;

  connection.query(SQLquery, (error, results) => {
    if (error) throw error;
    res.json(results);
  });
};

const createMessage = (req, res) => {
  const { message, id } = req.body;
  const SQLquery =
    "INSERT INTO `student_community`(`message`, `student_id`) VALUES (?,?)";
  const arr = [message, id];
  connection.query(SQLquery, arr, (error, results) => {
    if (error) throw error;
    res.status(201).send("Message sent");
  });
};

module.exports = { getStudentCommunity, createMessage };

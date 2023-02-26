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
        user:results,
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
    SQLquery = `SELECT * FROM student natural JOIN department WHERE Student_id="19701055" and password ="1234"`;
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

const updateUser = (req, res) => {
  const tableName = req.query.tableName;

  const {
    Student_id,
    staff_id,
    teacher_id,
    Student_name,
    staff_name,
    teacher_name,
    email,
    phone,
    dept_id,
    password,
  } = req.body;

  const id =
    tableName === "student"
      ? Student_id
      : tableName === "staff"
      ? staff_id
      : teacher_id;

  const name =
    tableName === "student"
      ? Student_name
      : tableName === "staff"
      ? staff_name
      : teacher_name;


  // Update user record in MySQL database
  const SQLquery = `UPDATE ${tableName} SET  ${tableName}_name=?,email=?,phone=?,dept_id=?,password=?  WHERE ${tableName}_id = ?`;
  const arr = [name, email, phone, dept_id, password, id];
  connection.query(
    SQLquery,

    arr,
    (err, result) => {
      if (err) {
        console.error(err);
        res.status(500).json({ error: "Database error" });
      } else {
        res.json({ message: "Profile updated successfully" });
      }
    }
  );
};
module.exports = { getUser, userLoginCheck, updateUser };

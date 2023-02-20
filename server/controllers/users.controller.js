//const bodyParser = require("body-parser");
const { v4: uuidv4 } = require("uuid");

var users = require("../models/users.model");
const connection = require("../MySql/db");

//get users // get
const getAllUsers = (req, res) => {
  //res.status(201).json({users});

  // const SQLquery= "SELECT * FROM `student` WHERE 1";

  // connection.query(SQLquery,(err,result)=>{
  //     res.status(201).json({result});

  // })

  const tableName = req.query.tableName;
  let SQLquery;
  if (tableName === "staff") SQLquery = `select * from ${tableName}`;
  else SQLquery = `select * from ${tableName} natural join department`;

  connection.query(SQLquery, (error, data) => {
    if (error) throw error;

    res.send(data);
  });
};

// create users  // post
const createUsers = (req, res) => {
  // const newUser = {
  //     id:uuidv4(),
  //     name : req.body.name,
  //     age : req.body.age

  // }
  // users.push(newUser);
  // res.status(200).send(users);

  const id = req.body.Student_id;
  const name = req.body.name;
  const email = req.body.email;
  const phone = req.body.phone;
  const dept_id = req.body.deptID;
  const password = req.body.password;
  const tableName = req.body.tableName;

  let SQLquery;
  let arr;

  if (tableName === "student") {
    SQLquery =
      "INSERT INTO " +
      tableName +
      "(`Student_id`, `Student_name`, `email`, `phone`, `dept_id`, `password`) VALUES (?,?,?,?,?,?)";
    arr = [id, name, email, phone, dept_id, password];
  } else if (tableName === "teacher") {
    SQLquery =
      "INSERT INTO " +
      tableName +
      "(`teacher_id`, `teacher_name`, `email`, `phone`, `dept_id`, `password`) VALUES (?,?,?,?,?,?)";

    arr = [id, name, email, phone, dept_id, password];
  } else {
    SQLquery =
      "INSERT INTO " +
      tableName +
      "( `staff_id`, `staff_name`, `email`, `phone`, `password`)  VALUES (?,?,?,?,?)";
    arr = [id, name, email, phone, password];
  }
  connection.query(SQLquery, arr, (error) => {
    if (error) console.log(error);
    else res.send("data has been inserted");
  });
};

// update user //put
const updateUsers = (req, res) => {
  const userid = req.params.id;
  const { name, age } = req.body;

  users
    .filter((user) => user.id === userid)
    .map((selecteduser) => {
      selecteduser.name = name;
      selecteduser.age = age;
    });

  res.status(203).send(users);
};

// delete user //delete

const deleteUsers = (req, res) => {
  const userid = req.query.id;
  const tableName = req.query.tableName;

  const SQLquery = `delete from  ${tableName} where ${tableName}_id = ${userid}`; //${tableName}_id Student_id , staff_id ,teacher_id

  connection.query(SQLquery, (error, results) => {
    if (error) {
      return res.status(500).json({ error });
    }
    res.json({ message: "Data deleted successfully" });
  });
  //users = users.filter((user)=>user.id!==userid);

  //res.status(200).send(users);
};

module.exports = { getAllUsers, createUsers, updateUsers, deleteUsers };

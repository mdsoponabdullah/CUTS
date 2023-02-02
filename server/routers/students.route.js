const {getAllStudents,createStudents, updateStudents,deleteStudents} = require("../controllers/students.controller");

const route = require("express").Router();


route.get("/",getAllStudents);

route.post("/",createStudents);

route.put("/:id",updateStudents);
route.delete("/:id",deleteStudents);


module.exports = route;

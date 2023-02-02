const { getAllUsers,createUser, updateUser,deleteUser } = require("../controllers/users.controller");

const route = require("express").Router();


route.get("/",getAllUsers);

route.post("/",createUser);

route.put("/:id",updateUser);
route.delete("/:id",deleteUser);


module.exports = route;

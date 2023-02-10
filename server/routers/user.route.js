const {getUser} = require("../controllers/user.controller");

const route = require("express").Router();


route.get("/",getUser);

// route.post("/",createUsers);

// route.put("/:id",updateUsers);
// //route.delete("/:id",deleteUsers);
// route.delete("/",deleteUsers);


module.exports = route;

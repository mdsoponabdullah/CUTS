
const {createLogin} = require("../controllers/login.controller");


const route = require("express").Router();

route.post("/",createLogin);

  


module.exports =route;


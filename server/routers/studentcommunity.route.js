const {getStudentCommunity,createMessage} = require("../controllers/studentcommunity.controller")
const route= require("express").Router();

route.get("/",getStudentCommunity);
route.post("/",createMessage)

module.exports =route;
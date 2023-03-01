const route = require("express").Router();
const {getPoints,updatePoint} = require("../controllers/points.controller");

//const { post } = require("./schedule.route");

route.get("/",getPoints);
route.put("/:id",updatePoint);






module.exports =route;
const route = require("express").Router();
const {getPoints} = require("../controllers/points.controller")

route.get("/",getPoints);





module.exports =route;
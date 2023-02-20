const route = require("express").Router();
const { getAllShedules } = require("../controllers/shedules.controller");

route.get("/", getAllShedules);

module.exports = route;

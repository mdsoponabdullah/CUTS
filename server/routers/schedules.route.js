const route = require("express").Router();
const { getAllShedules, createSchedule,showAllSchedule,deteleShedule } = require("../controllers/schedules.controller");

route.get("/", getAllShedules);
route.get("/all", showAllSchedule);
route.post("/",createSchedule);
route.put("/:schedule_no",deteleShedule);
module.exports = route;

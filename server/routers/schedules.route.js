const route = require("express").Router();
const { getAllShedules, createSchedule,showAllSchedule,deteleShedule, editSchedule } = require("../controllers/schedules.controller");

route.get("/", getAllShedules);
route.get("/all", showAllSchedule);
route.post("/",createSchedule);
route.delete("/:schedule_no",deteleShedule);

route.put("/:schedule_no",editSchedule);
module.exports = route;


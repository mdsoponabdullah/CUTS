const route = require("express").Router();
const { editSchedule } = require("../controllers/schedule.controller");

// route.get("/", getAllShedules);
// route.get("/all", showAllSchedule);
// route.post("/",createSchedule);
// route.delete("/:schedule_no",deteleShedule);

route.put("/:scheduleNo",editSchedule);
module.exports = route;
const { createComplaint, getComplaints } = require("../controllers/complaints.controller");

const route= require("express").Router();




route.get("/",getComplaints);
route.post("/",createComplaint);



module.exports = route;
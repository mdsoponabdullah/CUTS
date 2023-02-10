const { getAllDemo,createDemo, updateDemo,deleteDemo } = require("../controllers/demo.controller");

const route = require("express").Router();


route.get("/",getAllDemo);

route.post("/",createDemo);

route.put("/:id",updateDemo);
route.delete("/:id",deleteDemo);


module.exports = route;

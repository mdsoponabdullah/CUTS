const connection = require("../MySql/db");

const getPoints = (req, res) => {
  const tableName = req.query.tableName;
  let SQLquery;
  if (tableName === "teacher") {
    SQLquery = `SELECT * FROM point WHERE point_name NOT LIKE '%Station%'`;
  } else if (tableName === "staff") {
    SQLquery = `SELECT * FROM point WHERE point_name NOT LIKE '%Station%'`;
  } else if (tableName === "student") {
    SQLquery = `SELECT * FROM point WHERE point_name LIKE '%Station%'`;
  } else if (tableName === "nothing") {
    SQLquery = `SELECT * FROM point`;
  }
  

  connection.query(SQLquery, (err, results) => {
    if (err) throw err;
    if (results.length > 0) {
      res.send({
        success: true,
        user: results,
      });
    } else {
      res.send({
        success: false,
      });
    }

  });
};

const updatePoint = (req, res) => {
  const x = req.params.id;
  //const x = req.params.schedule_no;

  
  const {
    point_id,
    destination_id,
    time,
    Transport_id,
    day,
    shedule_no,
  }= req.body

  

  const SQLquery = "UPDATE schedule SET shedule_no=?,point_id=?,Transport_id=?,time=?,no_of_passengers=?,destination_id=?,day=? WHERE shedule_no=?";
  connection.query(SQLquery, [shedule_no,point_id,Transport_id,time,0,destination_id,day,x], (err, result) => {
    if (err) throw err;
    else res.send({ success: true, user: result });
  });
};

module.exports = { getPoints, updatePoint };

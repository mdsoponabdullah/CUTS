const connection = require("../MySql/db");
const getAllShedules = (req, res) => {
  const tableName = req.query.tableName;
  const pointId = req.query.pointId;
  const day = req.query.day;
  let SQLquery;

  if (day === "2") {
    if (tableName === "student")
      SQLquery = `SELECT point_name,point_id,TIME_FORMAT(time, '%h:%i %p')formatedTime ,type,category,Transport_id  FROM (schedule NATURAL join point)NATURAL join transport  WHERE point_id = ${pointId} and category="Student" ORDER by time`;
    else if (tableName === "teacher")
      SQLquery = `SELECT point_name,point_id,TIME_FORMAT(time, '%h:%i %p')formatedTime ,type,category,Transport_id  FROM (schedule NATURAL join point)NATURAL join transport  WHERE point_id = ${pointId} and category="Teacher"  ORDER by time`;
    else if (tableName === "staff")
      SQLquery = `SELECT point_name,point_id,TIME_FORMAT(time, '%h:%i %p')formatedTime ,type,category,Transport_id  FROM (schedule NATURAL join point)NATURAL join transport  WHERE point_id = ${pointId} and category="Staff"  ORDER by time`;
  } else {
    if (tableName === "student")
      SQLquery = `SELECT point_name,point_id,TIME_FORMAT(time, '%h:%i %p')formatedTime ,type,category,Transport_id  FROM (schedule NATURAL join point)NATURAL join transport  WHERE point_id = ${pointId} and category="Student" and time >=CURRENT_TIME ORDER by time`;
    else if (tableName === "teacher")
      SQLquery = `SELECT point_name,point_id,TIME_FORMAT(time, '%h:%i %p')formatedTime ,type,category,Transport_id  FROM (schedule NATURAL join point)NATURAL join transport  WHERE point_id = ${pointId} and category="Teacher" and time >= CURRENT_TIME ORDER by time`;
    else if (tableName === "staff")
      SQLquery = `SELECT point_name,point_id,TIME_FORMAT(time, '%h:%i %p')formatedTime ,type,category,Transport_id  FROM (schedule NATURAL join point)NATURAL join transport  WHERE point_id = ${pointId} and category="Staff" and time >=CURRENT_TIME ORDER by time`;
  }

  connection.query(SQLquery, (error, data) => {
    if (error) throw error;

    res.send(data);
  });
};



module.exports = { getAllShedules };

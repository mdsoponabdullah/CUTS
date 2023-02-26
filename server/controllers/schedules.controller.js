const connection = require("../MySql/db");

const getAllShedules = (req, res) => {
  const tableName = req.query.tableName;
  const pointId = req.query.pointId;
  const day = req.query.day;
  let SQLquery;

  if (day === "Regular") {
    if (tableName === "student")
      SQLquery = `SELECT point_name,point_id,TIME_FORMAT(time, '%h:%i %p')formatedTime ,type,category,Transport_id  FROM (schedule NATURAL join point)NATURAL join transport  WHERE point_id = ${pointId} and category="Student" and day="${day}" ORDER by time`;
    else if (tableName === "teacher")
      SQLquery = `SELECT point_name,point_id,TIME_FORMAT(time, '%h:%i %p')formatedTime ,type,category,Transport_id  FROM (schedule NATURAL join point)NATURAL join transport  WHERE point_id = ${pointId} and category="Teacher" and  day="${day}" ORDER by time`;
    else if (tableName === "staff")
      SQLquery = `SELECT point_name,point_id,TIME_FORMAT(time, '%h:%i %p')formatedTime ,type,category,Transport_id  FROM (schedule NATURAL join point)NATURAL join transport  WHERE point_id = ${pointId} and category="Staff" and day=${day}  ORDER by time`;
  } else if (day === "OffDay") {
    if (tableName === "student")
      SQLquery = `SELECT point_name,point_id,TIME_FORMAT(time, '%h:%i %p')formatedTime ,type,category,Transport_id  FROM (schedule NATURAL join point)NATURAL join transport  WHERE point_id = ${pointId} and category="Student"  and day="${day}" ORDER by time`;
    else if (tableName === "teacher")
      SQLquery = `SELECT point_name,point_id,TIME_FORMAT(time, '%h:%i %p')formatedTime ,type,category,Transport_id  FROM (schedule NATURAL join point)NATURAL join transport  WHERE point_id = ${pointId} and category="Teacher"  and day="${day}" ORDER by time`;
    else if (tableName === "staff")
      SQLquery = `SELECT point_name,point_id,TIME_FORMAT(time, '%h:%i %p')formatedTime ,type,category,Transport_id  FROM (schedule NATURAL join point)NATURAL join transport  WHERE point_id = ${pointId} and category="Staff"  and day="${day}" ORDER by time`;
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

const showAllSchedule = (req, res) => {
  const SQLquery = `SELECT * FROM (schedule NATURAL join point)NATURAL join transport order by time`;

  connection.query(SQLquery, (error, data) => {
    if (error) throw error;

    res.send(data);
  });
};

const createSchedule = (req, res) => {
  const { pointId, transportId, time, desPointId, day } = req.body;

  const SQLquery = `INSERT INTO schedule(point_id, Transport_id, time, no_of_passengers, destination_id, day) VALUES (?,?,?,?,?,?)`;
  const arr = [pointId, transportId, time, 0, desPointId, day];
  connection.query(SQLquery, arr, (error) => {
    if (error) throw error;
    else {
      res.send("successfull");
    }
  });

};


const deteleShedule = (req, res) => {
  const schedule_no = req.params.schedule_no;

  const SQLquery = `DELETE FROM schedule where shedule_no = ${schedule_no}`;
  connection.query(SQLquery,(error)=>{

    if(error) throw error;
    res.send("successfully Delete");
  })
};

module.exports = { getAllShedules, createSchedule, showAllSchedule,deteleShedule };


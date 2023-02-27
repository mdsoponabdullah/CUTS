const connection = require("../MySql/db");

const getAllShedules = (req, res) => {
  const tableName = req.query.tableName;
  const pointId = req.query.pointId;
  const desPointId = req.query.desPointId;
  const day = req.query.day;
  let SQLquery = `with t1 as ( SELECT * FROM (schedule NATURAL join transport )), t2 as (  SELECT * from point ), t3 as ( SELECT Transport_id	, shedule_no, t1.point_id	, time,	 no_of_passengers,	destination_id	, day	, type	,category	,t2.point_id picuppointID,	point_name picuppointName 	 FROM t1 JOIN t2 on t1.point_id=t2.point_id),t4 as (  SELECT  shedule_no sheduleNo ,t2.point_id destinatonId,	point_name destinatonName	FROM t1 JOIN t2 on t2.point_id=t1.destination_id),t5 as (SELECT  * from t4 join t3 on t3.shedule_no=t4.sheduleNo ),t6 as (SELECT shedule_no	,point_id	,picuppointName point_name ,destination_id	,destinatonName destination_name	,Transport_id	,TIME_FORMAT(time, '%h:%i %p')formatedTime ,time	,no_of_passengers	,day	,type	,category	from t5 ) SELECT * from t6`;

  if (day === "Regular") {
    if (tableName === "student")
      SQLquery += ` WHERE point_id = ${pointId} and category="Student" and day="${day}" and destination_id=${desPointId}  ORDER by time`;
    else if (tableName === "teacher")
      SQLquery += ` WHERE point_id = ${pointId} and category="Teacher" and  day="${day}"  and destination_id=${desPointId} ORDER by time`;
    else if (tableName === "staff")
      SQLquery += ` WHERE point_id = ${pointId} and category="Staff" and day="${day}"  and destination_id=${desPointId}  ORDER by time`;
  } else if (day === "OffDay") {
    if (tableName === "student")
      SQLquery += ` WHERE point_id = ${pointId} and category="Student"  and day="${day}" and destination_id=${desPointId}  ORDER by time`;
    else if (tableName === "teacher")
      SQLquery += ` WHERE point_id = ${pointId} and category="Teacher"  and day="${day}" and destination_id=${desPointId}  ORDER by time`;
    else if (tableName === "staff")
      SQLquery += ` WHERE point_id = ${pointId} and category="Staff"  and day="${day}"  and destination_id=${desPointId} ORDER by time`;
  } else {
    if (tableName === "student")
      SQLquery += `  WHERE point_id = ${pointId} and category="Student" and day != "OffDay" and destination_id=${desPointId}   and time >=CURRENT_TIME ORDER by time`;
    else if (tableName === "teacher")
      SQLquery = `  WHERE point_id = ${pointId} and category="Teacher" and day != "OffDay" and destination_id=${desPointId}  and time >= CURRENT_TIME ORDER by time`;
    else if (tableName === "staff")
      SQLquery += ` WHERE point_id = ${pointId} and category="Staff" and day != "OffDay"  and destination_id=${desPointId} and time >=CURRENT_TIME ORDER by time`;
  }

  connection.query(SQLquery, (error, data) => {
    if (error) throw error;

    res.send(data);
  });
};

const showAllSchedule = (req, res) => {
  let SQLquery = `with t1 as ( SELECT * FROM (schedule NATURAL join transport )), t2 as (  SELECT * from point ), t3 as ( SELECT Transport_id	, shedule_no, t1.point_id	, time,	 no_of_passengers,	destination_id	, day	, type	,category	,t2.point_id picuppointID,	point_name picuppointName 	 FROM t1 JOIN t2 on t1.point_id=t2.point_id),t4 as (  SELECT  shedule_no sheduleNo ,t2.point_id destinatonId,	point_name destinatonName	FROM t1 JOIN t2 on t2.point_id=t1.destination_id),t5 as (SELECT  * from t4 join t3 on t3.shedule_no=t4.sheduleNo ),t6 as (SELECT shedule_no	,point_id	,picuppointName point_name ,destination_id	,destinatonName destination_name	,Transport_id	,TIME_FORMAT(time, '%h:%i %p')formatedTime ,time	,no_of_passengers	,day	,type	,category	from t5 ) SELECT * from t6`;

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
  connection.query(SQLquery, (error) => {
    if (error) throw error;
    res.send("successfully Delete");
  });
};

module.exports = {
  getAllShedules,
  createSchedule,
  showAllSchedule,
  deteleShedule,
};

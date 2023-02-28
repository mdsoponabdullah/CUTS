const connection = require("../MySql/db");

// const editSchedule = (req, res) => {

//     // const scheduleNo = req.params.schedule_no;
  
//     const { Transport_id, destination_id, point_id, shedule_no, time, day } = req.params;
  
//     //let arr = [Transport_id, destination_id, point_id,time, day];
  
//     let SQLquery =`UPDATE schedule SET Transport_id=${Transport_id},destination_id=${destination_id}, point_id=${point_id},time=${time},day=${day} WHERE shedule_no=${shedule_no}`;
  
//     connection.put(SQLquery,(error,result)=>{
  
//       if (error) {
//         console.error(err);
//         res.status(500).json({ error: "Database error sopon" });
//       } else {
//         res.json({ message: "Profile updated successfully" });
//       }
  
  
//     });
    
     
//   };
  
const editSchedule = (req, res) => {

    const scheduleNo = req.params.schedule_no;
  
    const {day } = req.query;
  
    //let arr = [Transport_id, destination_id, point_id,time, day];
  
    let SQLquery =`UPDATE schedule SET day=${day} WHERE shedule_no=${scheduleNo}`;
  
    connection.put(SQLquery,(error,result)=>{
      if (error) {
        console.error(err);
        res.status(500).json({ error: "Database error sopon" });
      } else {
        res.json({ message: "Profile updated successfully" });
      }
  
  
    });
    
     
  };
  
  module.exports = {
   
    editSchedule,
  };
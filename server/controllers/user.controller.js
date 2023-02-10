const connection = require("../MySql/db");

const getUser = (req, res) => {


  const tableName = req.query.tableName;

  // console.log(tableName);
  
  let SQLquery;
  if(tableName==="staff")
   {
    SQLquery = `SELECT * FROM ${tableName}`;
   }

   else {
    SQLquery = `SELECT * FROM ${tableName} natural join department`;
   }


  connection.query(SQLquery, (err, results) => {
    if (err) throw err;
    if (results.length > 0) {
      res.send({
        success: true,
        user: results[0],
      });
    } else {
      res.send({
        success: false,
      });
    }
  });

  

  
};

module.exports = { getUser };

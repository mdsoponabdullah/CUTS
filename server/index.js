
require("dotenv").config();

const app = require("./App");

const port = process.env.port || 4000;






app.listen(port,()=>{

    console.log(`your system is running at http://localhost:${port}`)

});





























///////


/*
  let insetData=(connection)=>{

    let SQLQuery = "insert into student values ('8','noyon','eee')";

    connection.query(SQLQuery,(error)=>{
        if(error) console.log("data insert failed");
        else console.log("data insert is successfull");
    })

    
  }


  const showData=(connection)=>{
   
   const SQLQuery = "select * from student";
        connection.query(SQLQuery,(error,result)=>{
                if(error) console.log(error);

                else console.log(result);

   });
        


  }

  const updatedata = (connection)=>{
     const SQLQuery = "UPDATE `student`  SET `name`='sopon',`department`='cse' where id='3'";

      connection.query(SQLQuery,(error)=>{
        if(error) console.log("update is not successfull");
        else
         console.log("update is  successfull");
      })
  }


  const deleteData = (connection)=>{

      const SQLQuery= "delete from student where id='8'";

      connection.query(SQLQuery,(error)=>{
        if(error) console.log("delete is not successfull");

        else console.log("delete is successfull");

      })
  } */
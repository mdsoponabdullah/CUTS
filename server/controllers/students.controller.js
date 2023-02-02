
//const bodyParser = require("body-parser");
const {v4 :uuidv4} = require("uuid");

var users= require("../models/users.model");
const connection = require("../MySql/db")




//get Students // get
const getAllStudents =(req,res)=>{


    //res.status(201).json({users});

    const SQLquery= "SELECT * FROM `student` WHERE 1";

    connection.query(SQLquery,(err,result)=>{
        res.status(201).json({result});

    })
    

};

// create users  // post
const createStudents= (req,res)=>{ 

    // const newUser = { 
    //     id:uuidv4(),
    //     name : req.body.name,
    //     age : req.body.age
        
        
               
    // }
    // users.push(newUser);
    // res.status(200).send(users);

    const Student_id = req.body.Student_id;
    const Student_name = req.body.name;
    const email = req.body.email;
    const phone = req.body.phone;
    const dept_id = req.body.deptID;
    const password = req.body.password;

    const SQLquery = 'INSERT INTO `student`(`Student_id`, `Student_name`, `email`, `phone`, `dept_id`, `password`) VALUES (?,?,?,?,?,?)';
    const arr =[Student_id, Student_name, email, phone, dept_id, password];
   connection.query(SQLquery,arr,(error)=>{

    if(error) console.log(error);
    else res.send("data has been inserted");


   });

}

// update user //put
const updateStudents= (req,res)=>{

    const userid = req.params.id;
    const {name ,age} =req.body;

    users.filter((user)=> user.id ===userid).map((selecteduser)=>{
        selecteduser.name = name;
        selecteduser.age=age;
        
    })



     res.status(203).send(users);

}

// delete user //delete

const deleteStudents= (req,res)=>{
 
    const userid= req.params.id;

    users = users.filter((user)=>user.id!==userid);

    res.status(200).send(users);

}


module.exports= {getAllStudents,createStudents, updateStudents,deleteStudents};
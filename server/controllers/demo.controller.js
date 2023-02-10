
//const bodyParser = require("body-parser");
const {v4 :uuidv4} = require("uuid");

var users= require("../models/users.model");
const connection = require("../MySql/db")




//get all users // get
const getAllDemo =(req,res)=>{
    
    res.status(201).json({users});

    // const SQLquery= "SELECT * FROM `student` WHERE 1";

    // connection.query(SQLquery,(err,result)=>{
    //     res.status(201).json({result});

    // })
    

};

// create users  // post
const createDemo= (req,res)=>{ 

    const newUser = { 
        id:uuidv4(),
        name : req.body.name,
        age : req.body.age
        
        
               
    }
    users.push(newUser);
    res.status(200).send(users);


}

// update user //put
const updateDemo= (req,res)=>{

    const userid = req.params.id;
    const {name ,age} =req.body;

    users.filter((user)=> user.id ===userid).map((selecteduser)=>{
        selecteduser.name = name;
        selecteduser.age=age;
        
    })



     res.status(203).send(users);

}

// delete user //delete

const deleteDemo= (req,res)=>{
 
    const userid= req.params.id;

    users = users.filter((user)=>user.id!==userid);

    res.status(200).send(users);

}


module.exports= {getAllDemo,createDemo, updateDemo,deleteDemo};
/* cmd npm install nodemon express body-parser dotenv uuid cors
*/
const exprsee = require("express");
const app =exprsee();
const cors = require("cors");
const bodyParser = require("body-parser");
const userRoute = require("./routers/users.route");
const studentRoute = require("./routers/students.route")
app.use(bodyParser.urlencoded({extended :true}));
app.use(bodyParser.json());
app.use(cors());






//students

app.use("/students",studentRoute)

//users route

app.use("/user",userRoute);



// //home route

app.get("/",(req,res)=>{

    res.sendFile(__dirname+"/views/index.html");
})

//route not found 
app.use((req,res,next)=>{

res.status(404).json({message : "page is not found"});
});

//server error

app.use((err,req,res,next)=>{
    res.status(500).json({message:"something is broken"});
})


module.exports=app;

/* cmd npm install nodemon express body-parser dotenv uuid cors
*/
const exprsee = require("express");
const app =exprsee();
const cors = require("cors");
const bodyParser = require("body-parser");
const demoRoute = require("./routers/demo.route");
const usersRoute = require("./routers/users.route");
const userRoute = require("./routers/user.route");

const loginRoute = require("./routers/login.route");

app.use(bodyParser.urlencoded({extended :true}));
app.use(bodyParser.json());
app.use(cors());






//users route

app.use("/users",usersRoute);

//user route
app.use("/user",userRoute);

//login route

app.use("/login",loginRoute)

//demo route

app.use("/demo",demoRoute);



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

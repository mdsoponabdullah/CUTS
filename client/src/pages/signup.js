import React, { useState } from 'react';
  import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
  import { faBuilding, faLock, faPhone } from '@fortawesome/free-solid-svg-icons';
  import { faUser } from '@fortawesome/free-solid-svg-icons';
  import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
  import "./signup.css";

  import axios from 'axios';
import Navbar1 from '../component/Navbar1';
import Navbar2 from '../component/Navbar2';
  




    const Signup=()=> {
    
///useState hook


const [user,setUser] = useState({Student_id:"",name:"",email:"",phone:"",deptID:"",password1:"",password2:""});




//destructing
const { Student_id,name,email,phone,deptID,password1,password2} = user;


const handleOnchange =(e)=>{
 
 
  setUser({...user,[e.target.name]:e.target.value});


     
}


const submit=(e)=>{

    if(password1 !==password2)
    {
        alert("password are not mathched");
       return ;
       
    }
 
  let x = {Student_id,name,email,phone,deptID,password1,password2}
 // console.log(name,email,password) // alternative
 e.preventDefault(); 

 console.log(x) ;

 axios.post("http://localhost:3005/students",{
    Student_id:Student_id,
    name : name,
    email:email,
    phone:phone,
    deptID : deptID,
    password : password1,
   

 }).then(()=>{
    alert("signup is completed");
 });
   ///submit er por input box gulo k refresh hote dey na
  setUser({Student_id:"",name:"",email:"",phone:"",deptID:"",password1:"",password2:""});


}













      return ( 
       <div>
      <div> <Navbar2 />

      </div>
        <div className="form_wrapper">
        <div className="form_container">
          <div className="title_container">
            <h2>Give Your Information </h2>
          </div>
          <div className="row clearfix">
            <div className> 
              <form action="" method="" onSubmit={submit} >
                <div className="input_field"> <span><FontAwesomeIcon icon={faUser} /></span>
                  <input type="text" name="Student_id" placeholder="Enter your student ID " onChange={handleOnchange} value = {Student_id} required />
                </div>
                <div className="input_field"> <span><FontAwesomeIcon icon={faUser} /></span>
                  <input type="text" name="name" placeholder="Enter your certificate name" onChange={handleOnchange} value = {name} required />
                </div>
                <div className="input_field"> <span><FontAwesomeIcon icon={faEnvelope} ></FontAwesomeIcon></span>
                  <input type="email" name="email" placeholder="Email" onChange={handleOnchange} value = {email} required />
                </div>

                <div className="input_field"> <span><FontAwesomeIcon icon={faPhone} ></FontAwesomeIcon></span>
                  <input type="text" name="phone" placeholder="Enter your phone number" onChange={handleOnchange} value = {phone} required />
                </div>

                <div class="input_field select_option">
                <span><FontAwesomeIcon icon={faBuilding} ></FontAwesomeIcon></span>    
                <select name ="deptID"  onChange={handleOnchange} value = {deptID} required >
                  <option >Select Your Department</option>
                  <option value= "1" >IER</option> 
                  <option value= "2" >IR</option>
                  <option value= "3" >Finance</option>
                  <option value= "4" >Accounting</option>
                  <option value= "5" >Manegment</option>
                  <option value= "6" >Marketing</option>
                  <option value= "7" >HR</option>
                  <option value= "8" >Banking</option>
                  <option value= "9" >Math</option>
                  <option value= "10"  >CSE</option>
                  <option value= "11" >EEE</option>
                  <option value= "13" >Physics</option>
                  <option value= "14" >Chemistry</option>
                  <option value= "15" >Applied Chemistry</option>
                  <option value= "16" >Arabik</option>
                  <option value= "17" >Poly</option>
                  <option value= "18" >Bangla</option>
                  <option value= "19" >English</option>
                  <option value= "20" >History</option>
                  <option value= "21" >Fisheries</option>
                  <option value= "22" >Occenology</option>
                </select>
                <div class="select_arrow"></div>
              </div>

               

                <div className="input_field"> <span><FontAwesomeIcon icon={faLock} ></FontAwesomeIcon></span>
                  <input type="password" name="password1" placeholder="Password" onChange={handleOnchange} value = {password1} required />
                </div>
                <div className="input_field"> <span><FontAwesomeIcon icon={faLock} ></FontAwesomeIcon></span>
                  <input type="password" name="password2" placeholder="Re-type Password" onChange={handleOnchange} value = {password2} required />
                </div>
                <input className="button" type="submit" defaultValue="Register" />
              </form>
            </div>
          </div>
        </div>
      </div>

      </div>
      );

    }
 
    export default Signup;




    /*

    <div className="input_field"> <span><FontAwesomeIcon icon={faBuilding} ></FontAwesomeIcon></span>
                  <input type="text" name="deptID" placeholder="Enter your DeptID" onChange={handleOnchange} value = {deptID} required />
                </div>

     <div class="input_field select_option">
                <span><FontAwesomeIcon icon={faBuilding} ></FontAwesomeIcon></span>    
                <select name ="deptID" >
                  <option >Select Your Department</option>
                  
                  <option value= "1" >IER</option>
                  <option value= "2" >IR</option>
                  <option value= "3" >Finance</option>
                  <option value= "4" >Accounting</option>
                  <option value= "5" >Manegment</option>
                  <option value= "6" >Marketing</option>
                  <option value= "7" >HR</option>
                  <option value= "8" >Banking</option>
                  <option value= "9" >Math</option>
                  <option value= "10"  >CSE</option>
                  <option value= "11" >EEE</option>
                  <option value= "13" >Physics</option>
                  <option value= "14" >Chemistry</option>
                  <option value= "15" >Applied Chemistry</option>
                  <option value= "16" >Arabik</option>
                  <option value= "17" >Poly</option>
                  <option value= "18" >Bangla</option>
                  <option value= "19" >English</option>
                  <option value= "20" >History</option>
                  <option value= "21" >Fisheries</option>
                  <option value= "22" >Occenology</option>
                </select>
                <div class="select_arrow"></div>
              </div>


    */
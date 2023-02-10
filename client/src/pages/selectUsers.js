
import React, { useState } from 'react';
  import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
  import { faBuilding} from '@fortawesome/free-solid-svg-icons';
  import { useNavigate } from "react-router-dom";
  import "./signup.css";

import Navbar2 from '../component/Navbar2';
  




    const SelectUsers=()=> {
    
///useNavigate hook
const navigate = useNavigate();

const [jobTitle,setJobTitle] = useState("");







const handleOnchange =(e)=>{
 
 
  //setUser({...user,[e.target.name]:e.target.value});
  setJobTitle(e.target.value)


     
}


const submit=(e)=>{

   
 
  let x = jobTitle;
 e.preventDefault(); 

 console.log(x) ;
 
 //history.push("", { submittedData }); 

 

 if(jobTitle ==="")
 {
  alert("Select User Type");
  navigate('/selectUsers');
 }
 
else {
  navigate('/users', {state : { jobTitle:jobTitle }});
}
 

   ///submit er por input box gulo k refresh hote dey na
  //setUser({Student_id:"",name:"",email:"",phone:"",deptID:"",password1:"",password2:""});


}



 











      return ( 
       <div>
      <div> <Navbar2 /> </div>
        <div className="form_wrapper">
        <div className="form_container">
          <div className="title_container">
            <h2>Users type</h2>
          </div>
          <div className="row clearfix">
            <div > 
              <form action="" method="" onSubmit={submit} >



                

                <div className="input_field select_option">
                <span><FontAwesomeIcon icon={faBuilding} ></FontAwesomeIcon></span>    
                <select name ="jobTitle"  onChange={handleOnchange} value = {jobTitle} required >
                  <option >Select  Users </option>
                  <option value= "student" >STUDENT</option> 
                  <option value= "teacher" >TEACHER</option>
                  <option value= "staff" >STAFF</option>
                 
                </select>
                <div className="select_arrow"></div>
              </div>
                <input className="button" type="submit" value="Selected" defaultValue="Selected" />
              </form>
            </div>
          </div>
        </div>
      </div>
     

      </div>
      );

    }
 
    export default SelectUsers;




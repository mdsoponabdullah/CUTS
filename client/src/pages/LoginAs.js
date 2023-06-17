  import React, { useState } from 'react';
  import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
  import { faBuilding} from '@fortawesome/free-solid-svg-icons';
  import { useNavigate } from "react-router-dom";
  




  import Navbar2 from '../component/Navbar2';
  
  




    const LoginAs=()=> {
    
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
       alert("select job title");
       navigate('/loginAs');
    }
 
    else {
        navigate('/login', {state : { jobTitle:jobTitle }});
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
            
          </div>
          <div className="row clearfix">
            <div > 
              <form action="" method="" onSubmit={submit} >



                

                <div className="input_field select_option">
                <span><FontAwesomeIcon icon={faBuilding} ></FontAwesomeIcon></span>    
                <select name ="jobTitle"  onChange={handleOnchange} value = {jobTitle} required >
                  <option >SIGNIN AS </option>
                  <option value= "student" >STUDENT</option> 
                  <option value= "teacher" >TEACHER</option>
                  <option value= "staff" >STAFF</option>
                 
                </select>
                <div className="select_arrow"></div>
              </div>
                <input className="button" type="submit" defaultValue="Submit" />
              </form>
            </div>
          </div>
        </div>
        <h1 className='dontHaveAccount' style={{}}>If you don't have account  <a href='/signupAs'>Signup</a></h1>

      </div>
     

      </div>
      );

    }
 
    export default LoginAs;




    /*

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



    */
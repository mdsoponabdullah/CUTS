import axios from "axios";
import React, { useEffect, useState } from "react";
import { useRef } from 'react';
import emailjs from '@emailjs/browser';
import { useNavigate } from "react-router-dom";
import Footer from "../component/footer";
import Navbar2 from "../component/Navbar2";
import "./css/complaintBox.css";

export default function ComplaintBox() {
  const [complaint, setComplaint] = useState("");
  const [userId, setUserId] = useState(null);

  const [user, setUser] = useState({});
  const [tableName, setTableName] = useState(null);

  useEffect(() => {
    const storedUser = localStorage.getItem("loginInformationOfUser");

    if (storedUser) {
      setUser(JSON.parse(storedUser));
    }

    const storedTableName = localStorage.getItem("tableName");
    if (storedTableName) {
      setTableName(storedTableName);
    }
  }, []);

  ///////////////////////////////////////

  const navigate = useNavigate();


  const form = useRef();

  const Submit = async (e) => {
    ///////////////////
    if (tableName === "student") setUserId(user.Student_id);
    else if (tableName === "staff") setUserId(user.staff_id);
    else if (tableName === "teacher") setUserId(user.teacher_id);
    // alert(tableName);
    //alert(userId);

    ///////////////////
    e.preventDefault();

    console.log(userId);
 //////////////////////////////////////////////////////
 

 emailjs.sendForm('service_q9hwnok', 'template_k602chr', form.current, 'q_EPBxGK5YU9w5wZm')
   .then((result) => {
       console.log(result.text);
   }, (error) => {
       console.log(error.text);
   });

 /////////////////////////////////////////////////////



    if (userId && tableName) {
      axios
        .post("http://localhost:3005/complaint", {
          complaint: complaint,
          tableName: tableName,
          id: parseInt(userId),
        })
        .then(() => {
          alert("successfull complaint sends to proctor");
          navigate("/");
          
        });
    }
  };

  return (
    <div>
      <Navbar2 />
      <form ref={form} onSubmit={Submit} className="complaintBoxForm">
     
        <div className="complaintBox">
        <h1 className="ComplaintBoxHeader">Complaint Box</h1>
          <div className="complaintBoxTextArea">
            <textarea
              className="compantTextArea"
              placeholder="type complaint here"
              name="complaint"
              value={complaint}
              onChange={(e) => {
                setComplaint(e.target.value);
              }}
            ></textarea>
          </div>
          <div className="twobtn">
            {" "}
            <input
              className="compantTextAreabtn"
              type="submit"
              value="Submit"
            />
            <input
              className="compantTextAreabtn"
              onClick={() => {
                setComplaint("");
              }}
              type="reset"
              value="Cancel"
            />
          </div>
        </div>
      </form>
      
      <div style={{position:"absolute",bottom:"0%" ,width:"100%"}}><Footer /></div> 
    </div>
  );
}

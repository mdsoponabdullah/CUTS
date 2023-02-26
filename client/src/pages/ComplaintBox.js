import React, { useState } from "react";
import Navbar2 from "../component/Navbar2";
import "./css/complaintBox.css";

export default function ComplaintBox() {

  const [complaint,setComplaint] =useState("");
  
  

  return (
    <div>
      <Navbar2 />
      <form>
      <div className="complaintBox">
        <div className="complaintBoxTextArea">
          <textarea
            className="compantTextArea"
            placeholder="type complaint here"
            name="complaint"
            value={complaint}
          onChange={(e)=>{
            setComplaint(e.target.value)
          }}></textarea>
        </div>
        <div>
          {" "}
          <input className="compantTextAreabtn" type="submit" value="Submit" />
          <input className="compantTextAreabtn" type="reset" value="Cancel" />
        </div>
      </div>
      </form>
    </div>
  );
}

import React, { useEffect, useState } from "react";
import "./css/navbar2.css";
import { useNavigate } from "react-router-dom";

export default function Navbar2() {
  const [tableName, setTableName] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    const storedTableName = localStorage.getItem("tableName");
    if (storedTableName) {
      setTableName(storedTableName);
    }
  }, []);

  let x;
  let y;
  let isSingin1 = "";
 
  if (tableName !== "") {
    x = "Profile";
    y = "/profile";
     isSingin1="Logout";
     

  } else {
    x = "Login";
    y = "/loginAs";
    isSingin1="";
     
  }

  return (
    <div>
      <nav>
        <input type="checkbox" id="check" />
        <label className="checkbtn">
          <i className="fas fa-bars"></i>
        </label>
        <label className="logo">CUTS</label>
        <ul>
          <li>
            <a href="/">Home</a>
          </li>
          <li>
            <a href="/">About</a>
          </li>
          <li>
            <a href="/messenger">Messenger</a>
          </li>
          <li>
            <a href="/selectUsers">Users</a>
          </li>
          <li>
            <a href={y}>{x}</a>
          </li>
          <li className="logout"  onClick={()=>{ localStorage.removeItem('loginInformationOfUser'); localStorage.removeItem('tableName'); navigate("/loginAs") }}>
           {isSingin1}
          </li>
        </ul>
      </nav>
    </div>
  );
}

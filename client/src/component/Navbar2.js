import React, { useEffect, useState } from "react";
import "./css/navbar2.css";
import { useNavigate } from "react-router-dom";
import { AiOutlineHome } from "react-icons/ai";
import { CgProfile } from "react-icons/cg";
import { RiMessengerLine } from "react-icons/ri";
//import { BiExit } from "react-icons/bi";
import { BsFillUnlockFill } from "react-icons/bs";
import { AiFillUnlock } from "react-icons/ai";
import { SiAboutdotme } from "react-icons/si";

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
    x = <CgProfile />;
    y = "/profile";
     isSingin1=<AiFillUnlock />;
     

  } else {
    x = <BsFillUnlockFill />;
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
            <a href="/"><AiOutlineHome /></a>
          </li>
          <li>
            <a href="/"><SiAboutdotme /></a>
          </li>
          <li>
            <a href="/messenger"><RiMessengerLine /></a>
          </li>
         {/* { <li>
            <a href="/selectUsers">Users</a>
          </li> } */}
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

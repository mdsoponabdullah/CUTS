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
import { RiMessengerFill } from "react-icons/ri";

export default function Navbar2() {
  const [tableName, setTableName] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    const storedTableName = localStorage.getItem("tableName");
    if (storedTableName) {
      setTableName(storedTableName);
    }
  }, []);

  

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
            <a href="/">
              <AiOutlineHome />
            </a>
          </li>
          <li>
            <a href="/">
              <SiAboutdotme />
            </a>
          </li>
          <li>
            {tableName !== "" ? (
              <a href="/messenger">
                <RiMessengerLine />
              </a>
            ) : (
              ""
            )}
          </li>
          <li>
            {tableName !== "" ? (
              <a href="/Profile">
                <CgProfile />
              </a>
            ) : (
              <a href="/LoginAs">
                <BsFillUnlockFill />
              </a>
            )}{" "}
          </li>

          { tableName!==""?(
            <li
              className="logout"
              onClick={() => {
                localStorage.removeItem("loginInformationOfUser");
                localStorage.removeItem("tableName");
                navigate("/loginAs");
              }}
            >
              <AiFillUnlock />
            </li>) :("")
          }
        </ul>
      </nav>
     {tableName!==""?( <div className="messengerIcon">
        {" "}
        <a href="/messenger">
          <RiMessengerFill />
        </a>{" "}
      </div>):("")}
    </div>
  );
}

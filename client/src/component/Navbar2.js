import React, { useEffect, useState } from "react";
import "./css/navbar2.css";
import {  NavLink, useNavigate } from "react-router-dom";
import { AiOutlineHome } from "react-icons/ai";
import { CgProfile } from "react-icons/cg";
import { RiMessengerLine } from "react-icons/ri";
//import { BiExit } from "react-icons/bi";
import { BsFillUnlockFill } from "react-icons/bs";
import { AiFillUnlock } from "react-icons/ai";

import { RiMessengerFill } from "react-icons/ri";
import Navbar3 from "./Navbar3";

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
        <label className="logo"  onClick={()=>{navigate("/")}}>CUTS</label>
        <ul>
          <li>
            <NavLink to="/">
              <AiOutlineHome />
            </NavLink>
          </li>
          {/* <li>
            <NavLink to="/">
              <SiAboutdotme />
            </NavLink>
          </li> */}
          <li>
            {tableName !== "" ? (
              <NavLink to="/messenger">
                <RiMessengerLine />
              </NavLink>
            ) : (
              ""
            )}
          </li>
          <li>
            {tableName !== "" ? (
              <NavLink to="/Profile">
                <CgProfile />
              </NavLink>
            ) : (
              <NavLink to="/LoginAs">
                <BsFillUnlockFill />
              </NavLink>
            )}{" "}
          </li>

          {tableName !== "" ? (
            <li
              className="logout"
              onClick={() => {
                localStorage.removeItem("loginInformationOfUser");
                localStorage.removeItem("tableName");
                navigate("/loginAs");
              }}
            >
              <AiFillUnlock />
            </li>
          ) : (
            ""
          )}
        </ul>
      </nav>
      <div><Navbar3 /></div>

      {tableName !== "" ? (
        <div className="messengerIcon">
          {" "}
          <NavLink to="/messenger">
            <RiMessengerFill />
          </NavLink>{" "}
        </div>
      ) : (
        ""
      )}
    </div>
  );
}

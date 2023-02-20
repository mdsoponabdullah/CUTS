import React, { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBuilding, faLock, faPhone } from "@fortawesome/free-solid-svg-icons";
import { faUser } from "@fortawesome/free-solid-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import "./signup.css";
import { useNavigate } from "react-router-dom";

import axios from "axios";

import Navbar2 from "../component/Navbar2";
const EdditProfile = () => {
  /// check password

  const [givenPassword, setGivenPassword] = useState();

  ///

  ///storage
  const [user, setUser] = useState({});
  const [tableName, setTableName] = useState("");

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

  ///end

  //destructing
  //const { Student_id, Student_name, email, phone, dept_id, password } = user;
  const {
    Student_id,
    staff_id,
    teacher_id,
    Student_name,
    staff_name,
    teacher_name,
    email,
    phone,
    dept_id,
    password,
  } = user;

  const id =
    tableName === "student"
      ? Student_id
      : tableName === "staff"
      ? staff_id
      : teacher_id;

 

  //end

  const handleOnchange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const navigate = useNavigate();

  const submit = (e) => {
    console.log(typeof givenPassword, typeof password);
    e.preventDefault();

    if (givenPassword === password) {
      localStorage.setItem("loginInformationOfUser", JSON.stringify(user));
      console.log(id);

      try {
        const config = {
          headers: {
            "Content-Type": "application/json",
          },
        };
        const body = JSON.stringify(user);

        axios.put(
          `http://localhost:3005/user?tableName=${tableName}`,
          body,
          config
        );
        alert("Profile updated successfully");
      } catch (error) {
        console.error(error.response.data);
        alert("Error updating profile");
      }

      navigate("/profile");
    } else {
      alert("Your password is not correct");
      navigate("/edditprofile");
    }
  };

  if (tableName === "student")
    return (
      <div>
        <div>
          {" "}
          <Navbar2 />{" "}
        </div>
        <div className="form_wrapper">
          <div className="form_container">
            <div className="title_container">
              <h2>Eddit Your Profile</h2>
            </div>
            <div className="row clearfix">
              <div>
                <form action="" method="" onSubmit={submit}>
                  {/*<div className="input_field">
                  {" "}
                  <span>
                    <FontAwesomeIcon icon={faUser} />
                  </span>
                  <input
                    type="text"
                    name="Student_id"
                    placeholder="Enter your student ID "
                    onChange={handleOnchange}
                    value={Student_id}
                    required
                  /> 
                </div>*/}
                  <div className="input_field">
                    {" "}
                    <span>
                      <FontAwesomeIcon icon={faUser} />
                    </span>
                    <input
                      type="text"
                      name="Student_name"
                      placeholder="Enter your certificate name"
                      onChange={handleOnchange}
                      value={Student_name}
                      required
                    />
                  </div>
                  <div className="input_field">
                    {" "}
                    <span>
                      <FontAwesomeIcon icon={faEnvelope}></FontAwesomeIcon>
                    </span>
                    <input
                      type="email"
                      name="email"
                      placeholder="Email"
                      onChange={handleOnchange}
                      value={email}
                      required
                    />
                  </div>

                  <div className="input_field">
                    {" "}
                    <span>
                      <FontAwesomeIcon icon={faPhone}></FontAwesomeIcon>
                    </span>
                    <input
                      type="text"
                      name="phone"
                      placeholder="Enter your phone number"
                      onChange={handleOnchange}
                      value={phone}
                      required
                    />
                  </div>

                  <div className="input_field select_option">
                    <span>
                      <FontAwesomeIcon icon={faBuilding}></FontAwesomeIcon>
                    </span>
                    <select
                      name="dept_id"
                      onChange={handleOnchange}
                      value={dept_id}
                      required
                    >
                      <option>Select Your Department</option>
                      <option value="1">IER</option>
                      <option value="2">IR</option>
                      <option value="3">Finance</option>
                      <option value="4">Accounting</option>
                      <option value="5">Manegment</option>
                      <option value="6">Marketing</option>
                      <option value="7">HR</option>
                      <option value="8">Banking</option>
                      <option value="9">Math</option>
                      <option value="10">CSE</option>
                      <option value="11">EEE</option>
                      <option value="13">Physics</option>
                      <option value="14">Chemistry</option>
                      <option value="15">Applied Chemistry</option>
                      <option value="16">Arabik</option>
                      <option value="17">Poly</option>
                      <option value="18">Bangla</option>
                      <option value="19">English</option>
                      <option value="20">History</option>
                      <option value="21">Fisheries</option>
                      <option value="22">Occenology</option>
                    </select>
                    <div className="select_arrow"></div>
                  </div>

                  <div className="input_field">
                    {" "}
                    <span>
                      <FontAwesomeIcon icon={faLock}></FontAwesomeIcon>
                    </span>
                    <input
                      type="password"
                      name="password"
                      placeholder="Password"
                      onChange={(e) => {
                        setGivenPassword(e.target.value);
                      }}
                      value={givenPassword}
                      required
                    />
                  </div>
                  <input
                    className="button"
                    type="submit"
                    defaultValue="Register"
                  />
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    );


    else if(tableName==="staff")
    return (
      <div>
        <div>
          {" "}
          <Navbar2 />{" "}
        </div>
        <div className="form_wrapper">
          <div className="form_container">
            <div className="title_container">
              <h2>Eddit Your Profile</h2>
            </div>
            <div className="row clearfix">
              <div>
                <form action="" method="" onSubmit={submit}>
                  {/*<div className="input_field">
                  {" "}
                  <span>
                    <FontAwesomeIcon icon={faUser} />
                  </span>
                  <input
                    type="text"
                    name="Student_id"
                    placeholder="Enter your student ID "
                    onChange={handleOnchange}
                    value={Student_id}
                    required
                  /> 
                </div>*/}
                  <div className="input_field">
                    {" "}
                    <span>
                      <FontAwesomeIcon icon={faUser} />
                    </span>
                    <input
                      type="text"
                      name="staff_name"
                      placeholder="Enter your certificate name"
                      onChange={handleOnchange}
                      value={staff_name}
                      required
                    />
                  </div>
                  <div className="input_field">
                    {" "}
                    <span>
                      <FontAwesomeIcon icon={faEnvelope}></FontAwesomeIcon>
                    </span>
                    <input
                      type="email"
                      name="email"
                      placeholder="Email"
                      onChange={handleOnchange}
                      value={email}
                      required
                    />
                  </div>

                  <div className="input_field">
                    {" "}
                    <span>
                      <FontAwesomeIcon icon={faPhone}></FontAwesomeIcon>
                    </span>
                    <input
                      type="text"
                      name="phone"
                      placeholder="Enter your phone number"
                      onChange={handleOnchange}
                      value={phone}
                      required
                    />
                  </div>

                  <div className="input_field select_option">
                    <span>
                      <FontAwesomeIcon icon={faBuilding}></FontAwesomeIcon>
                    </span>
                    <select
                      name="dept_id"
                      onChange={handleOnchange}
                      value={dept_id}
                      required
                    >
                      <option>Select Your Department</option>
                      <option value="1">IER</option>
                      <option value="2">IR</option>
                      <option value="3">Finance</option>
                      <option value="4">Accounting</option>
                      <option value="5">Manegment</option>
                      <option value="6">Marketing</option>
                      <option value="7">HR</option>
                      <option value="8">Banking</option>
                      <option value="9">Math</option>
                      <option value="10">CSE</option>
                      <option value="11">EEE</option>
                      <option value="13">Physics</option>
                      <option value="14">Chemistry</option>
                      <option value="15">Applied Chemistry</option>
                      <option value="16">Arabik</option>
                      <option value="17">Poly</option>
                      <option value="18">Bangla</option>
                      <option value="19">English</option>
                      <option value="20">History</option>
                      <option value="21">Fisheries</option>
                      <option value="22">Occenology</option>
                    </select>
                    <div className="select_arrow"></div>
                  </div>

                  <div className="input_field">
                    {" "}
                    <span>
                      <FontAwesomeIcon icon={faLock}></FontAwesomeIcon>
                    </span>
                    <input
                      type="password"
                      name="password"
                      placeholder="Password"
                      onChange={(e) => {
                        setGivenPassword(e.target.value);
                      }}
                      value={givenPassword}
                      required
                    />
                  </div>
                  <input
                    className="button"
                    type="submit"
                    defaultValue="Register"
                  />
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    );

    else if(tableName==="teacher")
    return (
      <div>
        <div>
          {" "}
          <Navbar2 />{" "}
        </div>
        <div className="form_wrapper">
          <div className="form_container">
            <div className="title_container">
              <h2>Eddit Your Profile</h2>
            </div>
            <div className="row clearfix">
              <div>
                <form action="" method="" onSubmit={submit}>
                  {/*<div className="input_field">
                  {" "}
                  <span>
                    <FontAwesomeIcon icon={faUser} />
                  </span>
                  <input
                    type="text"
                    name="Student_id"
                    placeholder="Enter your student ID "
                    onChange={handleOnchange}
                    value={Student_id}
                    required
                  /> 
                </div>*/}
                  <div className="input_field">
                    {" "}
                    <span>
                      <FontAwesomeIcon icon={faUser} />
                    </span>
                    <input
                      type="text"
                      name="teacher_name"
                      placeholder="Enter your certificate name"
                      onChange={handleOnchange}
                      value={teacher_name}
                      required
                    />
                  </div>
                  <div className="input_field">
                    {" "}
                    <span>
                      <FontAwesomeIcon icon={faEnvelope}></FontAwesomeIcon>
                    </span>
                    <input
                      type="email"
                      name="email"
                      placeholder="Email"
                      onChange={handleOnchange}
                      value={email}
                      required
                    />
                  </div>

                  <div className="input_field">
                    {" "}
                    <span>
                      <FontAwesomeIcon icon={faPhone}></FontAwesomeIcon>
                    </span>
                    <input
                      type="text"
                      name="phone"
                      placeholder="Enter your phone number"
                      onChange={handleOnchange}
                      value={phone}
                      required
                    />
                  </div>

                  <div className="input_field select_option">
                    <span>
                      <FontAwesomeIcon icon={faBuilding}></FontAwesomeIcon>
                    </span>
                    <select
                      name="dept_id"
                      onChange={handleOnchange}
                      value={dept_id}
                      required
                    >
                      <option>Select Your Department</option>
                      <option value="1">IER</option>
                      <option value="2">IR</option>
                      <option value="3">Finance</option>
                      <option value="4">Accounting</option>
                      <option value="5">Manegment</option>
                      <option value="6">Marketing</option>
                      <option value="7">HR</option>
                      <option value="8">Banking</option>
                      <option value="9">Math</option>
                      <option value="10">CSE</option>
                      <option value="11">EEE</option>
                      <option value="13">Physics</option>
                      <option value="14">Chemistry</option>
                      <option value="15">Applied Chemistry</option>
                      <option value="16">Arabik</option>
                      <option value="17">Poly</option>
                      <option value="18">Bangla</option>
                      <option value="19">English</option>
                      <option value="20">History</option>
                      <option value="21">Fisheries</option>
                      <option value="22">Occenology</option>
                    </select>
                    <div className="select_arrow"></div>
                  </div>

                  <div className="input_field">
                    {" "}
                    <span>
                      <FontAwesomeIcon icon={faLock}></FontAwesomeIcon>
                    </span>
                    <input
                      type="password"
                      name="password"
                      placeholder="Password"
                      onChange={(e) => {
                        setGivenPassword(e.target.value);
                      }}
                      value={givenPassword}
                      required
                    />
                  </div>
                  <input
                    className="button"
                    type="submit"
                    defaultValue="Register"
                  />
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
};

export default EdditProfile;

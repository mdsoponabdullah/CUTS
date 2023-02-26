//import React, { useContext } from "react";
import React, { useEffect, useState } from "react";

import Navbar2 from "../component/Navbar2";
import "bootstrap/dist/css/bootstrap.min.css";
import "./css/profile.css";
import { useNavigate } from "react-router-dom";

//import { UserContext } from "./Login";

const Profile = () => {
  const navigate = useNavigate();

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

  const {
    Student_id,
    teacher_id,
    staff_id,
    Student_name,
    teacher_name,
    staff_name,
    email,
    phone,
    dept_name,
  } = user;

  let id;
  let name;
  let proffession;

  if (tableName === "student") {
    id = Student_id;
    name = Student_name;
    proffession = "Student";
  } else if (tableName === "staff") {
    id = staff_id;
    name = staff_name;
    proffession = "Staff";
  } else {
    id = teacher_id;
    name = teacher_name;
    proffession = "Teacher";
  }
  //console.log(Student_name);

  return (
    <div>
      <Navbar2 />
      
      <div>
        <div className="container emp-profile">
          <form method="post">
            <div className="row">
              <div className="col-md-4">
                <div className="profile-img">
                  <img
                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS52y5aInsxSm31CvHOFHWujqUx_wWTS9iM6s7BAm21oEN_RiGoog"
                    alt=""
                  />
                  <div className="file btn btn-lg btn-primary">
                    Change Photo
                    <input type="file" name="file" />
                  </div>
                </div>
              </div>
              <div className="col-md-6">
                <div className="profile-head">
                  <h5>{name}</h5>
                  <h6>{proffession}</h6>
                  <p className="proile-rating" style={{ color: "rgb(255 255 255 / 0%)!important" }}>
                     <span style={{ color: "rgb(255 255 255 / 0%);" }}>.</span>
                  </p>
                  <ul className="nav nav-tabs" id="myTab" role="tablist">
                    <li className="nav-item">
                      <a
                        className="nav-link active"
                        id="home-tab"
                        data-toggle="tab"
                        href="#home"
                        role="tab"
                        aria-controls="home"
                        aria-selected="true"
                      >
                        About
                      </a>
                    </li>
                    <li className="nav-item">
                      <a
                        className="nav-link"
                        id="profile-tab"
                        data-toggle="tab"
                        href="#profile"
                        role="tab"
                        aria-controls="profile"
                        aria-selected="false"
                      >
                        Timeline
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="col-md-2">
                <button
                  className="profile-edit-btn"
                  onClick={() => {
                    navigate("/EdditProfile");
                  }}
                >
                  Edit Profile
                </button>
              </div>
            </div>
            <div className="row">
              <div className="col-md-4">
                <div className="profile-work"></div>
              </div>
              <div className="col-md-8">
                <div className="tab-content profile-tab" id="myTabContent">
                  <div
                    className="tab-pane fade show active"
                    id="home"
                    role="tabpanel"
                    aria-labelledby="home-tab"
                  >
                    <div className="row">
                      <div className="col-md-6">
                        <label>User Id</label>
                      </div>
                      <div className="col-md-6">
                        <p>{id}</p>
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-md-6">
                        <label>Name</label>
                      </div>
                      <div className="col-md-6">
                        <p>{name}</p>
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-md-6">
                        <label>Email</label>
                      </div>
                      <div className="col-md-6">
                        <p>{email}</p>
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-md-6">
                        <label>Phone</label>
                      </div>
                      <div className="col-md-6">
                        <p>{phone}</p>
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-md-6">
                        <label>Department</label>
                      </div>
                      <div className="col-md-6">
                        <p>{dept_name}</p>
                      </div>
                    </div>
                  </div>
                  <div
                    className="tab-pane fade"
                    id="profile"
                    role="tabpanel"
                    aria-labelledby="profile-tab"
                  >
                    <div className="row">
                      <div className="col-md-6">
                        <label>Experience</label>
                      </div>
                      <div className="col-md-6">
                        <p>Expert</p>
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-md-6">
                        <label>Hourly Rate</label>
                      </div>
                      <div className="col-md-6">
                        <p>10$/hr</p>
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-md-6">
                        <label>Total Projects</label>
                      </div>
                      <div className="col-md-6">
                        <p>230</p>
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-md-6">
                        <label>English Level</label>
                      </div>
                      <div className="col-md-6">
                        <p>Expert</p>
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-md-6">
                        <label>Availability</label>
                      </div>
                      <div className="col-md-6">
                        <p>6 months</p>
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-md-12">
                        <label>Your Bio</label>
                        <br />
                        <p>Your detail description</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </form>
          <div className="logoutContainer">
            <div className="lcCulmn1"></div>{" "}
            <div className="lcCulmn2">
              <button
                className="logOutbutton"
                onClick={() => {
                  localStorage.removeItem("loginInformationOfUser");
                  localStorage.removeItem("tableName");
                  navigate("/loginAs");
                }}
              >
                Logout
              </button>{" "}
              from the account?
            </div>{" "}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;

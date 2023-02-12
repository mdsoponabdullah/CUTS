import React, { useState, useEffect, createContext } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLock } from "@fortawesome/free-solid-svg-icons";
import { faUser } from "@fortawesome/free-solid-svg-icons";
import Navbar2 from "../component/Navbar2";
import "./signup.css";
import { useLocation, useNavigate } from "react-router-dom";

//import Profile from "./Profile";

export const UserContext = createContext();

// import axios from 'axios';

const Login = () => {
  const navigate = useNavigate();

  const location = useLocation();

  const tableName = location.state.jobTitle;

  const [userId, setUserId] = useState("");

  const [password, setPassword] = useState("");

  const [error, setError] = useState("");

  const [user, setUser] = useState(null);

  

  ///useEffect

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const response = await fetch(
          `http://localhost:3005/user?tableName=${tableName}`,
          {
            method: "GET",
          }
        );

        const data = await response.json();
        if (data.success) {
          setUser(data.user);
        }
      } catch (error) {
        setError("An error occurred, please try again later.");
      }
    };
    fetchUser();
  }, [tableName]);

  ///handleSubmit

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch("http://localhost:3005/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ userId, password, tableName }),
      });
      const data = await response.json();
      if (data.success) {
        setUser(data.user);
         console.log(user);

        

        localStorage.setItem('loginInformationOfUser', JSON.stringify(user));
        localStorage.setItem('tableName', tableName);

        navigate("/profile");
      } else {
        setError(data.message);
        console.log(error);
        alert(error);
      }
    } catch (error) {
      setError("An error occurred, please try again later.");
    }
  };

  

  return (
    <div>
      <div>
        {" "}
        <Navbar2 />{" "}
      </div>
      <div className="form_wrapper">
        <div className="form_container">
          <div className="title_container">
            <h2>Login On Your Account</h2>
          </div>
          <div className="row clearfix">
            <div>
              <form action="" method="" onSubmit={handleSubmit}>
                <div className="input_field">
                  {" "}
                  <span>
                    <FontAwesomeIcon icon={faUser} />
                  </span>
                  <input
                    type="text"
                    name="id"
                    placeholder="Enter your student ID or email "
                    onChange={(e) => setUserId(e.target.value)}
                    value={userId}
                    required
                  />
                </div>

                <div className="input_field">
                  {" "}
                  <span>
                    <FontAwesomeIcon icon={faLock}></FontAwesomeIcon>
                  </span>
                  <input
                    type="password"
                    name="password"
                    placeholder="Re-type Password"
                    onChange={(e) => setPassword(e.target.value)}
                    value={password}
                    required
                  />
                </div>
                <input className="button" type="submit" defaultValue="Login" />
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

//export {  UserContext };

export default Login;

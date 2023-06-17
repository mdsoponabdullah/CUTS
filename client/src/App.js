import React, { useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import Home from "./pages/Home";

import SignupAs from "./pages/SignupAs";
import Signup from "./pages/signup";
import Error from "./pages/error";
import Login from "./pages/Login";
import LoginAs from "./pages/LoginAs";
import Profile from "./pages/Profile";
import Users from "./pages/Users";
import SelectUsers from "./pages/selectUsers";
import Messenger from "./pages/messenger";
import Demo from "./component/demo";
import AppContext from "./context/AppContext";
import EdditProfile from "./pages/EdditProfile";
import SelectTime from "./shedulling/SelectTime";
import UpdateSchedule from "./component/updateSchedule";
import ShowSchedules from "./component/ShowSchedules";
import InsertSchedule from "./component/InsertSchedule";
import ComplaintBox from "./pages/ComplaintBox";
import Map from "./pages/map.js"

function App() {
  const [userTypeTableName, setUserTypeTableName] = useState("");
  return (
    <div>
      <AppContext.Provider value={{ userTypeTableName, setUserTypeTableName }}>
        <BrowserRouter>
          <Routes>
            <Route path="/signupAs" element={<SignupAs />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/loginAs" element={<LoginAs />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/map" element={<Map />} />
            <Route path="/users" element={<Users />} />
            <Route path="/selectUsers" element={<SelectUsers />} />
            <Route path="/messenger" element={<Messenger />} />
            <Route path="/demo" element={<Demo />} />
            <Route path="/SelectTime" element={<SelectTime />} />
            <Route path="/edditprofile" element={<EdditProfile />} />
            <Route path="/updateSchedule" element={<UpdateSchedule />} />
            <Route path="/AllSchedules" element={<ShowSchedules />} />
            <Route path="/InsertSchedules" element={<InsertSchedule />} />
            <Route path="/complaintBox" element={<ComplaintBox />} />
            


            <Route path="*" element={<Error />} />
          </Routes>
        </BrowserRouter>
      </AppContext.Provider>
    </div>
  );
}

export default App;

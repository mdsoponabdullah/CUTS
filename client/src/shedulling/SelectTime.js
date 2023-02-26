import React, { useState, useEffect } from "react";

import { useLocation } from "react-router-dom";
import axios from "axios";
import Navbar2 from "../component/Navbar2";
import "../pages/css/profile.css";

function SelectTime() {
  //const navigate = useNavigate();

  const location = useLocation();

  const { tableName, pointId, desPointId, day } = location.state;

  console.log(pointId + tableName);

  //url for axios get
  const geturl = `http://localhost:3005/schedules?tableName=${tableName}&pointId=${pointId}&day=${day}&desPointId=${desPointId}`;
  const [urlForGet, seturlForGet] = useState(geturl);

  if (0) {
    //react a jusk boka bananor jonno
    seturlForGet(geturl);
  }

  // retrieve from database
  const [rows, setRows] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const result = await axios.get(urlForGet);
      setRows(result.data);
    };
    fetchData();
  }, [urlForGet]);

  console.log(rows);
  const handleSelect = (point_id) => {
    alert(point_id);
  };

  if (rows) {
    return (
      <div>
        <Navbar2 />
        <div className="usersTable">
          <h1 className="users_heading">
            {day === "2"
              ? "Regular Transport Schedules"
              : "Next Available Schedules"}
          </h1>

          <table className="table table-striped">
            <thead className="thead-dark heading">
              <tr>
                <th scope="col ">PickUp Point</th>
                <th scope="col ">PickUp Time</th>
                <th scope="col ">Transport Type</th>
                <th scope="col ">Category</th>
                <th scope="col ">Transport Id</th>

                <th scope="col ">Select</th>
              </tr>
            </thead>
            <tbody>
              {rows.map((item, index) => (
                <tr key={index}>
                  <td>{item.point_name}</td>
                  <td>{item.formatedTime}</td>
                  <td>{item.type}</td>
                  <td>{item.category}</td>
                  <td>{item.Transport_id}</td>

                  <td>
                    <input
                      onClick={() => {
                        handleSelect(item.point_id);
                      }}
                      type="checkbox"
                      name="myCheckbox"
                      value="true"
                    ></input>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    );
  }
}

export default SelectTime;

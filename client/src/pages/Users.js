import React, { useState, useEffect } from "react";
import axios from "axios";
import Navbar2 from "../component/Navbar2";
import "./css/profile.css";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDeleteLeft, faEdit } from "@fortawesome/free-solid-svg-icons";
import { useLocation } from "react-router-dom";

export default function Users() {
  /// useLocation hook
  const location = useLocation();
  const tableName = location.state.jobTitle;

  //url for axios get
  const geturl = `http://localhost:3005/users?tableName=${tableName}`;
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

  //detele row

  const handleDelete = async (id) => {
    try {
      await axios.delete(
        `http://localhost:3005/users?id=${id}&tableName=${tableName}`
      );

      if (tableName === "teacher")
        setRows(rows.filter((row) => row.teacher_id !== id));
      else if (tableName === "staff")
        setRows(rows.filter((row) => row.staff_id !== id));
      else setRows(rows.filter((row) => row.Student_id !== id));
    } catch (err) {
      console.error(err);
    }
  };

  const handleUpdate = () => {};

  if (tableName === "student")
    return (
      <div>
        <Navbar2 />
        <div className="usersTable">
          <h1 className="users_heading">Our Users</h1>

          <table className="table table-striped">
            <thead className="thead-dark heading">
              <tr>
                <th scope="col ">Student Id</th>
                <th scope="col ">Student Name</th>
                <th scope="col ">Email</th>
                <th scope="col ">Phone</th>
                <th scope="col ">Email</th>
                <th scope="col ">Department Name</th>
                <th scope="col ">Edit</th>
                <th scope="col ">Delete</th>
              </tr>
            </thead>
            <tbody>
              {rows.map((item) => (
                <tr key={item.Student_id}>
                  <td>{item.Student_id}</td>
                  <td>{item.Student_name}</td>
                  <td>{item.email}</td>
                  <td>{item.phone}</td>
                  <td>{item.password}</td>
                  <td>{item.dept_name}</td>
                  <td>
                    <button
                      type="button"
                      className="btn  btn-sm px-3"
                      onClick={() => {
                        handleUpdate(item.teacher_id);
                      }}
                    >
                      <FontAwesomeIcon icon={faEdit} color="black" />
                    </button>
                  </td>
                  <td>
                    <button
                      type="button"
                      className="btn  btn-sm px-3"
                      onClick={() => {
                        handleDelete(item.Student_id);
                      }}
                    >
                      <FontAwesomeIcon icon={faDeleteLeft} color="black" />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    );
  else if (tableName === "staff")
    return (
      <div>
        <Navbar2 />
        <div className="usersTable">
          <h1 className="users_heading">Our Users</h1>

          <table className="table table-striped">
            <thead className="thead-dark heading">
              <tr>
                <th scope="col ">Staff Id</th>
                <th scope="col ">Staff Name</th>
                <th scope="col ">Email</th>
                <th scope="col ">Phone</th>
                <th scope="col ">Email</th>

                <th scope="col ">Edit</th>
                <th scope="col ">Delete</th>
              </tr>
            </thead>
            <tbody>
              {rows.map((item) => (
                <tr key={item.staff_id}>
                  <td>{item.staff_id}</td>
                  <td>{item.staff_name}</td>
                  <td>{item.email}</td>
                  <td>{item.phone}</td>
                  <td>{item.password}</td>

                  <td>
                    <button
                      type="button"
                      className="btn  btn-sm px-3"
                      onClick={() => {
                        handleUpdate(item.teacher_id);
                      }}
                    >
                      <FontAwesomeIcon icon={faEdit} color="black" />
                    </button>
                  </td>
                  <td>
                    <button
                      type="button"
                      className="btn  btn-sm px-3"
                      onClick={() => {
                        handleDelete(item.staff_id);
                      }}
                    >
                      <FontAwesomeIcon icon={faDeleteLeft} color="black" />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    );
  else
    return (
      <div>
        <Navbar2 />
        <div className="usersTable">
          <h1 className="users_heading">Our Users</h1>

          <table className="table table-striped">
            <thead className="thead-dark heading">
              <tr>
                <th scope="col ">Teacher Id</th>
                <th scope="col ">Teacher Name</th>
                <th scope="col ">Email</th>
                <th scope="col ">Phone</th>
                <th scope="col ">Email</th>
                <th scope="col ">Department Name</th>
                <th scope="col ">Edit</th>
                <th scope="col ">Delete</th>
              </tr>
            </thead>
            <tbody>
              {rows.map((item) => (
                <tr key={item.teacher_id}>
                  <td>{item.teacher_id}</td>
                  <td>{item.teacher_name}</td>
                  <td>{item.email}</td>
                  <td>{item.phone}</td>
                  <td>{item.password}</td>
                  <td>{item.dept_name}</td>
                  <td>
                    <button
                      type="button"
                      className="btn  btn-sm px-3"
                      onClick={() => {
                        handleUpdate(item.teacher_id);
                      }}
                    >
                      <FontAwesomeIcon icon={faEdit} color="black" />
                    </button>
                  </td>
                  <td>
                    <button
                      type="button"
                      className="btn  btn-sm px-3"
                      onClick={() => {
                        handleDelete(item.teacher_id);
                      }}
                    >
                      <FontAwesomeIcon icon={faDeleteLeft} color="black" />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    );
}

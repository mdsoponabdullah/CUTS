import React, { useState, useEffect } from "react";
import { FaEdit } from "react-icons/fa";
import { AiTwotoneDelete } from "react-icons/ai";
import axios from "axios";
import Navbar2 from "../component/Navbar2";
import "../pages/css/profile.css";

function ShowSchedules() {
  const [currentPage, setCurrentPage] = useState(1);
  const [rowsPerPage] = useState(10);
  const [rows, setRows] = useState([]);

  const indexOfLastRow = currentPage * rowsPerPage;
  const indexOfFirstRow = indexOfLastRow - rowsPerPage;
  const currentRows = rows.slice(indexOfFirstRow, indexOfLastRow);

  useEffect(() => {
    const fetchData = async () => {
      const result = await axios.get(`http://localhost:3005/schedules/all`);
      setRows(result.data);
    };
    fetchData();
  }, []);

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  const handleSelect = (point_id) => {
    alert(point_id);
  };

  const handleDelete = async (schedule_no) => {
    try {
      await axios.delete(`http://localhost:3005/schedules/${schedule_no}`);
      setRows(rows.filter((row) => row.schedule_no !== schedule_no));
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div>
      <Navbar2 />
      <div className="usersTable">
        <h1 className="users_heading">All Schedules</h1>

        <table className="table table-striped">
          <thead className="thead-dark heading">
            <tr>
              <th scope="col ">PickUp Point</th>
              <th scope="col ">Destination Point</th>
              <th scope="col ">PickUp Time</th>
              <th scope="col ">Transport Type</th>
              <th scope="col ">Category</th>
              <th scope="col ">Transport Id</th>
              <th scope="col ">Day</th>
              <th scope="col ">Edit</th>
              <th scope="col ">Delete</th>
            </tr>
          </thead>
          <tbody>
            {currentRows.map((item, index) => (
              <tr key={index}>
                <td>{item.point_name}</td>
                <td>{item.destination_name}</td>
                <td>{item.time}</td>
                <td>{item.type}</td>
                <td>{item.category}</td>
                <td>{item.Transport_id}</td>
                <td>{item.day}</td>
                <td>
                  <FaEdit
                    onClick={() => {
                      handleSelect(item.schedule_no);
                    }}
                  />
                </td>
                <td>
                  <AiTwotoneDelete
                    onClick={() => {
                      handleDelete(item.schedule_no);
                    }}
                  />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        <Pagination
          rowsPerPage={rowsPerPage}
          totalRows={rows.length}
          paginate={paginate}
        />
      </div>
    </div>
  );
}

export default ShowSchedules;

function Pagination({ rowsPerPage, totalRows, paginate }) {
  const pageNumbers = [];

  for (let i = 1; i <= Math.ceil(totalRows / rowsPerPage); i++) {
    pageNumbers.push(i);
  }

  return (
    <nav className="pagination1">
      <ul className="pagination">
        {pageNumbers.map((number) => (
          <li key={number} className="page-item">
            <a href="#" className="page-link" onClick={() => paginate(number)}>
              {number}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
}

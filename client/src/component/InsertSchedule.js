import React, { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBuilding, faPhone } from "@fortawesome/free-solid-svg-icons";
import axios from "axios";
import Navbar2 from "./Navbar2";
//import { useNavigate } from "react-router-dom";

export default function InsertSchedule() {
  //const navigate = useNavigate();

  const [points, setPoints] = useState(null);
  const [transports, setTransports] = useState(null);
  const [error, setError] = useState(null);
  useEffect(() => {
    const fetchUser = async () => {
      try {
        const response = await fetch(
          `http://localhost:3005/points?tableName=nothing`,
          {
            method: "GET",
          }
        );

        const data = await response.json();
        if (data.success) {
          setPoints(data.user);
        }
      } catch (error) {
        setError("An error occurred, please try again later.");
      }
    };
    fetchUser();
  }, []);

  if (error) console.log(error);
   console.log(points);

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const response = await fetch(`http://localhost:3005/transports`, {
          method: "GET",
        });

        const data = await response.json();
        if (data.success) {
          setTransports(data.user);
        }
      } catch (error) {
        setError("An error occurred, please try again later.");
      }
    };
    fetchUser();
  }, []);

  console.log(transports);

  const [pointId, setPointId] = useState("");
  const [desPointId, setDesPointId] = useState("");
  const [transportId, setTransportId] = useState("");
  const [day, setDay] = useState("");
  const [time, setTime] = useState("");

  const submit = (e) => {
    // let x = point;
    e.preventDefault();

    //console.log(x);
    alert(
      pointId + "" + day + " " + transportId + " " + desPointId + " " + time
    );

    axios
      .post("http://localhost:3005/schedules", {
        pointId: pointId,
        desPointId: desPointId,
        day: day,
        transportId: transportId,
        time: time,
      })
      .then(() => {
        alert("inserted SuccessFully");
      });
    setDay("");
    setTime("");
    setDesPointId("");
    setPointId("");
    setTransportId("");
  };

  if (points&&transports) {
    return (
      <div>
        <Navbar2 />
        <div className="form_wrapper">
          <div className="form_container">
            <div className="title_container">
              <h2>Insert New Schedule</h2>
            </div>
            <div className="row clearfix">
              <div>
                <form action="" method="" onSubmit={submit}>
                  <div className="input_field select_option">
                    <span>
                      <FontAwesomeIcon icon={faBuilding}></FontAwesomeIcon>
                    </span>
                    <select
                      name="pointId"
                      onChange={(e) => {
                        setPointId(e.target.value);
                      }}
                      value={pointId}
                      required
                    >
                      <option>Select Location</option>
                      {points.map((point) => {
                        return (
                          <option key={point.point_id} value={point.point_id}>
                            {point.point_name}
                          </option>
                        );
                      })}
                    </select>
                    <div className="select_arrow"></div>
                  </div>

                  <div className="input_field select_option">
                    <span>
                      <FontAwesomeIcon icon={faBuilding}></FontAwesomeIcon>
                    </span>
                    <select
                      name="desPointId"
                      onChange={(e) => {
                        setDesPointId(e.target.value);
                      }}
                      value={desPointId}
                      required
                    >
                      <option>Select Destination</option>
                      {points.map((point) => {
                        return (
                          <option key={point.point_id} value={point.point_id}>
                            {point.point_name}
                          </option>
                        );
                      })}
                    </select>
                    <div className="select_arrow"></div>
                  </div>

                  <div className="input_field select_option">
                    <span>
                      <FontAwesomeIcon icon={faBuilding}></FontAwesomeIcon>
                    </span>
                    <select
                      name="transportId"
                      onChange={(e) => {
                        setTransportId(e.target.value);
                      }}
                      value={transportId}
                      required
                    >
                      <option>Selet transport</option>
                      {transports.map((transport) => {
                        return (
                          <option
                            key={transport.Transport_id}
                            value={transport.Transport_id}
                          >
                            {transport.Transport_id +
                              "  " +
                              transport.category +
                              " ( " +
                              transport.type +
                              " )"}
                          </option>
                        );
                      })}
                    </select>
                    <div className="select_arrow"></div>
                  </div>

                  <div className="input_field select_option">
                    <span>
                      <FontAwesomeIcon icon={faBuilding}></FontAwesomeIcon>
                    </span>
                    <select
                      name="day"
                      onChange={(e) => {
                        setDay(e.target.value);
                      }}
                      value={day}
                      required
                    >
                      <option>Select Your Day</option>

                      <option value="Regular">Regular</option>
                      <option value="OffDay">Off Day</option>
                    </select>
                    <div className="select_arrow"></div>
                  </div>

                  <div className="input_field">
                    {" "}
                    <span>
                      <FontAwesomeIcon icon={faPhone}></FontAwesomeIcon>
                    </span>
                    <input
                      type="time"
                      name="time"
                      placeholder="Select Time"
                      onChange={(e) => {
                        setTime(e.target.value);
                      }}
                      value={time}
                      required
                    />
                  </div>

                  <input
                    className="button"
                    type="submit"
                    defaultValue="Submit"
                  />
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

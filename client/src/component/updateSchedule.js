import React, { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBuilding, faPhone } from "@fortawesome/free-solid-svg-icons";
import axios from "axios";




const UpdateSchedule = (props) => {
  const [schedule, setSchedule] = useState(props.schedule);

  if (schedule) {
    //setSchedule1(schedule);
    console.log(schedule);
    //console.log(schedule);
  }
  const { Transport_id, destination_id, point_id, shedule_no, time, day } =
    schedule;


  const handleOnchange = (e) => {
    setSchedule({ ...schedule, [e.target.name]: e.target.value });
  };

  const handlesubmit = async (e) => {
    console.log("sopon", schedule);

    e.preventDefault();

    try {
       axios.put(`http://localhost:3005/points/${shedule_no}`,schedule);
       //navigate("/AllSchedules");
       window.location.reload();
    } catch (err) {
      console.error(err);
    }
  };

  ////////////////////////////////////////////////////////////

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
  //console.log(points);

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

  if (points && transports && schedule) {
    return (
      <div>
        <div className="form_wrapper">
          <div className="form_container">
            <div className="title_container">
              <h2>Update Schedule</h2>
            </div>
            <div className="row clearfix">
              <div>
                <form action="" method="" onSubmit={handlesubmit}>
                  <div className="input_field select_option">
                    <span>
                      <FontAwesomeIcon icon={faBuilding}></FontAwesomeIcon>
                    </span>
                    <select
                      name="point_id"
                      onChange={handleOnchange}
                      value={point_id}
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
                      name="destination_id"
                      onChange={handleOnchange}
                      value={destination_id}
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
                      name="Transport_id"
                      onChange={handleOnchange}
                      value={Transport_id}
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
                              transport.type +
                              " ( " +
                              transport.category +
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
                      onChange={handleOnchange}
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
                      onChange={handleOnchange}
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
};

export default UpdateSchedule;

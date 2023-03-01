import React, { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBuilding } from "@fortawesome/free-solid-svg-icons";
import { useNavigate } from "react-router-dom";

export default function PickUpPoint(props) {
  const navigate = useNavigate();
  const { tableName } = props;

  console.log(tableName);

  const [points, setPoints] = useState(null);
  const [error, setError] = useState("");

  useEffect(() => {
   const fetchUser = async () => {
         if(tableName!=="")
    {
      try {
          const response = await fetch(
            `http://localhost:3005/points?tableName=${tableName}`,
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
    }
    };
    fetchUser();
  }, [tableName]);

  if (error) console.log(error);
  console.log(points);

  const [pointId, setPointId] = useState("");
  const [desPointId, setDesPointId] = useState("");
  const [day, setDay] = useState("");

  const handleOnchange = (e) => {
    setPointId(e.target.value);
  };

  const submit = (e) => {
    // let x = point;
    e.preventDefault();

    //console.log(x);
    // alert(pointId+""+day);

    if (pointId === "") {
      alert("select point");
      navigate("/");
    }
    else if (desPointId === "") {
      alert("select destination");
      navigate("/");
    }
    else  if (day === "") {
      alert("select day");
      navigate("/");
    }
     else {
      navigate("/SelectTime", {
        state: { pointId: pointId, tableName: tableName,day:day,desPointId:desPointId },
      });
    }
  };

  if (points) {
    return (
      <div>
        <div className="form_wrapper">
          <div className="form_container">
            <div className="title_container">
              <h2>Select Your Pick Up Point</h2>
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
                      onChange={handleOnchange}
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
                      onChange={(e)=>{setDesPointId(e.target.value)}}
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
                      name="day"
                      onChange={(e) => {
                        setDay(e.target.value);
                      }}
                      value={day}
                      required
                    >
                      <option>Select Day</option>

                      <option value="1">Today Available</option>
                      <option value="Regular">Regular</option>
                      <option value="OffDay">Off Day</option>
                    </select>
                    <div className="select_arrow"></div>
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

import React, { useState, useEffect } from "react";

import "./signup.css";

import Navbar2 from "../component/Navbar2";

import { RiMessengerFill } from "react-icons/ri";

import "./css/icon.css";
import PickUpPoint from "../shedulling/PickUpPoint";

export default function Home() {
  const [tableName, setTableName] = useState("");

  useEffect(() => {
    const storedTableName = localStorage.getItem("tableName");
    if (storedTableName) {
      setTableName(storedTableName);
    } else {
      setTableName("student");
    }
  }, []);

  return (
    <div>
      <div>
        <Navbar2 />
      </div>

      <div>
        <PickUpPoint tableName={tableName} />
      </div>

      <div className="messengerIcon">
        {" "}
        <a href="/messenger">
          <RiMessengerFill />
        </a>{" "}
      </div>
    </div>
  );
}

import React, { useState, useEffect } from "react";

import "./signup.css";

import Navbar2 from "../component/Navbar2";



import "./css/icon.css";
import PickUpPoint from "../shedulling/PickUpPoint";
import Footer from "../component/footer";

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
     <div style={{position:"absolute",bottom:"0%" ,width:"100%"}}><Footer /></div> 
      
    </div>
  );
}

import React, { useState } from "react";
//import ReactDOM from "https://cdn.skypack.dev/react-dom@17.0.1";
import "./css/Navbar3.css";
import { FaBars, FaTimes } from 'react-icons/fa';
import { NavLink } from "react-router-dom";



 const Navbar3 = () => {
    const [isOpen, setIsopen] = useState(false);

    const ToggleSidebar = () => {
        isOpen === true ? setIsopen(false) : setIsopen(true);
    }
    return (
        <>
            <div className="container-fluid mt-3 container-fluid1">
              
                
                    <nav className="navbar navbar-expand-lg navbar-light bg-white shadow-md navbar3">
                        <div className="container-fluid p-2 navbar3_Icon">
                            {/* <a className="navbar-brand text-primary mr-0">Company Logo</a> */}
                            <div className="form-inline ml-auto">
                                <div className="btn btn-primary navbar3icon1" onClick={ToggleSidebar} >
                                    <FaBars />
                                </div>
                            </div>
                        </div>
                    </nav>
                    <div className={`sidebar ${isOpen === true ? 'active' : ''}`}>
                        <div className="sd-header">
                            <h4 className="mb-0">Devoloper Tools</h4>
                            <div className="btn btn-primary" onClick={ToggleSidebar}><FaTimes /></div>
                        </div>
                        <div className="sd-body">
                            <ul>
                                <li><NavLink className="sd-link" to="/Messenger">Messenger</NavLink></li>
                               <li> <NavLink className="sd-link" to="/">Home</NavLink> </li>
                               <li> <NavLink className="sd-link" to="/InsertSchedules">Insert New Schedules</NavLink> </li>
                               <li> <NavLink className="sd-link" to="/AllSchedules">Update Schedule</NavLink> </li>
                               <li> <NavLink className="sd-link" to="/SelectUsers">Users</NavLink> </li>
                            </ul>
                        </div>
                    </div>
                    <div className={`sidebar-overlay ${isOpen === true ? 'active' : ''}`} onClick={ToggleSidebar}></div>
           </div>
           
        </>
    )
}
  export default Navbar3;

//ReactDOM.render(<ToggleSidebar />, document.getElementById("root"));
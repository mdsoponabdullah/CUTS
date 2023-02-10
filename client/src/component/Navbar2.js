import React from 'react';
import './css/navbar2.css'

export default function Navbar2() {
  return (
    <div>
      <nav>
      <input type="checkbox" id="check" />
      <label  className="checkbtn">
        <i className="fas fa-bars"></i>
      </label>
      <label className="logo">CUTS</label>
      <ul>
        <li><a href="/">Home</a></li>
        <li><a href="/">About</a></li>
        <li><a href="/">Services</a></li>
        <li><a href="/selectUsers">Users</a></li>
        <li><a href="/profile">Profile</a></li>
        <li><a href="/loginAs">Login</a> </li>
        
      </ul>
    </nav>
    </div>
  )
}

import React from 'react';
import './css/navbar2.css'

export default function Navbar2() {
  return (
    <div>
      <nav>
      <input type="checkbox" id="check" />
      <label for="check" class="checkbtn">
        <i className="fas fa-bars"></i>
      </label>
      <label className="logo">DesignX</label>
      <ul>
        <li><a className="active" href="#">Home</a></li>
        <li><a href="#">About</a></li>
        <li><a href="#">Services</a></li>
        <li><a href="#">Contact</a></li>
        <li><a href="#">Feedback</a></li>
      </ul>
    </nav>
    </div>
  )
}

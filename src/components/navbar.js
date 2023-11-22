import React from "react";
import { NavLink } from 'react-router-dom';

import '../css/navbar.css'

function Navbar() {
  return (
    <div className="navbar">
      <div className="left-section">
        <NavLink to='/home'>Nancy Tran</NavLink>
      </div>
      <div className="navbar-link-container">
        <ul>
          <li><NavLink to='/home'>About Me</NavLink></li> {/**make this scroll to link? */}
          <li><NavLink to='/CV'>CV</NavLink></li>
          <li><NavLink to='/contact'>Contact</NavLink></li>
        </ul>
      </div>
    </div>
  );
}

export default Navbar;
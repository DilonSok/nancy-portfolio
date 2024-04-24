import React from "react";
import { NavLink } from 'react-router-dom';
import '../css/navbar.css'

function Navbar() {
  return (
    <div className="navbar">
      <div className="navbar-container">
        <div className="left-section">
          <NavLink className="home-button" to='/home'>Nancy Tran</NavLink>
        </div>
        <div className="right-section">
          <ul className="navbar-links-container">
            <li><NavLink to='/research'>Research</NavLink></li> {/**make this scroll to link? */}
            <li><NavLink to='/publications'>Publications</NavLink></li>
            <li><NavLink to='/presentations'>Presentations</NavLink></li>
            <li><NavLink to='/CV'>CV</NavLink></li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
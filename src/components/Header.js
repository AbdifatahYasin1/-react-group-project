import React from 'react';
import logo from '../assets/logo.png';

const Header = () => (
  <div className="header">

    <div className="logo-container">
      <img src={logo} className="logo" alt="logo" />
      <h1>Space Travelers Hub</h1>
    </div>
    <div className="nav">
      <ul>
        <li><a href="rockets">Rockets</a></li>
        <li><a href="missions">Missions</a></li>
        <li><a href="my profile">My Profile</a></li>
      </ul>

    </div>
  </div>

);

export default Header;

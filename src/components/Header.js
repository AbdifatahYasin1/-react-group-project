import React from 'react';
import { NavLink } from 'react-router-dom';
import logo from '../assets/logo.png';

const Header = () => (
  <>
    <nav className="navigation">
      <div className="logo-container">
        <img src={logo} className="logo" alt="logo" />
        <h1>Space Travelers Hub</h1>
      </div>

      <ul>
        <li><NavLink to="/" className={({ isActive }) => (isActive ? 'active' : 'inactive')}>Rockets</NavLink></li>
        <li><NavLink to="/missions" className={({ isActive }) => (isActive ? 'active' : 'inactive')}>Missions</NavLink></li>
        <li><NavLink to="/myprofile" className={({ isActive }) => (isActive ? 'active' : 'inactive')}>My Profile</NavLink></li>
      </ul>
    </nav>
  </>

);

export default Header;

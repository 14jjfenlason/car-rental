// Navigation.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import './Navigation.css';

const Navigation = () => {
  return (
    <nav className="navigation">
      <ul className="nav-list">
        <li><Link to="/">Home</Link></li>
        <li><Link to="/vehicles-for-rent">Vehicles For Rent</Link></li>
        <li><Link to="/reservation-length">Reservation Length</Link></li>
        <li><Link to="/login">Login</Link></li>
        <li><Link to="/signup">Signup</Link></li>
      </ul>
    </nav>
  );
};

export default Navigation;

import { useState } from 'react';
import { Link } from 'react-router-dom';

import Auth from '../utils/auth';
import './Navigation.css';

const Navigation = () => {
  const loggedIn = Auth.loggedIn();

  return (
    <nav className="navigation">
      <ul className="nav-list">
        <li><Link to="/">Home</Link></li>
        <li><Link to="/vehicles">Vehicles For Rent</Link></li>
        <li><Link to="/reservations">Reservations </Link></li>
        {loggedIn ? (
          <li><Link to="/" onClick={() => Auth.logout()}>Logout</Link></li>
        ) : (
          <>
            <li><Link to="/login">Login</Link></li>
            <li><Link to="/signup">Sign Up</Link></li>
          </>
        )}
      </ul>
    </nav>
  );
};

export default Navigation;

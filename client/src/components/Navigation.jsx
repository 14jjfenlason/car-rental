import { useState } from 'react';
import { Link } from 'react-router-dom';
import Auth from '../utils/auth';
import './Navigation.css';
import Trasformrwrapper from './Trasformrwrapper';

const Navigation = () => {
  const loggedIn = Auth.loggedIn();

  return (
    <nav className="navigation">
      <ul className="nav-list">
        <li>
          <Trasformrwrapper size = {1.5}>
          <Link to="/">Home</Link>
          </Trasformrwrapper>
          </li>

        <li>
        <Trasformrwrapper size = {1.2}>
        <Link to="/vehicles">Vehicles For Rent</Link>
        </Trasformrwrapper>
        </li>

        <li>
          <Link to="/reservations">Reservations </Link></li>
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

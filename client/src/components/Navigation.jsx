import React from 'react';
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
          <Trasformrwrapper size = {1.5}> {/* I am wrapping around the link and calling the function from Trasformerwrapper component 
          this create a deep effect when we hover over the links options */}
          <Link to="/">Home</Link>
          </Trasformrwrapper>
          </li>

        <li>
        <Trasformrwrapper size = {1.1}>
        <Link to="/vehicles">Vehicles For Rent</Link>
        </Trasformrwrapper>
        </li>

        <li>
          <Trasformrwrapper size={1.2}>
            <Link to="/reservations">Reservations</Link>
          </Trasformrwrapper>
        </li>
        {loggedIn ? (
          <li>
            <Link to="/" onClick={() => Auth.logout()}>Logout</Link></li>

        ) : (
          <>
            <li>
            <Trasformrwrapper size={1.2}>
              <Link to="/login">Login</Link>
              </Trasformrwrapper>
          </li>

          <li>
          <Trasformrwrapper size={1.2}>
            <Link to="/signup">Sign Up</Link>
          </Trasformrwrapper>
            </li>
        </>
        )}
        
      </ul>
    </nav>
  );
};

export default Navigation;

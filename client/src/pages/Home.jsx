import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import './Home.css';

const Home = () => {
  const navigate = useNavigate();
  const [locationInput, setLocationInput] = useState('');

  const [savedLocations, setSavedLocations] = useState([]);

  useEffect(() => {
    const storedLocations = JSON.parse(localStorage.getItem('locations')) || [];
    setSavedLocations(storedLocations);
  }, []);

  const handleLocationChange = (e) => {
    setLocationInput(e.target.value);
  };

  const handleBrowse = () => {
    navigate('/vehicles');
  };

  return (
    <div className="home-container">
      <div className="home-content">
        <motion.h1
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          Welcome to Rent & Ride Adventures
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.5 }}
        >
          Explore your world with our premium car rental services. Choose the perfect vehicle for your journey and book effortlessly!
        </motion.p>
        <div className="home-form-row">
          <div className="home-col">
            <select
              className="form-control"
              id="locationSelect"
              value={locationInput}
              onChange={handleLocationChange}
            >
              <option value="">Select Location</option>
              <option value="Austin, Texas">Austin, Texas</option>
              <option value="Dallas, Texas">Dallas, Texas</option>
              <option value="Houston, Texas">Houston, Texas</option>
              {savedLocations.map((loc, index) => (
                <option key={index} value={loc}>{loc}</option>
              ))}
            </select>
          </div>
          <div className="home-col-auto">
            <motion.button 
              type="button" 
              className="btn btn-primary"
              initial={{ opacity: 0 }} 
              animate={{ opacity: 1 }} 
              transition={{ duration: 1, delay: 1 }}
              whileHover={{ scale: 1.1 }}
              onClick={handleBrowse}
            >
              Search
            </motion.button>
          </div>
        </div>
      </div>
      <div className="footer">
        <p>&copy; 2023 Car Rental Service. All rights reserved.</p>
      </div>
    </div>
  );
};

export default Home;
import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { useQuery } from '@apollo/client';
import { useNavigate } from 'react-router-dom';
import { GET_VEHICLES } from '../utils/queries';
import './Home.css';

const Home = () => {
  const navigate = useNavigate();
  const [locationInput, setLocationInput] = useState('');
  const [vehicleInput, setVehicleInput] = useState('');


  const [savedLocations, setSavedLocations] = useState([]);
  const { loading: queryLoading, error: queryError, data } = useQuery(GET_VEHICLES);

  useEffect(() => {
    const storedLocations = JSON.parse(localStorage.getItem('locations')) || ['Austin, Texas', 'Houston, Texas', 'Dallas, Texas'];
    setSavedLocations(storedLocations);
  }, []);

  const handleLocationChange = (e) => {
    setLocationInput(e.target.value);
  };

  const handleVehicleChange = (e) => {
    setVehicleInput(e.target.value);
  };

  const handleBrowse = () => {
    if (vehicleInput) {
      navigate(`/vehicle/${vehicleInput}`);
    } else {
      navigate('/vehicles');
    }
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
        <div className="form-row">
          <div className="col">
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
          
          <div className="col">
            <select
              className="form-control"
              id="carSelect"
              value={vehicleInput}
              onChange={handleVehicleChange}
            >
              <option value="">Select Car</option>
              {data?.vehicles.map(vehicle => (
                <option key={vehicle._id} value={vehicle._id}>
                  {vehicle.make} {vehicle.model}
                </option>
              ))}
            </select>
          </div>
          <div className="col-auto">
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

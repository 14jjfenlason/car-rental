import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import './Home.css';
const Home = () => {
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
        <motion.a 
          href="/vehicles-for-rent" 
          className="btn btn-primary"
          initial={{ opacity: 0 }} 
          animate={{ opacity: 1 }} 
          transition={{ duration: 1, delay: 1 }}
          whileHover={{ scale: 1.1 }}
        >
          <Link to="vehicles">
         <button> Browse Vehicles</button>
         </Link>
        </motion.a>
      </div>
      <div className="footer">
        <p>&copy; 2023 Car Rental Service. All rights reserved.</p>
      </div>
    </div>
  );
};

export default Home;

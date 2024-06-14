import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ApolloProvider } from '@apollo/client';
import client from './utils/apolloClient';
import './App.css';

import Navigation from './components/Navigation';
import Home from './pages/Home';
import VehiclesForRent from './pages/VehiclesForRent';
import ReservationLength from './pages/ReservationLength';
import Login from './pages/Login';
import Signup from './pages/Signup';
import ErrorPage from './pages/ErrorPage';
import PrivateRoute from './components/PrivateRoute';

function App() {
  return (
    <ApolloProvider client={client}>
      <Router>
        <div className="app-container">
          <Navigation />
          <div className="app-content">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/vehicles-for-rent" element={<VehiclesForRent />} />
              <Route element={<PrivateRoute />}>
                <Route path="/reservation-length" element={<ReservationLength />} />
              </Route>
              <Route path="/login" element={<Login />} />
              <Route path="/signup" element={<Signup />} />
              <Route path="*" element={<ErrorPage />} />
            </Routes>
          </div>
        </div>
      </Router>
    </ApolloProvider>
  );
}

export default App;

import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useQuery, useMutation } from '@apollo/client';

import { CREATE_RESERVATION } from '../utils/mutations';
import { GET_RESERVATION, GET_ME, GET_VEHICLES } from '../utils/queries';

import 'bootstrap/dist/css/bootstrap.min.css';

import Auth from '../utils/auth';

export default function ReservationLength() {

  const navigate = useNavigate();
  const [formState, setFormState] = useState({
    startDate: '',
    endDate: '',
    startTime: '',
    endTime: '',
  });
  const [carInput, setCarInput] = useState('');

  const { loading: queryLoading, error: queryError, data } = useQuery(GET_VEHICLES);
  const [CreateReservation, { error }] = useMutation(
    CREATE_RESERVATION, {
      refetchQueries: [
        GET_RESERVATION,
        'getReservation',
        GET_ME,
        'me',
        GET_VEHICLES,
        'vehicles'
      ]
    });
  
  useEffect(() => {
    // Retrieve saved data from local storage
    const savedCar = localStorage.getItem('selectedCar');
    const savedLocation = localStorage.getItem('selectedLocation');
    const savedUser = localStorage.getItem('user');

    console.log('Saved Car:', savedCar);
    console.log('Saved Location:', savedLocation);
    console.log('Saved User:', savedUser);

    if (savedCar) {
      setCarInput(JSON.parse(savedCar));
    }
    // Assuming you have saved these in localStorage
    // If not, these can be used when implementing the user and location logic
    if (savedLocation) {
      // Set location data here if needed
    }
    if (savedUser) {
      // Set user data here if needed
    }
  }, []);
  
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormState({ ...formState, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
  
    if (!formState.startDate || !formState.endDate || !formState.startTime || !formState.endTime || !carInput) {
      console.log('All fields are required');
      return;
    }

    console.log("Form State:", formState);
    console.log("Selected Car:", carInput);

    try {
      const { data } = await CreateReservation({
        variables: { ...formState, car: carInput },
      });

      setFormState({
        startDate: '',
        endDate: '',
        startTime: '',
        endTime: '',
      });
      console.log(data);

      // Clear local storage after submission
      localStorage.removeItem('selectedCar');
      navigate('/reservations');
    } catch (error) {
      console.log("Mutation Error:", error);
    }
  };

  return (
    <>
      <div className="background-image">
        <div className="container mt-5">
          <h2>Reservation</h2>
          {Auth.loggedIn() ? (
            <>
              <form onSubmit={handleSubmit} className="form-inline">
                <div className="form-group mb-2 mr-2">
                  <label className="sr-only" htmlFor="startDate">Pick-up date</label>
                  <div className="input-group">
                    <div className="input-group-prepend">
                      <span className="input-group-text">Pick-up date</span>
                    </div>
                    <input
                      name='startDate'
                      type="date"
                      className="form-control"
                      id="startDate"
                      value={formState.startDate}
                      onChange={handleChange}
                    />
                  </div>
                </div>
                <div className="form-group mb-2 mr-2">
                  <label className="sr-only" htmlFor="endDate">Drop-off date</label>
                  <div className="input-group">
                    <div className="input-group-prepend">
                      <span className="input-group-text">Drop-off date</span>
                    </div>
                    <input
                      name='endDate'
                      type="date"
                      className="form-control"
                      id="endDate"
                      value={formState.endDate}
                      onChange={handleChange}
                    />
                  </div>
                </div>
                <div className="form-group mb-2 mr-2">
                  <label className="sr-only" htmlFor="startTime">Pick-up time</label>
                  <div className="input-group">
                    <div className="input-group-prepend">
                      <span className="input-group-text">Pick-up time</span>
                    </div>
                    <input
                      name='startTime'
                      type="time"
                      className="form-control"
                      id="startTime"
                      value={formState.startTime}
                      onChange={handleChange}
                    />
                  </div>
                </div>
                <div className="form-group mb-2 mr-2">
                  <label className="sr-only" htmlFor="endTime">Drop-off time</label>
                  <div className="input-group">
                    <div className="input-group-prepend">
                      <span className="input-group-text">Drop-off time</span>
                    </div>
                    <input
                      name='endTime'
                      type="time"
                      className="form-control"
                      id="endTime"
                      value={formState.endTime}
                      onChange={handleChange}
                    />
                  </div>
                </div>
                <button type="submit" className="btn btn-primary mb-2">
                  submit
                </button>
              </form>
            </>
          ) : (
            <p>
              You need to be logged in to share your thoughts. Please{' '}
              <Link to="/login">login</Link> or <Link to="/signup">signup.</Link>
            </p>
          )}
        </div>
      </div>
    </>
  );
}

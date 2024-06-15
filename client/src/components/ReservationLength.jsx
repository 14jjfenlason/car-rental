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
  const [carInput, setCarInput] = useState({
    car: '',
  });
  // const [startDate, setStartDate] = useState('');
  // const [endDate, setEndDate] = useState('');
  // const [startTime, setStartTime] = useState('');
  // const [endTime, setEndTime] = useState('');
  // const [confirmation, setConfirmation] = useState('');

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
   
    
    const handleChange = (e) => {

      const { name, value } = e.target;

       if (name === 'startDate') {
        setFormState({ ...formState, [name]: value});
      } else if (name === 'endDate'){
        setFormState({ ...formState, [name]: value});
      } else if (name === 'startTime'){
        setFormState({ ...formState, [name]: value});
      } else {
        setFormState({ ...formState, [name]: value});
      }
    };

    // const handleCarChange = (e) => {
    //   const { name, value } = e.target;
    //   if (name === 'car') {
    //     setCarInput(value);
    //   }
    // };

  const handleSubmit = async (e) => {
    e.preventDefault();
  
    if ( !carInput || !startDate || !endDate || !startTime || !endTime) {
      setError('All fields are required');
      return;
    }
 
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
     console.log(data)
   
    } catch (error) {
      console.log(error);
    }
    navigate('/reservations')
  };


  return (
    <>
    <div className="background-image">
      <div className="container mt-5">
        <h2>Reservation</h2>
        {Auth.loggedIn() ? (
          <>
        <form onSubmit={handleSubmit} className="form-inline">
        {/* <div className="form-group mb-2 mr-2">
            <label className="sr-only" htmlFor="carSelect">Car</label>
            <select
              className="form-control"
              id="carSelect"
              value={carInput}
              onChange={handleCarChange}
            >
              
              <option value="">Select Car</option>
              {data?.vehicles.map(vehicle => (
                <option key={vehicle._id} value={vehicle._id}>
                  {vehicle.make} {vehicle.model}
                </option>
              ))}
            </select>
          </div> */}
          {/* Start Date */}
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
          {/* End Date */}
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
          {/* Start Time */}
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
          {/* End Time */}
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
};


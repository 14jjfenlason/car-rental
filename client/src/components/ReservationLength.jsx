import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useQuery, useMutation } from '@apollo/client';
import { CREATE_RESERVATION } from '../utils/mutations';
import { GET_VEHICLES } from '../utils/queries';
import 'bootstrap/dist/css/bootstrap.min.css';


export default function ReservationLength() {

  const navigate = useNavigate();
  const [startDate, setStartDate] = useState('');
  const [endDate, setEndDate] = useState('');
  const [startTime, setStartTime] = useState('');
  const [endTime, setEndTime] = useState('');
  const [confirmation, setConfirmation] = useState('');
  const [error, setError] = useState('');
  const { loading: queryLoading, error: queryError, data } = useQuery(GET_VEHICLES);
  const [createReservation, { loading: mutationLoading }] = useMutation(CREATE_RESERVATION);


  const handleSubmit = async (e) => {
    e.preventDefault();
  
    if ( !startDate || !endDate || !startTime || !endTime) {
      setError('All fields are required');
      return;
    }
  
    try {
      const { data } = await createReservation({
        variables: {
          startDate,
          endDate,
          startTime,
          endTime,
        },
      });
  
      console.log('Reservation created:', data);
  
    } catch (error) {
      console.error('Error creating reservation:', error.message);
      setError(`Error creating reservation: ${error.message}`);
    }
  };


  return (
    <>
    <div className="background-image">
      <div className="container mt-5">
        <h2>Reservation</h2>
        <form onSubmit={handleSubmit} className="form-inline">
          {/* Start Date */}
          <div className="form-group mb-2 mr-2">
            <label className="sr-only" htmlFor="startDate">Pick-up date</label>
            <div className="input-group">
              <div className="input-group-prepend">
                <span className="input-group-text">Pick-up date</span>
              </div>
              <input
                type="date"
                className="form-control"
                id="startDate"
                value={startDate}
                onChange={(e) => setStartDate(e.target.value)}
                required
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
                type="date"
                className="form-control"
                id="endDate"
                value={endDate}
                onChange={(e) => setEndDate(e.target.value)}
                required
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
                type="time"
                className="form-control"
                id="startTime"
                value={startTime}
                onChange={(e) => setStartTime(e.target.value)}
                required
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
                type="time"
                className="form-control"
                id="endTime"
                value={endTime}
                onChange={(e) => setEndTime(e.target.value)}
                required
              />
            </div>
          </div>
          <Link to="/reservations">
          <button type="submit" className="btn btn-primary mb-2" disabled={mutationLoading}>
            {mutationLoading ? 'Submitting...' : 'Reserve'}
          </button>
          </Link>
        </form>
        {queryError && <p className="text-danger">Error loading cars: {queryError.message}</p>}
        {error && <p className="text-danger">{error}</p>}
        {confirmation && <p className="text-success">{confirmation}</p>}
      </div>
    </div>
    </>
  );
};


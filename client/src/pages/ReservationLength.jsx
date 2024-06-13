import React, { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { useMutation } from '@apollo/client';
import { CREATE_RESERVATION } from '../utils/mutations';

const ReservationLength = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const [startDate, setStartDate] = useState('');
  const [endDate, setEndDate] = useState('');

  const [createReservation, { loading, error }] = useMutation(CREATE_RESERVATION);

  const vehicleId = new URLSearchParams(location.search).get('vehicleId');

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await createReservation({
        variables: {
          vehicleId,
          startDate,
          endDate,
        },
      });

      navigate('/reservation-confirmation');
    } catch (error) {
      console.error('Error creating reservation:', error);
    }
  };

  return (
    <div>
      <h2>Reservation Length</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="startDate">Start Date:</label>
          <input
            type="date"
            id="startDate"
            value={startDate}
            onChange={(e) => setStartDate(e.target.value)}
            required
          />
        </div>
        <div>
          <label htmlFor="endDate">End Date:</label>
          <input
            type="date"
            id="endDate"
            value={endDate}
            onChange={(e) => setEndDate(e.target.value)}
            required
          />
        </div>
        <button type="submit" disabled={loading}>
          {loading ? 'Submitting...' : 'Reserve'}
        </button>
      </form>
      {error && <p>Error: {error.message}</p>}
    </div>
  );
};

export default ReservationLength;
import React, { useState } from 'react';
import { useMutation } from '@apollo/client';
import { CREATE_RESERVATION } from '../../utils/mutations';

const ReservationForm = ({ carId }) => {
    const [startDate, setStartDate] = useState('');
    const [endDate, setEndDate] = useState('');
  
    const [createReservation, { loading, error }] = useMutation(CREATE_RESERVATION);
  
    const handleSubmit = async (e) => {
      e.preventDefault();
      try {
        await createReservation({
          variables: {
            carId,
            startDate,
            endDate,
          },
        });
        // Clear form fields after successful submission
        setStartDate('');
        setEndDate('');
        // Show success message or redirect to a confirmation page
      } catch (error) {
        console.error('Error creating reservation:', error);
        // Show error message to the user
      }
    };
  
    return (
      <form onSubmit={handleSubmit}>
        <h3>Make a Reservation</h3>
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
          {loading ? 'Submitting...' : 'Submit'}
        </button>
        {error && <p>Error: {error.message}</p>}
      </form>
    );
  };
  
  export default ReservationForm;
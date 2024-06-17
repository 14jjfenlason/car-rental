import React, { useState } from 'react';
import Vehicle from '../components/Vehicle';
import { useNavigate } from 'react-router-dom';
import { useQuery } from '@apollo/client';
import { GET_VEHICLES } from '../utils/queries';
import Modal from 'react-bootstrap/Modal';
import ReservationLength from '../components/ReservationLength';

export default function VehiclesForRent() {
  const [fullscreen, setFullscreen] = useState(true);
  const [show, setShow] = useState(false);
  const navigate = useNavigate();
  const { loading, error, data } = useQuery(GET_VEHICLES);

  function handleShow(vehicle) {
    setFullscreen(true);
    setShow(true);
    localStorage.setItem('selectedVehicle', JSON.stringify(vehicle)); // Save selected vehicle to localStorage
  }

  const handleReserve = () => {
    navigate('/reservations');
  };

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

  const vehicles = data?.vehicles || [];

  return (
    <div>
      {vehicles.map((vehicle) => (
        <Vehicle key={vehicle._id} data={vehicle} handleShow={handleShow} />
      ))}
      <Modal show={show} fullscreen={fullscreen} onHide={() => setShow(false)}>
        <ReservationLength handleReserve={handleReserve} />
      </Modal>
    </div>
  );
}

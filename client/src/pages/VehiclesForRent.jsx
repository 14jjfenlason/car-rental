import React, {useState} from 'react';
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
  const { loading, error, data} = useQuery(GET_VEHICLES);

  
  function handleShow(breakpoint) {
    setFullscreen(breakpoint);
    setShow(true);
  }

  const handleReserve = (carId) => {
    console.log(carId);
    setShowReservation(true);
    navigate('/reservations')
  };

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

  const vehicles = data?.vehicles || [];


  return (
        <div>
        {data.vehicles.map(vehicle=> (
         <Vehicle key={vehicle.id} data={vehicle} handleShow={handleShow} />
        ))}
        {/* {showReservation && (
          <div style={{display: 'absolute', top: 1}}> */}
          <Modal show={show} fullscreen={fullscreen} onHide={() => setShow(false)}><ReservationLength /></Modal>
          {/* </div> */}
          {/* // )} */}
       </div>
  )
}

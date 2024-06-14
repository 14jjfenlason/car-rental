import React, {useState} from 'react';
import Vehicle from '../components/Vehicle';
import { useNavigate } from 'react-router-dom';
import { useQuery } from '@apollo/client';
import { GET_VEHICLES } from '../utils/queries';
import Modal from 'react-bootstrap/Modal';

export default function VehiclesForRent() {
 const [showReservation, setShowReservation] = useState(false);
  const navigate = useNavigate();
  const { loading, error, data} = useQuery(GET_VEHICLES);

  const handleReserve = (carId) => {
    console.log(carId);
    setShowReservation(true);
    // navigate(`/reservation-length?vehicleId=${vehicleId}`);
  };

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;
  
  return (
        <div>
        {data.vehicles.map(vehicle=> (
         <Vehicle key={vehicle.id} data={vehicle} handleReserve={handleReserve} />
        ))}
        {showReservation && (
          <div style={{display: 'absolute', top: 1}}>
          <Modal>Show Reservation</Modal>
          </div>
          )}
       </div>
  )
}

import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useQuery } from '@apollo/client';
import { GET_ALL_VEHICLES } from '../utils/queries';

const VehiclesForRent = () => {
  const navigate = useNavigate();
  const { loading, error, data } = useQuery(GET_ALL_VEHICLES);

  const handleReserve = (vehicleId) => {
    navigate(`/reservation-length?vehicleId=${vehicleId}`);
  };

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

  const vehicles = data?.vehicles || [];

  return (
    <div>
      <h1>Vehicles for Rent</h1>

      {vehicles.length === 0 ? (
        <p>No vehicles available.</p>
      ) : (
        <ul>
          {vehicles.map((vehicle) => (
            <li key={vehicle._id}>
              <h3>{vehicle.make} {vehicle.model}</h3>
              <p>Year: {vehicle.year}</p>
              <p>Type: {vehicle.type}</p>
              <p>Mileage: {vehicle.mileage}</p>
              <p>Stock: {vehicle.stock}</p>
              <img src={vehicle.image} alt={`${vehicle.make} ${vehicle.model}`} />
              <button onClick={() => handleReserve(vehicle._id)}>Reserve</button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default VehiclesForRent;

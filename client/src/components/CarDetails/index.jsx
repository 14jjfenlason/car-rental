import React from 'react';
import { useQuery } from '@apollo/client';
import { GET_CAR_DETAILS } from '../../utils/queries';
import ReservationForm from '../ReservationForm/index.jsx';


const CarDetails = ({ car }) => {
    const { loading, error, data } = useQuery(GET_CAR_DETAILS, {
      variables: { id: CarId },
    });
  
    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error: {error.message}</p>;
  
    const Car = data.Car;
  
    return (
      <div>
        <h2>{Car.make} {Car.model}</h2>
        <p>Mileage{Car.dailyRate}</p>
        <p>Year: {Car.year}</p>
        <p>{Car.image}</p>
        <ReservationForm carId={car.id} />
      </div>
    );
  };
  
  export default CarDetails;
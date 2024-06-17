import React from "react";
import { useQuery } from "@apollo/client";
import { GET_ALL_CARS } from "../../utils/queries";
import CarDetails from ".";

const CarList = () => {
  const { loading, error, data } = useQuery(GET_ALL_CARS);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

  const cars = data.cars;

  return (
    <div>
      <h2>Available Cars</h2>
      {cars.map((car) => (
        <CarDetails key={car.id} car={car} />
      ))}
    </div>
  );
};

export default CarList;
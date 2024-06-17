import React from "react";
import { useQuery } from "@apollo/client";
import ReservationForm from "./index";
import { GET_ME } from "../../utils/queries";

export default function MapReservation() {
  const { loading, error, data } = useQuery(GET_ME);
  const reservationData = data?.me?.reservations || [];

  console.log(reservationData);
  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

  return (
        <>
          <div>
            {reservationData?.map((reservation) => (
              <ReservationForm key={reservation._id} data={reservation} />
            ))}
          </div>
        </>
      
  );
}

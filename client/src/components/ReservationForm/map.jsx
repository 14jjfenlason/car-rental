import React from "react";
import { useQuery } from "@apollo/client";
import ReservationForm from "./index";
import { GET_RESERVATION } from "../../utils/queries";

const MapReservation = ({ reservationId }) => {
  const { loading, error, data } = useQuery(GET_RESERVATION, {
    variables: { reservationId },
  });

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

  return (
    <div>
      {data && data.reservation && (
        <ReservationForm key={data.reservation._id} data={data.reservation} />
      )}
    </div>
  );
};

export default MapReservation;

// import React, { useState } from "react";
// import { useQuery } from "@apollo/client";

// import ReservationForm from "./index";
// import { GET_RESERVATION } from "../../utils/queries";

// export default function MapReservation() {
//     const { loading, error, data } = useQuery(GET_RESERVATION,  {
//         variables: { reservationId: MapReservation }
//     });
// console.log(data)
//     if (loading) return <p>Loading...</p>;
//     if (error) return <p>Error: {error.message}</p>;

//     return (
//         <>
//             <div>
//                 {data && data.reservation && data.reservation_id.map(reservation => (
//                     <ReservationForm key={reservation.id} data={reservation} />
//                 ))}
//             </div>
//         </>
//     );
// }

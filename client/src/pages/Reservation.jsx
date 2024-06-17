/* import React from "react";
import { Navigate, useParams } from "react-router-dom";
import { useQuery } from "@apollo/client";

import { GET_ME, GET_USER, GET_RESERVATION } from "../utils/queries";
import Auth from "../utils/auth";

export default function Reservation() {
  const { username: userParam } = useParams();

  const { loading: userLoading, data: userData, error: userError } = useQuery(userParam ? GET_USER : GET_ME, {
    variables: { username: userParam },
  });

  console.log('User Data:', data); // Log user data
  console.log('User Error:', error ? error.message : 'No User Error'); // Log user error


  const { loading: reservationLoading, data: reservationData, error: reservationError } = useQuery(GET_RESERVATION);

  const user = userData?.me || userData?.user || {};
  const reservation = reservationData?.getReservation || {};

  console.log("User Data:", userData);
  console.log("User Error:", userError ? userError.message : "No User Error");
  console.log("Reservation Data:", reservationData);
  console.log("Reservation Error:", reservationError ? reservationError.message : "No Reservation Error");

  // navigate to personal profile page if username is yours
  if (Auth.loggedIn() && Auth.getProfile().data.username === userParam) {
    return <Navigate to="/me" />;
  }

  if (userLoading || reservationLoading) {
    return <div>Loading...</div>;
  }

  if (!user?.username) {
    return (
      <h4>
        You need to be logged in to see this. Please log in or sign up.
      </h4>
    );
  }

  return (
    <>
      <div className="flex-row justify-center mb-3">
        <h2 className="col-12 col-md-10 bg-dark text-light p-3 mb-5">
          Viewing {userParam ? `${user.username}'s` : "your"} profile.
        </h2>
      </div>
      <div className="container mt-5">
        <div className="card">
          <div className="card-body">
            <h5 className="card-title">Reservation Details</h5>
            {reservation ? (
              <>
                <p className="card-text">Pick-up Date: {reservation.startDate}</p>
                <p className="card-text">Pick-up Time: {reservation.startTime}</p>
                <p className="card-text">Drop-off Date: {reservation.endDate}</p>
                <p className="card-text">Drop-off Time: {reservation.endTime}</p>
              </>
            ) : (
              <p>No reservation details found.</p>
            )}
          </div>
        </div>
      </div>
    </>
  );
}
 */
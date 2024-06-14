import React from "react";
import { Navigate, useParams, Link } from 'react-router-dom';
import { useQuery } from '@apollo/client';

import ReservationForm from '../components/ReservationForm/index'


import { GET_ME, GET_USER} from '../utils/queries';

import Auth from '../utils/auth';



 export default function Reservation() {
  
    const { username: userParam } = useParams();

    const { loading, data } = useQuery(userParam ?  GET_ME : GET_USER, {
      variables: { username: userParam },
    });
  
    const user = data?.me || data?.user || {};
    // navigate to personal profile page if username is yours
    if (Auth.loggedIn() && Auth.getProfile().data.username === userParam) {
      return <Navigate to="/me" />;
    }
  
    if (loading) {
      return <div>Loading...</div>;
    }
  
    if (!user?.username) {
      return (
        <h4>
          You need to be logged in to see this. Use the navigation links above to
          sign up or log in!
        </h4>
      );
    }
}
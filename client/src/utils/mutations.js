import { gql } from "@apollo/client";

export const CREATE_RESERVATION = gql`
  mutation createReservation(
    $carId: ID!
    $startDate: String!
    $endDate: String!
  ) {
    createReservation(carId: $carId, startDate: $startDate, endDate: $endDate) {
      id
      carId
      startDate
      endDate
    }
  }
`;

export const ADD_USER = gql`
  mutation addUser($username: String!, $email: String!, $password: String!) {
    addUser(username: $username, email: $email, password: $password) {
      token
      user {
        _id
        username
      }
    }
  }
`;

export const LOGIN_USER = gql`
  mutation loginUser($email: String!, $password: String!) {
    login(email: $email, password: $password) {
      token
      user {
        _id
        username
      }
    }
  }
`;

export const UPDATE_RESERVATION = gql`
  mutation updateReservation(
    $reservationId: ID!
    $startDate: String!
    $endDate: String!
  ) {
    updateReservation(carId: $carId, startDate: $startDate, endDate: $endDate) {
      id
      carId
      startDate
      endDate
    }
  }
`;
export const DELETE_RESERVATION = gql`
  mutation deleteReservation(
    $reservationId: ID!
    $startDate: String!
    $endDate: String!
    ) {
    deleteReservation(carId: $carId
    startDate: $startDate, 
    endDate: $endDate
    ) {
    
    }
  }
`;

import { gql } from '@apollo/client';

export const CREATE_RESERVATION = gql`
  mutation CreateReservation(
    $car: ID!,
    $startDate: String!,
    $endDate: String!,
    $startTime: String!,
    $endTime: String!
  ) {
    addReservation(
      car: $car,
      startDate: $startDate,
      endDate: $endDate,
      startTime: $startTime,
      endTime: $endTime
    ) {
      _id
      car {
        make
        model
      }
      startDate
      endDate
      startTime
      endTime
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
  mutation UpdateReservation($reservationId: ID!, $startDate: String, $endDate: String) {
    updateReservation(id: $reservationId, startDate: $startDate, endDate: $endDate) {
      _id
      startDate
      endDate
    }
  }
`;

export const DELETE_RESERVATION = gql`
  mutation DeleteReservation($reservationId: ID!) {
    deleteReservation(id: $reservationId) {
      _id
    }
  }
`;

import { gql } from '@apollo/client';

export const CREATE_RESERVATION = gql`
mutation CreateReservation($startDate: String!, $endDate: String!, $startTime: String!, $endTime: String!, $car: ID!) {
  addReservation(startDate: $startDate, endDate: $endDate, startTime: $startTime, endTime: $endTime, car: $car) {
    _id
    endDate
    endTime
    startDate
    startTime
    car {
      _id
      make
      model
      year
      type
      mileage
      stock
      image
    }
  }
}
`;

export const ADD_USER = gql`
mutation addUser($username: String!, $email: String!, $password: String!) {
  addUser(username: $username, email: $email, password: $password) {
    token
    user {
      _id
      email
      username
    }
  }
}
`;

export const LOGIN_USER = gql`
 mutation login($email: String!, $password: String!) {
  login(email: $email, password: $password) {
    token
    user {
      _id
      email
      username
    }
  }
}
`;

export const UPDATE_RESERVATION = gql`
 mutation UpdateReservation($reservationId: ID!, $startDate: Int!, $endDate: Int!) {
  updateReservation(reservationId: $reservationId, startDate: $startDate, endDate: $endDate) {
    _id
    endDate
    startDate
  }
}
`;

export const DELETE_RESERVATION = gql`
  mutation deleteReservation($reservationId: ID!) {
  deleteReservation(reservationId: $reservationId) {
    _id
  }
}
`;

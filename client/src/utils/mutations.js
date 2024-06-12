import { gql } from '@apollo/client';

export const CREATE_RESERVATION = gql`
  mutation CreateReservation($carId: ID!, $startDate: String!, $endDate: String!) {
    createReservation(carId: $carId, startDate: $startDate, endDate: $endDate) {
      id
      carId
      startDate
      endDate
    }
  }
`;
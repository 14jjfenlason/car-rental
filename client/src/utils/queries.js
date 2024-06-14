import { gql } from '@apollo/client';

export const GET_CAR_DETAILS = gql`
  query GetCarDetails($id: ID!) {
    car(id: $id) {
      id
      make
      model
      stock
      mileage
      image
    }
  }
`;

export const GET_ALL_CARS = gql`
  query GetAllCars {
    cars {
      id
      make
      model
      stock
      mileage
      image
    }
  }
`;

export const GET_ALL_VEHICLES = gql`
  query GetAllVehicles {
    vehicles {
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
`;

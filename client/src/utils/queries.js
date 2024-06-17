import { gql } from '@apollo/client';

export const GET_USER= gql`
  query user($username: String!) {
    user(username: $username) {
      _id
      username
      email }
    reservations {
      _id
      endDate
      startDate
    }
  }
`;

export const GET_ME= gql`
query me {
  me {
    _id
    email
    username
    reservations {
      _id
      endDate
      startDate
      startTime
      endTime
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
}
`;

export const GET_CAR = gql`
  query cars{
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

export const GET_VEHICLES = gql`
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

export const GET_RESERVATION = gql`
query Reservation($reservationId: ID!) {
  reservation(reservationId: $reservationId) {
    _id
    endDate
    startDate
    startTime
    endTime
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
export const GET_RESERVATIONS = gql`
query Reservations {
  reservations {
    _id
    endDate
    startDate
    startTime
    endTime
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













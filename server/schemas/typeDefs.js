const { gql } = require('apollo-server-express');

const typeDefs = gql`
type User {
  id: ID!
  name: String!
  email: String!
  password: String!
  reservation: [ Reservation ]
}

  type Car {
    id: ID!
    make: String!
    model: String!
    stock: String!
    mileage: String!
    carId: String!
    year: Int!
    type: String!
    mileage: String!
    image: String
  }

  type Reservation {
    id: ID!
    reservationId: [Car]!
    startDate: String!
    endDate: String!
  }

  type Auth {
    token: ID!
    user: User
  }

  type Query {
    users: [User]
    user(name: String ): User
    cars: [Car]
    car(carId: ID!): Car
    reservations: [Reservation]
    reservation(reservationId: ID!): Reservation
  }

  type Mutation {
    login(email: String!, password: String!): Auth

    addUser(name: String!, email: String!, password: String!): Auth

    updateUser(userId: ID!, name: String, email: String): User

    deleteUser(userId: ID!): User

    addReservation(userId: ID!, reservationId: ID!, startDate: String!, endDate: String!): Reservation

    updateReservation(reservationId: ID!, startDate: String, endDate: String): Reservation

    deleteReservation(reservationId: ID!): Reservation

    addCar(name: String!, model: String!, year: Int!): Car

    updateCar(carId: ID!, name: String, model: String, year: Int): Car

    deleteCar(carId: ID!): Car
  }
`;

module.exports = typeDefs;

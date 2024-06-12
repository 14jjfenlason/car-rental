const { gql } = require('apollo-server-express');

const typeDefs = gql`
  type Car {
    id: ID!
    make: String!
    model: String!
    carId: String!
    stock: String!
    year: Int!
    type: String!
    mileage: String!
    image: String
  }

  type User {
    id: ID!
    name: String!
    email: String!
    password: String!
  }

  type Reservation {
    id: ID!
    userId: ID!
    carId: ID!
    startDate: String!
    endDate: String!
  }

  type Auth {
    token: ID!
    user: User
  }

  type Query {
    cars: [Car]
    car(carId: ID!): Car
    users: [User]
    user(userId: ID!): User
    reservation: [Reservation]
    reservation(ReservationId: ID!): 
  }

  type Mutation {
    addCar(name: String!, model: String!, year: Int!): Car
    updateCar(carId: ID!, name: String, model: String, year: Int): Car
    deleteCar(carId: ID!): Car
    addUser(name: String!, email: String!, password: String!): Auth
    login(email: String!, password: String!): Auth
    updateUser(userId: ID!, name: String, email: String): User
    deleteUser(userId: ID!): User
    addReservation(userId: ID!, carId: ID!, startDate: String!, endDate: String!): Reservation
    updateReservation(reservationId: ID!, startDate: String, endDate: String): Reservation
    deleteReservation(reservationId: ID!): Reservation
  }
`;

module.exports = typeDefs;

const { gql } = require('apollo-server-express');

const typeDefs = gql`
  type Car {
    id: ID!
    name: String!
    model: String!
    year: Int!
  }

  type User {
    id: ID!
    name: String!
    email: String!
    password: String!
  }

  type Booking {
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
    bookings: [Booking]
    booking(bookingId: ID!): Booking
  }

  type Mutation {
    addCar(name: String!, model: String!, year: Int!): Car
    updateCar(carId: ID!, name: String, model: String, year: Int): Car
    deleteCar(carId: ID!): Car
    addUser(name: String!, email: String!, password: String!): Auth
    login(email: String!, password: String!): Auth
    updateUser(userId: ID!, name: String, email: String): User
    deleteUser(userId: ID!): User
    addBooking(userId: ID!, carId: ID!, startDate: String!, endDate: String!): Booking
    updateBooking(bookingId: ID!, startDate: String, endDate: String): Booking
    deleteBooking(bookingId: ID!): Booking
  }
`;

module.exports = typeDefs;

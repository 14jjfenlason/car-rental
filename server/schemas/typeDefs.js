const { gql } = require("apollo-server-express");

const typeDefs = gql`
  type User {
    _id: ID!
    username: String!
    email: String!
    reservations: [Reservation]
  }

   type Car {
    _id: ID!
    make: String!
    model: String!
    year: Int!
    type: String!
    mileage: Int!
    stock: Int!
    image: String!
  }

  type Reservation {
    _id: ID!
    car: Car
    startDate: String!
    endDate: String!
    startTime: String!
    endTime: String!
  }

  type Auth {
    token: ID!
    user: User
  }

  input Info {
    make: String!
    model: String!
    mileage: String!
    carId: String!
    stock: String!
    year: Int!
    type: String!
    image: String
  }

  type Query {
    users: [User]
    user(username: String!): User
    me: User
    vehicles: [Car]
    car(carId: ID!): Car
    reservations: [Reservation]
    reservation(reservationId: ID!): Reservation
  }

  type Mutation {
    login(email: String!, password: String!): Auth
    addUser(username: String!, email: String!, password: String!): Auth
    updateUser(userId: ID!, username: String, email: String): User
    deleteUser(userId: ID!): User
    addReservation(
      car: ID!
      startDate: String!
      endDate: String!
      startTime: String!
      endTime: String!
    ): Reservation
    updateReservation(
      reservationId: ID!
      startDate: String!
      endDate: String!
      startTime: String!
      endTime: String!
    ): Reservation
    deleteReservation(reservationId: ID!): Reservation
    addCar(carInfo: Info): Car
    updateCar(carId: ID!, carInfo: Info): Car
    deleteCar(carId: ID!): Car
  }
`;

module.exports = typeDefs;
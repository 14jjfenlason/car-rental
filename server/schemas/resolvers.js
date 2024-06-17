const { User, Car, Reservation } = require("../models");
const { signToken} = require("../utils/auth");
const { AuthenticationError } = require('apollo-server-express');


const resolvers = {
  Query: {
    users: async (_, args, context) => {
      if (context.user && context.user.isAdmin) {
        return User.find().populate("reservations");
      }
      throw AuthenticationError;
    },
    user: async (parent, { username }) => {
      return User.findOne({ username }).populate('reservations');
    },
    me: async (parent, args, context) => {
      if (context.user) {
        return User.findOne({ _id: context.user._id }).populate("reservations").populate({
          path: "reservations",
          populate: "car"
        }
        );
      }
      throw  AuthenticationError;
    },
    vehicles: async () => {
      return Car.find();
    },
    car: async (parent, { carId }) => {
      return await Car.findById(carId);
    },
    reservations: async (_, args, context) => {
      if (context.user && context.user.isAdmin) {
        return Reservation.find().populate("car");
      }
      throw AuthenticationError;
    },
    reservation: async (parent, { reservationId }) => {
      return Reservation.findOne({ _id: reservationId }).populate("car");
    },
  },

  Mutation: {
    login: async (parent, { email, password }) => {
      const user = await User.findOne({ email });
      if (!user) {
        throw new AuthenticationError();
      }
      const correctPw = await user.isCorrectPassword(password);
      if (!correctPw) {
        throw new AuthenticationError("Incorrect email or password");
      }
      const token = signToken(user);
      return { token, user };
    },

    addUser: async (parent, args) => {
      const user = await User.create(args);
      const token = signToken(user);
      return { token, user };
    },

    updateUser: async (parent, { userId, username, email }) => {
      return User.findOneAndUpdate(
        { _id: userId },
        { username, email },
        { new: true, runValidators: true }
      );
    },

    deleteUser: async (parent, { userId }) => {
      return User.findOneAndDelete({ _id: userId });
    },
   
    addReservation: async (parent, { car, startDate, endDate, startTime, endTime }, context) => {
      if (context.user) {
        const reservation = await Reservation.create({
          car,
          startDate,
          endDate,
          startTime,
          endTime
        });

        await User.findOneAndUpdate(
          { _id: context.user._id },
          { $push: { reservations: reservation._id } },
          { new: true }
        );

        return reservation.populate('car'); 
      }
      throw new AuthenticationError('You need to be logged in');
    },

    deleteReservation: async (parent, { reservationId }) => {
      return Reservation.findOneAndDelete({ _id: reservationId });
    },

    updateCar: async (parent, { carId, carInfo }) => {
      return Car.findOneAndUpdate(
        { _id: carId },
        carInfo,
        { new: true, runValidators: true }
      );
    },

    deleteCar: async (parent, { carId }) => {
      return Car.findOneAndDelete({ _id: carId });
    },
  },
};

module.exports = resolvers;
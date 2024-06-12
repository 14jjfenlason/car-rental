const { User, Car, Reservation } = require("../models");
const { AuthenticationError } = require("@apollo/client");
const { signToken } = require("../utils/auth");

const userResolvers = {
  Query: {
    users: async () => User.find(),
    user: async (parent, { userId }) => User.findOne({ _id: userId }),
    cars: async () => Car.find(),
    car: async (parent, { carId }) => Car.findOne({ _id: carId }),
    reservation: async () => Reservation.find(),
    reservation: async (parent, { reservationId }) =>
      Reservation.findOne({ _id: reservationId }),
  },

  Mutation: {
    addUser: async (parent, { name, email, password }) => {
      const user = await User.create({ name, email, password });
      const token = signToken(user);
      return await { token, user };
    },
    login: async (parent, { email, password }) => {
      const user = await User.findOne({ email });
      if (!user) {
        throw new AuthenticationError("Incorrect email or password");
      }
      const correctPw = await user.isCorrectPassword(password);
      if (!correctPw) {
        throw new AuthenticationError("Incorrect email or password");
      }
      const token = signToken(user);
      return await { token, user };
    },
    updateUser: async (parent, { userId, name, email }) => {
      return User.findOneAndUpdate(
        { _id: userId },
        { name, email },
        { new: true, runValidators: true }
      );
    },
    addCar: async (parent, { name, model, year }) => {
      const car = new Car({ name, model, year });
      return await car.save();
    },
    updateCar: async (parent, { carId, name, model, year }) => {
      return await Car.findOneAndUpdate(
        { _id: carId },
        { name, model, year },
        { new: true, runValidators: true }
      );
    },
    deleteCar: async (parent, { carId }) =>
      Car.findOneAndDelete({ _id: carId }),
    deleteUser: async (parent, { userId }) =>
      User.findOneAndDelete({ _id: userId }),

    reservation: async (parent, { userId, carId, startDate, endDate }) => {
      const reservation = new Reservation({
        userId,
        carId,
        startDate,
        endDate,
      });
      return await reservation.save();
    },
    updateReservation: async (
      parent,
      { reservationId, startDate, endDate }
    ) => {
      return await Reservation.findOneAndUpdate(
        { _id: reservationId },
        { startDate, endDate },
        { new: true, runValidators: true }
      );
    },
    deleteResevation: async (parent, { reservationId }) =>
      Reservation.findOneAndDelete({ _id: reservationId }),
  },
};

module.exports = userResolvers;

const { User, Car, Reservation } = require("../models");
const { signToken, AuthenticationError } = require("../utils/auth");

const resolvers = {
  Query: {
  users: async () => {
     return User.find().populate('reservations')
    },
    user: async (parent,{username}) => { 
      return User.findOne({ username }).populate('reservations');
  },
    cars: async () => { 
      return Car.find();
    },
    car: async (parent, { carId }) => {
      return Car.findOne({ _id: carId });
    },
    reservations: async () => {
      return Reservation.find();
    },
    reservation: async (parent, { reservationId }) =>{
     return Reservation.findOne({ _id: reservationId })
    },
  },

  Mutation: {
    
    login: async (parent, { email, password }) => {
      const user = await User.findOne({ email });
      if (!user) {
        throw new AuthenticationError;
      }
      const correctPw = await user.isCorrectPassword(password);
      if (!correctPw) {
        throw new AuthenticationError;
      }
      const token = signToken(user);
      return { token, user };
    },

    addUser: async (parent, args) => {
      const user = await User.create(args);
      const token = signToken(user);
      return { token, user };
    },

    updateUser: async (parent, { userId, name, email }) => {
      return User.findOneAndUpdate(
        { _id: userId },
        { name, email },
        { new: true, runValidators: true }
      );
    },

    deleteUser: async (parent, { userId }) => {
      User.findOneAndDelete({ _id: userId })
    },

    addReservation: async (parent, {reservationId, startDate, endDate}) => {
      const reservation = await Reservation.create(
        { _id: reservationId },
        { startDate, endDate },
        { new: true, runValidators: true }
      );
      return reservation;
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

    deleteResevation: async (parent, { reservationId }) =>{
      Reservation.findOneAndDelete({ _id: reservationId })
    },

    addCar: async (parent, args) => {
      const car = await Car.create(args);
      return  save(car);
    },

    updateCar: async (parent, args) => {
      return await Car.findOneAndUpdate(
        { _id: args.carId },
        { carInfo: args.Info },
        { new: true, runValidators: true }
      );
    },

    deleteCar: async (parent, { carId }) =>{
      Car.findOneAndDelete({ _id: carId })
    },
  },
};

module.exports = resolvers;

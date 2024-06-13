const { User, Car, Reservation } = require("../models");
const { signToken, AuthenticationError } = require("../utils/auth");

const resolvers = {
  Query: {
    users: async (_, args, context) => {
      if ( context.user.isAdmin){
        return User.find().populate('reservations')
      }
    },
    me: async (parent, args, context) => {
      if (context.user) {
        return User.findOne({ _id: context.user._id }).populate('reservations');
      }
    },
    cars: async () => {
      return Car.find();
    },
    car: async (parent, { carId }) => {
      return Car.findOne({ _id: carId });
    },
    reservations: async (_, args, context) => {
      if (context.user && context.user.isAdmin) {
        return Reservation.find();
      }
      throw AuthenticationError;
    },
    reservation: async (parent, { reservationId }) => {
      return Reservation.findOne({ _id: reservationId }).populate('car')
    },
  },

  Mutation: {

    login: async (parent, { email, password }) => {
      const user = await User.findOne({ email });
      if (!user) {
        throw AuthenticationError;
      }
      const correctPw = await user.isCorrectPassword(password);
      if (!correctPw) {
        throw AuthenticationError;
      }
      const token = signToken(user);
      return { token, user };
    },

    addUser: async (parent, args) => {
      const user = await User.create(args);
      const token = signToken(user);
      return { token, user };
    },

    updateUser: async (parent, args, context) => {
      if (context.user) {
      const updatedUser = await User.findOneAndUpdate(
        { _id: args.userId },
        { username: args.username, email: args.email, password: args.password},
        { new: true }
      )
      return updatedUser;
    }
    },

    deleteUser: async (parent, { userId }) => {
      return User.findOneAndDelete({ _id: userId })
    },

    addReservation: async (parent, args, context) => {
      if (context.user) {
        const reservation = await Reservation.create(args);

        const updateUser = await User.findOneAndUpdate(
          { _id: context.user._id },
          { $push: { reservations: reservation._id } },
          { new: true }
        )
        return reservation;
      }
      throw AuthenticationError
    },

    updateReservation: async (parent, args, context ) => {
       if (context.user) {
        const reservation = await Reservation.findOneAndUpdate(
          { _id: args.reservationId },
          {startDate: args.startDate, endDate: args.endDate },
          {new: true}
        )
        return reservation;
       }
      },

    deleteReservation: async (parent, { reservationId }) => {
      return Reservation.findOneAndDelete({ _id: reservationId })
    },

    // addCar: async (parent, args) => {
    //   const car = await Car.create(args);
    //   return car;
    // },

    // updateCar: async (parent, args) => {
    //   return await Car.findOneAndUpdate(
    //     { _id: args.carId },
    //     { carInfo: args.Info },
    //     { new: true, runValidators: true }
    //   );
    // },

    // deleteCar: async (parent, { carId }) => {
    //   return Car.findOneAndDelete({ _id: carId })
    // },
  },
};

module.exports = resolvers;

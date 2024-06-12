const { Booking } = require("../models");

const bookingResolvers = {
  Query: {
    bookings: async () => Booking.find(),
    booking: async (parent, { bookingId }) =>
      Booking.findOne({ _id: bookingId }),
  },
  Mutation: {
    addBooking: async (parent, { userId, carId, startDate, endDate }) => {
      const booking = new Booking({ userId, carId, startDate, endDate });
      return booking.save();
    },
    updateBooking: async (parent, { bookingId, startDate, endDate }) => {
      return Booking.findOneAndUpdate(
        { _id: bookingId },
        { startDate, endDate },
        { new: true, runValidators: true }
      );
    },
    deleteBooking: async (parent, { bookingId }) =>
      Booking.findOneAndDelete({ _id: bookingId }),
  },
};

module.exports = bookingResolvers;

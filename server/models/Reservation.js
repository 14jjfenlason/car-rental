// this is be a model that will store the car (this will be a ref to the cars _id) the start date, end date

const { Schema, model } = require('mongoose');
const dateFormat = require('../utils/dateFormat');

const reservationSchema = new Schema({

  car: {
    type: Schema.Types.ObjectId,
    ref: 'Car',
  },
  startDate: {
    type: Date,
    default: Date.now,
    // get: (timestamp) => dateFormat(timestamp),
    require: true,
  },
  endDate: {
    type: Date,
    default: Date.now,
    // get: (timestamp) => dateFormat(timestamp),
    require: true,
  }

})

const Reservation = model('Reservation', reservationSchema);

module.exports = Reservation;
const { Schema, model } = require('mongoose');
const dateFormat = require('../utils/dateFormat');

const reservationSchema = new Schema({
  car: {
    type: Schema.Types.ObjectId,
    ref: 'Car',
    required: true,
  },
  startDate: {
    type: Date,
    default: Date.now,
    get: (timestamp) => dateFormat(timestamp),
    require: true,
  },
  endDate: {
    type: Date,
    default: Date.now,
    get: (timestamp) => dateFormat(timestamp),
    require: true,
  },
  startTime: {
    type: String,
    require: true,
  },
  endTime: {
    type: String,
    require: true,
  }
})

const Reservation = model('Reservation', reservationSchema);

module.exports = Reservation;

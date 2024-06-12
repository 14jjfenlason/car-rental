const { Schema } = require("mongoose");

// THIS WILL NEED TO BE A MODEL
const carSchema = new Schema({

  make: {
    type: String,
    required: true,
  },

  model: {
    type: String,
    required: true,
  },

  stock: {
    type: String,
    require: true,
  },

  mileage: {
    type: String,
    required: true,
  },

  image: {
    type: String,
    required: true
  },

});
// make this a model
const Car = model('Car', carSchema);

module.exports = Car;

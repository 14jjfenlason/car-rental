const { Schema } = require("mongoose");

// THIS WILL NEED TO BE A MODEL
const carSchema = new Schema({

  carMake: {
    type: String,
    required: true,
  },
  carModel: {
    type: String,
    required: true,
  },
  // // saved book id from GoogleBooks
  // carId: {
  //   type: String,
  //   required: true,
  // },
  image: {
    type: String,
    required: true
  },
  // this allows you to keep track of how many are available
  // stock:

});
// make this a model

module.exports = Car;

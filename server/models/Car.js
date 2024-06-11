const { Schema } = require("mongoose");

// This is a subdocument schema, it won't become its own model but we'll use it as the schema for the User's `savedBooks` array in User.js
const carSchema = new Schema({
  
    carMake: [
    {
      type: String,
    },
  ],
  carModel: {
    type: String,
    required: true,
  },
  // saved book id from GoogleBooks
  carId: {
    type: String,
    required: true,
  },
  image: {
    type: String,
    required:true
  },
  
});

module.exports = carSchema;

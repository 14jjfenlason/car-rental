const { Schema } = require("mongoose");

// This is a subdocument schema, it won't become its own model but we'll use it as the schema for the User's `savedBooks` array in User.js
const carSchema = new Schema({
  carMake: 
    {
      type: String,
      required: true
    },
  
  carModel: {
    type: String,
    required: true,
  },

  carYear: {
    type: Date,
    required: true,
  },
  carType:{
    type:String
  
  },
  image: {
    type: String,
  },
 
});

module.exports = carSchema;

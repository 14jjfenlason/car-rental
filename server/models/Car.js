const { Schema } = require("mongoose");

// THIS WILL NEED TO BE A MODEL
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
// make this a model

module.exports = Car;

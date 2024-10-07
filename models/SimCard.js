const mongoose = require('mongoose'); //imports mongoose function

//passes simCardSchema to the mongoose function
const simCardSchema = new mongoose.Schema({
  sim_number: { 
    type: String, //sim number must be string
    required: true, //mandatory
    unique: true //must be unique in the database
  },
  phone_number: {
    type: String, 
    required: true
  },
  status: {
    type: String,
    enum: ['active', 'inactive'], //can strictly have only 2 states
    default: 'inactive'
  },
  activation_date: {
    type: Date,
    default: null
  }
});

const SimCard = mongoose.model('SimCard', simCardSchema); //imports SimCard as a function and passes it with the SimCardSchema to the Mongooose function

module.exports = SimCard; //well, exports modules to SimCard.js

const mongoose = require('mongoose');
const { Schema, model } = mongoose;

const Loan = new Schema({
  amount: {
    type: Number,
    required: [true, 'Please enter principal amount'],
  },
  rate: {
    type: Number,
    required: [true, 'Please enter interest rate'],
  },
  term: {
    type: Number,
    required: [true, 'Please enter loan term (in years)'],
  },
  payments: {
    type: Number,
    required: [true, 'Please enter monthly payments'],
  },
});

module.exports = model('Loan', Loan);

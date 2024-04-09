//new
const mongoose = require('mongoose');

const paymentSummarySchema = new mongoose.Schema(
  {
    movie: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'movies',
        required: true
    },
    schedule: {
        type: mongoose.Schema.Types.ObjectId,
      ref: "movieschedule",
      required: true,
    },
    name: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
    },
    mobile: {
      type: String,
      required: true,
    },
    seats: {
      type: [String],
      required: true,
    },
    adults: {
      type: Number,
      required: true,
      min: 0,
      max: 50,
    },
    children: {
      type: Number,
      required: true,
      min: 0,
      max: 50,
    },
    adults_price: {
      type: Number,
      required: true,
      min: 0,
    },
    children_price: {
      type: Number,
      required: true,
      min: 0,
    },
    total: {
      type: Number,
      required: true,
      min: 0,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model('booking', paymentSummarySchema);

const mongoose = require('mongoose');

const movieSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    slug: {
      type: String,
      required: true,
    },
    genre: {
      type: mongoose.ObjectId,
      ref: "movieCategory",
      required: true,
    },
    language: {
      type: String,
      required: true,
    },
    director: {
      type: String,
      required: true,
    },
    producer: {
      type: String,
      required: true,
    },
    music: {
      type: String,
      required: true,
    },
    release_date: {
      type: Date,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
   
  },
  { timestamps: true }
);

module.exports = mongoose.model('movies', movieSchema);
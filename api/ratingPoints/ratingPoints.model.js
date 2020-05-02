const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const Model = mongoose.model;

// Schema
const ratingPointSchema = new Schema({
  _id: { type: Schema.Types.ObjectId, auto: true },
  userId: String,
  organisationId: String,
  points: Number,
  createdAt: Date,
  updatedAt: Date
});

// model
const RatingPoint = Model('RatingPoint', ratingPointSchema);

module.exports = { RatingPoint : RatingPoint };

const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const Model = mongoose.model;

// Schema
const ratingRangeSchema = new Schema({
  _id: { type: Schema.Types.ObjectId, auto: true },
  minimumRange: String,
  maximumRange: String,
  rangeName: String,
  createdAt: Date,
  updatedAt: Date
});

// model
const RatingRange = Model('RatingRange', ratingRangeSchema);

module.exports = { RatingRange : RatingRange };

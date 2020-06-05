const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const Model = mongoose.model;

// Schema
const ratingRangeSchema = new Schema({
  _id: { type: Schema.Types.ObjectId, auto: true },
  minimumRange: Number,
  maximumRange: Number,
  rangeName: String,
  createdAt: { type : Date, default: Date.now },
  updatedAt: { type : Date, default: Date.now }
});

// model
const RatingRange = Model('RatingRange', ratingRangeSchema);

module.exports = { RatingRange : RatingRange };

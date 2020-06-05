const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const Model = mongoose.model;

// Schema
const ratingPointSchema = new Schema({
  _id: { type: Schema.Types.ObjectId, auto: true },
  userId: String,
  orgId: String,
  points: Number,
  createdAt: { type : Date, default: Date.now },
  updatedAt: { type : Date, default: Date.now }
});

// model
const RatingPoint = Model('RatingPoint', ratingPointSchema);

module.exports = { RatingPoint : RatingPoint };

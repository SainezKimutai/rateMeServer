const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const Model = mongoose.model;

// Schema
const rewardSchema = new Schema({
  _id: { type: Schema.Types.ObjectId, auto: true },
  points: Number,
  reward: String,
  createdAt: { type : Date, default: Date.now },
  updatedAt: { type : Date, default: Date.now }
});

// model
const Reward = Model('Reward', rewardSchema);

module.exports = { Reward : Reward };

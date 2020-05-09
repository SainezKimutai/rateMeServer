const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const Model = mongoose.model;

// Schema
const rewardSchema = new Schema({
  _id: { type: Schema.Types.ObjectId, auto: true },
  orgId: String,
  points: Number,
  reward: String,
  createdAt: Date,
  updatedAt: Date
});

// model
const Reward = Model('Reward', rewardSchema);

module.exports = { Reward : Reward };

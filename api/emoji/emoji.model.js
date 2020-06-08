const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const Model = mongoose.model;

// Schema
const emojiSchema = new Schema({
  _id: { type: Schema.Types.ObjectId, auto: true },
  emojiName: String,
  emojiMessage: String,
  rangeId: String,
  emojiJson: { type: Schema.Types.Mixed, auto: true },
  createdAt: { type : Date, default: Date.now },
  updatedAt: { type : Date, default: Date.now }

});

// model
const Emoji = Model('Emoji', emojiSchema);

module.exports = { Emoji : Emoji };

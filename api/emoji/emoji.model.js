const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const Model = mongoose.model;

// Schema
const emojiSchema = new Schema({
  _id: { type: Schema.Types.ObjectId, auto: true },
  emojiName: String,
  rangeId: String,
  emojiJson: { type: Schema.Types.Mixed, auto: true },
  createdAt: Date,
  updatedAt: Date

});

// model
const Emoji = Model('Emoji', emojiSchema);

module.exports = { Emoji : Emoji };

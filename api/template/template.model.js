const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const Model = mongoose.model;

// Schema
const templateSchema = new Schema({
  _id: { type: Schema.Types.ObjectId, auto: true },
  industryId: String,
  templateName: String,
  createdAt: Date,
  updatedAt: Date
});

// model
const Template = Model('Template', templateSchema);

module.exports = { Template : Template };

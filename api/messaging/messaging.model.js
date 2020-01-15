const mongoose = require('mongoose');

// Schema
const messagingSchema = new mongoose.Schema({
  sentBy: String,
  inboxTo: String,
  message: String,
  attachmentType: String,
  attachment: String,
  createdOn: Date
});

// model
const Messaging = mongoose.model('Messaging', messagingSchema);

module.exports = { Messaging : Messaging };

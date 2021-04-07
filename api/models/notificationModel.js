const mongoose = require('mongoose');

const notificationSchema = new mongoose.Schema({
  name: String,
  description: String,
  date: Date,
  type: Number,
});
module.exports = mongoose.model('Notification', notificationSchema);

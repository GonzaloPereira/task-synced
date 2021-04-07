const mongoose = require('mongoose');

const taskSchema = new mongoose.Schema({
  name: String,
  description: String,
  date: Date,
});
module.exports = mongoose.model('Task', taskSchema);

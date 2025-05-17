const mongoose = require('mongoose');

const recordSchema = new mongoose.Schema({
  firstname: String,
  phone: String,
  notes: String,
  assignedTo: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Ajent',
    required: true
  }
});

module.exports = mongoose.model('Record', recordSchema);

const mongoose = require('mongoose');

const IssueSchema = new mongoose.Schema({
  title: { type: String, required: true },
  category: { type: String, required: true },
  location: String,
  description: String,
  image: String,
  amount: { type: Number, default: 0 },
  status: { type: String, enum: ['ongoing','ended','in-progress','resolved'], default: 'ongoing' },
  email: String,
  date: { type: Date, default: Date.now }
});

module.exports = mongoose.model('Issue', IssueSchema);

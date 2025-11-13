const mongoose = require('mongoose');

const ContributionSchema = new mongoose.Schema({
  issueId: { type: mongoose.Schema.Types.ObjectId, ref: 'Issue', required: true },
  amount: { type: Number, required: true },
  name: String,
  email: String,
  phone: String,
  address: String,
  additionalInfo: String,
  date: { type: Date, default: Date.now }
});

module.exports = mongoose.model('Contribution', ContributionSchema);

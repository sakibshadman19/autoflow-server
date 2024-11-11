const mongoose = require('mongoose');

const typeSchema = new mongoose.Schema({
  name: String,
  category: { type: String, enum: ['Vehicle Pictures', 'General Service Items', 'Fluids', 'Alignment / Steering / Suspension'] }
});

module.exports = mongoose.model('Type', typeSchema);

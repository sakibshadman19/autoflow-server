const mongoose = require('mongoose');

const clientSchema = new mongoose.Schema({
  email: String,
  customerName: String,
  phoneNumber: String,
  carModel: String,
  status: { type: String, default: 'not complete' },
  vehiclePictures: [Object],
  generalServiceItems: [Object],
  fluids: [Object],
  alignmentSteeringSuspension: [Object],

});

module.exports = mongoose.model('Client', clientSchema);





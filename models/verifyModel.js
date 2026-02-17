const mongoose = require('mongoose');

const verifySchema = new mongoose.Schema({
  email: {
    type: String,
    required: [true, 'Please provide your email'],
    unique: true,
    lowercase: true,
  },
  otp: {
    type: String,
    required: [true, 'Please provide your OTP'],
  },
  createdAt: {
    type: Date,
    default: Date.now,
    expires: 600, // OTP expires after 10 minutes
  },
});

const Verify = mongoose.model('Verify', verifySchema);

module.exports = Verify;

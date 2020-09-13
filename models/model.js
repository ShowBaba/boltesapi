const mongoose = require('mongoose');

const emailShema = new mongoose.Schema({
    email: String
});

module.exports = mongoose.model('Email', emailShema);

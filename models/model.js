const mongoose = require('mongoose');

const emailShema = new mongoose.Schema({
    email: String,
    date: {
        type: Date,
        default: Date.now
    }
});

module.exports = mongoose.model('Email', emailShema);

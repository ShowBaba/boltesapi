const mongoose = require('mongoose');

const emailShema = new mongoose.Schema({
    email: String
},
{
    timestamps: true
});

module.exports = mongoose.model('Email', emailShema);

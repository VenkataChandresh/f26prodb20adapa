const mongoose = require('mongoose');

const universitySchema = mongoose.Schema({
    name: String,
    location: String,
    studentCount: Number
});

module.exports = mongoose.model('University', universitySchema);

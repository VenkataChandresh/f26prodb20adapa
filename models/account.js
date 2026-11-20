const mongoose = require('mongoose');
const passportLocalMongoose = require('passport-local-mongoose').default;
const accountSchema = new mongoose.Schema({});

accountSchema.plugin(passportLocalMongoose);

module.exports = mongoose.model('Account', accountSchema);
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const musicSchema = new Schema({
    track: String,
    album: String,
    year: String,
    url: String,
}, { timestamps: true });

module.exports = mongoose.model('music', musicSchema);

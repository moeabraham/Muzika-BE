const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const musicSchema = new Schema({
    track: String,
    artist: String,
    album: String,
    year: String,
    url: String,
    uid: String,
}, { timestamps: true });

module.exports = mongoose.model('music', musicSchema);

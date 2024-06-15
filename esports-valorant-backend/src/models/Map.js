const mongoose = require('mongoose');

const MapSchema = new mongoose.Schema({
    name: { type: String, required: true, unique: true }
}, { timestamps: true });

module.exports = mongoose.model('Map', MapSchema);

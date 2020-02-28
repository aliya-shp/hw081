const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const LinkSchema = new Schema({
    originalUrl: {
        type: String,
        required: true,
    },
    shortUrl: {
        type: String,
        required: true,
        unique: true,
    },
    createdAt: {
        type: Date,
        default: Date.now,
    }
});

const Link = mongoose.model('Link', LinkSchema);

module.exports = Link;
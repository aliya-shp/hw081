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
    },
}, {
    versionKey: false,
});

LinkSchema.index({shortUrl: 1}, {unique: true});

const Link = mongoose.model('Link', LinkSchema);

module.exports = Link;
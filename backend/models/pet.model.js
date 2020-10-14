const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const petSchema = new Schema({
    name: {
        type: String,
        required: true,
        trim: true, // trims trailing whitespace 
    },
    breed: {
        type: String,
    },
    comments: {
        type: String, 
    },
    date: {
        type: Date,
        trim: true,
    },
    location: {
        type: String,
        trim: true,
    },
    size: {
        type: Number,
        trim: true,
    },
    species: {
        type: String,
        trim: true,
    }
}, {
    timestamps: true, // created and modified 
});

const Pet = mongoose.model('Pet', petSchema);

module.exports = Pet;
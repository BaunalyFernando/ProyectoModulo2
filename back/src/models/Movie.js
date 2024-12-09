const mongoose = require("mongoose");

const movieSchema = new mongoose.Schema({
    "title": {
        type: String,
        required: [true, "El titulo es obligatorio"]
    },
    "year": Number,
    "director": {
        type: String,
        required: [true, "El director es obligatorio"]
    },
    "duration": {
        type: String,

    },
    "genre": [String],
    "rate": Number,
    "poster": String
});

const Movie = mongoose.model("Movie", movieSchema);

module.exports = Movie;
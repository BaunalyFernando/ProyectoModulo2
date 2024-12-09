const mongoose = require("mongoose");

const conDb = async() => {

    await mongoose.connect("mongodb+srv://feernando572:TVn0HlOSbTNHQYiX@cluster0.dotnt.mongodb.net/movies");
}

module.exports = conDb;
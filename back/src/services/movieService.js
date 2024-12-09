const axios = require("axios");
const Movie = require("../models/Movie");

module.exports = {
    getMovies: async() => {
        try {
            const movies = await Movie.find();
            return movies;
        } catch (error) {
            throw new Error("Error al obtener las películas");
        }
    },
    createMovies: async(movie) => {
        await Movie.create(movie);
    },
    deleteMovie: async(id) => {
        await Movie.deleteOne({ _id: id });
    }
}